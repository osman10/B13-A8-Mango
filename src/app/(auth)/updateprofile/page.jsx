// 


"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const UpdateProfile = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [loading, setLoading] = useState(false);

    const onSubmit = async (formData) => {
        setLoading(true);
        const { name, image } = formData;

        const { data, error } = await authClient.updateUser(
            {
                name,
                image,
            },
            {
                onSuccess: () => {
                    alert("Profile updated successfully!");
                    router.push("/profile"); // ✅ force redirect
                },
                onError: (ctx) => {
                    const message =
                        ctx?.error?.message ||
                        ctx?.error ||
                        "Profile update failed";

                    alert(
                        typeof message === "string"
                            ? message
                            : JSON.stringify(message)
                    );
                },
            }
        );

        if (error) {
            alert(error?.message || "Something went wrong");
        }

        setLoading(false);
    };

 

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">

                {/* Title */}
                <h2 className="text-2xl font-bold text-center mb-6">
                    Update Your Profile
                </h2>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">


                    {/* Name */}
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-4 py-2 border rounded-lg"
                        {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm">
                            {errors.name.message}
                        </p>
                    )}

                    {/* Image URL */}
                    <input
                        type="text"
                        placeholder="Profile Image URL (optional)"
                        className="w-full px-4 py-2 border rounded-lg"
                        {...register("image")}
                    />

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-black text-white py-2 rounded-lg hover:opacity-90 disabled:opacity-50"
                    >
                        {loading ? "Updating..." : "Update Profile"}
                    </button>
                </form>



            </div>
        </div>
    );
};

export default UpdateProfile;