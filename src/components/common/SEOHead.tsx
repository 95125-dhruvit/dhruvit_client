// components/SEOHead.tsx

import { Helmet } from "react-helmet-async";

type SEOProps = {
    title: string;
    description: string;

    keywords?: string;

    image?: string;

    url?: string;

    // NEW
    noIndex?: boolean;

    noFollow?: boolean;

    author?: string;

    ogType?: string;

    twitterCard?: string;

    themeColor?: string;
};

export default function SEOHead({
    title,
    description,

    keywords,

    image = "/preview.png",

    url = "https://yourdomain.com",

    noIndex = false,

    noFollow = false,

    author = "Dhruvit Harshadbhai Soni",

    ogType = "website",

    twitterCard = "summary_large_image",

    themeColor = "#000000",

}: SEOProps) {

    const robotsContent = `
        ${noIndex ? "noindex" : "index"},
        ${noFollow ? "nofollow" : "follow"}
    `;

    return (
        <Helmet>

            {/* ================= BASIC SEO ================= */}
            <title>{title}</title>

            <meta
                name="description"
                content={description}
            />

            <meta
                name="keywords"
                content={keywords}
            />

            <meta
                name="author"
                content={author}
            />

            <meta
                name="robots"
                content={robotsContent}
            />

            {/* ================= OPEN GRAPH ================= */}
            <meta
                property="og:type"
                content={ogType}
            />

            <meta
                property="og:title"
                content={title}
            />

            <meta
                property="og:description"
                content={description}
            />

            <meta
                property="og:image"
                content={image}
            />

            <meta
                property="og:url"
                content={url}
            />

            {/* ================= TWITTER ================= */}
            <meta
                name="twitter:card"
                content={twitterCard}
            />

            <meta
                name="twitter:title"
                content={title}
            />

            <meta
                name="twitter:description"
                content={description}
            />

            <meta
                name="twitter:image"
                content={image}
            />

            {/* ================= THEME ================= */}
            <meta
                name="theme-color"
                content={themeColor}
            />

            {/* ================= CANONICAL ================= */}
            <link
                rel="canonical"
                href={url}
            />

        </Helmet>
    );
}