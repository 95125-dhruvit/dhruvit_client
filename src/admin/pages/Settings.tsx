// pages/admin/SEOSettings.tsx

import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

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

    // BASIC SEO
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
        "JavaScript Developer",
        "TypeScript Developer",
        "MongoDB",
        "Express.js",
        "Software Engineer",
    ],

    canonicalUrl:
        "https://dhruvitsoni.in/",

    // OPEN GRAPH
    ogTitle:
        "Dhruvit Soni | Full Stack Developer",

    ogDescription:
        "Explore the portfolio of Dhruvit Soni — full stack developer creating fast, scalable, and modern web applications.",

    ogImage:
        "https://dhruvitsoni.in/og-image.jpg",

    ogType: "website",

    // TWITTER
    twitterTitle:
        "Dhruvit Soni | Full Stack Developer",

    twitterDescription:
        "Full stack developer specializing in React, Node.js, MongoDB, and scalable web applications.",

    twitterImage:
        "https://dhruvitsoni.in/og-image.jpg",

    twitterCard: "summary_large_image",

    // ADVANCED
    noIndex: false,
    noFollow: false,

    author: "Dhruvit Harshadbhai Soni",

    language: "en",

    themeColor: "#000000",

    favicon: "/favicon.ico",

    isActive: true,
};

// const defaultSEO: SEOData = {
//     slug: "home",

//     title: "",
//     description: "",
//     keywords: [],

//     canonicalUrl: "",

//     ogTitle: "",
//     ogDescription: "",
//     ogImage: "",
//     ogType: "website",

//     twitterTitle: "",
//     twitterDescription: "",
//     twitterImage: "",
//     twitterCard: "summary_large_image",

//     noIndex: false,
//     noFollow: false,

//     author: "Dhruvit Harshadbhai Soni",
//     language: "en",
//     themeColor: "#000000",
//     favicon: "/favicon.ico",

//     isActive: true,
// };

