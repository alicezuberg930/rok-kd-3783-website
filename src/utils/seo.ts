import type { Metadata } from 'next'

export default function generateMetadata({
    title = "Ecommerce",
    description = "Công ty xuất nhập khẩu TS nhập về nhiều loại mô hình nhân vật anime đẹp và bền lâu với giá rẻ.",
    keywords = "figure, anime, mô hình, làm đẹp, e-commerce",
    url = "https://wibu-website-cms.vercel.app",
    image = "/assets/OG-image.jpg",
}): Metadata {
    return {
        title,
        description,
        keywords,
        openGraph: {
            title,
            description,
            url,
            images: [{ url: image }],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },
    }
}
