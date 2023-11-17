"use client";

// ** React Imports
import { createContext, useEffect, useState, ReactNode } from "react";

// ** Next Import
import { useRouter } from "next/navigation";
import { AuthValuesType, LoginParams, UserDataType } from "./types";
import { UsersDb } from "@/fake-db/users";
import { useAppDispatch } from "@/store/hook";
import { doSetToStudentLesson } from "@/store/apps/students";
import { notifyError } from "@/utils/toasts/notifyError";
import { notifySuccess } from "@/utils/toasts/notifySuccess";

// ** Defaults
const defaultProvider: AuthValuesType = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
};

const AuthContext = createContext(defaultProvider);

type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<UserDataType | null>(defaultProvider.user);
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading);

  // ** Hooks
  const router = useRouter();

  useEffect(() => {
    const initAuth = async (): Promise<void> => {
      console.log("calling init auth");
      const storedUser = JSON.parse(window.localStorage.getItem("userData")!);
      if (storedUser) {
        setLoading(true);

        // Fetch user courses
        const allStartedCourses = JSON.parse(window.localStorage.getItem("studentLesson")!);

        if (allStartedCourses) {
          dispatch(doSetToStudentLesson(allStartedCourses));
        }

        setUser(storedUser as UserDataType);
        setLoading(false);
      } else {
        localStorage.removeItem("userData");
        setUser(null);
        setLoading(false);
        router.replace("/");
      }
    };

    initAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = (params: LoginParams) => {
    try {
      if (params) {
        // find user
        const found = UsersDb.find((user) => user.username === params.username);
        if (found && params.password === found.password) {
          const redirectURL = found.role === "student" ? "students" : "teachers";
          router.replace(redirectURL as string);
          setUser(found);
          localStorage.setItem("userData", JSON.stringify(found));
          notifySuccess(`${found.role} Login Successfull`);
        } else {
          notifyError("Invalid credentials");
        }
      } else {
        notifyError("Input cannot be empty");
      }
    } catch (error) {
      console.log(error, "err");
      notifyError("Login Failed");
    }
  };

  const handleLogout = () => {
    setUser(null);
    window.localStorage.removeItem("userData");
    router.push("/");
  };

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
