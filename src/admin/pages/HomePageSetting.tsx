// pages/admin/HomePageSettings.tsx

import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const API_URL = import.meta.env.VITE_API_URL;

export default function HomePageSettings() {

    const [loading, setLoading] =
        useState(false);

    const [data, setData] = useState<any>(null);

    // ================= FETCH =================
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        try {

            setLoading(true);

            const res = await axios.get(
                `${API_URL}/api/home-page`
            );

            setData(res.data.homePage);

        } catch (error) {

            toast.error(
                "Failed to fetch home page data"
            );

        } finally {
            setLoading(false);
        }
    };

    // ================= SAVE =================
    const saveData = async () => {

        try {

            setLoading(true);

            await axios.put(
                `${API_URL}/api/home-page/update`,
                data
            );

            toast.success(
                "Home page updated"
            );

        } catch (error) {

            toast.error(
                "Failed to save data"
            );

        } finally {
            setLoading(false);
        }
    };

    // ================= LOADING =================
    if (!data) {
        return (
            <div className="min-h-screen bg-[#0b0b0b] text-white flex items-center justify-center">
                Loading...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0b0b0b] text-white p-6">

            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="flex items-center justify-between mb-8">

                    <div>
                        <h1 className="text-3xl font-bold">
                            Home Page Settings
                        </h1>

                        <p className="text-gray-400 mt-2">
                            Manage all homepage content
                        </p>
                    </div>

                    <button
                        onClick={saveData}
                        disabled={loading}
                        className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:opacity-90 transition"
                    >
                        {
                            loading
                                ? "Saving..."
                                : "Save Changes"
                        }
                    </button>

                </div>

                <div className="grid xl:grid-cols-3 gap-6">

                    {/* LEFT */}
                    <div className="xl:col-span-2 space-y-6">

                        {/* HERO */}
                        <div className="bg-[#171717] border border-[#262626] rounded-3xl overflow-hidden">

                            <details className="group">

                                {/* HEADER */}
                                <summary className="flex items-center justify-between cursor-pointer list-none p-6">

                                    <div>

                                        <h2 className="text-2xl font-semibold">
                                            Hero Section
                                        </h2>

                                        <p className="text-sm text-gray-400 mt-1">
                                            Manage hero section content
                                        </p>

                                    </div>

                                    {/* ARROW */}
                                    <span className="text-gray-500 text-lg group-open:rotate-180 transition-transform">
                                        ▼
                                    </span>

                                </summary>

                                {/* BODY */}
                                <div className="px-6 pb-6 border-t border-[#262626]">

                                    <div className="grid md:grid-cols-2 gap-5 pt-6">

                                        <div>
                                            <label className="block text-sm text-gray-400 mb-2">
                                                Greeting
                                            </label>

                                            <input
                                                type="text"
                                                value={data.hero.greeting}
                                                onChange={(e) =>
                                                    setData({
                                                        ...data,
                                                        hero: {
                                                            ...data.hero,
                                                            greeting:
                                                                e.target.value,
                                                        },
                                                    })
                                                }
                                                className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl px-4 py-3 outline-none"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm text-gray-400 mb-2">
                                                Hero Image
                                            </label>

                                            <input
                                                type="text"
                                                value={data.hero.heroImage}
                                                onChange={(e) =>
                                                    setData({
                                                        ...data,
                                                        hero: {
                                                            ...data.hero,
                                                            heroImage:
                                                                e.target.value,
                                                        },
                                                    })
                                                }
                                                className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl px-4 py-3 outline-none"
                                            />
                                        </div>

                                        <div className="md:col-span-2">
                                            <label className="block text-sm text-gray-400 mb-2">
                                                Typing Texts (comma separated)
                                            </label>

                                            <input
                                                type="text"
                                                value={
                                                    data.hero.typingTexts.join(
                                                        ", "
                                                    )
                                                }
                                                onChange={(e) =>
                                                    setData({
                                                        ...data,
                                                        hero: {
                                                            ...data.hero,
                                                            typingTexts:
                                                                e.target.value
                                                                    .split(",")
                                                                    .map(
                                                                        (
                                                                            item: string
                                                                        ) =>
                                                                            item.trim()
                                                                    ),
                                                        },
                                                    })
                                                }
                                                className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl px-4 py-3 outline-none"
                                            />
                                        </div>

                                        <div className="md:col-span-2">
                                            <label className="block text-sm text-gray-400 mb-2">
                                                Description
                                            </label>

                                            <textarea
                                                rows={4}
                                                value={
                                                    data.hero.description
                                                }
                                                onChange={(e) =>
                                                    setData({
                                                        ...data,
                                                        hero: {
                                                            ...data.hero,
                                                            description:
                                                                e.target.value,
                                                        },
                                                    })
                                                }
                                                className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl px-4 py-3 outline-none resize-none"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm text-gray-400 mb-2">
                                                Primary Button Text
                                            </label>

                                            <input
                                                type="text"
                                                value={data.hero.primaryButtonText}
                                                onChange={(e) =>
                                                    setData({
                                                        ...data,
                                                        hero: {
                                                            ...data.hero,
                                                            primaryButtonText:
                                                                e.target.value,
                                                        },
                                                    })
                                                }
                                                className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl px-4 py-3 outline-none"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm text-gray-400 mb-2">
                                                Primary Button Link
                                            </label>

                                            <input
                                                type="text"
                                                value={data.hero.primaryButtonLink}
                                                onChange={(e) =>
                                                    setData({
                                                        ...data,
                                                        hero: {
                                                            ...data.hero,
                                                            primaryButtonLink:
                                                                e.target.value,
                                                        },
                                                    })
                                                }
                                                className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl px-4 py-3 outline-none"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm text-gray-400 mb-2">
                                                Secondary Button Text
                                            </label>

                                            <input
                                                type="text"
                                                value={data.hero.secondaryButtonText}
                                                onChange={(e) =>
                                                    setData({
                                                        ...data,
                                                        hero: {
                                                            ...data.hero,
                                                            secondaryButtonText:
                                                                e.target.value,
                                                        },
                                                    })
                                                }
                                                className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl px-4 py-3 outline-none"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm text-gray-400 mb-2">
                                                Secondary Button Link
                                            </label>

                                            <input
                                                type="text"
                                                value={data.hero.secondaryButtonLink}
                                                onChange={(e) =>
                                                    setData({
                                                        ...data,
                                                        hero: {
                                                            ...data.hero,
                                                            secondaryButtonLink:
                                                                e.target.value,
                                                        },
                                                    })
                                                }
                                                className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl px-4 py-3 outline-none"
                                            />
                                        </div>

                                    </div>

                                </div>

                            </details>

                        </div>





                        {/* SYSTEMS */}
                        <div className="bg-[#171717] border border-[#262626] rounded-3xl overflow-hidden">

                            <details className="group">

                                {/* MAIN HEADER */}
                                <summary className="flex items-center justify-between cursor-pointer list-none p-6">

                                    <div>

                                        <h2 className="text-2xl font-semibold">
                                            Systems Section
                                        </h2>

                                        <p className="text-sm text-gray-400 mt-1">
                                            Manage all system cards dynamically
                                        </p>

                                    </div>

                                    <div className="flex items-center gap-4">

                                        {/* ADD BUTTON */}
                                        <button
                                            type="button"
                                            onClick={(e) => {

                                                e.preventDefault();

                                                setData({
                                                    ...data,
                                                    systemsSection: {
                                                        ...data.systemsSection,
                                                        items: [
                                                            ...data.systemsSection.items,
                                                            {
                                                                title: "",
                                                                desc: "",
                                                            },
                                                        ],
                                                    },
                                                });

                                            }}
                                            className="bg-white text-black px-5 py-2 rounded-2xl font-medium hover:opacity-90 transition"
                                        >
                                            + Add Item
                                        </button>

                                        {/* ARROW */}
                                        <span className="text-gray-500 text-lg group-open:rotate-180 transition-transform">
                                            ▼
                                        </span>

                                    </div>

                                </summary>

                                {/* BODY */}
                                <div className="px-6 pb-6 border-t border-[#262626]">

                                    {/* SECTION TITLE */}
                                    <div className="mb-6 pt-6">

                                        <label className="block mb-2 text-sm text-gray-400">
                                            Section Title
                                        </label>

                                        <input
                                            type="text"
                                            value={data.systemsSection.title}
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    systemsSection: {
                                                        ...data.systemsSection,
                                                        title: e.target.value,
                                                    },
                                                })
                                            }
                                            className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl px-4 py-3 outline-none"
                                        />

                                    </div>

                                    {/* ITEMS */}
                                    <div className="space-y-4">

                                        {
                                            data.systemsSection.items.map(
                                                (
                                                    item: any,
                                                    index: number
                                                ) => (

                                                    <details
                                                        key={index}
                                                        className="group/item bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl overflow-hidden"
                                                    >

                                                        {/* ITEM HEADER */}
                                                        <summary className="flex items-center justify-between cursor-pointer list-none px-5 py-4">

                                                            <div>

                                                                <h3 className="font-medium text-white">
                                                                    {
                                                                        item.title ||
                                                                        `System Item ${index + 1}`
                                                                    }
                                                                </h3>

                                                                <p className="text-xs text-gray-500 mt-1">
                                                                    Click to expand
                                                                </p>

                                                            </div>

                                                            <div className="flex items-center gap-3">

                                                                {/* DELETE */}
                                                                <button
                                                                    type="button"
                                                                    onClick={(e) => {

                                                                        e.preventDefault();

                                                                        const updated =
                                                                            data.systemsSection.items.filter(
                                                                                (
                                                                                    _: any,
                                                                                    i: number
                                                                                ) =>
                                                                                    i !== index
                                                                            );

                                                                        setData({
                                                                            ...data,
                                                                            systemsSection:
                                                                            {
                                                                                ...data.systemsSection,
                                                                                items:
                                                                                    updated,
                                                                            },
                                                                        });

                                                                    }}
                                                                    className="text-red-400 hover:text-red-300 text-sm"
                                                                >
                                                                    Delete
                                                                </button>

                                                                {/* ARROW */}
                                                                <span className="text-gray-500 group-open/item:rotate-180 transition-transform">
                                                                    ▼
                                                                </span>

                                                            </div>

                                                        </summary>

                                                        {/* ITEM BODY */}
                                                        <div className="px-5 pb-5 border-t border-[#2a2a2a] space-y-4">

                                                            {/* TITLE */}
                                                            <div className="pt-4">

                                                                <label className="block mb-2 text-sm text-gray-400">
                                                                    Title
                                                                </label>

                                                                <input
                                                                    type="text"
                                                                    placeholder="Enter title"
                                                                    value={item.title}
                                                                    onChange={(e) => {

                                                                        const updated = [
                                                                            ...data.systemsSection.items,
                                                                        ];

                                                                        updated[index].title =
                                                                            e.target.value;

                                                                        setData({
                                                                            ...data,
                                                                            systemsSection:
                                                                            {
                                                                                ...data.systemsSection,
                                                                                items:
                                                                                    updated,
                                                                            },
                                                                        });

                                                                    }}
                                                                    className="w-full bg-[#171717] border border-[#2a2a2a] rounded-xl px-4 py-3 outline-none"
                                                                />

                                                            </div>

                                                            {/* DESCRIPTION */}
                                                            <div>

                                                                <label className="block mb-2 text-sm text-gray-400">
                                                                    Description
                                                                </label>

                                                                <textarea
                                                                    rows={4}
                                                                    placeholder="Enter description"
                                                                    value={item.desc}
                                                                    onChange={(e) => {

                                                                        const updated = [
                                                                            ...data.systemsSection.items,
                                                                        ];

                                                                        updated[index].desc =
                                                                            e.target.value;

                                                                        setData({
                                                                            ...data,
                                                                            systemsSection:
                                                                            {
                                                                                ...data.systemsSection,
                                                                                items:
                                                                                    updated,
                                                                            },
                                                                        });

                                                                    }}
                                                                    className="w-full bg-[#171717] border border-[#2a2a2a] rounded-xl px-4 py-3 outline-none resize-none"
                                                                />

                                                            </div>

                                                        </div>

                                                    </details>
                                                )
                                            )
                                        }

                                    </div>

                                </div>

                            </details>

                        </div>

                        {/* IMPACT */}
                        <div className="bg-[#171717] border border-[#262626] rounded-3xl overflow-hidden">

                            <details className="group">

                                {/* MAIN HEADER */}
                                <summary className="flex items-center justify-between cursor-pointer list-none p-6">

                                    <div>

                                        <h2 className="text-2xl font-semibold">
                                            Impact Section
                                        </h2>

                                        <p className="text-sm text-gray-400 mt-1">
                                            Manage all impact cards dynamically
                                        </p>

                                    </div>

                                    <div className="flex items-center gap-4">

                                        {/* ADD BUTTON */}
                                        <button
                                            type="button"
                                            onClick={(e) => {

                                                e.preventDefault();

                                                setData({
                                                    ...data,
                                                    impactSection: {
                                                        ...data.impactSection,
                                                        items: [
                                                            ...data.impactSection.items,
                                                            {
                                                                title: "",
                                                                desc: "",
                                                            },
                                                        ],
                                                    },
                                                });

                                            }}
                                            className="bg-white text-black px-5 py-2 rounded-2xl font-medium hover:opacity-90 transition"
                                        >
                                            + Add Item
                                        </button>

                                        {/* ARROW */}
                                        <span className="text-gray-500 text-lg group-open:rotate-180 transition-transform">
                                            ▼
                                        </span>

                                    </div>

                                </summary>

                                {/* BODY */}
                                <div className="px-6 pb-6 border-t border-[#262626]">

                                    {/* SECTION TITLE */}
                                    <div className="mb-6 pt-6">

                                        <label className="block mb-2 text-sm text-gray-400">
                                            Section Title
                                        </label>

                                        <input
                                            type="text"
                                            value={data.impactSection.title}
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    impactSection: {
                                                        ...data.impactSection,
                                                        title: e.target.value,
                                                    },
                                                })
                                            }
                                            className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl px-4 py-3 outline-none"
                                        />

                                    </div>

                                    {/* ITEMS */}
                                    <div className="space-y-4">

                                        {
                                            data.impactSection.items.map(
                                                (
                                                    item: any,
                                                    index: number
                                                ) => (

                                                    <details
                                                        key={index}
                                                        className="group/item bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl overflow-hidden"
                                                    >

                                                        {/* ITEM HEADER */}
                                                        <summary className="flex items-center justify-between cursor-pointer list-none px-5 py-4">

                                                            <div>

                                                                <h3 className="font-medium text-white">
                                                                    {
                                                                        item.title ||
                                                                        `Impact Item ${index + 1}`
                                                                    }
                                                                </h3>

                                                                <p className="text-xs text-gray-500 mt-1">
                                                                    Click to expand
                                                                </p>

                                                            </div>

                                                            <div className="flex items-center gap-3">

                                                                {/* DELETE */}
                                                                <button
                                                                    type="button"
                                                                    onClick={(e) => {

                                                                        e.preventDefault();

                                                                        const updated =
                                                                            data.impactSection.items.filter(
                                                                                (
                                                                                    _: any,
                                                                                    i: number
                                                                                ) =>
                                                                                    i !== index
                                                                            );

                                                                        setData({
                                                                            ...data,
                                                                            impactSection:
                                                                            {
                                                                                ...data.impactSection,
                                                                                items:
                                                                                    updated,
                                                                            },
                                                                        });

                                                                    }}
                                                                    className="text-red-400 hover:text-red-300 text-sm"
                                                                >
                                                                    Delete
                                                                </button>

                                                                {/* ARROW */}
                                                                <span className="text-gray-500 group-open/item:rotate-180 transition-transform">
                                                                    ▼
                                                                </span>

                                                            </div>

                                                        </summary>

                                                        {/* ITEM BODY */}
                                                        <div className="px-5 pb-5 border-t border-[#2a2a2a] space-y-4">

                                                            {/* TITLE */}
                                                            <div className="pt-4">

                                                                <label className="block mb-2 text-sm text-gray-400">
                                                                    Title
                                                                </label>

                                                                <input
                                                                    type="text"
                                                                    placeholder="Enter title"
                                                                    value={item.title}
                                                                    onChange={(e) => {

                                                                        const updated = [
                                                                            ...data.impactSection.items,
                                                                        ];

                                                                        updated[index].title =
                                                                            e.target.value;

                                                                        setData({
                                                                            ...data,
                                                                            impactSection:
                                                                            {
                                                                                ...data.impactSection,
                                                                                items:
                                                                                    updated,
                                                                            },
                                                                        });

                                                                    }}
                                                                    className="w-full bg-[#171717] border border-[#2a2a2a] rounded-xl px-4 py-3 outline-none"
                                                                />

                                                            </div>

                                                            {/* DESCRIPTION */}
                                                            <div>

                                                                <label className="block mb-2 text-sm text-gray-400">
                                                                    Description
                                                                </label>

                                                                <textarea
                                                                    rows={4}
                                                                    placeholder="Enter description"
                                                                    value={item.desc}
                                                                    onChange={(e) => {

                                                                        const updated = [
                                                                            ...data.impactSection.items,
                                                                        ];

                                                                        updated[index].desc =
                                                                            e.target.value;

                                                                        setData({
                                                                            ...data,
                                                                            impactSection:
                                                                            {
                                                                                ...data.impactSection,
                                                                                items:
                                                                                    updated,
                                                                            },
                                                                        });

                                                                    }}
                                                                    className="w-full bg-[#171717] border border-[#2a2a2a] rounded-xl px-4 py-3 outline-none resize-none"
                                                                />

                                                            </div>

                                                        </div>

                                                    </details>
                                                )
                                            )
                                        }

                                    </div>

                                </div>

                            </details>

                        </div>




                        {/* APPROACH */}
                        <div className="bg-[#171717] border border-[#262626] rounded-3xl overflow-hidden">

                            <details className="group">

                                {/* MAIN HEADER */}
                                <summary className="flex items-center justify-between cursor-pointer list-none p-6">

                                    <div>

                                        <h2 className="text-2xl font-semibold">
                                            Approach Section
                                        </h2>

                                        <p className="text-sm text-gray-400 mt-1">
                                            Manage all approach cards dynamically
                                        </p>

                                    </div>

                                    <div className="flex items-center gap-4">

                                        {/* ADD BUTTON */}
                                        <button
                                            type="button"
                                            onClick={(e) => {

                                                e.preventDefault();

                                                setData({
                                                    ...data,
                                                    approachSection: {
                                                        ...data.approachSection,
                                                        items: [
                                                            ...data.approachSection.items,
                                                            {
                                                                title: "",
                                                                desc: "",
                                                            },
                                                        ],
                                                    },
                                                });

                                            }}
                                            className="bg-white text-black px-5 py-2 rounded-2xl font-medium hover:opacity-90 transition"
                                        >
                                            + Add Item
                                        </button>

                                        {/* ARROW */}
                                        <span className="text-gray-500 text-lg group-open:rotate-180 transition-transform">
                                            ▼
                                        </span>

                                    </div>

                                </summary>

                                {/* BODY */}
                                <div className="px-6 pb-6 border-t border-[#262626]">

                                    {/* SECTION TITLE */}
                                    <div className="mb-5 pt-6">

                                        <label className="block mb-2 text-sm text-gray-400">
                                            Section Title
                                        </label>

                                        <input
                                            type="text"
                                            value={data.approachSection.title}
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    approachSection: {
                                                        ...data.approachSection,
                                                        title: e.target.value,
                                                    },
                                                })
                                            }
                                            className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl px-4 py-3 outline-none"
                                        />

                                    </div>

                                    {/* SECTION DESCRIPTION */}
                                    <div className="mb-6">

                                        <label className="block mb-2 text-sm text-gray-400">
                                            Section Description
                                        </label>

                                        <textarea
                                            rows={4}
                                            value={data.approachSection.description}
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    approachSection: {
                                                        ...data.approachSection,
                                                        description: e.target.value,
                                                    },
                                                })
                                            }
                                            className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl px-4 py-3 outline-none resize-none"
                                        />

                                    </div>

                                    {/* ITEMS */}
                                    <div className="space-y-4">

                                        {
                                            data.approachSection.items.map(
                                                (
                                                    item: any,
                                                    index: number
                                                ) => (

                                                    <details
                                                        key={index}
                                                        className="group/item bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl overflow-hidden"
                                                    >

                                                        {/* ITEM HEADER */}
                                                        <summary className="flex items-center justify-between cursor-pointer list-none px-5 py-4">

                                                            <div>

                                                                <h3 className="font-medium text-white">
                                                                    {
                                                                        item.title ||
                                                                        `Approach Item ${index + 1}`
                                                                    }
                                                                </h3>

                                                                <p className="text-xs text-gray-500 mt-1">
                                                                    Click to expand
                                                                </p>

                                                            </div>

                                                            <div className="flex items-center gap-3">

                                                                {/* DELETE */}
                                                                <button
                                                                    type="button"
                                                                    onClick={(e) => {

                                                                        e.preventDefault();

                                                                        const updated =
                                                                            data.approachSection.items.filter(
                                                                                (
                                                                                    _: any,
                                                                                    i: number
                                                                                ) =>
                                                                                    i !== index
                                                                            );

                                                                        setData({
                                                                            ...data,
                                                                            approachSection:
                                                                            {
                                                                                ...data.approachSection,
                                                                                items:
                                                                                    updated,
                                                                            },
                                                                        });

                                                                    }}
                                                                    className="text-red-400 hover:text-red-300 text-sm"
                                                                >
                                                                    Delete
                                                                </button>

                                                                {/* ARROW */}
                                                                <span className="text-gray-500 group-open/item:rotate-180 transition-transform">
                                                                    ▼
                                                                </span>

                                                            </div>

                                                        </summary>

                                                        {/* ITEM BODY */}
                                                        <div className="px-5 pb-5 border-t border-[#2a2a2a] space-y-4">

                                                            {/* TITLE */}
                                                            <div className="pt-4">

                                                                <label className="block mb-2 text-sm text-gray-400">
                                                                    Title
                                                                </label>

                                                                <input
                                                                    type="text"
                                                                    placeholder="Enter title"
                                                                    value={item.title}
                                                                    onChange={(e) => {

                                                                        const updated = [
                                                                            ...data.approachSection.items,
                                                                        ];

                                                                        updated[index].title =
                                                                            e.target.value;

                                                                        setData({
                                                                            ...data,
                                                                            approachSection:
                                                                            {
                                                                                ...data.approachSection,
                                                                                items:
                                                                                    updated,
                                                                            },
                                                                        });

                                                                    }}
                                                                    className="w-full bg-[#171717] border border-[#2a2a2a] rounded-xl px-4 py-3 outline-none"
                                                                />

                                                            </div>

                                                            {/* DESCRIPTION */}
                                                            <div>

                                                                <label className="block mb-2 text-sm text-gray-400">
                                                                    Description
                                                                </label>

                                                                <textarea
                                                                    rows={4}
                                                                    placeholder="Enter description"
                                                                    value={item.desc}
                                                                    onChange={(e) => {

                                                                        const updated = [
                                                                            ...data.approachSection.items,
                                                                        ];

                                                                        updated[index].desc =
                                                                            e.target.value;

                                                                        setData({
                                                                            ...data,
                                                                            approachSection:
                                                                            {
                                                                                ...data.approachSection,
                                                                                items:
                                                                                    updated,
                                                                            },
                                                                        });

                                                                    }}
                                                                    className="w-full bg-[#171717] border border-[#2a2a2a] rounded-xl px-4 py-3 outline-none resize-none"
                                                                />

                                                            </div>

                                                        </div>

                                                    </details>
                                                )
                                            )
                                        }

                                    </div>

                                </div>

                            </details>

                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="space-y-6 sticky top-6 h-fit">

                        {/* CTA */}
                        <div className="bg-[#171717] border border-[#262626] rounded-3xl overflow-hidden">

                            <details className="group">

                                {/* HEADER */}
                                <summary className="flex items-center justify-between cursor-pointer list-none p-6">

                                    <div>

                                        <h2 className="text-2xl font-semibold">
                                            CTA Section
                                        </h2>

                                        <p className="text-sm text-gray-400 mt-1">
                                            Manage call to action content
                                        </p>

                                    </div>

                                    {/* ARROW */}
                                    <span className="text-gray-500 text-lg group-open:rotate-180 transition-transform">
                                        ▼
                                    </span>

                                </summary>

                                {/* BODY */}
                                <div className="px-6 pb-6 border-t border-[#262626]">

                                    <div className="space-y-5 pt-6">

                                        <input
                                            type="text"
                                            placeholder="Title"
                                            value={data.ctaSection.title}
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    ctaSection: {
                                                        ...data.ctaSection,
                                                        title: e.target.value,
                                                    },
                                                })
                                            }
                                            className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl px-4 py-3 outline-none"
                                        />

                                        <textarea
                                            rows={4}
                                            placeholder="Description"
                                            value={data.ctaSection.description}
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    ctaSection: {
                                                        ...data.ctaSection,
                                                        description: e.target.value,
                                                    },
                                                })
                                            }
                                            className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl px-4 py-3 outline-none resize-none"
                                        />

                                        <input
                                            type="text"
                                            placeholder="Button Text"
                                            value={data.ctaSection.buttonText}
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    ctaSection: {
                                                        ...data.ctaSection,
                                                        buttonText: e.target.value,
                                                    },
                                                })
                                            }
                                            className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl px-4 py-3 outline-none"
                                        />

                                        <input
                                            type="text"
                                            placeholder="Button Link"
                                            value={data.ctaSection.buttonLink}
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    ctaSection: {
                                                        ...data.ctaSection,
                                                        buttonLink: e.target.value,
                                                    },
                                                })
                                            }
                                            className="w-full bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl px-4 py-3 outline-none"
                                        />

                                    </div>

                                </div>

                            </details>

                        </div>

                        {/* SETTINGS */}
                        <div className="bg-[#171717] border border-[#262626] rounded-3xl p-6">

                            <h2 className="text-2xl font-semibold mb-6">
                                Settings
                            </h2>

                            <div className="flex items-center justify-between bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl px-4 py-4">

                                <div>
                                    <h3 className="font-medium">
                                        Active
                                    </h3>

                                    <p className="text-xs text-gray-500 mt-1">
                                        Enable homepage
                                    </p>
                                </div>

                                <input
                                    type="checkbox"
                                    checked={data.isActive}
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            isActive:
                                                e.target
                                                    .checked,
                                        })
                                    }
                                    className="w-5 h-5"
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}