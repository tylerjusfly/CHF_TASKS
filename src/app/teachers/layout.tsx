import NavigationBar from "@/components/teachers/NavigationBar";

export default function TeachersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavigationBar />
      <main className="mx-16">{children}</main>
    </>
  );
}
