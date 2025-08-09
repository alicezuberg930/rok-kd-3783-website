import MGEApplicationPage from "@/page/MGEApplicationPage"

export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    return (<MGEApplicationPage id={id} />)
}