export default function Settings() {

    const [loading, setLoading] = useState(false);

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

    const fetchSEO = async (slug: string) => {
        try {

            setLoading(true);

            const res = await axios.get(
                `${API_URL}/api/seo/${slug}`
            );

            if (res.data?.seo) {
                setSeo(res.data.seo);
            }

        } catch (err: any) {

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

            toast.success("SEO saved successfully");

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
                    ? (e.target as HTMLInputElement)
                        .checked
                    : value,
        }));
    };

    return (
        <div className="min-h-screen bg-[#0b0b0b] text-white p-6">

            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

                    <div>
                        <h1 className="text-3xl font-bold">
                            SEO Settings
                        </h1>

                        <p className="text-gray-400 mt-2">
                            Manage SEO metadata for all pages
                        </p>
                    </div>

                    <div className="w-full md:w-[260px]">
                        <label className="block text-sm text-gray-400 mb-2">
                            Select Page
                        </label>

                        <select
                            value={seo.slug}
                            onChange={(e) =>
                                fetchSEO(e.target.value)
                            }
                            className="w-full bg-[#171717] border border-[#2a2a2a] rounded-2xl px-4 py-3 outline-none"
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
                    </div>

                </div>

                {/* GRID */}
                <div className="grid xl:grid-cols-3 gap-6">

                    {/* LEFT SIDE */}
                    <div className="xl:col-span-2 space-y-6">

                        {/* BASIC SEO */}
                        <div className="bg-[#171717] border border-[#262626] rounded-3xl p-6">

                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-semibold">
                                    Basic SEO
                                </h2>

                                <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-gray-300">
                                    Main Metadata
                                </span>
                            </div>

                            <div className="grid md:grid-cols-2 gap-5">

                                <div className="md:col-span-2">
                                    <label className="block mb-2 text-sm text-gray-400">
                                        Page Title
                                    </label>

                                    <input
                                        type="text"
                                        name="title"
                                        value={seo.title}
                                        onChange={handleChange}
                                        className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl px-4 py-3 outline-none"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block mb-2 text-sm text-gray-400">
                                        Description
                                    </label>

                                    <textarea
                                        rows={4}
                                        name="description"
                                        value={seo.description}
                                        onChange={handleChange}
                                        className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl px-4 py-3 outline-none resize-none"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-400">
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
                                        className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl px-4 py-3 outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-400">
                                        Canonical URL
                                    </label>

                                    <input
                                        type="text"
                                        name="canonicalUrl"
                                        value={seo.canonicalUrl}
                                        onChange={handleChange}
                                        className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl px-4 py-3 outline-none"
                                    />
                                </div>

                            </div>
                        </div>

                        {/* OPEN GRAPH */}
                        <div className="bg-[#171717] border border-[#262626] rounded-3xl p-6">

                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-semibold">
                                    Open Graph
                                </h2>

                                <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-gray-300">
                                    Facebook / LinkedIn
                                </span>
                            </div>

                            <div className="grid md:grid-cols-2 gap-5">

                                <div>
                                    <label className="block mb-2 text-sm text-gray-400">
                                        OG Title
                                    </label>

                                    <input
                                        type="text"
                                        name="ogTitle"
                                        value={seo.ogTitle}
                                        onChange={handleChange}
                                        className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl px-4 py-3 outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-400">
                                        OG Type
                                    </label>

                                    <input
                                        type="text"
                                        name="ogType"
                                        value={seo.ogType}
                                        onChange={handleChange}
                                        className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl px-4 py-3 outline-none"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block mb-2 text-sm text-gray-400">
                                        OG Description
                                    </label>

                                    <textarea
                                        rows={3}
                                        name="ogDescription"
                                        value={seo.ogDescription}
                                        onChange={handleChange}
                                        className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl px-4 py-3 outline-none resize-none"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block mb-2 text-sm text-gray-400">
                                        OG Image URL
                                    </label>

                                    <input
                                        type="text"
                                        name="ogImage"
                                        value={seo.ogImage}
                                        onChange={handleChange}
                                        className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl px-4 py-3 outline-none"
                                    />
                                </div>

                            </div>
                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="space-y-6 sticky top-6 h-fit">

                        {/* TWITTER */}
                        <div className="bg-[#171717] border border-[#262626] rounded-3xl p-6">

                            <h2 className="text-xl font-semibold mb-6">
                                Twitter SEO
                            </h2>

                            <div className="space-y-5">

                                <div>
                                    <label className="block mb-2 text-sm text-gray-400">
                                        Twitter Title
                                    </label>

                                    <input
                                        type="text"
                                        name="twitterTitle"
                                        value={seo.twitterTitle}
                                        onChange={handleChange}
                                        className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl px-4 py-3 outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-400">
                                        Twitter Description
                                    </label>

                                    <textarea
                                        rows={3}
                                        name="twitterDescription"
                                        value={seo.twitterDescription}
                                        onChange={handleChange}
                                        className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl px-4 py-3 outline-none resize-none"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-400">
                                        Twitter Image
                                    </label>

                                    <input
                                        type="text"
                                        name="twitterImage"
                                        value={seo.twitterImage}
                                        onChange={handleChange}
                                        className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl px-4 py-3 outline-none"
                                    />
                                </div>

                            </div>
                        </div>

                        {/* ADVANCED */}
                        <div className="bg-[#171717] border border-[#262626] rounded-3xl p-6">

                            <h2 className="text-xl font-semibold mb-6">
                                Advanced
                            </h2>

                            <div className="space-y-4">

                                <div className="flex items-center justify-between bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl px-4 py-4">
                                    <div>
                                        <h3 className="font-medium">
                                            No Index
                                        </h3>

                                        <p className="text-xs text-gray-500 mt-1">
                                            Prevent search engine indexing
                                        </p>
                                    </div>

                                    <input
                                        type="checkbox"
                                        name="noIndex"
                                        checked={seo.noIndex}
                                        onChange={handleChange}
                                        className="w-5 h-5"
                                    />
                                </div>

                                <div className="flex items-center justify-between bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl px-4 py-4">
                                    <div>
                                        <h3 className="font-medium">
                                            No Follow
                                        </h3>

                                        <p className="text-xs text-gray-500 mt-1">
                                            Prevent crawler following
                                        </p>
                                    </div>

                                    <input
                                        type="checkbox"
                                        name="noFollow"
                                        checked={seo.noFollow}
                                        onChange={handleChange}
                                        className="w-5 h-5"
                                    />
                                </div>

                            </div>

                        </div>

                        {/* SAVE */}
                        <button
                            onClick={saveSEO}
                            disabled={loading}
                            className="w-full bg-white text-black rounded-3xl py-4 font-semibold hover:opacity-90 transition-all"
                        >
                            {loading
                                ? "Saving..."
                                : "Save SEO Settings"}
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}