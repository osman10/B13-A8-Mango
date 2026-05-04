"use client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

const BookDetails = ({ books }) => {
    const { data: session } = authClient.useSession();
    const router = useRouter();
    const params = useParams();
    const id = Number(params.id); // ✅ single source of truth

    const book = books.find((book) => book.id === id);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [loading, setLoading] = useState(false);

    // ✅ Email login
    const onSubmit = async (formData) => {
        setLoading(true);

        const { email, password } = formData;

        await authClient.signIn.email(
            {
                email,
                password,
                callbackURL: `/books/${id}`, // ✅ FIXED
            },
            {
                onSuccess: () => {
                    router.push(`/books/${id}`); // ✅ FIXED
                },
                onError: (ctx) => {
                    alert(ctx?.error?.message || "Login failed");
                },
            }
        );

        setLoading(false);
    };

    // ✅ Google login
    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: `/books/${id}`, // ✅ FIXED
        });
    };

    if (!book) return <div>Book not found</div>;

    const { title, author, description, category, image_url } = book;

    // ✅ Logged in → show book
    if (session) {
        return (
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <Image
                        src={image_url}
                        className="max-w-sm rounded-lg shadow-2xl"
                        width={340}
                        height={350}
                        alt={title}
                    />
                    <div>
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
                            {title}
                        </h1>
                        <p className="py-6 text-sky-700 text-2xl">
                            <span className="font-bold">Author:</span> {author}
                        </p>
                        <p className="py-6 text-green-700 text-2xl">
                            <span className="font-bold">Category:</span> {category}
                        </p>
                        <p className="py-6 text-xl">{description}</p>
                    </div>
                </div>
            </div>
        );
    }

    // ❌ Not logged in → show login
    return (
        <div className="container mx-auto">
            {/* Title */}
            <h2 className="text-2xl font-bold text-center bg-gradient text-white">
                Login to See Book Details
            </h2>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

                <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
                    <h2 className="text-2xl font-bold text-center mb-6">
                        Login here
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 border rounded-lg"
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 border rounded-lg"
                            {...register("password", { required: "Password is required" })}
                        />
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-black text-white py-2 rounded-lg"
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </form>

                    <p className="text-center text-sm mt-4">
                        Don't have an account?{" "}
                        <Link href="/register" className="text-blue-500">
                            Register
                        </Link>
                    </p>

                    <div className="flex items-center my-6">
                        <div className="flex-grow border-t"></div>
                        <span className="mx-3 text-gray-500 text-sm">OR</span>
                        <div className="flex-grow border-t"></div>
                    </div>

                    <button
                        onClick={handleGoogleLogin}
                        className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg"
                    >
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="Google"
                            className="w-5 h-5"
                        />
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;