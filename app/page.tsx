"use client";
import { motion, AnimatePresence } from "motion/react";
import CountUp from "../components/CountUp";
import BlurText from "../components/BlurText";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


//original imports
import svgPaths from "./svg";
import imgVecteezyASereneSilhouetteOfAWomanSProfileIsolatedOnA477596781 from "../public/girl.png";
import imgWhiteGradient from "../public/placeholder.svg";
import imgCounsellingImage from "../public/therapist2.png";
import imgCounsellingImage1 from "../public/placeholder.svg";
import imgCoursesImage from "../public/placeholder.svg";
import imgHabitBuilderImage from "../public/placeholder.svg";
import imgCounsellingImage2 from "../public/placeholder.svg";
import imgTherapistImage from "../public/therapist1.png";
import imgGuidedPlanImage from "../public/works1.png";
import imgSessionsImage from "../public/works2.png";
import imgRoundedRectangle from "../public/works3.png";
import imgSoulYatriLogo2 from "../public/logo2.png";
import imgInstagram1 from "../public/instagram.png";
import imgFacebook1 from "../public/facebook.png";
import imgLinkedin1 from "../public/linkedin.png";
import imgTwitter11 from "../public/twitter.png";
import imgBreathe from "../public/placeholder.svg";
import imgRobot from "../public/placeholder.svg";
import imgCorporateImage from "../public/corporate.png";
import imgSoulYatriMainLogo from "../public/logo.png";
import imgHeroImage from "../public/monk.png";

import imgVecteezyIconicArtDecoSadYoungManLookingDownWith604151191 from "../public/placeholder.svg";
import imgMic2 from "../public/placeholder.svg";
import imgAnxious from "../public/placeholder.svg";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";


function HeroImage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.from(heroRef.current, {
        y: 200,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <div ref={heroRef} className="absolute flex items-center justify-center left-[calc(21.43%-0.57px)] size-[811px] top-[269px]">
      <div className="flex-none rotate-[180deg] scale-y-[-100%]">
        <div className="filter relative rounded-bl-[250px] rounded-br-[250px] size-[811px]" data-name="HERO IMAGE">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[250px] rounded-br-[250px]">
            <img alt="" className="absolute h-full left-0 max-w-none top-0 w-full object-cover scale-x-[-1]" src={imgHeroImage.src} />
          </div>
        </div>
      </div>
    </div>
  );
}

function AnimatedLogo() {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logoRef.current) {
      gsap.from(logoRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });
    }
  }, []);

  return (
    <div ref={logoRef} className="absolute h-[41px] left-[calc(42.86%+77.86px)] top-[50px] w-[50px]" data-name="SOUL YATRI MAIN LOGO">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-0 max-w-none top-0 w-full object-contain" src={imgSoulYatriMainLogo.src} />
      </div>
    </div>
  );
}

function NavFrame() {
  return (
    <div className="absolute h-[21px] left-[79px] top-[20px] w-[743px]">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-0 not-italic text-[14px] text-nowrap text-white top-0">Home</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[122px] not-italic opacity-50 text-[14px] text-nowrap text-white top-0">About Soul Yatri</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[313px] not-italic opacity-50 text-[14px] text-nowrap text-white top-0">Blogs</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[431px] not-italic opacity-50 text-[14px] text-nowrap text-white top-0">For Business</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[597px] not-italic opacity-50 text-[#fff9f9] text-[14px] text-nowrap top-0">Login</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[694px] not-italic opacity-50 text-[#fff9f9] text-[14px] text-nowrap top-0">Signup</p>
      <div className="absolute flex h-[20px] items-center justify-center left-[664px] top-px w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[20px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 1">
                <line id="Line 7" opacity="0.5" stroke="var(--stroke-0, white)" x2="20" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnimatedHeaderNav() {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navRef.current) {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.4,
      });
    }
  }, []);

  return (
    <div ref={navRef} className="absolute bg-[rgba(0,0,0,0)] h-[60px] left-[calc(14.29%+64.29px)] rounded-[30px] top-[120px] w-[900px]" data-name="HEADER NAV">
      <NavFrame />
    </div>
  );
}

function LandingCtaButton() {
  return (
    <div className="absolute bg-white h-[60px] left-[calc(35.71%+40.71px)] overflow-clip rounded-[30px] shadow-[0px_10px_60px_0px_rgba(0,0,0,0.5)] top-[753px] w-[330px]" data-name="LANDING CTA BUTTON">
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[60px] justify-center leading-[0] left-[165px] not-italic text-[14px] text-center text-black top-[30px] translate-x-[-50%] translate-y-[-50%] w-[330px]">
        <p className="leading-[normal]">Start Your Journey</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <motion.div 
      className="absolute left-1/2 top-[1800px] w-[800px] h-[800px] -translate-x-1/2"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
    >
      <motion.div 
        className="absolute inset-0 rounded-full blur-[100px] filter" 
        style={{ 
          background: "radial-gradient(circle, rgba(255,148,49,1) 0%, rgba(255,136,24,1) 30%, rgba(255,129,12,1) 60%, rgba(255,123,0,0.5) 80%, rgba(255,123,0,0) 100%)"
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: "easeOut", delay: 0.3 }}
      />
    </motion.div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[calc(28.57%+5.57px)] not-italic top-[1765px]">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[calc(28.57%+85.57px)] text-[32px] text-white top-[1765px] w-[447px]">Wellness Feels Fragmented</p>
      <div className="absolute font-['Poppins:Regular',sans-serif] leading-[30px] left-[calc(28.57%+308.57px)] text-[14px] text-[rgba(255,255,255,0.5)] text-center top-[1838px] translate-x-[-50%] w-[606px]">
        <p className="mb-0">Mental health services are expensive, scarce and stigmatized.</p>
        <p className="mb-0">Many prefer culturally familiar modalities (astrology, spiritual healers)</p>
        <p>but those services are fragmented, unregulated and often lack measurable outcomes.</p>
      </div>
    </div>
  );
}

function WellnessLandingPoint() {
  return (
    <div className="absolute contents left-[calc(7.14%+17.14px)] top-[1520px]" data-name="WELLNESS LANDING POINT">
      <div className="absolute left-[calc(7.14%+17.14px)] size-[1200px] top-[1520px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1200 1200">
          <circle cx="600" cy="600" id="Ellipse 29" r="599" stroke="url(#paint0_linear_1_393)" strokeWidth="2" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_393" x1="600" x2="600" y1="0" y2="1200">
              <stop stopColor="#FF7B00" />
              <stop offset="0.296287" stopOpacity="0" />
              <stop offset="0.696961" stopOpacity="0" />
              <stop offset="1" stopColor="#FF7B00" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group />
      <Group1 />
      <div className="absolute h-[636px] left-[calc(28.57%+58.57px)] rounded-bl-[152px] top-[1984px] w-[500px]" data-name="vecteezy_a-serene-silhouette-of-a-woman-s-profile-isolated-on-a_47759678 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[152px]">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-full object-cover" src={imgVecteezyASereneSilhouetteOfAWomanSProfileIsolatedOnA477596781.src} />
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents leading-[0] left-[calc(35.71%+48.71px)] not-italic text-center text-white top-[3050px]">
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[62px] justify-center left-[calc(35.71%+205.71px)] text-[42px] top-[3081px] translate-x-[-50%] translate-y-[-50%] w-[314px]">
        <p className="leading-[normal]">More Than <CountUp to={240} duration={1} /></p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[54px] justify-center left-[calc(35.71%+205.71px)] opacity-50 text-[18px] top-[3149px] translate-x-[-50%] translate-y-[-50%] w-[314px]">
        <p className="leading-[30px]">Courses Available For Your Health.</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents leading-[0] left-[calc(35.71%+39.71px)] not-italic text-center text-white top-[3542px]">
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[62px] justify-center left-[calc(35.71%+205.21px)] text-[42px] top-[3573px] translate-x-[-50%] translate-y-[-50%] w-[283px]">
        <p className="leading-[normal]">More Than <CountUp to={22} duration={1} /></p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[26px] justify-center left-[calc(35.71%+205.71px)] opacity-50 text-[18px] top-[3628px] translate-x-[-50%] translate-y-[-50%] w-[332px]">
        <p className="leading-[normal]">Instructurors Available For Your Care.</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[calc(35.71%+29.71px)] not-italic text-center text-white top-[3296px]">
      <p className="absolute font-['Poppins:Medium',sans-serif] h-[62px] leading-[normal] left-[calc(35.71%+205.71px)] text-[42px] top-[3296px] translate-x-[-50%] w-[230px]"><CountUp to={200} duration={1} />k Plus</p>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[54px] justify-center leading-[0] left-[calc(35.71%+207.21px)] opacity-50 text-[18px] top-[3395px] translate-x-[-50%] translate-y-[-50%] w-[355px]">
        <p className="leading-[30px]">Partnered With Practitioners Worldwide.</p>
      </div>
    </div>
  );
}

function FactsOfSoulYatri() {
  return (
    <div className="absolute contents left-[calc(35.71%+12.71px)] top-[3050px]" data-name="FACTS OF SOUL YATRI">
      <Group2 />
      <Group4 />
      <div className="absolute h-0 left-[calc(35.71%+12.71px)] top-[3236px] w-[385px]">
        <div className="absolute inset-[-2px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 385 4">
            <path d="M0 2H385" id="Line 6" stroke="url(#paint0_linear_1_401)" strokeWidth="4" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_401" x1="385" x2="0" y1="2.5" y2="2.5">
                <stop stopOpacity="0" />
                <stop offset="0.498314" stopColor="#FF7B00" />
                <stop offset="1" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[calc(35.71%+12.71px)] top-[3482px] w-[385px]">
        <div className="absolute inset-[-2px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 385 4">
            <path d="M0 2H385" id="Line 7" stroke="url(#paint0_linear_1_387)" strokeWidth="4" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_387" x1="385" x2="0" y1="2.5" y2="2.5">
                <stop stopOpacity="0" />
                <stop offset="0.5" stopColor="#FF7B00" />
                <stop offset="1" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Group3 />
    </div>
  );
}

