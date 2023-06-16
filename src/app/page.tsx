import Profile from "@/components/Profile";
import "../app/globals.css";

export default function Home() {
  return (
    <main className="flex justify-center w-full">
      <div className="container flex items-center justify-center h-full min-h-screen">
        <Profile />
      </div>
    </main>
  );
}
