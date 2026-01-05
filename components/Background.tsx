export function BackgroundEffects() {
    return (
        <>
            {/* Main central circle with inner shadows */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1024px] h-[1024px] pointer-events-none">
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
            <div className="absolute left-0 top-0 w-[680px] h-[680px] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
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
            <div className="absolute right-0 bottom-0 w-[400px] h-[400px] translate-x-1/2 translate-y-1/2 pointer-events-none">
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
        </>
    );
}