function DirectionAarow() {
  return (
    <div className="absolute left-[calc(42.86%+77.86px)] size-[50px] top-[4250px]" data-name="DIRECTION AAROW">
      <div className="absolute inset-[-4%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
          <g id="DIRECTION AAROW">
            <circle cx="27" cy="27" id="Ellipse 45" r="26" stroke="url(#paint0_linear_1_383)" strokeWidth="2" />
            <path d={svgPaths.p1ca4480} fill="url(#paint1_linear_1_383)" id="Arrow 6" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_383" x1="27" x2="27" y1="12" y2="52">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_383" x1="27" x2="26.5" y1="17" y2="39">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function CardNavigator({ currentSlide, onSlideChange }: { currentSlide: number; onSlideChange: (index: number) => void }) {
  const dots = [0, 1, 2, 3, 4, 5];
  const baseLeft = 'calc(42.86%+46.86px)';
  
  return (
    <div className="absolute contents left-[calc(42.86%+46.86px)] top-[5288px]" data-name="CARD NAVIGATOR">
      {dots.map((index) => {
        const isActive = currentSlide === index;
        const leftPosition = index === 0 ? baseLeft : 
                            index === 1 ? 'calc(42.86%+86.86px)' :
                            index === 2 ? '50%' :
                            index === 3 ? 'calc(50%+16px)' :
                            index === 4 ? 'calc(50%+32px)' : 'calc(50%+48px)';
        
        return (
          <div
            key={index}
            onClick={() => onSlideChange(index)}
            className={`absolute rounded-[50px] top-[5288px] cursor-pointer transition-all duration-300 hover:opacity-80 ${
              isActive ? 'bg-black h-[8px] w-[32px]' : 'bg-[rgba(0,0,0,0.2)] size-[8px]'
            }`}
            style={{ left: leftPosition }}
          />
        );
      })}
    </div>
  );
}

function DirectionAarow1() {
  return (
    <div className="absolute left-[calc(42.86%+77.86px)] size-[50px] top-[5446px]" data-name="DIRECTION AAROW">
      <div className="absolute inset-[-4%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
          <g id="DIRECTION AAROW">
            <circle cx="27" cy="27" id="Ellipse 45" r="26" stroke="url(#paint0_linear_1_383)" strokeWidth="2" />
            <path d={svgPaths.p1ca4480} fill="url(#paint1_linear_1_383)" id="Arrow 6" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_383" x1="27" x2="27" y1="12" y2="52">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_383" x1="27" x2="26.5" y1="17" y2="39">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function WhiteGradientGroup() {
  return (
    <div className="absolute contents left-[calc(42.86%+29.86px)] top-[4653px]" data-name="WHITE GRADIENT GROUP">
      <div className="absolute h-[560px] left-[calc(42.86%+29.86px)] rounded-bl-[50px] rounded-br-[50px] top-[4653px] w-[520px]" data-name="WHITE GRADIENT">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-bl-[50px] rounded-br-[50px] size-full" src={imgWhiteGradient} />
      </div>
      <div className="absolute h-[560px] left-[calc(42.86%+29.86px)] rounded-bl-[50px] rounded-br-[50px] top-[4653px] w-[520px]" data-name="WHITE GRADIENT">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-bl-[50px] rounded-br-[50px] size-full" src={imgWhiteGradient} />
      </div>
      <div className="absolute h-[560px] left-[calc(42.86%+29.86px)] rounded-bl-[50px] rounded-br-[50px] top-[4653px] w-[520px]" data-name="WHITE GRADIENT">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-bl-[50px] rounded-br-[50px] size-full" src={imgWhiteGradient} />
      </div>
      <div className="absolute h-[560px] left-[calc(42.86%+29.86px)] rounded-bl-[50px] rounded-br-[50px] top-[4653px] w-[520px]" data-name="WHITE GRADIENT">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-bl-[50px] rounded-br-[50px] size-full" src={imgWhiteGradient} />
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents font-['Poppins:Regular',sans-serif] leading-[30px] left-[calc(42.86%+63.86px)] not-italic top-[5118.35px]">
      <p className="absolute h-[27.042px] left-[calc(42.86%+116.86px)] text-[18px] text-black text-center top-[5118.35px] translate-x-[-50%] w-[106px]">Counsellors</p>
      <p className="absolute h-[27.042px] left-[calc(42.86%+63.86px)] text-[14px] text-[rgba(0,0,0,0.5)] top-[5154.41px] w-[256px]">Get Clear Mind Through Counselling.</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[calc(64.29%+48.29px)] top-[5122.86px]">
      <div className="absolute bg-black h-[54.085px] left-[calc(64.29%+48.29px)] rounded-[40px] top-[5122.86px] w-[159px]" />
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[54.085px] justify-center leading-[0] left-[calc(64.29%+127.79px)] not-italic text-[16px] text-center text-white top-[5149.9px] translate-x-[-50%] translate-y-[-50%] w-[159px]">
        <p className="leading-[30px]">Consult Now</p>
      </div>
    </div>
  );
}

function TextCtaButton() {
  return (
    <div className="absolute contents left-[calc(42.86%+63.86px)] top-[5118.35px]" data-name="TEXT & CTA BUTTON">
      <Group6 />
      <Group5 />
    </div>
  );
}

function CounsellorsCard() {
  return (
    <div className="absolute contents left-[calc(42.86%+29.86px)] top-[4573px]" data-name="COUNSELLORS CARD">
      <div className="absolute bg-white h-[640px] left-[calc(42.86%+29.86px)] rounded-[50px] top-[4573px] w-[520px]" data-name="COUSELLORS WHITE RECTANGLE">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-[-1px] pointer-events-none rounded-[51px]" />
      </div>
      <div className="absolute h-[640px] left-[calc(42.86%+29.86px)] rounded-[50px] top-[4573px] w-[520px]" data-name="COUNSELLING IMAGE">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[50px] size-full" src={imgCounsellingImage} />
      </div>
      <WhiteGradientGroup />
      <TextCtaButton />
    </div>
  );
}

function WhiteGradientGroup1() {
  return (
    <div className="absolute contents left-[calc(78.57%+75.57px)] top-[4653px]" data-name="WHITE GRADIENT GROUP">
      <div className="absolute h-[560px] left-[calc(78.57%+75.57px)] rounded-bl-[50px] rounded-br-[50px] top-[4653px] w-[520px]" data-name="WHITE GRADIENT">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-bl-[50px] rounded-br-[50px] size-full" src={imgWhiteGradient} />
      </div>
      <div className="absolute h-[560px] left-[calc(78.57%+75.57px)] rounded-bl-[50px] rounded-br-[50px] top-[4653px] w-[520px]" data-name="WHITE GRADIENT">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-bl-[50px] rounded-br-[50px] size-full" src={imgWhiteGradient} />
      </div>
      <div className="absolute h-[560px] left-[calc(78.57%+75.57px)] rounded-bl-[50px] rounded-br-[50px] top-[4653px] w-[520px]" data-name="WHITE GRADIENT">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-bl-[50px] rounded-br-[50px] size-full" src={imgWhiteGradient} />
      </div>
      <div className="absolute h-[560px] left-[calc(78.57%+75.57px)] rounded-bl-[50px] rounded-br-[50px] top-[4653px] w-[520px]" data-name="WHITE GRADIENT">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-bl-[50px] rounded-br-[50px] size-full" src={imgWhiteGradient} />
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents font-['Poppins:Regular',sans-serif] leading-[30px] left-[calc(85.71%+6.71px)] not-italic top-[5108px]">
      <p className="absolute h-[30px] left-[calc(85.71%+40.53px)] text-[18px] text-black text-center top-[5108px] translate-x-[-50%] w-[67.636px]">Healers</p>
      <p className="absolute h-[30px] left-[calc(85.71%+6.71px)] text-[14px] text-[rgba(0,0,0,0.5)] top-[5148px] w-[246px]">Healing Crafted By Trusted Healers.</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[calc(100%+94px)] top-[5113px]">
      <div className="absolute bg-black h-[60px] left-[calc(100%+94px)] rounded-[40px] top-[5113px] w-[159px]" />
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[60px] justify-center leading-[0] left-[calc(100%+173.5px)] not-italic text-[16px] text-center text-white top-[5143px] translate-x-[-50%] translate-y-[-50%] w-[159px]">
        <p className="leading-[30px]">Heal Now</p>
      </div>
    </div>
  );
}

function TextCtaButton1() {
  return (
    <div className="absolute contents left-[calc(85.71%+6.71px)] top-[5108px]" data-name="TEXT & CTA BUTTON">
      <Group7 />
      <Group8 />
    </div>
  );
}

function HealersCard() {
  return (
    <div className="absolute contents left-[calc(78.57%+75.57px)] top-[4573px]" data-name="HEALERS CARD">
      <div className="absolute bg-white h-[640px] left-[calc(78.57%+75.57px)] rounded-[50px] top-[4573px] w-[520px]" data-name="HEALERS WHITE RECTANGLE">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-[-1px] pointer-events-none rounded-[51px]" />
      </div>
      <div className="absolute h-[640px] left-[calc(78.57%+75.57px)] rounded-[50px] top-[4573px] w-[520px]" data-name="COUNSELLING IMAGE">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[50px]">
          <img alt="" className="absolute h-[140%] left-[-6.01%] max-w-none top-[-39.57%] w-[115.03%]" src={imgCounsellingImage1} />
        </div>
      </div>
      <WhiteGradientGroup1 />
      <TextCtaButton1 />
    </div>
  );
}

function WhiteGradientGroup2() {
  return (
    <div className="absolute contents left-[calc(100%+327px)] top-[4653px]" data-name="WHITE GRADIENT GROUP">
      <div className="absolute h-[560px] left-[calc(100%+327px)] rounded-bl-[50px] rounded-br-[50px] top-[4653px] w-[520px]" data-name="WHITE GRADIENT">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-bl-[50px] rounded-br-[50px] size-full" src={imgWhiteGradient} />
      </div>
      <div className="absolute h-[560px] left-[calc(100%+327px)] rounded-bl-[50px] rounded-br-[50px] top-[4653px] w-[520px]" data-name="WHITE GRADIENT">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-bl-[50px] rounded-br-[50px] size-full" src={imgWhiteGradient} />
      </div>
      <div className="absolute h-[560px] left-[calc(100%+327px)] rounded-bl-[50px] rounded-br-[50px] top-[4653px] w-[520px]" data-name="WHITE GRADIENT">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-bl-[50px] rounded-br-[50px] size-full" src={imgWhiteGradient} />
      </div>
      <div className="absolute h-[560px] left-[calc(100%+327px)] rounded-bl-[50px] rounded-br-[50px] top-[4653px] w-[520px]" data-name="WHITE GRADIENT">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-bl-[50px] rounded-br-[50px] size-full" src={imgWhiteGradient} />
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents font-['Poppins:Regular',sans-serif] leading-[30px] left-[calc(100%+361px)] not-italic top-[5108px]">
      <p className="absolute left-[calc(100%+433px)] text-[18px] text-black text-center top-[5108px] translate-x-[-50%] w-[144px]">Guided Courses</p>
      <p className="absolute left-[calc(100%+361px)] text-[14px] text-[rgba(0,0,0,0.5)] top-[5148px] w-[257px]">Quick guided mental health courses.</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[calc(100%+654px)] top-[5113px]">
      <div className="absolute bg-black h-[60px] left-[calc(100%+654px)] rounded-[40px] top-[5113px] w-[159px]" />
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[60px] justify-center leading-[0] left-[calc(100%+733.5px)] not-italic text-[16px] text-center text-white top-[5143px] translate-x-[-50%] translate-y-[-50%] w-[159px]">
        <p className="leading-[30px]">Join Now</p>
      </div>
    </div>
  );
}

function TextAndCtaButtons() {
  return (
    <div className="absolute contents left-[calc(100%+361px)] top-[5108px]" data-name="TEXT AND CTA BUTTONS">
      <Group9 />
      <Group10 />
    </div>
  );
}

function GuidedCourses() {
  return (
    <div className="absolute contents left-[calc(100%+327px)] top-[4573px]" data-name="GUIDED COURSES">
      <div className="absolute bg-white h-[640px] left-[calc(100%+327px)] rounded-[50px] top-[4573px] w-[520px]" data-name="GUIDED COURSES WHITE RECTANGLE">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-[-1px] pointer-events-none rounded-[51px]" />
      </div>
      <div className="absolute h-[640px] left-[calc(100%+327px)] rounded-[50px] top-[4573px] w-[520px]" data-name="COURSES IMAGE">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[50px]">
          <img alt="" className="absolute h-[112.28%] left-[-82.24%] max-w-none top-[-12.28%] w-[207.31%]" src={imgCoursesImage} />
        </div>
      </div>
      <WhiteGradientGroup2 />
      <TextAndCtaButtons />
    </div>
  );
}

function WhiteGradientGroup3() {
  return (
    <div className="absolute contents left-[calc(100%+887px)] top-[4653px]" data-name="WHITE GRADIENT GROUP">
      <div className="absolute h-[560px] left-[calc(100%+887px)] rounded-bl-[50px] rounded-br-[50px] top-[4653px] w-[520px]" data-name="WHITE GRADIENT">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-bl-[50px] rounded-br-[50px] size-full" src={imgWhiteGradient} />
      </div>
      <div className="absolute h-[560px] left-[calc(100%+887px)] rounded-bl-[50px] rounded-br-[50px] top-[4653px] w-[520px]" data-name="WHITE GRADIENT">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-bl-[50px] rounded-br-[50px] size-full" src={imgWhiteGradient} />
      </div>
      <div className="absolute h-[560px] left-[calc(100%+887px)] rounded-bl-[50px] rounded-br-[50px] top-[4653px] w-[520px]" data-name="WHITE GRADIENT">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-bl-[50px] rounded-br-[50px] size-full" src={imgWhiteGradient} />
      </div>
      <div className="absolute h-[560px] left-[calc(100%+887px)] rounded-bl-[50px] rounded-br-[50px] top-[4653px] w-[520px]" data-name="WHITE GRADIENT">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-bl-[50px] rounded-br-[50px] size-full" src={imgWhiteGradient} />
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents font-['Poppins:Regular',sans-serif] leading-[30px] left-[calc(100%+921px)] not-italic top-[5108px]">
      <p className="absolute left-[calc(100%+978.5px)] text-[18px] text-black text-center top-[5108px] translate-x-[-50%] w-[115px]">Habit Builder</p>
      <p className="absolute left-[calc(100%+921px)] text-[14px] text-[rgba(0,0,0,0.5)] top-[5148px] w-[237px]">Get Your daily habit builder guide.</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents left-[calc(100%+1214px)] top-[5113px]">
      <div className="absolute bg-black h-[60px] left-[calc(100%+1214px)] rounded-[40px] top-[5113px] w-[159px]" />
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[60px] justify-center leading-[0] left-[calc(100%+1293.5px)] not-italic text-[16px] text-center text-white top-[5143px] translate-x-[-50%] translate-y-[-50%] w-[159px]">
        <p className="leading-[30px]">Create Now</p>
      </div>
    </div>
  );
}

function TextCtaButton2() {
  return (
    <div className="absolute contents left-[calc(100%+921px)] top-[5108px]" data-name="TEXT & CTA BUTTON">
      <Group11 />
      <Group12 />
    </div>
  );
}

function HabitBuilderCard() {
  return (
    <div className="absolute contents left-[calc(100%+887px)] top-[4573px]" data-name="HABIT BUILDER CARD">
      <div className="absolute bg-white h-[640px] left-[calc(100%+887px)] rounded-[50px] top-[4573px] w-[520px]" data-name="HABIT BUILDER IMAGE">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-[-1px] pointer-events-none rounded-[51px]" />
      </div>
      <div className="absolute h-[640px] left-[calc(100%+887px)] rounded-[50px] top-[4573px] w-[520px]" data-name="HABIT BUILDER IMAGE">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[50px]">
          <img alt="" className="absolute h-[162.18%] left-[-6.15%] max-w-none top-[-55.93%] w-[112.31%]" src={imgHabitBuilderImage} />
        </div>
      </div>
      <WhiteGradientGroup3 />
      <TextCtaButton2 />
    </div>
  );
}

function WhiteGradientGroup4() {
  return (
    <div className="absolute contents left-[calc(100%+1447px)] top-[4573px]" data-name="WHITE GRADIENT GROUP">
      <div className="absolute h-[570px] left-[calc(100%+1447px)] rounded-[50px] top-[4573px] w-[520px]" data-name="COUNSELLING IMAGE">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[50px]">
          <img alt="" className="absolute h-[142.28%] left-[0.01%] max-w-none top-[-36.97%] w-[104.03%]" src={imgCounsellingImage2} />
        </div>
      </div>
      <div className="absolute h-[500px] left-[calc(100%+1447px)] rounded-bl-[50px] rounded-br-[50px] top-[4643px] w-[520px]" data-name="WHITE GRADIENT">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-bl-[50px] rounded-br-[50px] size-full" src={imgWhiteGradient} />
      </div>
      <div className="absolute h-[500px] left-[calc(100%+1447px)] rounded-bl-[50px] rounded-br-[50px] top-[4643px] w-[520px]" data-name="WHITE GRADIENT">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-bl-[50px] rounded-br-[50px] size-full" src={imgWhiteGradient} />
      </div>
      <div className="absolute h-[500px] left-[calc(100%+1447px)] rounded-bl-[50px] rounded-br-[50px] top-[4643px] w-[520px]" data-name="WHITE GRADIENT">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-bl-[50px] rounded-br-[50px] size-full" src={imgWhiteGradient} />
      </div>
      <div className="absolute h-[500px] left-[calc(100%+1447px)] rounded-bl-[50px] rounded-br-[50px] top-[4643px] w-[520px]" data-name="WHITE GRADIENT">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-bl-[50px] rounded-br-[50px] size-full" src={imgWhiteGradient} />
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents font-['Poppins:Regular',sans-serif] leading-[30px] left-[calc(100%+1481px)] not-italic top-[5108px]">
      <p className="absolute left-[calc(100%+1534px)] text-[18px] text-black text-center top-[5108px] translate-x-[-50%] w-[106px]">Breathwork</p>
      <p className="absolute left-[calc(100%+1481px)] text-[14px] text-[rgba(0,0,0,0.5)] top-[5148px] w-[257px]">Start Your Breathwork Exercise Quick.</p>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents left-[calc(100%+1774px)] top-[5113px]">
      <div className="absolute bg-black h-[60px] left-[calc(100%+1774px)] rounded-[40px] top-[5113px] w-[159px]" />
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[60px] justify-center leading-[0] left-[calc(100%+1853.5px)] not-italic text-[16px] text-center text-white top-[5143px] translate-x-[-50%] translate-y-[-50%] w-[159px]">
        <p className="leading-[30px]">Start Now</p>
      </div>
    </div>
  );
}

function TextCtaButton3() {
  return (
    <div className="absolute contents left-[calc(100%+1481px)] top-[5108px]" data-name="TEXT & CTA BUTTON">
      <Group13 />
      <Group18 />
    </div>
  );
}

function BreathworkCard() {
  return (
    <div className="absolute contents left-[calc(100%+1447px)] top-[4573px]" data-name="BREATHWORK CARD">
      <div className="absolute bg-white h-[640px] left-[calc(100%+1447px)] rounded-[50px] top-[4573px] w-[520px]" data-name="BREATHWORK WHITE RECTANGLE">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-[-1px] pointer-events-none rounded-[51px]" />
      </div>
      <WhiteGradientGroup4 />
      <TextCtaButton3 />
    </div>
  );
}

function WhiteGradientGroup5() {
  return (
    <div className="absolute contents left-[calc(7.14%-15.86px)] top-[4653px]" data-name="WHITE GRADIENT GROUP">
      <div className="absolute h-[559.997px] left-[calc(7.14%-15.86px)] rounded-bl-[50px] rounded-br-[50px] top-[4653px] w-[520px]" data-name="WHITE GRADIENT">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-bl-[50px] rounded-br-[50px] size-full" src={imgWhiteGradient} />
      </div>
      <div className="absolute h-[559.997px] left-[calc(7.14%-15.86px)] rounded-bl-[50px] rounded-br-[50px] top-[4653px] w-[520px]" data-name="WHITE GRADIENT">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-bl-[50px] rounded-br-[50px] size-full" src={imgWhiteGradient} />
      </div>
      <div className="absolute h-[559.997px] left-[calc(7.14%-15.86px)] rounded-bl-[50px] rounded-br-[50px] top-[4653px] w-[520px]" data-name="WHITE GRADIENT">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-bl-[50px] rounded-br-[50px] size-full" src={imgWhiteGradient} />
      </div>
      <div className="absolute h-[559.997px] left-[calc(7.14%-15.86px)] rounded-bl-[50px] rounded-br-[50px] top-[4653px] w-[520px]" data-name="WHITE GRADIENT">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-bl-[50px] rounded-br-[50px] size-full" src={imgWhiteGradient} />
      </div>
    </div>
  );
}

function TherapistCard() {
  return (
    <div className="absolute contents left-[calc(7.14%-15.86px)] top-[4573px]" data-name="THERAPIST CARD">
      <div className="absolute bg-white h-[640px] left-[calc(7.14%-15.86px)] rounded-[50px] top-[4573px] w-[520px]" data-name="THERAPIST WHITE BACKGROUND">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-[-1px] pointer-events-none rounded-[51px]" />
      </div>
      <div className="absolute h-[639.996px] left-[calc(7.14%-15.86px)] rounded-[50px] top-[4573px] w-[520px]" data-name="THERAPIST IMAGE">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[50px] size-full" src={imgTherapistImage} />
      </div>
      <WhiteGradientGroup5 />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents font-['Poppins:Regular',sans-serif] leading-[30px] left-[calc(7.14%+18.14px)] not-italic top-[5118px]">
      <p className="absolute h-[27.042px] left-[calc(7.14%+60.64px)] text-[18px] text-black text-center top-[5118px] translate-x-[-50%] w-[85px]">Therapist</p>
      <p className="absolute h-[27.042px] left-[calc(7.14%+18.14px)] text-[14px] text-[rgba(0,0,0,0.5)] top-[5154.06px] w-[263px]">A Therapist Guides Your Inner Growth.</p>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents left-[calc(28.57%+2.57px)] top-[5122px]">
      <div className="absolute bg-black h-[54.08px] left-[calc(28.57%+2.57px)] rounded-[40px] top-[5122px] w-[159px]" />
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[54.085px] justify-center leading-[0] left-[calc(28.57%+82.07px)] not-italic text-[16px] text-center text-white top-[5149.9px] translate-x-[-50%] translate-y-[-50%] w-[159px]">
        <p className="leading-[30px]">Book Now</p>
      </div>
    </div>
  );
}

function TextCtaButton4() {
  return (
    <div className="absolute contents left-[calc(7.14%+18.14px)] top-[5118px]" data-name="TEXT & CTA BUTTON">
      <Group22 />
      <Group23 />
    </div>
  );
}

function TherapistCard1() {
  return (
    <div className="absolute contents left-[calc(7.14%-15.86px)] top-[4573px]" data-name="THERAPIST CARD">
      <TherapistCard />
      <TextCtaButton4 />
    </div>
  );
}

function MainCards() {
  const slides = [
    {
      title: "Therapist",
      subtitle: "A Therapist Guides Your Inner Growth.",
      cta: "Book Now",
      image: imgTherapistImage,
      gradient: imgWhiteGradient
    },
    {
      title: "Counsellors",
      subtitle: "Get Clear Mind Through Counselling.",
      cta: "Consult Now",
      image: imgCounsellingImage,
      gradient: imgWhiteGradient
    },
    {
      title: "Healers",
      subtitle: "Healing Crafted By Trusted Healers.",
      cta: "Heal Now",
      image: imgCounsellingImage1, // Note: Variable names from original code
      gradient: imgWhiteGradient
    },
    {
      title: "Guided Courses",
      subtitle: "Quick guided mental health courses.",
      cta: "Join Now",
      image: imgCoursesImage,
      gradient: imgWhiteGradient
    },
    {
      title: "Habit Builder",
      subtitle: "Get Your daily habit builder guide.",
      cta: "Create Now",
      image: imgHabitBuilderImage,
      gradient: imgWhiteGradient
    },
    {
      title: "Breathwork",
      subtitle: "Start Your Breathwork Exercise Quick.",
      cta: "Start Now",
      image: imgCounsellingImage2, // Note: Variable map
      gradient: imgWhiteGradient
    }
  ];

  return (
    <div className="absolute left-0 top-[4573px] w-full flex justify-center px-20 box-border z-10" data-name="MAIN CARDS">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full max-w-[1200px]"
      >
        <CarouselContent className="-ml-4">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="relative h-[640px] w-full max-w-[520px] rounded-[50px] bg-white overflow-hidden group hover:shadow-2xl transition-all duration-300">
                {/* Image */}
                <img 
                  src={slide.image.src} 
                  alt={slide.title}
                  className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-center text-center">
                  <h3 className="text-[24px] font-medium text-black mb-2 font-['Poppins',sans-serif]">
                    {slide.title}
                  </h3>
                  <p className="text-[14px] text-black/50 mb-6 font-['Poppins',sans-serif]">
                    {slide.subtitle}
                  </p>
                  
                  <div className="bg-black text-white rounded-[40px] px-8 py-3 text-[16px] font-['Poppins',sans-serif] cursor-pointer hover:bg-zinc-800 transition-colors">
                    {slide.cta}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-[-50px] bg-white/10 hover:bg-white/20 border-white/20 text-white" />
        <CarouselNext className="right-[-50px] bg-white/10 hover:bg-white/20 border-white/20 text-white" />
      </Carousel>
    </div>
  );
}

function SoulYatriOffers() {
  return (
    <div className="absolute contents left-[calc(7.14%-15.86px)] top-[4451px]" data-name="SOUL YATRI OFFERS">
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[47px] justify-center leading-[0] left-[calc(28.57%+308.57px)] not-italic text-[32px] text-black text-center top-[4474.5px] translate-x-[-50%] translate-y-[-50%] w-[466px]">
        <p className="leading-[normal]">What Soul Yatri Offers To You</p>
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents left-[calc(7.14%+69.14px)] not-italic text-center top-[6450px]">
      <p className="absolute font-['Poppins:Medium',sans-serif] h-[30px] leading-[35px] left-[calc(14.29%+78.79px)] text-[18px] text-black top-[6450px] translate-x-[-50%] w-[165px]">Get A Guided Plan</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[30px] left-[calc(7.14%+181.64px)] text-[14px] text-[rgba(0,0,0,0.5)] top-[6495px] translate-x-[-50%] w-[225px]">{`Use Self-help Plan & Tools Guided By Therapists & Healers.`}</p>
    </div>
  );
}

function GuidedPlanText() {
  return (
    <div className="absolute contents left-[calc(7.14%-15.86px)] top-[6403px]" data-name="GUIDED PLAN TEXT">
      <div className="absolute flex h-[200px] items-center justify-center left-[calc(7.14%-15.86px)] top-[6403px] w-[395px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="h-[200px] relative rounded-[50px] w-[395px]" style={{ backgroundImage: "linear-gradient(180.286deg, rgb(255, 255, 255) 49.999%, rgb(239, 239, 239) 99.511%)" }}>
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-[-1px] pointer-events-none rounded-[51px]" />
          </div>
        </div>
      </div>
      <Group15 />
    </div>
  );
}

function GuidedPlanCtaButton() {
  return (
    <div className="absolute contents left-[calc(7.14%+42.14px)] top-[6678px]" data-name="GUIDED PLAN CTA BUTTON">
      <div className="absolute flex h-[60px] items-center justify-center left-[calc(7.14%+42.14px)] top-[6678px] w-[280px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="border border-solid border-white h-[60px] rounded-[30px] shadow-[0px_10px_60px_0px_rgba(0,0,0,0.25)] w-[280px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 280 60\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-1.8523e-7 -6 14 -4.3211e-7 140 60)\\\'><stop stop-color=\\\'rgba(102,102,102,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(77,77,77,1)\\\' offset=\\\'0.25\\\'/><stop stop-color=\\\'rgba(51,51,51,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(26,26,26,1)\\\' offset=\\\'0.75\\\'/><stop stop-color=\\\'rgba(13,13,13,1)\\\' offset=\\\'0.875\\\'/><stop stop-color=\\\'rgba(6,6,6,1)\\\' offset=\\\'0.9375\\\'/><stop stop-color=\\\'rgba(0,0,0,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }} />
        </div>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[60px] justify-center leading-[0] left-[calc(7.14%+182.14px)] not-italic text-[14px] text-center text-white top-[6708px] translate-x-[-50%] translate-y-[-50%] w-[280px]">
        <p className="leading-[30px]">Get Now</p>
      </div>
    </div>
  );
}

function GuidedPlanCard() {
  return (
    <div className="absolute contents left-[calc(7.14%-15.86px)] top-[5768px]" data-name="GUIDED PLAN CARD">
      <div className="absolute h-[595px] left-[calc(7.14%-15.86px)] rounded-[50px] top-[5768px] w-[395px]" data-name="GUIDED PLAN IMAGE">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[50px] size-full" src={imgGuidedPlanImage.src} />
      </div>
      <GuidedPlanText />
      <GuidedPlanCtaButton />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents leading-[30px] left-[calc(35.71%+76.71px)] not-italic text-center top-[5815px]">
      <p className="absolute font-['Poppins:Medium',sans-serif] h-[30px] left-[calc(42.86%+102.86px)] text-[18px] text-black top-[5815px] translate-x-[-50%] w-[104px]">1:1 Sessions</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] left-[calc(35.71%+205.71px)] text-[14px] text-[rgba(0,0,0,0.5)] top-[5860px] translate-x-[-50%] w-[258px]">{`Live Video/Voice Sessions With Psychologists, Astrologers, & Healers.`}</p>
    </div>
  );
}

function SessionsText() {
  return (
    <div className="absolute contents left-[calc(35.71%+7.71px)] top-[5768px]" data-name="SESSIONS TEXT">
      <div className="absolute h-[200px] left-[calc(35.71%+7.71px)] rounded-[50px] top-[5768px] w-[395px]" style={{ backgroundImage: "linear-gradient(180.286deg, rgb(255, 255, 255) 49.999%, rgb(239, 239, 239) 99.511%)" }}>
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-[-1px] pointer-events-none rounded-[51px]" />
      </div>
      <Group14 />
    </div>
  );
}

function SessionsCtaButton() {
  return (
    <div className="absolute contents left-[calc(35.71%+65.71px)] top-[6678px]" data-name="SESSIONS CTA BUTTON">
      <div className="absolute flex h-[60px] items-center justify-center left-[calc(35.71%+65.71px)] top-[6678px] w-[280px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="border border-solid border-white h-[60px] rounded-[30px] shadow-[0px_10px_60px_0px_rgba(0,0,0,0.25)] w-[280px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 280 60\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-1.8523e-7 -6 14 -4.3211e-7 140 60)\\\'><stop stop-color=\\\'rgba(102,102,102,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(77,77,77,1)\\\' offset=\\\'0.25\\\'/><stop stop-color=\\\'rgba(51,51,51,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(26,26,26,1)\\\' offset=\\\'0.75\\\'/><stop stop-color=\\\'rgba(13,13,13,1)\\\' offset=\\\'0.875\\\'/><stop stop-color=\\\'rgba(6,6,6,1)\\\' offset=\\\'0.9375\\\'/><stop stop-color=\\\'rgba(0,0,0,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }} />
        </div>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[60px] justify-center leading-[0] left-[calc(35.71%+205.71px)] not-italic text-[16px] text-center text-white top-[6708px] translate-x-[-50%] translate-y-[-50%] w-[280px]">
        <p className="leading-[30px]">Book Now</p>
      </div>
    </div>
  );
}

function Component11SessionsCard() {
  return (
    <div className="absolute contents left-[calc(35.71%+7.71px)] top-[5768px]" data-name="1:1 SESSIONS CARD">
      <div className="absolute h-[595px] left-[calc(35.71%+7.71px)] rounded-[50px] top-[6008px] w-[395px]" data-name="SESSIONS IMAGE">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[50px] size-full" src={imgSessionsImage.src} />
      </div>
      <SessionsText />
      <SessionsCtaButton />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents left-[calc(71.43%+13.43px)] not-italic text-center top-[6450px]">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[30px] left-[calc(71.43%+125.93px)] text-[18px] text-black top-[6450px] translate-x-[-50%] w-[105px]">Micro Tools</p>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[calc(71.43%+125.93px)] text-[16px] text-[rgba(0,0,0,0.5)] top-[6525px] translate-x-[-50%] translate-y-[-50%] w-[225px]">
        <p className="leading-[30px]">{`CBT Worksheets, Grounding Exercises & Sleep Stories.`}</p>
      </div>
    </div>
  );
}

function MicroToolsText() {
  return (
    <div className="absolute contents left-[calc(64.29%+31.29px)] top-[6403px]" data-name="MICRO TOOLS TEXT">
      <div className="absolute flex h-[200px] items-center justify-center left-[calc(64.29%+31.29px)] top-[6403px] w-[395px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="h-[200px] relative rounded-[50px] w-[395px]" style={{ backgroundImage: "linear-gradient(180.286deg, rgb(255, 255, 255) 49.999%, rgb(239, 239, 239) 99.511%)" }}>
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-[-1px] pointer-events-none rounded-[51px]" />
          </div>
        </div>
      </div>
      <Group16 />
    </div>
  );
}

function MicroToolsCtaButton() {
  return (
    <div className="absolute contents left-[calc(64.29%+89.29px)] top-[6678px]" data-name="MICRO TOOLS CTA BUTTON">
      <div className="absolute flex h-[60px] items-center justify-center left-[calc(64.29%+89.29px)] top-[6678px] w-[280px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="border border-solid border-white h-[60px] rounded-[30px] shadow-[0px_10px_60px_0px_rgba(0,0,0,0.25)] w-[280px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 280 60\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-1.8523e-7 -6 14 -4.3211e-7 140 60)\\\'><stop stop-color=\\\'rgba(102,102,102,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(77,77,77,1)\\\' offset=\\\'0.25\\\'/><stop stop-color=\\\'rgba(51,51,51,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(26,26,26,1)\\\' offset=\\\'0.75\\\'/><stop stop-color=\\\'rgba(13,13,13,1)\\\' offset=\\\'0.875\\\'/><stop stop-color=\\\'rgba(6,6,6,1)\\\' offset=\\\'0.9375\\\'/><stop stop-color=\\\'rgba(0,0,0,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }} />
        </div>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[60px] justify-center leading-[0] left-[calc(64.29%+229.29px)] not-italic text-[16px] text-center text-white top-[6708px] translate-x-[-50%] translate-y-[-50%] w-[280px]">
        <p className="leading-[30px]">Start Now</p>
      </div>
    </div>
  );
}

function MicroToolsCard() {
  return (
    <div className="absolute contents left-[calc(64.29%+31.29px)] top-[5768px]" data-name="MICRO TOOLS CARD">
      <div className="absolute h-[595px] left-[calc(64.29%+31.29px)] rounded-[50px] top-[5768px] w-[395px]" data-name="Rounded rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[50px]">
          <img alt="" className="absolute h-[154.12%] left-[-0.3%] max-w-none top-[-54.12%] w-[154.79%]" src={imgRoundedRectangle.src} />
        </div>
      </div>
      <MicroToolsText />
      <MicroToolsCtaButton />
    </div>
  );
}

function SoulYatriWorks() {
  return (
    <div className="absolute contents left-[calc(7.14%-15.86px)] top-[5646px]" data-name="SOUL YATRI WORKS">
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[47px] justify-center leading-[0] left-[calc(28.57%+308.57px)] not-italic text-[32px] text-black text-center top-[5669.5px] translate-x-[-50%] translate-y-[-50%] w-[472px]">
        <p className="leading-[normal]">How Soul Yatri Works For You</p>
      </div>
      <GuidedPlanCard />
      <Component11SessionsCard />
      <MicroToolsCard />
    </div>
  );
}

function DirectionAarow2() {
  return (
    <div className="absolute left-[calc(42.86%+77.86px)] size-[50px] top-[8244px]" data-name="DIRECTION AAROW">
      <div className="absolute inset-[-4%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
          <g id="DIRECTION AAROW">
            <circle cx="27" cy="27" id="Ellipse 45" r="26" stroke="url(#paint0_linear_1_383)" strokeWidth="2" />
            <path d={svgPaths.p1ca4480} fill="url(#paint1_linear_1_383)" id="Arrow 6" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_383" x1="27" x2="27" y1="12" y2="52">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_383" x1="27" x2="26.5" y1="17" y2="39">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function CorporateWellenss() {
  return (
    <div className="absolute contents leading-[0] left-[calc(21.43%+3.43px)] not-italic text-center top-[8439px]" data-name="CORPORATE WELLENSS">
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[47px] justify-center left-[calc(35.71%+205.71px)] text-[32px] text-black top-[8462.5px] translate-x-[-50%] translate-y-[-50%] w-[318px]">
        <p className="leading-[normal]">Corporate Wellness</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center left-[calc(21.43%+410.93px)] text-[14px] text-[rgba(0,0,0,0.5)] top-[8546px] translate-x-[-50%] translate-y-[-50%] w-[815px]">
        <p className="leading-[30px]">Soul Yatri offers holistic corporate wellness programs that nurture employee well-being through mental health therapy, mindfulness workshops, and emotional resilience training—helping teams thrive with balance and purpose.</p>
      </div>
    </div>
  );
}

function Topic() {
  return (
    <div className="absolute contents leading-[0] left-[calc(35.71%+77.71px)] not-italic text-center text-white top-[9677px]" data-name="TOPIC">
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[30px] justify-center left-[calc(42.86%+102.36px)] text-[24px] top-[9692px] translate-x-[-50%] translate-y-[-50%] w-[67px]">
        <p className="leading-[35px]">Topic</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[27px] justify-center left-[calc(35.71%+205.71px)] text-[16px] top-[9750.5px] translate-x-[-50%] translate-y-[-50%] w-[256px]">
        <p className="leading-[28px]">Leadership Mindfulness Training</p>
      </div>
    </div>
  );
}

function Problem() {
  return (
    <div className="absolute contents left-[calc(7.14%+42.14px)] top-[10039px]" data-name="PROBLEM">
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[calc(21.43%+86.43px)] not-italic text-[24px] text-center text-white top-[10209px] translate-x-[-50%] translate-y-[-50%] w-[102px]">
        <p className="leading-[30px]">Problem</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[calc(14.29%+189.29px)] not-italic opacity-50 text-[14px] text-center text-white top-[10324px] translate-x-[-50%] translate-y-[-50%] w-[310px]">
        <p className="leading-[30px]">In fast-paced workplaces, leaders face constant pressure that often leads to stress, burnout, and reactive decisions, impacting both performance and team culture.</p>
      </div>
      <div className="absolute flex items-center justify-center left-[calc(7.14%+42.14px)] size-[500px] top-[10039px]" style={{ "--transform-inner-width": "2", "--transform-inner-height": "2" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="border border-[rgba(0,0,0,0)] border-solid rounded-[560px] size-[500px]" />
        </div>
      </div>
    </div>
  );
}

function Solution() {
  return (
    <div className="absolute contents left-[calc(50%+75px)] top-[10039px]" data-name="SOLUTION">
      <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] h-[30px] justify-center leading-[0] left-[calc(64.29%+118.79px)] not-italic text-[24px] text-center text-white top-[10164px] translate-x-[-50%] translate-y-[-50%] w-[103px]">
        <p className="leading-[35px]">Solution</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[209px] justify-center leading-[30px] left-[calc(57.14%+222.14px)] not-italic opacity-50 text-[14px] text-center text-white top-[10323.5px] translate-x-[-50%] translate-y-[-50%] w-[380px]">
        <p className="mb-0">Soul Yatri’s Leadership Mindfulness Training</p>
        <p className="mb-0">{`empowers leaders to develop clarity, emotional intelligence & calm confidence through a`}</p>
        <p className="mb-0">
          4-8 weeks program.
          <br aria-hidden="true" />
          {` Blending mindfulness practices & emotional mastery,`}
        </p>
        <p>each session includes guided exercises and real-world simulations for behavioral growth.</p>
      </div>
      <div className="absolute flex items-center justify-center left-[calc(50%+75px)] size-[500px] top-[10039px]" style={{ "--transform-inner-width": "2", "--transform-inner-height": "2" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] scale-y-[-100%]">
          <div className="border border-[rgba(0,0,0,0)] border-solid rounded-[560px] size-[500px]" />
        </div>
      </div>
    </div>
  );
}

function DemoRequestCta() {
  return (
    <div className="absolute contents left-[calc(7.14%+78.14px)] top-[10698px]" data-name="DEMO REQUEST CTA">
      <div className="absolute h-[60px] left-[calc(35.71%+65.71px)] rounded-[30px] top-[10698px] w-[280px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 280 60\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-8.411e-14 6 14 -7.9177e-12 140 -7.9177e-11)\\\'><stop stop-color=\\\'rgba(24,24,24,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(12,12,12,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(6,6,6,1)\\\' offset=\\\'0.75\\\'/><stop stop-color=\\\'rgba(0,0,0,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-[-1px] pointer-events-none rounded-[31px]" />
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[25px] justify-center leading-[0] left-[calc(7.14%+78.14px)] not-italic text-[14px] text-[rgba(255,255,255,0.5)] top-[10800.5px] translate-y-[-50%] w-[1078px]">
        <p className="leading-[25px]">Book a free 30-minute consultation with our mindfulness strategist to experience how Soul Yatri can elevate your leaders’ focus, empathy, and well-being.</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[60px] justify-center leading-[0] left-[calc(35.71%+205.71px)] not-italic text-[16px] text-center text-white top-[10728px] translate-x-[-50%] translate-y-[-50%] w-[280px]">
        <p className="leading-[35px]">Request a Demo</p>
      </div>
    </div>
  );
}

function DirectionAarow3() {
  return (
    <div className="absolute h-[145px] left-[calc(35.71%+60.71px)] top-[10513px] w-[290px]" data-name="DIRECTION AAROW">
      <div className="absolute inset-[-0.34%_-0.17%_-1.84%_-0.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 291 149">
          <g id="DIRECTION AAROW">
            <path d={svgPaths.p1865fcf0} fill="var(--stroke-0, white)" id="Vector 2" />
            <path d={svgPaths.p39f8dc00} fill="var(--stroke-0, white)" id="Vector 5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function DirectionAarow4() {
  return (
    <div className="absolute h-[100px] left-[calc(42.86%+2.86px)] top-[10015px] w-[200px]" data-name="DIRECTION AAROW">
      <div className="absolute inset-[-0.5%_-1.33%_-2.67%_-1.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 206 104">
          <g id="DIRECTION AAROW">
            <path d={svgPaths.p365a4080} fill="var(--stroke-0, white)" id="Vector 2" />
            <path d={svgPaths.p29677d00} fill="var(--stroke-0, white)" id="Vector 5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[15px] rounded-[50px] size-[50px] top-[15px]">
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[25.5px] not-italic text-[14px] text-center text-nowrap text-white top-[24.5px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[35px]">1</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[80px] left-[calc(14.29%+64.29px)] rounded-[100px] top-[11292px] w-[900px]">
      <Frame6 />
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[29px] justify-center leading-[0] left-[297.5px] not-italic text-[14px] text-center text-white top-[39.5px] translate-x-[-50%] translate-y-[-50%] w-[365px]">
        <p className="leading-[30px]">How can I stop overthinking and negative thoughts?</p>
      </div>
      <div className="absolute flex items-center justify-center left-[830px] size-0 top-[44px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="relative size-0">
            <div className="absolute inset-[-7.36px_-1px_-7.36px_-7.36px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 15">
                <path d={svgPaths.p9132b00} fill="var(--stroke-0, white)" id="Arrow 3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[15px] rounded-[50px] size-[50px] top-[15px]">
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[25.5px] not-italic text-[14px] text-center text-nowrap text-white top-[24.5px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[35px]">2</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[80px] left-[calc(14.29%+64.29px)] rounded-[100px] top-[11402px] w-[900px]">
      <div className="absolute flex items-center justify-center left-[830px] size-0 top-[44px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="relative size-0">
            <div className="absolute inset-[-7.36px_-1px_-7.36px_-7.36px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 15">
                <path d={svgPaths.p9132b00} fill="var(--stroke-0, white)" id="Arrow 3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame8 />
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[29px] justify-center leading-[0] left-[325px] not-italic text-[14px] text-center text-white top-[39.5px] translate-x-[-50%] translate-y-[-50%] w-[420px]">
        <p className="leading-[30px]">How do I deal with anxiety or panic attacks in public places?</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[14px] rounded-[50px] size-[50px] top-[15px]">
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[25.5px] not-italic text-[14px] text-center text-nowrap text-white top-[24.5px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[35px]">3</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[80px] left-[calc(14.29%+64.29px)] rounded-[100px] top-[11512px] w-[900px]">
      <div className="absolute flex items-center justify-center left-[830px] size-0 top-[44px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="relative size-0">
            <div className="absolute inset-[-7.36px_-1px_-7.36px_-7.36px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 15">
                <path d={svgPaths.p9132b00} fill="var(--stroke-0, white)" id="Arrow 3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame7 />
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[29px] justify-center leading-[0] left-[331px] not-italic text-[14px] text-center text-white top-[39.5px] translate-x-[-50%] translate-y-[-50%] w-[432px]">
        <p className="leading-[30px]">I feel mentally exhausted and unmotivated. What should I do?</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[15px] rounded-[50px] size-[50px] top-[15px]">
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[25px] not-italic text-[14px] text-center text-nowrap text-white top-[24.5px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[35px]">4</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[80px] left-[calc(14.29%+64.29px)] rounded-[100px] top-[11622px] w-[900px]">
      <div className="absolute flex items-center justify-center left-[830px] size-0 top-[44px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="relative size-0">
            <div className="absolute inset-[-7.36px_-1px_-7.36px_-7.36px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 15">
                <path d={svgPaths.p9132b00} fill="var(--stroke-0, white)" id="Arrow 3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame9 />
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[29px] justify-center leading-[0] left-[341px] not-italic text-[14px] text-center text-white top-[39.5px] translate-x-[-50%] translate-y-[-50%] w-[452px]">
        <p className="leading-[30px]">How do I know if what I’m feeling is stress, anxiety, or depression?</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-[15px] rounded-[50px] size-[50px] top-[15px]">
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[25.5px] not-italic text-[14px] text-center text-nowrap text-white top-[24.5px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[35px]">5</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[80px] left-[calc(14.29%+64.29px)] rounded-[100px] top-[11732px] w-[900px]">
      <div className="absolute flex items-center justify-center left-[830px] size-0 top-[44px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="relative size-0">
            <div className="absolute inset-[-7.36px_-1px_-7.36px_-7.36px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 15">
                <path d={svgPaths.p9132b00} fill="var(--stroke-0, white)" id="Arrow 3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame10 />
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[29px] justify-center leading-[0] left-[400.5px] not-italic text-[14px] text-center text-white top-[39.5px] translate-x-[-50%] translate-y-[-50%] w-[571px]">
        <p className="leading-[30px]">What should I do if I don’t feel comfortable talking to anyone about my problems?</p>
      </div>
    </div>
  );
}

function Questions() {
  return (
    <div className="absolute contents left-[calc(14.29%+64.29px)] top-[11170px]" data-name="QUESTIONS">
      <Frame5 />
      <Frame4 />
      <Frame3 />
      <Frame2 />
      <Frame1 />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[47px] justify-center leading-[0] left-[calc(28.57%+308.57px)] not-italic text-[32px] text-center text-white top-[11193.5px] translate-x-[-50%] translate-y-[-50%] w-[482px]">
        <p className="leading-[35px]">Get Your All Question Answers</p>
      </div>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents left-[calc(7.14%-17.86px)] top-[12319px]">
      <div className="absolute bg-[#0e0e0e] h-[60px] left-[calc(7.14%-17.86px)] rounded-[50px] top-[12319px] w-[391px]" />
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[60px] justify-center leading-[0] left-[calc(7.14%+13.14px)] not-italic opacity-50 text-[14px] text-white top-[12349px] translate-y-[-50%] w-[360px]">
        <p className="leading-[30px]">Enter Email Address</p>
      </div>
      <div className="absolute bg-white h-[60px] left-[calc(35.71%+1.71px)] rounded-[50px] top-[12319px] w-[280px]" />
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[60px] justify-center leading-[0] left-[calc(35.71%+141.71px)] not-italic text-[14px] text-black text-center top-[12349px] translate-x-[-50%] translate-y-[-50%] w-[280px]">
        <p className="leading-[30px]">Book A Therapist</p>
      </div>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents font-['Poppins:Medium',sans-serif] leading-[0] left-[calc(78.57%+63.57px)] not-italic text-[16px] text-center text-white top-[12037px]">
      <div className="absolute flex flex-col h-[28.582px] justify-center left-[calc(85.71%+81.21px)] top-[12051.29px] translate-x-[-50%] translate-y-[-50%] w-[75px]">
        <p className="leading-[30px]">Overview</p>
      </div>
      <div className="absolute flex flex-col h-[28.582px] justify-center left-[calc(85.71%+86.21px)] top-[12103.53px] translate-x-[-50%] translate-y-[-50%] w-[65px]">
        <p className="leading-[30px]">Careers</p>
      </div>
      <div className="absolute flex flex-col h-[28.582px] justify-center left-[calc(85.71%+100.21px)] top-[12155.76px] translate-x-[-50%] translate-y-[-50%] w-[37px]">
        <p className="leading-[35px]">Blog</p>
      </div>
      <div className="absolute flex flex-col h-[28.582px] justify-center left-[calc(85.71%+103.71px)] top-[12208px] translate-x-[-50%] translate-y-[-50%] w-[30px]">
        <p className="leading-[35px]">B2B</p>
      </div>
      <div className="absolute flex flex-col h-[28.582px] justify-center left-[calc(85.71%+65.21px)] top-[12312.47px] translate-x-[-50%] translate-y-[-50%] w-[111px]">
        <p className="leading-[30px]">Privacy Policy</p>
      </div>
      <div className="absolute flex flex-col h-[28.582px] justify-center left-[calc(78.57%+143.07px)] top-[12260.24px] translate-x-[-50%] translate-y-[-50%] w-[159px]">
        <p className="leading-[30px]">{`Terms & Conditions`}</p>
      </div>
      <div className="absolute flex flex-col h-[28.582px] justify-center left-[calc(85.71%+85.71px)] top-[12364.71px] translate-x-[-50%] translate-y-[-50%] w-[66px]">
        <p className="leading-[30px]">Contact</p>
      </div>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents left-[calc(21.43%+51.43px)] top-[12040px]">
      <div className="absolute flex h-[19px] items-center justify-center left-[calc(28.57%+15.57px)] top-[12048px] w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-0 relative w-[19px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 1">
                <line id="Line 11" stroke="var(--stroke-0, white)" x2="19" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[calc(21.43%+69.93px)] not-italic text-[14px] text-center text-nowrap text-white top-[12057.5px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[35px]">Login</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[calc(28.57%+70.07px)] not-italic text-[14px] text-center text-nowrap text-white top-[12057.5px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[35px]">Signup</p>
      </div>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents left-[calc(7.14%-17.86px)] top-[12037px]">
      <div className="absolute h-[42px] left-[calc(7.14%-17.86px)] top-[12037px] w-[200px]" data-name="SOUL YATRI LOGO 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSoulYatriLogo2.src} />
      </div>
      <Group17 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute contents left-[calc(7.14%-17.86px)] top-[12037px]" data-name="FOOTER 1">
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[90px] justify-center leading-[0] left-[calc(7.14%-17.86px)] not-italic text-[14px] text-justify text-white top-[12199px] translate-y-[-50%] w-[699px]">
        <p className="leading-[30px]">Soul Yatri blends modern psychology with cultural wisdom to offer compassionate, science-backed and culturally-sensitive mental well-being. We help you understand what’s happening inside and give you practical steps—whether you prefer a therapist, a healer, or both.</p>
      </div>
      <Group21 />
      <Group19 />
      <Group20 />
    </div>
  );
}

function Footer1() {
  return (
    <div className="absolute contents left-[calc(7.14%-17.86px)] top-[12529px]" data-name="FOOTER 2">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[35px] left-[calc(7.14%+139.64px)] not-italic text-[14px] text-center text-nowrap text-white top-[12529px] translate-x-[-50%]">© 2025 Soul Yatri Pvt. Ltd. | All Rights Reserved</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[35px] left-[calc(64.29%+161.29px)] not-italic text-[14px] text-center text-nowrap text-white top-[12529px] translate-x-[-50%]">Follow Our Journey:</p>
      <div className="absolute left-[calc(78.57%+53.57px)] size-[20px] top-[12537px]" data-name="instagram 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgInstagram1.src} />
      </div>
      <div className="absolute left-[calc(85.71%+0.71px)] size-[20px] top-[12537px]" data-name="facebook 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFacebook1.src} />
      </div>
      <div className="absolute left-[calc(85.71%+50.71px)] size-[20px] top-[12537px]" data-name="linkedin 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLinkedin1.src} />
      </div>
      <div className="absolute left-[calc(85.71%+100.71px)] size-[20px] top-[12537px]" data-name="twitter (1) 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTwitter11.src} />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[21px] left-[79px] top-[20px] w-[743px]">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-0 not-italic text-[14px] text-nowrap text-white top-0">Home</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[122px] not-italic opacity-50 text-[14px] text-nowrap text-white top-0">About Soul Yatri</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[313px] not-italic opacity-50 text-[14px] text-nowrap text-white top-0">Blogs</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[431px] not-italic opacity-50 text-[14px] text-nowrap text-white top-0">For Business</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[597px] not-italic opacity-50 text-[#fff9f9] text-[14px] text-nowrap top-0">Login</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[694px] not-italic opacity-50 text-[#fff9f9] text-[14px] text-nowrap top-0">Signup</p>
      <div className="absolute flex h-[20px] items-center justify-center left-[664px] top-px w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[20px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 1">
                <line id="Line 7" opacity="0.5" stroke="var(--stroke-0, white)" x2="20" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderNav() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[60px] left-[calc(14.29%+64.29px)] rounded-[30px] top-[120px] w-[900px]" data-name="HEADER NAV">
      <Frame />
    </div>
  );
}

function AiChatHeadText() {
  return (
    <div className="absolute contents leading-[0] left-[calc(28.57%+16.57px)] not-italic text-center top-[6888px]" data-name="AI CHAT HEAD TEXT">
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[47px] justify-center left-[calc(35.71%+205.21px)] text-[32px] text-black top-[6911.5px] translate-x-[-50%] translate-y-[-50%] w-[399px]">
        <p className="leading-[normal]">Your Personal AI Soul Bot</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[30px] justify-center left-[calc(28.57%+308.57px)] text-[14px] text-[rgba(0,0,0,0.5)] top-[6980px] translate-x-[-50%] translate-y-[-50%] w-[584px]">
        <p className="leading-[30px]">{`Talk To Your AI Soul Bot. Share Your Feelings & Emotions You Want. Share Your Mood.`}</p>
      </div>
    </div>
  );
}

function HeadText() {
  return (
    <div className="absolute contents leading-[0] left-[489px] not-italic text-center text-white top-[157px]" data-name="HEAD TEXT">
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[62px] justify-center left-[719.5px] text-[42px] top-[188px] translate-x-[-50%] translate-y-[-50%] w-[461px]">
        <p className="leading-[normal]">Welcome Bhai!</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[27px] justify-center left-[720px] opacity-50 text-[18px] top-[262.5px] translate-x-[-50%] translate-y-[-50%] w-[454px]">
        <p className="leading-[normal]">Main hoon yahan — thoda batao, kya ho raha hai?</p>
      </div>
    </div>
  );
}

function BreateTab() {
  return (
    <div className="absolute contents left-[190px] top-[351.97px]" data-name="BREATE TAB">
      <div className="absolute border border-solid border-white h-[77.697px] left-[190px] rounded-[40px] top-[351.97px] w-[279.877px]" />
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[77.697px] justify-center leading-[0] left-[366.92px] not-italic text-[16px] text-center text-white top-[390.82px] translate-x-[-50%] translate-y-[-50%] w-[205.91px]">
        <p className="leading-[normal]">Help Me Breathe</p>
      </div>
      <div className="absolute left-[199.46px] size-[64.043px] top-[358.57px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 65">
          <circle cx="32.0217" cy="32.0217" fill="var(--fill-0, white)" id="Ellipse 89" r="32.0217" />
        </svg>
      </div>
      <div className="absolute h-[39.231px] left-[217.19px] top-[371.12px] w-[28.705px]" data-name="BREATHE">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[111.06%] left-[-26.4%] max-w-none top-[-5.54%] w-[152.35%]" src={imgBreathe} />
        </div>
      </div>
    </div>
  );
}

function AnxiousTab() {
  return (
    <div className="absolute contents left-[509.86px] top-[351.97px]" data-name="ANXIOUS TAB">
      <div className="absolute border border-solid border-white h-[77.697px] left-[509.86px] rounded-[40px] top-[351.97px] w-[309.864px]" />
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[77.697px] justify-center leading-[0] left-[701.28px] not-italic text-[16px] text-center text-white top-[390.82px] translate-x-[-50%] translate-y-[-50%] w-[236.896px]">
        <p className="leading-[normal]">I am Feeling Anxious</p>
      </div>
      <div className="absolute left-[518.32px] size-[64.043px] top-[358.57px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 65">
          <circle cx="32.0217" cy="32.0217" fill="var(--fill-0, white)" id="Ellipse 89" r="32.0217" />
        </svg>
      </div>
      <div className="absolute flex h-[39.563px] items-center justify-center left-[534.22px] top-[371.11px] w-[33.371px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[39.563px] relative rounded-bl-[20px] rounded-br-[15px] w-[33.371px]" data-name="ANXIOUS">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[20px] rounded-br-[15px]">
              <img alt="" className="absolute h-[110.91%] left-[-14.57%] max-w-none top-[-10.91%] w-[131.49%]" src={imgAnxious.src} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SadTab() {
  return (
    <div className="absolute contents left-[859.72px] top-[351px]" data-name="SAD TAB">
      <div className="absolute flex h-[80px] items-center justify-center left-[859.72px] top-[351px] w-[390.28px]" style={{ "--transform-inner-width": "2", "--transform-inner-height": "2" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.339deg]">
          <div className="border border-solid border-white h-[77.697px] rounded-[40px] w-[389.828px]" />
        </div>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[77.697px] justify-center leading-[0] left-[1091.83px] not-italic text-[16px] text-center text-white top-[391.97px] translate-x-[-50%] translate-y-[-50%] w-[315.861px]">
        <p className="leading-[normal]">Mein Udas Hu Bat Karo Mujhse</p>
      </div>
      <div className="absolute left-[869.39px] size-[64.043px] top-[358.49px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 65">
          <circle cx="32.0217" cy="32.0217" fill="var(--fill-0, white)" id="Ellipse 89" r="32.0217" />
        </svg>
      </div>
      <div className="absolute h-[39.119px] left-[886.11px] rounded-bl-[15px] rounded-br-[15px] top-[371.29px] w-[27.795px]" data-name="vecteezy_iconic-art-deco-sad-young-man-looking-down-with_60415119 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[15px] rounded-br-[15px]">
          <img alt="" className="absolute h-[105.26%] left-[-22.22%] max-w-none top-[-5.26%] w-[148.15%]" src={imgVecteezyIconicArtDecoSadYoungManLookingDownWith604151191} />
        </div>
      </div>
    </div>
  );
}

function MainCtas() {
  return (
    <div className="absolute contents left-[190px] top-[351px]" data-name="MAIN CTAS">
      <BreateTab />
      <AnxiousTab />
      <SadTab />
    </div>
  );
}

function VoiceChatCta() {
  return (
    <div className="absolute contents left-[1092px] top-[737px]" data-name="VOICE CHAT CTA">
      <div className="absolute border border-solid border-white h-[60px] left-[1092px] opacity-50 rounded-[40px] top-[737px] w-[204px]" style={{ backgroundImage: "linear-gradient(74.488deg, rgb(0, 0, 0) 0%, rgb(102, 102, 102) 100%)" }} />
      <div className="absolute bg-white left-[1097px] rounded-[50px] size-[50px] top-[742px]" />
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[60px] justify-center leading-[0] left-[1221.5px] not-italic text-[16px] text-center text-white top-[767px] translate-x-[-50%] translate-y-[-50%] w-[149px]">
        <p className="leading-[normal]">Voice Chat</p>
      </div>
      <div className="absolute left-[1112px] size-[20px] top-[757px]" data-name="mic 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMic2} />
        </div>
      </div>
    </div>
  );
}

function AiChatting() {
  return (
    <div className="absolute contents left-[85px] top-[667px]" data-name="AI CHATTING">
      <div className="absolute bg-[#0e0e0e] h-[200px] left-[85px] rounded-[50px] top-[667px] w-[1270px]">
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-[-1px] pointer-events-none rounded-[51px]" />
      </div>
      <VoiceChatCta />
      <div className="absolute flex h-[93px] items-center justify-center left-[152px] top-[720px] w-[80px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[93px] relative w-[80px]" data-name="ROBOT">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[114.16%] left-[-16.8%] max-w-none top-[-7.53%] w-[133.33%]" src={imgRobot} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[26px] justify-center leading-[0] left-[539px] not-italic opacity-50 text-[16px] text-center text-white top-[767px] translate-x-[-50%] translate-y-[-50%] w-[534px]">
        <p className="leading-[normal]">{`Mein tumhara dost hu. Mujhse share karo jo tumhare dil mein haii... `}</p>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="absolute contents font-['Poppins:Regular',sans-serif] leading-[0] left-[85px] not-italic text-[16px] text-center text-white top-[611px]" data-name="OPTIONS">
      <div className="absolute flex flex-col h-[26px] justify-center left-[128.5px] top-[624px] translate-x-[-50%] translate-y-[-50%] w-[87px]">
        <p className="leading-[normal]">New Chats</p>
      </div>
      <div className="absolute flex flex-col h-[26px] justify-center left-[296.5px] opacity-50 top-[624px] translate-x-[-50%] translate-y-[-50%] w-[99px]">
        <p className="leading-[normal]">Chat History</p>
      </div>
      <div className="absolute flex flex-col h-[26px] justify-center left-[439px] opacity-50 top-[624px] translate-x-[-50%] translate-y-[-50%] w-[36px]">
        <p className="leading-[normal]">Help</p>
      </div>
    </div>
  );
}

function HeaderNav1() {
  return (
    <div className="absolute contents font-['Poppins:Regular',sans-serif] leading-[0] left-[510px] not-italic text-[16px] text-center text-white top-[50px]" data-name="HEADER NAV">
      <div className="absolute flex flex-col h-[23px] justify-center left-[901px] opacity-50 top-[61.5px] translate-x-[-50%] translate-y-[-50%] w-[56px]">
        <p className="leading-[normal]">Setting</p>
      </div>
      <div className="absolute flex flex-col h-[23px] justify-center left-[773.5px] opacity-50 top-[61.5px] translate-x-[-50%] translate-y-[-50%] w-[49px]">
        <p className="leading-[normal]">Profile</p>
      </div>
      <div className="absolute flex flex-col h-[23px] justify-center left-[654px] top-[61.5px] translate-x-[-50%] translate-y-[-50%] w-[40px]">
        <p className="leading-[normal]">Chat</p>
      </div>
      <div className="absolute flex flex-col h-[23px] justify-center left-[534.5px] opacity-50 top-[61.5px] translate-x-[-50%] translate-y-[-50%] w-[49px]">
        <p className="leading-[normal]">Home</p>
      </div>
    </div>
  );
}

function AiSoulBot() {
  return (
    <div className="absolute bg-black h-[1024px] left-0 overflow-clip top-[7070px] w-[1440px]" data-name="AI SOUL BOT">
      <div className="absolute left-[470px] size-[500px] top-[-250px]">
        <div className="absolute inset-[-120%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1700 1700">
            <g filter="url(#filter0_f_1_377)" id="Ellipse 83">
              <circle cx="850" cy="850" fill="var(--fill-0, #303030)" r="250" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1700" id="filter0_f_1_377" width="1700" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_377" stdDeviation="300" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <HeadText />
      <MainCtas />
      <AiChatting />
      <Options />
      <HeaderNav1 />
    </div>
  );
}

function AiSoulBot1() {
  return (
    <div className="absolute contents left-0 top-[6888px]" data-name="AI SOUL BOT">
      <AiChatHeadText />
      <AiSoulBot />
    </div>
  );
}

export default function LandingPageUi() {
  return (
    <div className="bg-white relative size-full" data-name="LANDING PAGE UI">
      <div style={{ position: 'relative', top: '-1350px' }}>
      <div className="absolute bg-black h-[2901px] left-0 top-[9539px] w-[1440px]" />
      <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[450px] left-[calc(14.29%+67.29px)] rounded-bl-[885px] rounded-br-[885px] top-[9539px] w-[893px]" />
      <div className="absolute h-[888px] left-[calc(14.29%+8.29px)] top-[8651px] w-[1000px]" data-name="CORPORATE IMAGE">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-full object-cover" src={imgCorporateImage.src} />
        </div>
      </div>
      </div>
      <div className="absolute bg-black h-[4100px] left-[-380px] rounded-bl-[2000px] rounded-br-[2000px] top-0 w-[2200px]" data-name="BLACK LANDING BACKDROP" />
      <div className="absolute left-[calc(28.57%+58.57px)] size-[500px] top-[-250px]">
        <div className="absolute inset-[-120%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1700 1700">
            <g filter="url(#filter0_f_1_377)" id="Ellipse 83">
              <circle cx="850" cy="850" fill="var(--fill-0, #303030)" r="250" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1700" id="filter0_f_1_377" width="1700" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_377" stdDeviation="300" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <AnimatedLogo />
      <HeroImage />
      <LandingCtaButton />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[191px] justify-center leading-[normal] left-[calc(7.14%-17.86px)] not-italic text-[64px] text-white top-[511.5px] translate-y-[-50%] w-[427px]">
        <BlurText
          text="Your Journey"
          direction="top"
          delay={200}
          className="inline-block will-change-[transform,filter,opacity]"
          animateBy="words"
        />
        <BlurText
          text="Within"
          direction="top"
          delay={200}
          className="inline-block will-change-[transform,filter,opacity]"
          animateBy="words"
        />

      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[191px] justify-center leading-[0] left-[calc(71.43%+325.43px)] not-italic opacity-50 text-[16px] text-right text-white top-[511.5px] translate-x-[-100%] translate-y-[-50%] w-[311px]">
        <p className="leading-[30px]">{`A Tech-enabled Mental wellbeing platform blending modern Psychology, Coaching & Traditional Indian wisdom.`}</p>
      </div>
      <WellnessLandingPoint />
      <div style={{ position: 'relative', top: '-1350px' }}>
      <div className="absolute left-[calc(57.14%+72.14px)] size-[268px] top-[7899px]">
        <div className="absolute inset-[-37.31%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 468 468">
            <g filter="url(#filter0_f_1_373)" id="Ellipse 71">
              <circle cx="234" cy="234" fill="var(--fill-0, white)" r="134" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="468" id="filter0_f_1_373" width="468" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_373" stdDeviation="50" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      </div>
      <FactsOfSoulYatri />
      <DirectionAarow />
      <MainCards />

      <div className="absolute bg-white blur-2xl filter h-[912px] left-[calc(92.86%+12.86px)] top-[4437px] w-[250px]" />
      <DirectionAarow1 />
      <SoulYatriOffers />
      <SoulYatriWorks />
      <div style={{ position: 'relative', top: '-1350px' }}>
      <DirectionAarow2 />
      <CorporateWellenss />
      <Topic />
      <Problem />
      <Solution />
      <DemoRequestCta />
      <DirectionAarow3 />
      <DirectionAarow4 />
      <div className="absolute bg-[#1E1E1E] left-0 top-[10963px] w-full h-[1700px]" />
      <Questions />
      <Footer />
      <div className="absolute h-0 left-[calc(7.14%-17.86px)] top-[11962px] w-[1270.002px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1270 1">
            <line id="Line 9" opacity="0.5" stroke="var(--stroke-0, white)" x2="1270" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Footer1 />
      </div>
      <AnimatedHeaderNav />
    </div>
  );
}