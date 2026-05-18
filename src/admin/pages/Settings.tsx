// pages/admin/SEOSettings.tsx

import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import { motion } from "framer-motion";

import {
    Globe,
    Search,
    // Twitter,
    Share2,
    ShieldCheck,
    Save,
    Sparkles,
    Link2,
    Image as ImageIcon,
} from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

interface SEOData {
    _id?: string;

    slug: string;

    title: string;
    description: string;
    keywords: string[];

    canonicalUrl: string;

    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    ogType: string;

    twitterTitle: string;
    twitterDescription: string;
    twitterImage: string;
    twitterCard: string;

    noIndex: boolean;
    noFollow: boolean;

    author: string;
    language: string;
    themeColor: string;
    favicon: string;

    isActive: boolean;
}

const defaultSEO: SEOData = {
    slug: "home",

    title:
        "Dhruvit Soni | Full Stack Developer",

    description:
        "Dhruvit Soni is a full stack developer building modern, scalable, and high-performance web applications using React, Node.js, MongoDB, and TypeScript.",

    keywords: [
        "Dhruvit Soni",
        "Full Stack Developer",
        "React Developer",
        "Node.js Developer",
        "MERN Stack Developer",
        "Web Developer",
        "Frontend Developer",
        "Backend Developer",
        "Portfolio",
    ],

    canonicalUrl:
        "https://dhruvitsoni.in/",

    ogTitle:
        "Dhruvit Soni | Full Stack Developer",

    ogDescription:
        "Explore the portfolio of Dhruvit Soni — full stack developer creating fast, scalable, and modern web applications.",

    ogImage:
        "https://dhruvitsoni.in/og-image.jpg",

    ogType: "website",

    twitterTitle:
        "Dhruvit Soni | Full Stack Developer",

    twitterDescription:
        "Full stack developer specializing in React, Node.js, MongoDB, and scalable web applications.",

    twitterImage:
        "https://dhruvitsoni.in/og-image.jpg",

    twitterCard: "summary_large_image",

    noIndex: false,
    noFollow: false,

    author: "Dhruvit Harshadbhai Soni",

    language: "en",

    themeColor: "#000000",

    favicon: "/favicon.ico",

    isActive: true,
};

