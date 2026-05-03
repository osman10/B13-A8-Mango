"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from 'react-toastify';

const LoginStatus = () => {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    toast.success("You have been logged out.");
    router.push("/"); // redirect to home
  };

  if (session) {
    return (
      <div className="flex items-center space-x-4">
            <span className="mr-4 hidden md:block">Hello, {session.user.name}!</span>

        {session.user.image && (
          <img
            src={session.user.image}
            alt={session.user.name}
            className="w-8 h-8 rounded-full"
          />
        )}

        <button onClick={handleLogout} className="btn">
          Logout
        </button>
      </div>
    );
  }

  return (
    <div>
      <Link href="/login" className="btn">
        Login
      </Link>
    </div>
  );
};

export default LoginStatus;