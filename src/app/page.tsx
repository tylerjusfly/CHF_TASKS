"use client";
import { useAuth } from "@/hooks/useAuth";
import { FormEvent } from "react";

export default function Home() {
  const auth = useAuth();

  const loginUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    auth.login({ username: "olasco", password: "ladygaga" });
  };

  return (
    <main>
      <div className="flex flex-col justify-center items-center">
        <form onSubmit={loginUser}>
          <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              user name
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 "
              value={"olasco"}
              placeholder="John"
              required
            />
          </div>
          <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Password
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5"
              value={"ladygaga"}
              placeholder="Doe"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
