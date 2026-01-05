"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import googleIcon from '../../public/google.png';
import appleIcon from '../../public/apple.png';
import logo from '../../public/logo3.png';

export default function App() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        
        if (!auth) {
            setError('Authentication service not available');
            setLoading(false);
            return;
        }
        
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push('/dashboard');
        } catch (err: unknown) {
            if (err instanceof Error) setError(err.message);
            else setError(typeof err === 'string' ? err : 'Failed to sign in');
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setError(null);
        setLoading(true);
        
        if (!auth || !googleProvider) {
            setError('Google sign-in not available');
            setLoading(false);
            return;
        }
        
        try {
            await signInWithPopup(auth, googleProvider);
            router.push('/dashboard');
        } catch (err: unknown) {
            if (err instanceof Error) setError(err.message);
            else setError(typeof err === 'string' ? err : 'Google sign-in failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen bg-black overflow-hidden">
            {/* Background Effects */}
            {/* Main central circle with inner shadows */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[512px] h-[512px] sm:w-[768px] sm:h-[768px] md:w-[1024px] md:h-[1024px] pointer-events-none">
                <svg className="w-full h-full" fill="none" viewBox="0 0 1024 1024">
                    <defs>
                        <filter id="filter0_ii" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1038" width="1059" x="-30" y="-14">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dx="-30" />
                            <feGaussianBlur stdDeviation="25" />
                            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.0508131 0 0 0 0 0.0508131 0 0 0 0 0.0508131 0 0 0 1 0" />
                            <feBlend in2="shape" mode="normal" result="effect1_innerShadow" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dx="5" dy="-14" />
                            <feGaussianBlur stdDeviation="25" />
                            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.0508131 0 0 0 0 0.0508131 0 0 0 0 0.0508131 0 0 0 1 0" />
                            <feBlend in2="effect1_innerShadow" mode="normal" result="effect2_innerShadow" />
                        </filter>
                    </defs>
                    <circle cx="512" cy="512" r="512" fill="black" filter="url(#filter0_ii)" />
                </svg>
            </div>

            {/* Top-left blur effect */}
            <div className="absolute left-0 top-0 w-[340px] h-[340px] sm:w-[510px] sm:h-[510px] md:w-[680px] md:h-[680px] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-full h-full" fill="none" viewBox="0 0 1280 1280">
                    <defs>
                        <filter id="filter_topleft" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1280" width="1280" x="0" y="0">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="150" />
                        </filter>
                    </defs>
                    <circle cx="640" cy="640" r="340" fill="#00171B" filter="url(#filter_topleft)" />
                </svg>
            </div>

            {/* Bottom-right blur effect */}
            <div className="absolute right-0 bottom-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] translate-x-1/2 translate-y-1/2 pointer-events-none">
                <svg className="w-full h-full" fill="none" viewBox="0 0 900 900">
                    <defs>
                        <filter id="filter_bottomright" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="900" width="900" x="0" y="0">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="125" />
                        </filter>
                    </defs>
                    <circle cx="450" cy="450" r="200" fill="#00171B" filter="url(#filter_bottomright)" />
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-10">
                {/* Header */}
                <header className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex items-center justify-between">
                    {/* Left navigation */}
                    <nav className="flex items-center gap-3 sm:gap-4 md:gap-6">
                        <Link href="/signup" className="text-white opacity-50 hover:opacity-100 transition-opacity text-[12px] sm:text-[13px] md:text-[14px]">
                            Signup
                        </Link>
                        <div className="h-4 sm:h-5 w-px bg-white opacity-50" />
                        <Link href="/login" className="text-white hover:opacity-80 transition-opacity bg-yellow-600 px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 rounded-full text-[12px] sm:text-[13px] md:text-[14px]">
                            Login
                        </Link>
                    </nav>

                    {/* Center logo */}
                    <div className="absolute left-1/2 top-4 sm:top-5 md:top-6 -translate-x-1/2">
                        <Image src={logo} alt="Logo" className="h-8 sm:h-9 md:h-10" width={40} height={40} />
                    </div>

                    {/* Right navigation */}
                    <nav className="flex items-center gap-4 sm:gap-6 md:gap-8">
                        <Link href="/" className="text-white opacity-50 hover:opacity-100 transition-opacity text-[12px] sm:text-[13px] md:text-[14px]">
                            Home
                        </Link>
                    </nav>
                </header>

                {/* Main Content */}
                <main className="flex items-center justify-center px-4 sm:px-6 md:px-8 pt-12 sm:pt-16 md:pt-20 lg:pt-24">
                    <div className="w-full max-w-[500px] mx-auto">
                        <h1 className="text-white text-center mb-8 sm:mb-10 md:mb-12 text-[20px] sm:text-[22px] md:text-[24px] font-['Poppins']">
                            Login To Your Account
                        </h1>

                        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7 md:space-y-8">
                            {/* Email Field */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-white opacity-50 text-left text-[12px] sm:text-[13px] md:text-[14px]">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-transparent border-b border-white/50 text-white py-2 outline-none focus:border-white transition-colors text-[14px] sm:text-[15px] md:text-[16px]"
                                    required
                                    suppressHydrationWarning
                                />
                            </div>

                            {/* Password Field */}
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="text-white opacity-50 text-left text-[12px] sm:text-[13px] md:text-[14px]">
                                        Password
                                    </label>
                                    <button
                                        type="button"
                                        className="text-white text-[9px] sm:text-[10px] hover:underline"
                                    >
                                        Forget Password
                                    </button>
                                </div>
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="bg-transparent border-b border-white/50 text-white py-2 outline-none focus:border-white transition-colors text-[14px] sm:text-[15px] md:text-[16px]"
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full bg-[#18a2b8] text-white rounded-full h-[50px] sm:h-[55px] md:h-[60px] hover:bg-[#15909f] transition-colors text-[14px] sm:text-[15px] md:text-[16px] ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {loading ? 'Signing in...' : 'Log In'}
                            </button>

                            {/* Sign Up Link */}
                            <p className="text-white text-[9px] sm:text-[10px] text-center">
                                Create an New Account.{' '}
                                <Link href="/signup" className="underline">
                                    Sign Up
                                </Link>
                            </p>
                            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
                        </form>

                        {/* Social Login Buttons */}
                        <div className="flex flex-col items-center gap-4 sm:gap-5 md:gap-6 mt-8 sm:mt-10 md:mt-12 mb-8 sm:mb-12">
                            <p className="text-white text-[14px] sm:text-[15px] md:text-[16px]">Login With</p>

                            <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
                                <button
                                    onClick={handleGoogleSignIn}
                                    className="w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform"
                                    aria-label="Login with Google"
                                >
                                    <Image src={googleIcon} alt="Google" width={30} height={30} className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[30px] md:h-[30px]" />
                                </button>

                                <button
                                    className="w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform"
                                    aria-label="Login with Apple"
                                >
                                    <Image src={appleIcon} alt="Apple" width={30} height={30} className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[30px] md:h-[30px]" />
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
