"use client";
import Link from "next/link";
import { authClient } from "@/lib/auth-client"
import Image from "next/image";
import LoginForm from "./LoginForm";


const Profile = () => {
    const { data: session } = authClient.useSession();
    console.log("Session data:", session); // Debugging line
    if (session) {
        return (
            <div className="flex flex-col space-y-4 items-center min-h-[60vh]">
                {session.user.image && (
                    <Image
                        src={session.user.image}
                        alt={session.user.name}
                        width={300}
                        height={300}
                        className="w-32 h-32 rounded-full object-cover"
                    />
                )}
                <div className="text-center">
                <h2 className="text-2xl font-bold">{session.user.name}</h2>
                    <p className="text-gray-600">{session.user.email}</p>
                </div>
                    
                </div>

        );
    }
    return (
        <div >
            <h1 className="text-center text-3xl font-bold bg-gradient text-white">Login to see user Profile.</h1>
            <LoginForm />
        </div>
    );
};

export default Profile;