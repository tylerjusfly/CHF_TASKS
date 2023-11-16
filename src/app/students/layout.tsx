import NavigationBar from "@/components/students/NavigationBar";

export default function StudentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavigationBar />
      <main className="mx-16">{children}</main>
    </>
  );
}
