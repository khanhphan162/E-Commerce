import prismadb from "@/lib/prismadb";


import { BillboardForm } from "./components/billboard-form";

type Params = Promise<{ billboardId: string }>;

const BillboardPage = async ({
    params,
}: {
    params: Params,
}) => {
    const { billboardId } = await params

    const billboard = await prismadb.billboard.findUnique({
        where: {
            id: billboardId
        }
    });


    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <BillboardForm initialData={billboard} />
            </div>
        </div>
    )
}

export default BillboardPage;