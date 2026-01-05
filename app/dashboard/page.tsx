'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import Image from 'next/image';
import logo from '../../public/logo3.png';

export default function Dashboard() {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!auth) {
            setLoading(false);
            return;
        }
        
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
            } else {
                router.push('/login');
            }
        });

        return () => unsubscribe();
    }, [router]);

    const handleSignOut = async () => {
        if (!auth) return;
        
        try {
            await signOut(auth);
            router.push('/');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-white text-xl">Loading...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black relative overflow-hidden">
            {/* Background decorative blurs */}
            <div className="fixed top-[-340px] left-[-340px] w-[680px] h-[680px] pointer-events-none">
                <div className="w-full h-full relative">
                    <svg className="w-full h-full" fill="none" viewBox="0 0 1280 1280">
                        <g filter="url(#filter0_f_dashboard_1)">
                            <circle cx="640" cy="640" fill="#311700" r="340" />
                        </g>
                        <defs>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1280" id="filter0_f_dashboard_1" width="1280" x="0" y="0">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                <feGaussianBlur result="effect1_foregroundBlur_dashboard_1" stdDeviation="150" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>

            <div className="fixed bottom-[-200px] right-[-200px] w-[400px] h-[400px] pointer-events-none">
                <div className="w-full h-full relative">
                    <svg className="w-full h-full" fill="none" viewBox="0 0 900 900">
                        <g filter="url(#filter0_f_dashboard_2)">
                            <circle cx="450" cy="450" fill="#311700" r="200" />
                        </g>
                        <defs>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="900" id="filter0_f_dashboard_2" width="900" x="0" y="0">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                <feGaussianBlur result="effect1_foregroundBlur_dashboard_2" stdDeviation="125" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10">
                {/* Header */}
                <header className="w-full px-8 py-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Image src={logo} alt="Logo" className="h-10" width={40} height={40} />
                        <span className="text-white font-['Poppins'] text-xl">Soul Yatri</span>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* User Profile Picture in Header */}
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
                            {user?.photoURL ? (
                                <Image 
                                    src={user.photoURL} 
                                    alt="Profile" 
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">
                                    {user?.displayName ? user.displayName.charAt(0).toUpperCase() : user?.email?.charAt(0).toUpperCase()}
                                </div>
                            )}
                        </div>
                        
                        <button
                            onClick={handleSignOut}
                            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-['Poppins'] transition-colors"
                        >
                            Sign Out
                        </button>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex flex-col items-center justify-center px-8 pt-24 pb-12">
                    <div className="max-w-4xl w-full">
                        {/* Welcome Section */}
                        <div className="text-center mb-16">
                            <h1 className="text-white font-['Poppins'] text-5xl mb-4">
                                Welcome Back! 🎉
                            </h1>
                            <p className="text-white/70 font-['Poppins'] text-xl">
                                {user?.displayName ? `Hello, ${user.displayName}` : 'Hello there!'}
                            </p>
                        </div>

                        {/* User Info Card */}
                        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 mb-8">
                            <h2 className="text-white font-['Poppins'] text-2xl mb-6">Your Profile</h2>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    {/* Profile Picture - larger version */}
                                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white/20">
                                        {user?.photoURL ? (
                                            <Image 
                                                src={user.photoURL} 
                                                alt="Profile" 
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center text-white text-3xl font-bold">
                                                {user?.displayName ? user.displayName.charAt(0).toUpperCase() : user?.email?.charAt(0).toUpperCase()}
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <p className="text-white font-['Poppins'] text-lg">
                                            {user?.displayName || 'User'}
                                        </p>
                                        <p className="text-white/60 font-['Poppins']">
                                            {user?.email}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center">
                                <div className="text-4xl mb-2">🧘</div>
                                <h3 className="text-white font-['Poppins'] text-xl mb-2">Meditation</h3>
                                <p className="text-white/60 font-['Poppins']">Start your journey</p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center">
                                <div className="text-4xl mb-2">📖</div>
                                <h3 className="text-white font-['Poppins'] text-xl mb-2">Journal</h3>
                                <p className="text-white/60 font-['Poppins']">Track your thoughts</p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center">
                                <div className="text-4xl mb-2">🌟</div>
                                <h3 className="text-white font-['Poppins'] text-xl mb-2">Progress</h3>
                                <p className="text-white/60 font-['Poppins']">View your stats</p>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
                            <h2 className="text-white font-['Poppins'] text-2xl mb-6">Quick Actions</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-['Poppins'] py-4 rounded-xl hover:scale-105 transition-transform">
                                    Start Meditation Session
                                </button>
                                <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-['Poppins'] py-4 rounded-xl hover:scale-105 transition-transform">
                                    Write in Journal
                                </button>
                                <button className="bg-gradient-to-r from-green-500 to-teal-500 text-white font-['Poppins'] py-4 rounded-xl hover:scale-105 transition-transform">
                                    View Progress
                                </button>
                                <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-['Poppins'] py-4 rounded-xl hover:scale-105 transition-transform">
                                    Explore Content
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
