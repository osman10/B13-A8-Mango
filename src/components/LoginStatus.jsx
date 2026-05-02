"use client";
import Link from "next/link";
import { authClient } from "@/lib/auth-client"


const LoginStatus = () => {
    const { data: session } = authClient.useSession();
    if (session) {
        return (
            <div className="flex items-center space-x-4">
                <span className="mr-4">Hello, {session.user.name}!</span>
                {session.user.image && (
                    <img
                        src={session.user.image}
                        alt={session.user.name}
                        className="w-8 h-8 rounded-full"
                    />
                )}
                <button
                    onClick={() => authClient.signOut()}
                    className="btn"
                >
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