import GovernorDetailsPage from "@/page/GovernorDetailsPage"
import generateMT from "@/utils/seo"

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id
    return generateMT({
        title: `${id}`,
        // image: "/assets/opengraph-image.jpg",
        // url: `https://wibu-website-cms.vercel.app/product/${slug}`,
    })
}

export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    return (<GovernorDetailsPage governorId={id} />)
}