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

                        <p
                            className="
                text-blue-500
                font-medium
                tracking-[0.25em]
                uppercase
                text-sm
                mb-3
            "
                        >
                            Admin Panel
                        </p>

                        <h1
                            className="
                text-3xl
                font-black
                tracking-tight
                text-white
            "
                        >
                            Home Page Settings
                        </h1>

                        <p className="text-gray-400 mt-2">
                            Manage all homepage content
                        </p>

                    </div>

                    <button
                        onClick={saveData}
                        disabled={loading}
                        className="
            inline-flex
            items-center
            gap-2
            px-6
            py-3
            rounded-2xl
            bg-blue-500
            hover:bg-blue-600
            disabled:opacity-60
            disabled:cursor-not-allowed
            text-white
            font-semibold
            transition-all
            duration-300
            shadow-lg
            shadow-blue-500/20
        "
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
                        <div
                            className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-gray-200
        dark:border-white/10
        bg-white/60
        dark:bg-white/[0.04]
        backdrop-blur-2xl
    "
                        >

                            {/* TOP LIGHT */}
                            <div
                                className="
            absolute
            top-0
            left-0
            h-[2px]
            w-full
            bg-gradient-to-r
            from-transparent
            via-blue-500/60
            to-transparent
        "
                            />

                            <details className="group">

                                {/* HEADER */}
                                <summary
                                    className="
                flex
                items-center
                justify-between
                cursor-pointer
                list-none
                p-6
            "
                                >

                                    <div>

                                        <p
                                            className="
                        text-blue-500
                        font-medium
                        tracking-[0.25em]
                        uppercase
                        text-xs
                        mb-3
                    "
                                        >
                                            Homepage
                                        </p>

                                        <h2
                                            className="
                        text-2xl
                        font-bold
                        tracking-tight
                    "
                                        >
                                            Hero Section
                                        </h2>

                                        <p className="text-sm text-gray-400 mt-1">
                                            Manage hero section content
                                        </p>

                                    </div>

                                    {/* ARROW */}
                                    <div
                                        className="
                    w-11
                    h-11
                    rounded-2xl
                    border
                    border-gray-200
                    dark:border-white/10
                    bg-white/50
                    dark:bg-white/[0.03]
                    flex
                    items-center
                    justify-center
                    text-gray-400
                    group-open:rotate-180
                    transition-all
                    duration-300
                "
                                    >
                                        ▼
                                    </div>

                                </summary>

                                {/* BODY */}
                                <div
                                    className="
                px-6
                pb-6
                border-t
                border-gray-200
                dark:border-white/10
            "
                                >

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
                                                            greeting: e.target.value,
                                                        },
                                                    })
                                                }
                                                className="
                            w-full
                            rounded-2xl
                            border
                            border-gray-200
                            dark:border-white/10
                            bg-white/70
                            dark:bg-white/[0.03]
                            px-4
                            py-3
                            outline-none
                            transition-all
                            focus:border-blue-500/40
                            focus:bg-white
                            dark:focus:bg-white/[0.05]
                        "
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
                                                            heroImage: e.target.value,
                                                        },
                                                    })
                                                }
                                                className="
                            w-full
                            rounded-2xl
                            border
                            border-gray-200
                            dark:border-white/10
                            bg-white/70
                            dark:bg-white/[0.03]
                            px-4
                            py-3
                            outline-none
                            transition-all
                            focus:border-blue-500/40
                            focus:bg-white
                            dark:focus:bg-white/[0.05]
                        "
                                            />

                                        </div>

                                        <div className="md:col-span-2">

                                            <label className="block text-sm text-gray-400 mb-2">
                                                Typing Texts (comma separated)
                                            </label>

                                            <input
                                                type="text"
                                                value={data.hero.typingTexts.join(", ")}
                                                onChange={(e) =>
                                                    setData({
                                                        ...data,
                                                        hero: {
                                                            ...data.hero,
                                                            typingTexts: e.target.value
                                                                .split(",")
                                                                .map((item: string) =>
                                                                    item.trim()
                                                                ),
                                                        },
                                                    })
                                                }
                                                className="
                            w-full
                            rounded-2xl
                            border
                            border-gray-200
                            dark:border-white/10
                            bg-white/70
                            dark:bg-white/[0.03]
                            px-4
                            py-3
                            outline-none
                            transition-all
                            focus:border-blue-500/40
                            focus:bg-white
                            dark:focus:bg-white/[0.05]
                        "
                                            />

                                        </div>

                                        <div className="md:col-span-2">

                                            <label className="block text-sm text-gray-400 mb-2">
                                                Description
                                            </label>

                                            <textarea
                                                rows={4}
                                                value={data.hero.description}
                                                onChange={(e) =>
                                                    setData({
                                                        ...data,
                                                        hero: {
                                                            ...data.hero,
                                                            description: e.target.value,
                                                        },
                                                    })
                                                }
                                                className="
                            w-full
                            rounded-[28px]
                            border
                            border-gray-200
                            dark:border-white/10
                            bg-white/70
                            dark:bg-white/[0.03]
                            px-4
                            py-3
                            outline-none
                            resize-none
                            transition-all
                            focus:border-blue-500/40
                            focus:bg-white
                            dark:focus:bg-white/[0.05]
                        "
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
                                                            primaryButtonText: e.target.value,
                                                        },
                                                    })
                                                }
                                                className="
                            w-full
                            rounded-2xl
                            border
                            border-gray-200
                            dark:border-white/10
                            bg-white/70
                            dark:bg-white/[0.03]
                            px-4
                            py-3
                            outline-none
                            transition-all
                            focus:border-blue-500/40
                            focus:bg-white
                            dark:focus:bg-white/[0.05]
                        "
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
                                                            primaryButtonLink: e.target.value,
                                                        },
                                                    })
                                                }
                                                className="
                            w-full
                            rounded-2xl
                            border
                            border-gray-200
                            dark:border-white/10
                            bg-white/70
                            dark:bg-white/[0.03]
                            px-4
                            py-3
                            outline-none
                            transition-all
                            focus:border-blue-500/40
                            focus:bg-white
                            dark:focus:bg-white/[0.05]
                        "
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
                                                            secondaryButtonText: e.target.value,
                                                        },
                                                    })
                                                }
                                                className="
                            w-full
                            rounded-2xl
                            border
                            border-gray-200
                            dark:border-white/10
                            bg-white/70
                            dark:bg-white/[0.03]
                            px-4
                            py-3
                            outline-none
                            transition-all
                            focus:border-blue-500/40
                            focus:bg-white
                            dark:focus:bg-white/[0.05]
                        "
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
                                                            secondaryButtonLink: e.target.value,
                                                        },
                                                    })
                                                }
                                                className="
                            w-full
                            rounded-2xl
                            border
                            border-gray-200
                            dark:border-white/10
                            bg-white/70
                            dark:bg-white/[0.03]
                            px-4
                            py-3
                            outline-none
                            transition-all
                            focus:border-blue-500/40
                            focus:bg-white
                            dark:focus:bg-white/[0.05]
                        "
                                            />

                                        </div>

                                    </div>

                                </div>

                            </details>

                        </div>





                        {/* SYSTEMS */}
                        <div
                            className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-gray-200
        dark:border-white/10
        bg-white/60
        dark:bg-white/[0.04]
        backdrop-blur-2xl
    "
                        >

                            {/* TOP LIGHT */}
                            <div
                                className="
            absolute
            top-0
            left-0
            h-[2px]
            w-full
            bg-gradient-to-r
            from-transparent
            via-blue-500/60
            to-transparent
        "
                            />

                            <details className="group">

                                {/* MAIN HEADER */}
                                <summary
                                    className="
                flex
                items-center
                justify-between
                cursor-pointer
                list-none
                p-6
            "
                                >

                                    <div>

                                        <p
                                            className="
                        text-blue-500
                        font-medium
                        tracking-[0.25em]
                        uppercase
                        text-xs
                        mb-3
                    "
                                        >
                                            Homepage
                                        </p>

                                        <h2
                                            className="
                        text-2xl
                        font-bold
                        tracking-tight
                    "
                                        >
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
                                            className="
                        inline-flex
                        items-center
                        gap-2
                        px-5
                        py-2.5
                        rounded-2xl
                        bg-blue-500
                        hover:bg-blue-600
                        text-white
                        font-medium
                        transition-all
                        duration-300
                        shadow-lg
                        shadow-blue-500/20
                    "
                                        >
                                            + Add Item
                                        </button>

                                        {/* ARROW */}
                                        <div
                                            className="
                        w-11
                        h-11
                        rounded-2xl
                        border
                        border-gray-200
                        dark:border-white/10
                        bg-white/50
                        dark:bg-white/[0.03]
                        flex
                        items-center
                        justify-center
                        text-gray-400
                        group-open:rotate-180
                        transition-all
                        duration-300
                    "
                                        >
                                            ▼
                                        </div>

                                    </div>

                                </summary>

                                {/* BODY */}
                                <div
                                    className="
                px-6
                pb-6
                border-t
                border-gray-200
                dark:border-white/10
            "
                                >

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
                                            className="
                        w-full
                        rounded-2xl
                        border
                        border-gray-200
                        dark:border-white/10
                        bg-white/70
                        dark:bg-white/[0.03]
                        px-4
                        py-3
                        outline-none
                        transition-all
                        focus:border-blue-500/40
                        focus:bg-white
                        dark:focus:bg-white/[0.05]
                    "
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
                                                        className="
                                    group/item
                                    overflow-hidden
                                    rounded-[24px]
                                    border
                                    border-gray-200
                                    dark:border-white/10
                                    bg-white/50
                                    dark:bg-white/[0.03]
                                    backdrop-blur-xl
                                "
                                                    >

                                                        {/* ITEM HEADER */}
                                                        <summary
                                                            className="
                                        flex
                                        items-center
                                        justify-between
                                        cursor-pointer
                                        list-none
                                        px-5
                                        py-4
                                    "
                                                        >

                                                            <div>

                                                                <h3 className="font-semibold text-white">
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
                                                                                items: updated,
                                                                            },
                                                                        });

                                                                    }}
                                                                    className="
                                                px-4
                                                py-2
                                                rounded-xl
                                                border
                                                border-red-500/20
                                                bg-red-500/10
                                                text-red-400
                                                hover:bg-red-500/20
                                                transition-all
                                                duration-300
                                                text-sm
                                            "
                                                                >
                                                                    Delete
                                                                </button>

                                                                {/* ARROW */}
                                                                <div
                                                                    className="
                                                w-10
                                                h-10
                                                rounded-xl
                                                border
                                                border-gray-200
                                                dark:border-white/10
                                                bg-white/50
                                                dark:bg-white/[0.03]
                                                flex
                                                items-center
                                                justify-center
                                                text-gray-400
                                                group-open/item:rotate-180
                                                transition-all
                                                duration-300
                                            "
                                                                >
                                                                    ▼
                                                                </div>

                                                            </div>

                                                        </summary>

                                                        {/* ITEM BODY */}
                                                        <div
                                                            className="
                                        px-5
                                        pb-5
                                        border-t
                                        border-gray-200
                                        dark:border-white/10
                                        space-y-4
                                    "
                                                        >

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
                                                                                items: updated,
                                                                            },
                                                                        });

                                                                    }}
                                                                    className="
                                                w-full
                                                rounded-2xl
                                                border
                                                border-gray-200
                                                dark:border-white/10
                                                bg-white/70
                                                dark:bg-white/[0.03]
                                                px-4
                                                py-3
                                                outline-none
                                                transition-all
                                                focus:border-blue-500/40
                                                focus:bg-white
                                                dark:focus:bg-white/[0.05]
                                            "
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
                                                                                items: updated,
                                                                            },
                                                                        });

                                                                    }}
                                                                    className="
                                                w-full
                                                rounded-[24px]
                                                border
                                                border-gray-200
                                                dark:border-white/10
                                                bg-white/70
                                                dark:bg-white/[0.03]
                                                px-4
                                                py-3
                                                outline-none
                                                resize-none
                                                transition-all
                                                focus:border-blue-500/40
                                                focus:bg-white
                                                dark:focus:bg-white/[0.05]
                                            "
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
                        <div
                            className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-gray-200
        dark:border-white/10
        bg-white/60
        dark:bg-white/[0.04]
        backdrop-blur-2xl
    "
                        >

                            {/* TOP LIGHT */}
                            <div
                                className="
            absolute
            top-0
            left-0
            h-[2px]
            w-full
            bg-gradient-to-r
            from-transparent
            via-blue-500/60
            to-transparent
        "
                            />

                            <details className="group">

                                {/* MAIN HEADER */}
                                <summary
                                    className="
                flex
                items-center
                justify-between
                cursor-pointer
                list-none
                p-6
            "
                                >

                                    <div>

                                        <p
                                            className="
                        text-blue-500
                        font-medium
                        tracking-[0.25em]
                        uppercase
                        text-xs
                        mb-3
                    "
                                        >
                                            Homepage
                                        </p>

                                        <h2
                                            className="
                        text-2xl
                        font-bold
                        tracking-tight
                    "
                                        >
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
                                            className="
                        inline-flex
                        items-center
                        gap-2
                        px-5
                        py-2.5
                        rounded-2xl
                        bg-blue-500
                        hover:bg-blue-600
                        text-white
                        font-medium
                        transition-all
                        duration-300
                        shadow-lg
                        shadow-blue-500/20
                    "
                                        >
                                            + Add Item
                                        </button>

                                        {/* ARROW */}
                                        <div
                                            className="
                        w-11
                        h-11
                        rounded-2xl
                        border
                        border-gray-200
                        dark:border-white/10
                        bg-white/50
                        dark:bg-white/[0.03]
                        flex
                        items-center
                        justify-center
                        text-gray-400
                        group-open:rotate-180
                        transition-all
                        duration-300
                    "
                                        >
                                            ▼
                                        </div>

                                    </div>

                                </summary>

                                {/* BODY */}
                                <div
                                    className="
                px-6
                pb-6
                border-t
                border-gray-200
                dark:border-white/10
            "
                                >

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
                                            className="
                        w-full
                        rounded-2xl
                        border
                        border-gray-200
                        dark:border-white/10
                        bg-white/70
                        dark:bg-white/[0.03]
                        px-4
                        py-3
                        outline-none
                        transition-all
                        focus:border-blue-500/40
                        focus:bg-white
                        dark:focus:bg-white/[0.05]
                    "
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
                                                        className="
                                    group/item
                                    overflow-hidden
                                    rounded-[24px]
                                    border
                                    border-gray-200
                                    dark:border-white/10
                                    bg-white/50
                                    dark:bg-white/[0.03]
                                    backdrop-blur-xl
                                "
                                                    >

                                                        {/* ITEM HEADER */}
                                                        <summary
                                                            className="
                                        flex
                                        items-center
                                        justify-between
                                        cursor-pointer
                                        list-none
                                        px-5
                                        py-4
                                    "
                                                        >

                                                            <div>

                                                                <h3 className="font-semibold text-white">
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
                                                                                items: updated,
                                                                            },
                                                                        });

                                                                    }}
                                                                    className="
                                                px-4
                                                py-2
                                                rounded-xl
                                                border
                                                border-red-500/20
                                                bg-red-500/10
                                                text-red-400
                                                hover:bg-red-500/20
                                                transition-all
                                                duration-300
                                                text-sm
                                            "
                                                                >
                                                                    Delete
                                                                </button>

                                                                {/* ARROW */}
                                                                <div
                                                                    className="
                                                w-10
                                                h-10
                                                rounded-xl
                                                border
                                                border-gray-200
                                                dark:border-white/10
                                                bg-white/50
                                                dark:bg-white/[0.03]
                                                flex
                                                items-center
                                                justify-center
                                                text-gray-400
                                                group-open/item:rotate-180
                                                transition-all
                                                duration-300
                                            "
                                                                >
                                                                    ▼
                                                                </div>

                                                            </div>

                                                        </summary>

                                                        {/* ITEM BODY */}
                                                        <div
                                                            className="
                                        px-5
                                        pb-5
                                        border-t
                                        border-gray-200
                                        dark:border-white/10
                                        space-y-4
                                    "
                                                        >

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
                                                                                items: updated,
                                                                            },
                                                                        });

                                                                    }}
                                                                    className="
                                                w-full
                                                rounded-2xl
                                                border
                                                border-gray-200
                                                dark:border-white/10
                                                bg-white/70
                                                dark:bg-white/[0.03]
                                                px-4
                                                py-3
                                                outline-none
                                                transition-all
                                                focus:border-blue-500/40
                                                focus:bg-white
                                                dark:focus:bg-white/[0.05]
                                            "
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
                                                                                items: updated,
                                                                            },
                                                                        });

                                                                    }}
                                                                    className="
                                                w-full
                                                rounded-[24px]
                                                border
                                                border-gray-200
                                                dark:border-white/10
                                                bg-white/70
                                                dark:bg-white/[0.03]
                                                px-4
                                                py-3
                                                outline-none
                                                resize-none
                                                transition-all
                                                focus:border-blue-500/40
                                                focus:bg-white
                                                dark:focus:bg-white/[0.05]
                                            "
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
                        <div
                            className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-gray-200
        dark:border-white/10
        bg-white/60
        dark:bg-white/[0.04]
        backdrop-blur-2xl
    "
                        >

                            {/* TOP LIGHT */}
                            <div
                                className="
            absolute
            top-0
            left-0
            h-[2px]
            w-full
            bg-gradient-to-r
            from-transparent
            via-blue-500/60
            to-transparent
        "
                            />

                            <details className="group">

                                {/* MAIN HEADER */}
                                <summary
                                    className="
                flex
                items-center
                justify-between
                cursor-pointer
                list-none
                p-6
            "
                                >

                                    <div>

                                        <p
                                            className="
                        text-blue-500
                        font-medium
                        tracking-[0.25em]
                        uppercase
                        text-xs
                        mb-3
                    "
                                        >
                                            Homepage
                                        </p>

                                        <h2
                                            className="
                        text-2xl
                        font-bold
                        tracking-tight
                    "
                                        >
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
                                            className="
                        inline-flex
                        items-center
                        gap-2
                        px-5
                        py-2.5
                        rounded-2xl
                        bg-blue-500
                        hover:bg-blue-600
                        text-white
                        font-medium
                        transition-all
                        duration-300
                        shadow-lg
                        shadow-blue-500/20
                    "
                                        >
                                            + Add Item
                                        </button>

                                        {/* ARROW */}
                                        <div
                                            className="
                        w-11
                        h-11
                        rounded-2xl
                        border
                        border-gray-200
                        dark:border-white/10
                        bg-white/50
                        dark:bg-white/[0.03]
                        flex
                        items-center
                        justify-center
                        text-gray-400
                        group-open:rotate-180
                        transition-all
                        duration-300
                    "
                                        >
                                            ▼
                                        </div>

                                    </div>

                                </summary>

                                {/* BODY */}
                                <div
                                    className="
                px-6
                pb-6
                border-t
                border-gray-200
                dark:border-white/10
            "
                                >

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
                                            className="
                        w-full
                        rounded-2xl
                        border
                        border-gray-200
                        dark:border-white/10
                        bg-white/70
                        dark:bg-white/[0.03]
                        px-4
                        py-3
                        outline-none
                        transition-all
                        focus:border-blue-500/40
                        focus:bg-white
                        dark:focus:bg-white/[0.05]
                    "
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
                                            className="
                        w-full
                        rounded-[24px]
                        border
                        border-gray-200
                        dark:border-white/10
                        bg-white/70
                        dark:bg-white/[0.03]
                        px-4
                        py-3
                        outline-none
                        resize-none
                        transition-all
                        focus:border-blue-500/40
                        focus:bg-white
                        dark:focus:bg-white/[0.05]
                    "
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
                                                        className="
                                    group/item
                                    overflow-hidden
                                    rounded-[24px]
                                    border
                                    border-gray-200
                                    dark:border-white/10
                                    bg-white/50
                                    dark:bg-white/[0.03]
                                    backdrop-blur-xl
                                "
                                                    >

                                                        {/* ITEM HEADER */}
                                                        <summary
                                                            className="
                                        flex
                                        items-center
                                        justify-between
                                        cursor-pointer
                                        list-none
                                        px-5
                                        py-4
                                    "
                                                        >

                                                            <div>

                                                                <h3 className="font-semibold text-white">
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
                                                                                items: updated,
                                                                            },
                                                                        });

                                                                    }}
                                                                    className="
                                                px-4
                                                py-2
                                                rounded-xl
                                                border
                                                border-red-500/20
                                                bg-red-500/10
                                                text-red-400
                                                hover:bg-red-500/20
                                                transition-all
                                                duration-300
                                                text-sm
                                            "
                                                                >
                                                                    Delete
                                                                </button>

                                                                {/* ARROW */}
                                                                <div
                                                                    className="
                                                w-10
                                                h-10
                                                rounded-xl
                                                border
                                                border-gray-200
                                                dark:border-white/10
                                                bg-white/50
                                                dark:bg-white/[0.03]
                                                flex
                                                items-center
                                                justify-center
                                                text-gray-400
                                                group-open/item:rotate-180
                                                transition-all
                                                duration-300
                                            "
                                                                >
                                                                    ▼
                                                                </div>

                                                            </div>

                                                        </summary>

                                                        {/* ITEM BODY */}
                                                        <div
                                                            className="
                                        px-5
                                        pb-5
                                        border-t
                                        border-gray-200
                                        dark:border-white/10
                                        space-y-4
                                    "
                                                        >

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
                                                                                items: updated,
                                                                            },
                                                                        });

                                                                    }}
                                                                    className="
                                                w-full
                                                rounded-2xl
                                                border
                                                border-gray-200
                                                dark:border-white/10
                                                bg-white/70
                                                dark:bg-white/[0.03]
                                                px-4
                                                py-3
                                                outline-none
                                                transition-all
                                                focus:border-blue-500/40
                                                focus:bg-white
                                                dark:focus:bg-white/[0.05]
                                            "
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
                                                                                items: updated,
                                                                            },
                                                                        });

                                                                    }}
                                                                    className="
                                                w-full
                                                rounded-[24px]
                                                border
                                                border-gray-200
                                                dark:border-white/10
                                                bg-white/70
                                                dark:bg-white/[0.03]
                                                px-4
                                                py-3
                                                outline-none
                                                resize-none
                                                transition-all
                                                focus:border-blue-500/40
                                                focus:bg-white
                                                dark:focus:bg-white/[0.05]
                                            "
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
                        <div
                            className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-gray-200
        dark:border-white/10
        bg-white/60
        dark:bg-white/[0.04]
        backdrop-blur-2xl
    "
                        >

                            {/* TOP LIGHT */}
                            <div
                                className="
            absolute
            top-0
            left-0
            h-[2px]
            w-full
            bg-gradient-to-r
            from-transparent
            via-blue-500/60
            to-transparent
        "
                            />

                            <details className="group">

                                {/* HEADER */}
                                <summary
                                    className="
                flex
                items-center
                justify-between
                cursor-pointer
                list-none
                p-6
            "
                                >

                                    <div>

                                        <p
                                            className="
                        text-blue-500
                        font-medium
                        tracking-[0.25em]
                        uppercase
                        text-xs
                        mb-3
                    "
                                        >
                                            Homepage
                                        </p>

                                        <h2
                                            className="
                        text-2xl
                        font-bold
                        tracking-tight
                    "
                                        >
                                            CTA Section
                                        </h2>

                                        <p className="text-sm text-gray-400 mt-1">
                                            Manage call to action content
                                        </p>

                                    </div>

                                    {/* ARROW */}
                                    <div
                                        className="
                    w-11
                    h-11
                    rounded-2xl
                    border
                    border-gray-200
                    dark:border-white/10
                    bg-white/50
                    dark:bg-white/[0.03]
                    flex
                    items-center
                    justify-center
                    text-gray-400
                    group-open:rotate-180
                    transition-all
                    duration-300
                "
                                    >
                                        ▼
                                    </div>

                                </summary>

                                {/* BODY */}
                                <div
                                    className="
                px-6
                pb-6
                border-t
                border-gray-200
                dark:border-white/10
            "
                                >

                                    <div className="space-y-5 pt-6">

                                        {/* TITLE */}
                                        <div>

                                            <label className="block mb-2 text-sm text-gray-400">
                                                Title
                                            </label>

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
                                                className="
                            w-full
                            rounded-2xl
                            border
                            border-gray-200
                            dark:border-white/10
                            bg-white/70
                            dark:bg-white/[0.03]
                            px-4
                            py-3
                            outline-none
                            transition-all
                            focus:border-blue-500/40
                            focus:bg-white
                            dark:focus:bg-white/[0.05]
                        "
                                            />

                                        </div>

                                        {/* DESCRIPTION */}
                                        <div>

                                            <label className="block mb-2 text-sm text-gray-400">
                                                Description
                                            </label>

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
                                                className="
                            w-full
                            rounded-[24px]
                            border
                            border-gray-200
                            dark:border-white/10
                            bg-white/70
                            dark:bg-white/[0.03]
                            px-4
                            py-3
                            outline-none
                            resize-none
                            transition-all
                            focus:border-blue-500/40
                            focus:bg-white
                            dark:focus:bg-white/[0.05]
                        "
                                            />

                                        </div>

                                        {/* BUTTON TEXT */}
                                        <div>

                                            <label className="block mb-2 text-sm text-gray-400">
                                                Button Text
                                            </label>

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
                                                className="
                            w-full
                            rounded-2xl
                            border
                            border-gray-200
                            dark:border-white/10
                            bg-white/70
                            dark:bg-white/[0.03]
                            px-4
                            py-3
                            outline-none
                            transition-all
                            focus:border-blue-500/40
                            focus:bg-white
                            dark:focus:bg-white/[0.05]
                        "
                                            />

                                        </div>

                                        {/* BUTTON LINK */}
                                        <div>

                                            <label className="block mb-2 text-sm text-gray-400">
                                                Button Link
                                            </label>

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
                                                className="
                            w-full
                            rounded-2xl
                            border
                            border-gray-200
                            dark:border-white/10
                            bg-white/70
                            dark:bg-white/[0.03]
                            px-4
                            py-3
                            outline-none
                            transition-all
                            focus:border-blue-500/40
                            focus:bg-white
                            dark:focus:bg-white/[0.05]
                        "
                                            />

                                        </div>

                                    </div>

                                </div>

                            </details>

                        </div>

                        {/* SETTINGS */}
                        <div
                            className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-gray-200
        dark:border-white/10
        bg-white/60
        dark:bg-white/[0.04]
        backdrop-blur-2xl
        p-6
    "
                        >

                            {/* TOP LIGHT */}
                            <div
                                className="
            absolute
            top-0
            left-0
            h-[2px]
            w-full
            bg-gradient-to-r
            from-transparent
            via-blue-500/60
            to-transparent
        "
                            />

                            <div className="relative z-10">

                                <div className="mb-6">

                                    <p
                                        className="
                    text-blue-500
                    font-medium
                    tracking-[0.25em]
                    uppercase
                    text-xs
                    mb-3
                "
                                    >
                                        Homepage
                                    </p>

                                    <h2
                                        className="
                    text-2xl
                    font-bold
                    tracking-tight
                "
                                    >
                                        Settings
                                    </h2>

                                </div>

                                <div
                                    className="
                flex
                items-center
                justify-between
                rounded-[24px]
                border
                border-gray-200
                dark:border-white/10
                bg-white/50
                dark:bg-white/[0.03]
                backdrop-blur-xl
                px-5
                py-5
            "
                                >

                                    <div>

                                        <h3 className="font-semibold text-white">
                                            Active
                                        </h3>

                                        <p className="text-sm text-gray-500 mt-1">
                                            Enable homepage
                                        </p>

                                    </div>

                                    <label
                                        className="
                    relative
                    inline-flex
                    items-center
                    cursor-pointer
                "
                                    >

                                        <input
                                            type="checkbox"
                                            checked={data.isActive}
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    isActive:
                                                        e.target.checked,
                                                })
                                            }
                                            className="sr-only peer"
                                        />

                                        <div
                                            className="
                        w-14
                        h-8
                        rounded-full
                        bg-gray-300
                        dark:bg-white/10
                        peer-checked:bg-blue-500
                        transition-all
                        duration-300
                        relative
                        after:content-['']
                        after:absolute
                        after:top-1
                        after:left-1
                        after:w-6
                        after:h-6
                        after:bg-white
                        after:rounded-full
                        after:transition-all
                        after:duration-300
                        peer-checked:after:translate-x-6
                    "
                                        />

                                    </label>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}