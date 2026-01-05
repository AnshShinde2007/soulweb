"use client";
import React, { useState } from "react";
import Link from "next/link";

export function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: replace with real auth flow
        console.log("Login attempt:", { email, password });
    };

    return (<>

        <div className="w-full max-w-[500px] mx-auto">
            <h1 className="text-white text-center mb-12">Login To Your Account</h1>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Email Field */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-white opacity-50 text-right">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-transparent border-b border-white/50 text-white py-2 outline-none focus:border-white transition-colors"
                        required
                    />
                </div>

                {/* Password Field */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <button type="button" className="text-white text-[10px] hover:underline">
                            Forget Password
                        </button>
                        <label htmlFor="password" className="text-white opacity-50">
                            Password
                        </label>
                    </div>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-transparent border-b border-white/50 text-white py-2 outline-none focus:border-white transition-colors"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-[#18a2b8] text-white rounded-full h-[60px] hover:bg-[#15909f] transition-colors"
                >
                    Log In
                </button>

                {/* Sign Up Link */}
                <p className="text-white text-[10px] text-center">
                    Create an New Account.{' '}
                    <Link href="/signup" className="underline">Sign Up</Link>
                </p>
            </form>

            <div className="flex flex-col items-center gap-6 mt-12">
                <p className="text-white">Login With</p>

                <div className="flex items-center gap-6">
                    <button
                        className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform"
                        aria-label="Login with Google"
                        type="button"
                    >
                        <svg className="w-[30px] h-[30px]" viewBox="0 0 48 48" aria-hidden="true">
                            <path fill="#EA4335" d="M24 12c3.3 0 6 1.3 8 3.5l6-6C35.6 6 30.2 4 24 4 14.8 4 7.3 9.9 4.5 18.5l7.6 5.9C13.3 20 18 12 24 12z" />
                            <path fill="#34A853" d="M46.5 24c0-1.6-.1-3.1-.4-4.6H24v8.6h12.8c-.5 2.8-2.1 5.1-4.4 6.6l7 5.4C43.6 36.8 46.5 30.8 46.5 24z" />
                        </svg>
                    </button>

                    <button
                        className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform"
                        aria-label="Login with Apple"
                        type="button"
                    >
                        <span className="text-black text-[20px]"></span>
                    </button>
                </div>
            </div>
        </div>
    </>);
}
