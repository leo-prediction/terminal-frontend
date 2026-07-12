"use client";

import React, { useState, useEffect, useRef } from "react";

// Inline SVG Icons to avoid external icon dependencies
const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M9 8H7v3h2v9h3v-9h2.72l.42-3H12V6.65c0-.82.16-1.12.83-1.12H14V2.05c-.3-.05-1-.05-1.85-.05C10.22 2 9 3.08 9 5.37V8z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.507 9.388.507 9.388.507s7.517 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const PinterestIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.41 7.61 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.958 1.406-5.958s-.359-.72-.359-1.781c0-1.663.967-2.906 2.17-2.906 1.023 0 1.517.769 1.517 1.692 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.868-2.063-4.869-5.007-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.166-1.495-.69-2.433-2.878-2.433-4.617 0-3.772 2.737-7.237 7.907-7.237 4.154 0 7.385 2.96 7.385 6.917 0 4.13-2.607 7.452-6.227 7.452-1.215 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.62 0 11.988-5.367 11.988-11.987C24.005 5.367 18.636 0 12.017 0z" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const CartIcon = () => (
  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-4 h-4 mr-1 text-yellow-400 inline-block fill-current" viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const MapMarkerIcon = () => (
  <svg className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const EnvelopeIcon = () => (
  <svg className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

// Type Definitions
interface Team {
  rank: number;
  name: string;
  logo: string;
  points: number;
  wins: number;
  losses: number;
}

interface NewsArticle {
  id: number;
  title: string;
  date: string;
  snippet: string;
  image: string;
}

export default function Home() {
  // --- States ---
  const [activeSlide, setActiveSlide] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [countdown, setCountdown] = useState({ days: 10, hours: 5, minutes: 25, seconds: 10 });
  const [searchQuery, setSearchQuery] = useState("");
  const [pointsTeams, setPointsTeams] = useState<Team[]>([
    { rank: 1, name: "Liverpool", logo: "/images/img-01_004.png", points: 20, wins: 12, losses: 10 },
    { rank: 2, name: "Chelsea", logo: "/images/img-02_002.png", points: 20, wins: 12, losses: 10 },
    { rank: 3, name: "Norwich City", logo: "/images/img-03_003.png", points: 20, wins: 15, losses: 20 },
    { rank: 4, name: "West Brom", logo: "/images/img-04_002.png", points: 60, wins: 10, losses: 60 },
    { rank: 5, name: "Sunderland", logo: "/images/img-05.png", points: 30, wins: 6, losses: 30 },
  ]);
  const [sortKey, setSortKey] = useState<"rank" | "wins" | "losses" | "points">("rank");
  const [sortAsc, setSortAsc] = useState(true);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- Refs ---
  const typewriterIndex = useRef(0);
  const phraseIndex = useRef(0);
  const isDeleting = useRef(false);

  // --- Constants ---
  const slides = [
    {
      title: "If you Don’t Practice",
      subTitle: "You Don’t Deserve to win!",
      desc: "If you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay..",
      bgClass: "bg-gradient-to-r from-blue-900 via-blue-950 to-zinc-900",
      btnText: "Read More",
    },
    {
      title: "Champions train,",
      subTitle: "Losers complain!",
      desc: "You can make a case for several potential winners of the expanded European Championships. See our analysts predictions inside.",
      bgClass: "bg-gradient-to-r from-sky-900 via-indigo-950 to-zinc-900",
      btnText: "Learn More",
    },
    {
      title: "Victory belongs to",
      subTitle: "the most persevering!",
      desc: "Get all the exclusive videos, stats, player reports and transfer summaries straight to your dashboard daily.",
      bgClass: "bg-gradient-to-r from-slate-900 via-zinc-950 to-blue-900",
      btnText: "Get Started",
    },
  ];

  const headlinePhrases = [
    "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "It is a long established fact that a reader will be distracted by the readable content.",
  ];

  const newsArticles: NewsArticle[] = [
    {
      id: 1,
      title: "At vero eos et accusamus et iusto odio dignissimos ducimus",
      date: "20 March 2026",
      snippet: "Just hours after that his grandma had died, Angel Di Maria imagined how she might react if he didn't play. He delivered one of the most stunning performances of the tournament.",
      image: "/images/img-01_002.jpg",
    },
    {
      id: 2,
      title: "Temporibus autem quibusdam et aut officiis debitis aut rerum",
      date: "18 March 2026",
      snippet: "With the champions defending their title, key tactics were revealed during the press meet. The training ground footage shows promising signs of new setups.",
      image: "/images/img-02_003.jpg",
    },
    {
      id: 3,
      title: "Itaque earum rerum hic tenetur a sapiente delectus reiciendis",
      date: "15 March 2026",
      snippet: "Injury worries ease for the local favorites as their top striker resumes training. Fans gathered to support the squad in high spirits ahead of the derby match.",
      image: "/images/img-03_003.jpg",
    },
  ];

  // --- Effects ---
  // Carousel Interval
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Typewriter Effect
  useEffect(() => {
    let speed = 100;
    if (isDeleting.current) speed /= 2;

    const handleType = () => {
      const currentPhrase = headlinePhrases[phraseIndex.current];
      if (!isDeleting.current) {
        setTypedText(currentPhrase.substring(0, typewriterIndex.current + 1));
        typewriterIndex.current++;

        if (typewriterIndex.current === currentPhrase.length) {
          // Pause at end
          setTimeout(() => {
            isDeleting.current = true;
          }, 2000);
        }
      } else {
        setTypedText(currentPhrase.substring(0, typewriterIndex.current - 1));
        typewriterIndex.current--;

        if (typewriterIndex.current === 0) {
          isDeleting.current = false;
          phraseIndex.current = (phraseIndex.current + 1) % headlinePhrases.length;
        }
      }
    };

    const typeTimeout = setTimeout(handleType, speed);
    return () => clearTimeout(typeTimeout);
  }, [typedText]);

  // Live Countdown Timer logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          // Reset countdown for dynamic simulation
          return { days: 10, hours: 5, minutes: 25, seconds: 10 };
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Window scroll event for Scroll-To-Top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Handlers ---
  const handleSort = (key: "rank" | "wins" | "losses" | "points") => {
    const isAsc = sortKey === key ? !sortAsc : true;
    setSortKey(key);
    setSortAsc(isAsc);

    const sorted = [...pointsTeams].sort((a, b) => {
      if (a[key] < b[key]) return isAsc ? -1 : 1;
      if (a[key] > b[key]) return isAsc ? 1 : -1;
      return 0;
    });
    setPointsTeams(sorted);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Filter news articles based on live search
  const filteredArticles = newsArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.snippet.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#f2f3f5] text-gray-700 min-h-screen flex flex-col font-sans selection:bg-red-500 selection:text-white relative">
      {/* 1. TOP HEADER SECTION */}
      <section className="bg-[#1a1a1a] text-xs text-gray-400 py-2.5 border-b border-zinc-800">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-red-500 transition-colors" title="Facebook">
              <FacebookIcon />
            </a>
            <a href="#" className="hover:text-red-500 transition-colors" title="Twitter">
              <TwitterIcon />
            </a>
            <a href="#" className="hover:text-red-500 transition-colors" title="YouTube">
              <YoutubeIcon />
            </a>
            <a href="#" className="hover:text-red-500 transition-colors" title="Pinterest">
              <PinterestIcon />
            </a>
          </div>

          {/* User Links */}
          <div className="flex items-center space-x-6">
            <a href="#" className="flex items-center hover:text-red-500 transition-colors font-medium">
              <UserIcon /> Login
            </a>
            <a href="#" className="flex items-center hover:text-red-500 transition-colors font-medium border-l border-zinc-700 pl-6">
              <CartIcon /> Register
            </a>
          </div>
        </div>
      </section>

      {/* 2. MAIN LOGO & BRAND SECTION */}
      <header className="bg-zinc-900 text-white sticky top-0 z-50 shadow-md backdrop-blur-md bg-opacity-95">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="block transition-transform duration-200 hover:scale-105">
              <img src="/images/logo.png" alt="Sports Master Logo" className="h-12 w-auto object-contain" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold uppercase tracking-wider">
            <a href="#" className="text-red-500 hover:text-red-400 transition-colors">Home</a>
            <a href="#" className="hover:text-red-400 transition-colors">About</a>
            <a href="#" className="hover:text-red-400 transition-colors">Team</a>
            <a href="#" className="hover:text-red-400 transition-colors">News</a>

            {/* Mega Dropdown Hover Match */}
            <div className="group relative py-2">
              <button className="flex items-center hover:text-red-400 transition-colors uppercase tracking-wider focus:outline-none">
                Match
                <svg className="w-4 h-4 ml-1 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </button>
              
              {/* Mega Dropdown Menu Content */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[600px] bg-zinc-950 border border-zinc-800 rounded-lg shadow-xl py-6 px-6 grid grid-cols-3 gap-6 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 z-50">
                <div className="col-span-2">
                  <h4 className="text-xs text-red-500 font-bold border-b border-zinc-800 pb-2 mb-3">Men Collection</h4>
                  <div className="relative rounded overflow-hidden group/banner aspect-[16/9]">
                    <img 
                      src="/images/match-banner1.jpg" 
                      alt="Match Banner" 
                      className="object-cover w-full h-full transform transition-transform duration-300 group-hover/banner:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-3">
                      <p className="text-xs text-white font-medium">Grand Finals Sunday Stadium</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs text-red-500 font-bold border-b border-zinc-800 pb-2 mb-3">Next Matches</h4>
                  <ul className="space-y-2 text-xs normal-case text-zinc-400 font-normal">
                    <li><a href="#" className="hover:text-red-500 transition-colors">Contrary vs classical</a></li>
                    <li><a href="#" className="hover:text-red-500 transition-colors">Discovered vs undoubtable</a></li>
                    <li><a href="#" className="hover:text-red-500 transition-colors">Classic cup finals 2026</a></li>
                    <li><a href="#" className="hover:text-red-500 transition-colors">Super Team Club clash</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <a href="#" className="hover:text-red-400 transition-colors">Blog</a>
            <a href="#" className="hover:text-red-400 transition-colors">Contact</a>
          </nav>

          {/* Search Bar Widget */}
          <div className="hidden md:flex items-center bg-zinc-800 rounded-full px-3 py-1.5 border border-zinc-700 w-64 focus-within:ring-2 focus-within:ring-red-500 focus-within:border-transparent transition-all">
            <input
              type="text"
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none text-white text-xs w-full focus:outline-none placeholder-zinc-500"
            />
            <SearchIcon />
          </div>

          {/* Hamburger Menu Toggle (Mobile) */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-zinc-950 border-t border-zinc-800 text-sm font-semibold uppercase tracking-wider py-4 px-6 flex flex-col space-y-4">
            <a href="#" className="text-red-500 hover:text-red-400 transition-colors">Home</a>
            <a href="#" className="hover:text-red-400 transition-colors">About</a>
            <a href="#" className="hover:text-red-400 transition-colors">Team</a>
            <a href="#" className="hover:text-red-400 transition-colors">News</a>
            <a href="#" className="hover:text-red-400 transition-colors">Match</a>
            <a href="#" className="hover:text-red-400 transition-colors">Blog</a>
            <a href="#" className="hover:text-red-400 transition-colors">Contact</a>

            <div className="flex items-center bg-zinc-800 rounded-full px-3 py-1.5 border border-zinc-700">
              <input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none text-white text-xs w-full focus:outline-none placeholder-zinc-500"
              />
              <SearchIcon />
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SLIDER SECTION */}
      <section className="relative overflow-hidden h-[500px] md:h-[600px] text-white">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            } ${slide.bgClass} flex items-center`}
          >
            {/* Background Image Overlay */}
            <div className="absolute inset-0 bg-[url('/images/main-slider-img1.jpg')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
            
            {/* Slide Content */}
            <div className="container mx-auto px-6 relative z-20 flex flex-col items-end text-right w-full">
              <div className="max-w-xl space-y-6 transform translate-y-[-10px] transition-transform duration-700 delay-300">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase leading-tight tracking-tight">
                  {slide.title}
                  <br />
                  <span className="text-[#ffcb05]">{slide.subTitle}</span>
                </h2>
                <p className="text-gray-300 text-sm md:text-base font-light max-w-lg ml-auto leading-relaxed">
                  {slide.desc}
                </p>
                <div>
                  <button className="bg-red-600 hover:bg-red-700 hover:scale-105 active:scale-95 text-white font-bold uppercase text-xs px-8 py-3.5 rounded shadow-lg transition-all tracking-wider">
                    {slide.btnText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === activeSlide ? "bg-[#ffcb05] scale-125 w-8" : "bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 4. HEADLINES MARQUEE SECTION */}
      <section className="bg-red-600 text-white font-semibold py-3 overflow-hidden shadow-inner text-sm">
        <div className="container mx-auto px-4 flex items-center">
          <div className="flex-shrink-0 bg-zinc-950 text-white uppercase text-xs font-black tracking-widest px-4 py-1.5 rounded mr-4 flex items-center shadow-md">
            <StarIcon /> Top Headlines :
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm md:text-base border-l-2 border-red-500 pl-4 font-mono font-medium">
              {typedText}
              <span className="animate-ping ml-1 font-bold">|</span>
            </p>
          </div>
        </div>
      </section>

      {/* 5. MATCH INFO BANNER SECTION */}
      <section className="bg-zinc-900 border-b-4 border-red-600 shadow-md">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 text-white">
          
          {/* Teams VS Display */}
          <div className="bg-zinc-950 py-10 px-8 flex justify-center items-center relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-red-600 transform skew-x-12 translate-x-10 opacity-10"></div>
            
            <div className="flex items-center space-x-6 md:space-x-12 z-10">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-zinc-800 rounded-full flex items-center justify-center p-2 shadow-lg border-2 border-zinc-700">
                  <img src="/images/img-03.png" alt="Football Team" className="object-contain w-full h-full" />
                </div>
                <span className="text-xs md:text-sm font-bold uppercase tracking-wider">Football Team</span>
              </div>

              <div className="text-center">
                <span className="bg-red-600 text-white font-black text-lg md:text-xl py-2 px-5 rounded skew-x-[-10deg] shadow-lg inline-block uppercase tracking-widest">
                  VS
                </span>
              </div>

              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-zinc-800 rounded-full flex items-center justify-center p-2 shadow-lg border-2 border-zinc-700">
                  <img src="/images/img-04.png" alt="Super Team Club" className="object-contain w-full h-full" />
                </div>
                <span className="text-xs md:text-sm font-bold uppercase tracking-wider">Super Team Club</span>
              </div>
            </div>
          </div>

          {/* Countdown Clock */}
          <div className="bg-[#151515] py-10 px-8 flex flex-col justify-center items-center lg:items-start lg:pl-16">
            <h3 className="text-xs text-red-500 font-bold uppercase tracking-widest mb-3">Next Match Countdown</h3>
            
            <div className="flex space-x-4 md:space-x-6 mb-3">
              <div className="flex flex-col items-center">
                <div className="bg-zinc-800 rounded border border-zinc-700 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shadow-inner">
                  <span className="text-xl md:text-2xl font-black text-[#ffcb05]">{String(countdown.days).padStart(2, "0")}</span>
                </div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Days</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-zinc-800 rounded border border-zinc-700 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shadow-inner">
                  <span className="text-xl md:text-2xl font-black text-white">{String(countdown.hours).padStart(2, "0")}</span>
                </div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Hours</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-zinc-800 rounded border border-zinc-700 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shadow-inner">
                  <span className="text-xl md:text-2xl font-black text-white">{String(countdown.minutes).padStart(2, "0")}</span>
                </div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Mins</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-zinc-800 rounded border border-zinc-700 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shadow-inner">
                  <span className="text-xl md:text-2xl font-black text-red-500">{String(countdown.seconds).padStart(2, "0")}</span>
                </div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Secs</span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 font-medium font-mono">Game Time: 12/02/2017 / 19:00 PM</p>
          </div>

        </div>
      </section>

      {/* 6. MAIN CONTENT SECTION */}
      <main className="container mx-auto px-4 py-12 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT SIDEBAR (1/3 cols) */}
          <aside className="space-y-8 lg:col-span-1">
            
            {/* Sidebar Banner */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md relative border border-zinc-200 group">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src="/images/img-05.jpg" 
                  alt="Sidebar Feature" 
                  className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="bg-red-600 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow">Featured Story</span>
                <h3 className="text-lg font-bold mt-3 group-hover:text-red-400 transition-colors">Lorem Ipsum is simply dummy text..</h3>
              </div>
            </div>

            {/* Match Fixtures Card */}
            <div className="bg-white rounded-lg shadow-md border border-zinc-200 overflow-hidden">
              <div className="bg-zinc-900 text-white px-5 py-4 border-l-4 border-red-600 flex justify-between items-center">
                <h4 className="font-extrabold uppercase tracking-wide text-sm">Match Fixture</h4>
                <span className="text-[10px] bg-red-600 text-white font-bold px-2 py-0.5 rounded uppercase">2026 Series</span>
              </div>
              <div className="p-4 divide-y divide-zinc-100">
                {[
                  { logo1: "/images/img-01_002.png", t1: "Portugal", logo2: "/images/img-02.png", t2: "Germany" },
                  { logo1: "/images/img-03_002.png", t1: "Portugal", logo2: "/images/img-04_003.png", t2: "Germany" },
                  { logo1: "/images/img-05_002.png", t1: "Portugal", logo2: "/images/img-06.png", t2: "Germany" },
                  { logo1: "/images/img-07_002.png", t1: "Portugal", logo2: "/images/img-08.png", t2: "Germany" },
                ].map((fix, idx) => (
                  <div key={idx} className="py-3 flex justify-between items-center text-xs font-semibold">
                    <div className="flex items-center space-x-2 w-[40%]">
                      <img src={fix.logo1} alt={fix.t1} className="w-5 h-5 object-contain" />
                      <span className="truncate">{fix.t1}</span>
                    </div>
                    <div className="w-[20%] text-center">
                      <span className="bg-zinc-100 text-zinc-500 font-bold px-2 py-0.5 rounded text-[10px] border border-zinc-200">VS</span>
                    </div>
                    <div className="flex items-center justify-end space-x-2 w-[40%] text-right">
                      <span className="truncate">{fix.t2}</span>
                      <img src={fix.logo2} alt={fix.t2} className="w-5 h-5 object-contain" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Points Table Card */}
            <div className="bg-white rounded-lg shadow-md border border-zinc-200 overflow-hidden">
              <div className="bg-zinc-900 text-white px-5 py-4 border-l-4 border-red-600 flex justify-between items-center">
                <h4 className="font-extrabold uppercase tracking-wide text-sm">Points Table</h4>
                <span className="text-[10px] text-zinc-400 font-mono">Click header to sort</span>
              </div>
              <div className="p-4">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-200 text-zinc-500 uppercase text-[10px]">
                      <th className="py-2 cursor-pointer hover:text-red-500 font-bold" onClick={() => handleSort("rank")}>#</th>
                      <th className="py-2 font-bold">Team</th>
                      <th className="py-2 text-center cursor-pointer hover:text-red-500 font-bold" onClick={() => handleSort("wins")}>W</th>
                      <th className="py-2 text-center cursor-pointer hover:text-red-500 font-bold" onClick={() => handleSort("losses")}>L</th>
                      <th className="py-2 text-center cursor-pointer hover:text-red-500 font-bold" onClick={() => handleSort("points")}>P</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pointsTeams.map((team, idx) => (
                      <tr key={team.name} className="border-b border-zinc-100 hover:bg-zinc-50 transition-colors">
                        <td className="py-3 font-semibold text-zinc-500">{idx + 1}</td>
                        <td className="py-3 font-bold flex items-center space-x-2">
                          <img src={team.logo} alt={team.name} className="w-4 h-4 object-contain" />
                          <span>{team.name}</span>
                        </td>
                        <td className="py-3 text-center font-semibold">{team.wins}</td>
                        <td className="py-3 text-center font-semibold text-zinc-400">{team.losses}</td>
                        <td className="py-3 text-center font-bold text-red-600">{team.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sidebar Headlines Story */}
            <div className="rounded-lg shadow-md overflow-hidden text-white bg-cover bg-center border border-zinc-800" style={{ backgroundImage: "url('/images/top-story-bg.jpg')" }}>
              <div className="bg-black/60 p-6 space-y-4">
                <div className="border-b border-zinc-700 pb-3">
                  <h4 className="font-extrabold uppercase text-sm tracking-wide">Soccer Headlines</h4>
                  <span className="text-[10px] text-red-500 font-semibold font-mono">July 05, 2026</span>
                </div>
                <ul className="space-y-2.5 text-xs text-zinc-300 font-medium">
                  {["Wenger: Vardy won't start match", "Evans: Vardy's pace is just amazing", "Pires and Murray mock transfer rumors", "Okazaki backing squad victory run", "Wolfsburg's Rodriguez makes a case", "Jamie Vardy compared to top stars"].map((story, i) => (
                    <li key={i} className="flex items-start hover:text-[#ffcb05] transition-colors cursor-pointer">
                      <span className="text-red-500 mr-2 font-bold">•</span>
                      <span>{story}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </aside>

          {/* MAIN ARTICLES HOLDER (2/3 cols) */}
          <section className="lg:col-span-2 space-y-8">
            
            {/* Live Search and Banner header */}
            <div className="flex justify-between items-center border-b-2 border-zinc-200 pb-3">
              <h2 className="text-xl font-black uppercase text-zinc-900 tracking-wide">
                Latest News & Publications
              </h2>
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="text-xs font-semibold text-red-600 hover:text-red-700 flex items-center border border-red-200 rounded px-2.5 py-0.5"
                >
                  Clear filter "{searchQuery}"
                </button>
              )}
            </div>

            {/* News Articles Map */}
            {filteredArticles.length > 0 ? (
              <div className="space-y-6">
                {filteredArticles.map((article) => (
                  <article key={article.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-zinc-200 group flex flex-col md:flex-row">
                    
                    {/* Article Image */}
                    <div className="md:w-2/5 relative overflow-hidden aspect-[4/3] md:aspect-auto">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105" 
                      />
                      <div className="absolute top-4 left-4 bg-red-600 text-white font-bold text-[10px] uppercase tracking-widest px-2.5 py-1 rounded shadow">
                        News
                      </div>
                    </div>

                    {/* Article Details */}
                    <div className="p-6 md:w-3/5 flex flex-col justify-between space-y-4">
                      <div className="space-y-2.5">
                        <span className="text-[10px] text-zinc-400 font-semibold font-mono tracking-wider block">
                          📅 {article.date}
                        </span>
                        <h3 className="text-lg font-black text-zinc-900 leading-snug group-hover:text-red-600 transition-colors">
                          <a href="#">{article.title}</a>
                        </h3>
                        <p className="text-xs text-zinc-500 leading-relaxed font-normal">
                          {article.snippet}
                        </p>
                      </div>
                      <div>
                        <a href="#" className="inline-flex items-center text-xs font-bold text-red-600 hover:text-red-700 tracking-wider uppercase group-hover:translate-x-1.5 transition-transform duration-300">
                          Read Full Article 
                          <svg className="w-3.5 h-3.5 ml-1 fill-current" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    </div>

                  </article>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg p-12 text-center border border-zinc-200 shadow-sm">
                <span className="text-5xl block mb-4">🔍</span>
                <h4 className="text-lg font-bold text-zinc-800">No news articles found</h4>
                <p className="text-xs text-zinc-400 mt-2">Try checking for different terms or reset the filter.</p>
                <button 
                  onClick={() => setSearchQuery("")}
                  className="mt-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs uppercase px-5 py-2.5 rounded shadow"
                >
                  Reset Search Filter
                </button>
              </div>
            )}

          </section>

        </div>
      </main>

      {/* 7. DYNAMIC VIDEO SECTION */}
      <section className="bg-zinc-900 py-16 text-center text-white border-t border-b border-zinc-800 relative">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wide">Video Match Highlights</h2>
            <p className="text-xs text-zinc-400 max-w-lg mx-auto">
              Check out the recap of the best goals, tackles, and dramatic saves from last Sunday's soccer clash.
            </p>
          </div>

          {/* Interactive Play Video Panel */}
          <div 
            onClick={() => setShowVideoModal(true)}
            className="relative rounded-lg overflow-hidden border border-zinc-800 shadow-2xl cursor-pointer group aspect-[16/9] max-w-2xl mx-auto"
          >
            <img 
              src="/images/img-07.jpg" 
              alt="Video Placeholder" 
              className="object-cover w-full h-full opacity-80 transform transition-transform duration-500 group-hover:scale-105" 
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
              <div className="bg-red-600 group-hover:bg-red-700 text-white p-5 rounded-full shadow-lg transform group-hover:scale-110 active:scale-95 transition-all duration-300 relative">
                {/* Ripple Animations */}
                <span className="absolute inset-0 rounded-full border border-red-500 animate-ping opacity-75"></span>
                <svg className="w-8 h-8 fill-current translate-x-0.5" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO POPUP MODAL */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button 
            onClick={() => setShowVideoModal(false)}
            className="absolute top-4 right-4 text-white hover:text-red-500 bg-zinc-800 p-2.5 rounded-full border border-zinc-700 shadow focus:outline-none"
            aria-label="Close video player"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="w-full max-w-4xl aspect-[16/9] bg-black rounded overflow-hidden shadow-2xl relative border border-zinc-800">
            {/* Dynamic YouTube highlight match video or mock placeholder */}
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* 8. MEET YOUR TEAM SECTION */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          
          <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl md:text-3xl font-black uppercase text-zinc-900 tracking-wide">Meet Your Team</h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Our line-up features some of the most dynamic players on the fields, combining tactical defensive walls with lethal attack runners.
            </p>
          </div>

          {/* Grid of Team Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { img: "/images/img-1-1.jpg", pos: "Defender", name: "Charles Wheeler", num: "12", desc: "Charles is a powerhouse defender with a tactical awareness that shuts down critical team attacks." },
              { img: "/images/img-1-2.jpg", pos: "Midfielder", name: "Jonathan Doe", num: "08", desc: "Jonathan controls the middle field, distributing passes and setting up counters with perfect accuracy." },
              { img: "/images/img-1-3.jpg", pos: "Striker", name: "Marcus Sterling", num: "09", desc: "Marcus leads the goal charts this year, finding tight channels inside rival penalty areas." },
              { img: "/images/img-1-4.jpg", pos: "Goalkeeper", name: "David Foster", num: "01", desc: "David is agile, vocal, and commands the box with an outstanding match save-rate record." },
            ].map((member, idx) => (
              <div 
                key={idx} 
                className="bg-zinc-50 rounded-lg overflow-hidden border border-zinc-200 shadow-sm relative group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-200">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105" 
                  />
                  {/* Hover Info Overlay */}
                  <div className="absolute inset-0 bg-zinc-950/80 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 text-white">
                    <p className="text-xs font-medium text-zinc-300 leading-relaxed">
                      {member.desc}
                    </p>
                    
                    <div>
                      <span className="text-[10px] text-red-500 font-extrabold uppercase tracking-widest block mb-2">Connect</span>
                      <div className="flex space-x-3 text-white">
                        <a href="#" className="hover:text-red-500 transition-colors"><FacebookIcon /></a>
                        <a href="#" className="hover:text-red-500 transition-colors"><TwitterIcon /></a>
                        <a href="#" className="hover:text-red-500 transition-colors"><YoutubeIcon /></a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info Box */}
                <div className="p-4 border-t border-zinc-100 relative">
                  {/* Player Number badge */}
                  <span className="absolute -top-6 right-4 bg-red-600 text-white font-black text-sm px-3 py-1 rounded shadow-md border border-red-500">
                    {member.num}
                  </span>
                  
                  <span className="text-[10px] text-red-500 font-bold uppercase tracking-widest">{member.pos}</span>
                  <h4 className="text-sm font-extrabold text-zinc-900 mt-1 uppercase tracking-wide">{member.name}</h4>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. FOOTER SECTION */}
      <footer className="bg-zinc-950 text-gray-400 border-t-4 border-red-600">
        <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 text-xs leading-relaxed">
          
          {/* Col 1: About Logo (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <img src="/images/footer-logo.png" alt="Footer Logo" className="h-10 w-auto object-contain" />
            <p className="text-zinc-500 font-medium">
              Most of our events have hard and easy route choices as we are always keen to encourage new riders and welcome families.
            </p>
            <div className="flex space-x-3 text-zinc-400">
              <a href="#" className="bg-zinc-900 hover:bg-red-600 hover:text-white p-2 rounded transition-all"><FacebookIcon /></a>
              <a href="#" className="bg-zinc-900 hover:bg-red-600 hover:text-white p-2 rounded transition-all"><TwitterIcon /></a>
              <a href="#" className="bg-zinc-900 hover:bg-red-600 hover:text-white p-2 rounded transition-all"><YoutubeIcon /></a>
              <a href="#" className="bg-zinc-900 hover:bg-red-600 hover:text-white p-2 rounded transition-all"><PinterestIcon /></a>
            </div>
          </div>

          {/* Col 2: Footer Menu (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wide">Menu</h4>
            <ul className="space-y-2.5 font-medium">
              <li><a href="#" className="hover:text-red-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Latest News</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Recent Matches</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Our Blog</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Contact details (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wide">Contact Us</h4>
            <ul className="space-y-3 font-medium">
              <li className="flex items-start">
                <MapMarkerIcon />
                <span className="text-zinc-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon />
                <span className="text-zinc-500">123 456 7890</span>
              </li>
              <li className="flex items-center">
                <EnvelopeIcon />
                <span className="text-zinc-500">demo@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Map Widget (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wide">Our Location</h4>
            <div className="rounded-lg overflow-hidden border border-zinc-800 shadow-md h-36">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d120615.72236587871!2d73.07890527988283!3d19.140910987164396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1527759905404" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Footer Bottom copyright */}
        <div className="bg-zinc-950 py-6 border-t border-zinc-900">
          <div className="container mx-auto px-4 flex justify-between items-center text-zinc-600 text-[10px] font-bold uppercase tracking-wider">
            <p>Copyright © 2018 Distributed by <a href="https://themewagon.com/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors text-zinc-500">ThemeWagon</a></p>
            <p>Developed with React & Next.js</p>
          </div>
        </div>
      </footer>

      {/* 10. SCROLL TO TOP FLOATING BUTTON */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 bg-red-600 hover:bg-red-700 hover:scale-110 active:scale-95 text-white p-3 rounded-full shadow-lg border border-red-500 transition-all duration-300 focus:outline-none"
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </button>
      )}

    </div>
  );
}
