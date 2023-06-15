import Profile from "@/components/Profile";
import "../app/globals.css";

export default function Home() {
  return (
    <main className="flex justify-center w-full">
      <div className="container h-full border border-red-500">
        <Profile />
      </div>
    </main>
  );
}