export default function SEOSettings() {

    const [loading, setLoading] =
        useState(false);

    const [seo, setSeo] =
        useState<SEOData>(defaultSEO);

    const pages = [
        "home",
        "about",
        "projects",
        "contact",
    ];

    useEffect(() => {
        fetchSEO("home");
    }, []);

    const fetchSEO = async (
        slug: string
    ) => {

        try {

            setLoading(true);

            const res = await axios.get(
                `${API_URL}/api/seo/${slug}`
            );

            if (res.data?.seo) {
                setSeo(res.data.seo);
            }

        } catch (err) {

            setSeo({
                ...defaultSEO,
                slug,
            });

        } finally {
            setLoading(false);
        }
    };

    const saveSEO = async () => {

        try {

            setLoading(true);

            await axios.post(
                `${API_URL}/api/seo/upsert/${seo.slug}`,
                seo
            );

            toast.success(
                "SEO settings saved successfully"
            );

        } catch (err: any) {

            toast.error(
                err?.response?.data?.message ||
                "Something went wrong"
            );

        } finally {
            setLoading(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement |
            HTMLTextAreaElement |
            HTMLSelectElement
        >
    ) => {

        const {
            name,
            value,
            type,
        } = e.target;

        setSeo((prev) => ({
            ...prev,
            [name]:
                type === "checkbox"
                    ? (
                        e.target as HTMLInputElement
                    ).checked
                    : value,
        }));
    };

    return (
        <div className="min-h-screen bg-[#050816] text-white p-4 md:p-6">

            <div className="max-w-7xl mx-auto space-y-8">

                {/* HEADER */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    className="
                        rounded-[32px]
                        border border-white/10
                        bg-white/[0.03]
                        backdrop-blur-2xl
                        overflow-hidden
                    "
                >

                    <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600" />

                    <div className="p-6 md:p-8 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">

                        <div>
                            <div className="flex items-center gap-3 mb-4">

                                <div
                                    className="
                                        h-12 w-12 rounded-2xl
                                        bg-blue-500/10
                                        border border-blue-500/20
                                        flex items-center justify-center
                                    "
                                >
                                    <Search className="w-6 h-6 text-blue-400" />
                                </div>

                                <div>
                                    <h1 className="text-3xl md:text-4xl font-bold">
                                        SEO Settings
                                    </h1>

                                    <p className="text-sm text-gray-400 mt-1">
                                        Manage metadata, indexing and social previews
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="w-full xl:w-[280px]">

                            <label className="block text-sm text-gray-400 mb-2">
                                Select Page
                            </label>

                            <div className="relative">

                                <select
                                    value={seo.slug}
                                    onChange={(e) =>
                                        fetchSEO(
                                            e.target.value
                                        )
                                    }
                                    className="
                                        w-full
                                        appearance-none
                                        bg-[#0d1325]
                                        border border-white/10
                                        rounded-2xl
                                        px-4 py-3
                                        outline-none
                                        text-white
                                    "
                                >
                                    {pages.map((page) => (
                                        <option
                                            key={page}
                                            value={page}
                                        >
                                            {page}
                                        </option>
                                    ))}
                                </select>

                                <Globe
                                    className="
                                        absolute right-4 top-1/2
                                        -translate-y-1/2
                                        w-5 h-5 text-gray-500
                                    "
                                />

                            </div>

                        </div>

                    </div>

                </motion.div>

                {/* MAIN GRID */}
                <div className="grid xl:grid-cols-3 gap-6">

                    {/* LEFT */}
                    <div className="xl:col-span-2 space-y-6">

                        {/* BASIC SEO */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            className="
                                rounded-[32px]
                                border border-white/10
                                bg-white/[0.03]
                                backdrop-blur-2xl
                                overflow-hidden
                            "
                        >

                            <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />

                            <div className="p-6 md:p-8">

                                <div className="flex items-center justify-between mb-8">

                                    <div className="flex items-center gap-3">

                                        <div
                                            className="
                                                h-11 w-11 rounded-2xl
                                                bg-blue-500/10
                                                flex items-center justify-center
                                            "
                                        >
                                            <Sparkles className="w-5 h-5 text-blue-400" />
                                        </div>

                                        <div>
                                            <h2 className="text-2xl font-semibold">
                                                Basic SEO
                                            </h2>

                                            <p className="text-sm text-gray-400 mt-1">
                                                Core metadata and indexing setup
                                            </p>
                                        </div>

                                    </div>

                                    <span
                                        className="
                                            text-xs
                                            px-3 py-1.5
                                            rounded-full
                                            bg-blue-500/10
                                            text-blue-300
                                            border border-blue-500/20
                                        "
                                    >
                                        Main Metadata
                                    </span>

                                </div>

                                <div className="grid md:grid-cols-2 gap-5">

                                    <div className="md:col-span-2">
                                        <label className="input-label">
                                            Page Title
                                        </label>

                                        <input
                                            type="text"
                                            name="title"
                                            value={seo.title}
                                            onChange={handleChange}
                                            className="input-style"
                                        />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="input-label">
                                            Description
                                        </label>

                                        <textarea
                                            rows={5}
                                            name="description"
                                            value={seo.description}
                                            onChange={handleChange}
                                            className="input-style resize-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="input-label">
                                            Keywords
                                        </label>

                                        <input
                                            type="text"
                                            value={seo.keywords.join(", ")}
                                            onChange={(e) =>
                                                setSeo((prev) => ({
                                                    ...prev,
                                                    keywords:
                                                        e.target.value
                                                            .split(",")
                                                            .map((k) =>
                                                                k.trim()
                                                            ),
                                                }))
                                            }
                                            className="input-style"
                                        />
                                    </div>

                                    <div>
                                        <label className="input-label">
                                            Canonical URL
                                        </label>

                                        <div className="relative">

                                            <input
                                                type="text"
                                                name="canonicalUrl"
                                                value={seo.canonicalUrl}
                                                onChange={handleChange}
                                                className="input-style pl-12"
                                            />

                                            <Link2
                                                className="
                                                    absolute left-4 top-1/2
                                                    -translate-y-1/2
                                                    w-4 h-4 text-gray-500
                                                "
                                            />

                                        </div>
                                    </div>

                                </div>

                            </div>

                        </motion.div>

                        {/* OPEN GRAPH */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.05,
                            }}
                            className="
                                rounded-[32px]
                                border border-white/10
                                bg-white/[0.03]
                                backdrop-blur-2xl
                                overflow-hidden
                            "
                        >

                            <div className="h-1 bg-gradient-to-r from-pink-500 to-purple-500" />

                            <div className="p-6 md:p-8">

                                <div className="flex items-center justify-between mb-8">

                                    <div className="flex items-center gap-3">

                                        <div
                                            className="
                                                h-11 w-11 rounded-2xl
                                                bg-pink-500/10
                                                flex items-center justify-center
                                            "
                                        >
                                            <Share2 className="w-5 h-5 text-pink-400" />
                                        </div>

                                        <div>
                                            <h2 className="text-2xl font-semibold">
                                                Open Graph
                                            </h2>

                                            <p className="text-sm text-gray-400 mt-1">
                                                Social media sharing previews
                                            </p>
                                        </div>

                                    </div>

                                    <span
                                        className="
                                            text-xs
                                            px-3 py-1.5
                                            rounded-full
                                            bg-pink-500/10
                                            text-pink-300
                                            border border-pink-500/20
                                        "
                                    >
                                        Facebook / LinkedIn
                                    </span>

                                </div>

                                <div className="grid md:grid-cols-2 gap-5">

                                    <div>
                                        <label className="input-label">
                                            OG Title
                                        </label>

                                        <input
                                            type="text"
                                            name="ogTitle"
                                            value={seo.ogTitle}
                                            onChange={handleChange}
                                            className="input-style"
                                        />
                                    </div>

                                    <div>
                                        <label className="input-label">
                                            OG Type
                                        </label>

                                        <input
                                            type="text"
                                            name="ogType"
                                            value={seo.ogType}
                                            onChange={handleChange}
                                            className="input-style"
                                        />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="input-label">
                                            OG Description
                                        </label>

                                        <textarea
                                            rows={4}
                                            name="ogDescription"
                                            value={seo.ogDescription}
                                            onChange={handleChange}
                                            className="input-style resize-none"
                                        />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="input-label">
                                            OG Image URL
                                        </label>

                                        <div className="relative">

                                            <input
                                                type="text"
                                                name="ogImage"
                                                value={seo.ogImage}
                                                onChange={handleChange}
                                                className="input-style pl-12"
                                            />

                                            <ImageIcon
                                                className="
                                                    absolute left-4 top-1/2
                                                    -translate-y-1/2
                                                    w-4 h-4 text-gray-500
                                                "
                                            />

                                        </div>
                                    </div>

                                </div>

                            </div>

                        </motion.div>

                    </div>

                    {/* RIGHT */}
                    <div className="space-y-6">

                        {/* TWITTER */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.1,
                            }}
                            className="
                                rounded-[32px]
                                border border-white/10
                                bg-white/[0.03]
                                backdrop-blur-2xl
                                overflow-hidden
                            "
                        >

                            <div className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500" />

                            <div className="p-6">

                                <div className="flex items-center gap-3 mb-8">

                                    <div
                                        className="
                                            h-11 w-11 rounded-2xl
                                            bg-cyan-500/10
                                            flex items-center justify-center
                                        "
                                    >
                                        {/* <Twitter className="w-5 h-5 text-cyan-400" /> */}
                                    </div>

                                    <div>
                                        <h2 className="text-xl font-semibold">
                                            Twitter SEO
                                        </h2>

                                        <p className="text-sm text-gray-400 mt-1">
                                            Twitter card metadata
                                        </p>
                                    </div>

                                </div>

                                <div className="space-y-5">

                                    <div>
                                        <label className="input-label">
                                            Twitter Title
                                        </label>

                                        <input
                                            type="text"
                                            name="twitterTitle"
                                            value={seo.twitterTitle}
                                            onChange={handleChange}
                                            className="input-style"
                                        />
                                    </div>

                                    <div>
                                        <label className="input-label">
                                            Twitter Description
                                        </label>

                                        <textarea
                                            rows={4}
                                            name="twitterDescription"
                                            value={seo.twitterDescription}
                                            onChange={handleChange}
                                            className="input-style resize-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="input-label">
                                            Twitter Image
                                        </label>

                                        <input
                                            type="text"
                                            name="twitterImage"
                                            value={seo.twitterImage}
                                            onChange={handleChange}
                                            className="input-style"
                                        />
                                    </div>

                                </div>

                            </div>

                        </motion.div>

                        {/* ADVANCED */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.15,
                            }}
                            className="
                                rounded-[32px]
                                border border-white/10
                                bg-white/[0.03]
                                backdrop-blur-2xl
                                overflow-hidden
                            "
                        >

                            <div className="h-1 bg-gradient-to-r from-orange-400 to-yellow-400" />

                            <div className="p-6">

                                <div className="flex items-center gap-3 mb-8">

                                    <div
                                        className="
                                            h-11 w-11 rounded-2xl
                                            bg-yellow-500/10
                                            flex items-center justify-center
                                        "
                                    >
                                        <ShieldCheck className="w-5 h-5 text-yellow-400" />
                                    </div>

                                    <div>
                                        <h2 className="text-xl font-semibold">
                                            Advanced
                                        </h2>

                                        <p className="text-sm text-gray-400 mt-1">
                                            Crawling and indexing controls
                                        </p>
                                    </div>

                                </div>

                                <div className="space-y-4">

                                    <div className="toggle-card">

                                        <div>
                                            <h3 className="font-medium">
                                                No Index
                                            </h3>

                                            <p className="text-xs text-gray-500 mt-1">
                                                Prevent search engines from indexing
                                            </p>
                                        </div>

                                        <input
                                            type="checkbox"
                                            name="noIndex"
                                            checked={seo.noIndex}
                                            onChange={handleChange}
                                            className="w-5 h-5 accent-blue-500"
                                        />

                                    </div>

                                    <div className="toggle-card">

                                        <div>
                                            <h3 className="font-medium">
                                                No Follow
                                            </h3>

                                            <p className="text-xs text-gray-500 mt-1">
                                                Prevent crawler link following
                                            </p>
                                        </div>

                                        <input
                                            type="checkbox"
                                            name="noFollow"
                                            checked={seo.noFollow}
                                            onChange={handleChange}
                                            className="w-5 h-5 accent-blue-500"
                                        />

                                    </div>

                                </div>

                            </div>

                        </motion.div>

                        {/* SAVE */}
                        <motion.button
                            whileHover={{
                                scale: 1.01,
                            }}
                            whileTap={{
                                scale: 0.98,
                            }}
                            onClick={saveSEO}
                            disabled={loading}
                            className="
                                w-full
                                rounded-[28px]
                                py-4 px-6
                                bg-gradient-to-r from-blue-500 to-cyan-400
                                text-white
                                font-semibold
                                flex items-center justify-center gap-3
                                shadow-[0_10px_40px_rgba(59,130,246,0.35)]
                                transition-all
                            "
                        >

                            <Save className="w-5 h-5" />

                            {loading
                                ? "Saving..."
                                : "Save SEO Settings"}

                        </motion.button>

                    </div>

                </div>

            </div>

            {/* GLOBAL CLASSES */}
            <style>
                {`
                    .input-label {
                        display: block;
                        margin-bottom: 10px;
                        font-size: 14px;
                        color: #9ca3af;
                    }

                    .input-style {
                        width: 100%;
                        background: rgba(255,255,255,0.03);
                        border: 1px solid rgba(255,255,255,0.08);
                        border-radius: 20px;
                        padding: 14px 16px;
                        outline: none;
                        color: white;
                        transition: 0.2s ease;
                    }

                    .input-style:focus {
                        border-color: rgba(59,130,246,0.5);
                        box-shadow: 0 0 0 4px rgba(59,130,246,0.08);
                    }

                    .toggle-card {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 20px;
                        padding: 18px;
                        border-radius: 22px;
                        background: rgba(255,255,255,0.03);
                        border: 1px solid rgba(255,255,255,0.08);
                    }
                `}
            </style>

        </div>
    );
}