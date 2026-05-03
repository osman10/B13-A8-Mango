"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from 'react-toastify';

const LoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const[googleLoading, setGoogleLoading] = useState(false);

  const onSubmit = async (formData) => {
    setLoading(true);

    const { email, password } = formData;

    const { data, error } = await authClient.signIn.email(
      {
        email,
        password,
        callbackURL: "/", // optional, but router handles redirect
      },
      {
        onSuccess: () => {
          toast.success("Login successful!");
          router.push("/"); // ✅ force redirect
        },
        onError: (ctx) => {
          const message =
            ctx?.error?.message ||
            ctx?.error ||
            "Login failed";

          toast.error(
            typeof message === "string"
              ? message
              : JSON.stringify(message)
          );
        },
      }
    );

    if (error) {
      toast.error(error?.message || "Something went wrong");
    }

    setLoading(false);
  };

  const handleGoogleLogin = async () => {
   
   {setGoogleLoading(true)}
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
    {setGoogleLoading(false)}
  };





  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">
          Login to Your Account
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">
              {errors.email.message}
            </p>
          )}

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Minimum 8 characters required",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">
              {errors.password.message}
            </p>
          )}

        
          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded-lg hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Login link */}
        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t"></div>
          <span className="mx-3 text-gray-500 text-sm">
            OR continue with
          </span>
          <div className="flex-grow border-t"></div>
        </div>

        {/* Google Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          {googleLoading ? "Logging in..." : "Sign in with Google"}
          
        </button>

      </div>
    </div>
  );
};

export default LoginForm;