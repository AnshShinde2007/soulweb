'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, appleProvider } from '../firebase';
import { useRouter } from 'next/navigation';
import imgImage48 from "../../public/google.png";
import imgImage49 from "../../public/apple.png";
import imgBackBlurLogo from "../../public/logo3.png";

export default function App() {
    const router = useRouter();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Create user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            
            // Update user profile with display name
            if (userCredential.user) {
                await updateProfile(userCredential.user, {
                    displayName: fullName
                });
            }

            // Redirect to home or dashboard after successful signup
            router.push('/dashboard');
        } catch (err: any) {
            // Handle specific Firebase errors
            if (err.code === 'auth/email-already-in-use') {
                setError('This email is already registered. Please login instead.');
            } else if (err.code === 'auth/weak-password') {
                setError('Password should be at least 6 characters long.');
            } else if (err.code === 'auth/invalid-email') {
                setError('Please enter a valid email address.');
            } else {
                setError('Failed to create account. Please try again.');
            }
            console.error('Signup error:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignup = async () => {
        setError('');
        setLoading(true);

        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log('Google signup successful:', result.user);
            router.push('/dashboard');
        } catch (err: any) {
            if (err.code === 'auth/popup-closed-by-user') {
                setError('Sign-in popup was closed. Please try again.');
            } else if (err.code === 'auth/cancelled-popup-request') {
                console.log('Popup cancelled');
            } else {
                setError('Failed to sign in with Google. Please try again.');
            }
            console.error('Google signup error:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleAppleSignup = async () => {
        setError('');
        setLoading(true);

        try {
            const result = await signInWithPopup(auth, appleProvider);
            console.log('Apple signup successful:', result.user);
            router.push('/dashboard');
        } catch (err: any) {
            if (err.code === 'auth/popup-closed-by-user') {
                setError('Sign-in popup was closed. Please try again.');
            } else if (err.code === 'auth/cancelled-popup-request') {
                console.log('Popup cancelled');
            } else {
                setError('Failed to sign in with Apple. Please try again.');
            }
            console.error('Apple signup error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black relative overflow-hidden flex flex-col">
            {/* Background decorative blurs */}
            <div className="fixed top-[-340px] left-[-340px] w-[680px] h-[680px] pointer-events-none">
                <div className="w-full h-full relative">
                    <svg className="w-full h-full" fill="none" viewBox="0 0 1280 1280">
                        <g filter="url(#filter0_f_1_59)">
                            <circle cx="640" cy="640" fill="#311700" r="340" />
                        </g>
                        <defs>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1280" id="filter0_f_1_59" width="1280" x="0" y="0">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                <feGaussianBlur result="effect1_foregroundBlur_1_59" stdDeviation="150" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>

            <div className="fixed bottom-[-200px] right-[-200px] w-[400px] h-[400px] pointer-events-none">
                <div className="w-full h-full relative">
                    <svg className="w-full h-full" fill="none" viewBox="0 0 900 900">
                        <g filter="url(#filter0_f_1_61)">
                            <circle cx="450" cy="450" fill="#311700" r="200" />
                        </g>
                        <defs>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="900" id="filter0_f_1_61" width="900" x="0" y="0">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                <feGaussianBlur result="effect1_foregroundBlur_1_61" stdDeviation="125" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>

            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1024px] h-[1024px] pointer-events-none">
                <div className="w-full h-full relative">
                    <svg className="w-full h-full" fill="none" viewBox="0 0 1024 1024">
                        <g filter="url(#filter0_ii_1_63)">
                            <circle cx="512" cy="512" fill="black" r="512" />
                        </g>
                        <defs>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1038" id="filter0_ii_1_63" width="1059" x="-30" y="-14">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                <feOffset dx="-30" />
                                <feGaussianBlur stdDeviation="25" />
                                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.0508131 0 0 0 0 0.0508131 0 0 0 0 0.0508131 0 0 0 1 0" />
                                <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1_63" />
                                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                <feOffset dx="5" dy="-14" />
                                <feGaussianBlur stdDeviation="25" />
                                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.0508131 0 0 0 0 0.0508131 0 0 0 0 0.0508131 0 0 0 1 0" />
                                <feBlend in2="effect1_innerShadow_1_63" mode="normal" result="effect2_innerShadow_1_63" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>

            {/* Header */}
            <header className="relative z-10 flex items-center justify-between px-[85px] py-[41px]">
                <div className="flex items-center gap-4">
                    <Link href="/login" className="text-white opacity-50 font-['Poppins'] text-[14px]">Login</Link>
                    <div className="h-[20px] w-px bg-white opacity-50" />
                    <Link href="/signup" className="text-white font-['Poppins'] text-[14px]">Signup</Link>
                </div>

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Image src={imgBackBlurLogo} alt="Logo" className="h-[41px] w-auto" width={41} height={41} />
                </div>

                <Link href="/" className="text-white opacity-50 font-['Poppins'] text-[14px]">Home</Link>
            </header>

            {/* Main Content */}
            <main className="relative z-10 flex-1 flex items-center justify-center px-4">
                <div className="w-full max-w-[500px]">
                    <h1 className="text-white text-center mb-[86px] font-['Poppins'] text-[24px]">
                        Create Your Account
                    </h1>

                    {error && (
                        <div className="bg-red-500/20 border border-red-500 text-red-500 px-4 py-3 rounded-lg text-center font-['Poppins'] text-[14px] mb-4">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSignup} className="space-y-[50px]">
                        {/* Full Name Input */}
                        <div>
                            <input
                                type="text"
                                placeholder="Enter Full Name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                                className="w-full bg-transparent border-none border-b border-white/50 text-white placeholder:text-white placeholder:opacity-50 font-['Poppins'] text-[16px] pb-[24px] outline-none"
                                style={{ borderBottomWidth: '1px', borderBottomStyle: 'solid', borderBottomColor: 'rgba(255, 255, 255, 0.5)' }}
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            <input
                                type="email"
                                placeholder="Enter Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                suppressHydrationWarning
                                className="w-full bg-transparent border-none border-b border-white/50 text-white placeholder:text-white placeholder:opacity-50 font-['Poppins'] text-[16px] pb-[24px] outline-none"
                                style={{ borderBottomWidth: '1px', borderBottomStyle: 'solid', borderBottomColor: 'rgba(255, 255, 255, 0.5)' }}
                            />
                        </div>

                        {/* Password Input */}
                        <div className="relative">
                            <label className="absolute -top-[12px] left-0 text-white font-['Poppins'] text-[10px]">
                                Create a Strong Password
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                minLength={6}
                                className="w-full bg-transparent border-none border-b border-white/50 text-white placeholder:text-white placeholder:opacity-50 font-['Poppins'] text-[16px] pb-[24px] outline-none"
                                style={{ borderBottomWidth: '1px', borderBottomStyle: 'solid', borderBottomColor: 'rgba(255, 255, 255, 0.5)' }}
                            />
                        </div>

                        {/* Sign Up Button */}
                        <button 
                            type="submit" 
                            disabled={loading}
                            className="w-full bg-[#ff7b00] text-white font-['Poppins'] text-[16px] rounded-[100px] h-[60px] mt-[50px] hover:bg-[#ff8a1a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Creating Account...' : 'Sign Up'}
                        </button>
                    </form>

                    {/* Login Link */}
                    <p className="text-center mt-[32px] text-white font-['Poppins'] text-[10px]">
                        Have an Account?{' '}
                        <Link href="/login" className="underline">Login</Link>
                    </p>

                    {/* Social Sign Up */}
                    <div className="mt-[92px]">
                        <p className="text-white text-center font-['Poppins'] text-[16px] mb-[32px]">
                            Sign Up With
                        </p>
                        <div className="flex items-center justify-center gap-[30px]">
                            <button 
                                type="button"
                                onClick={handleGoogleSignup}
                                disabled={loading}
                                className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Image src={imgImage48} alt="Google" width={30} height={30} />
                            </button>
                            <button 
                                type="button"
                                onClick={handleAppleSignup}
                                disabled={loading}
                                className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Image src={imgImage49} alt="Apple" width={30} height={30} />
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
