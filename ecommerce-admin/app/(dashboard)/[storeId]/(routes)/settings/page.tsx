import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";
import { SettingsForm } from "./settings-form";

interface SettingPageProps {
    params: { 
        storeId: string
    };
};

const SettingPage: React.FC<SettingPageProps> = async ({ params }) => {
    const { userId } = await auth();
    const { storeId } = await params;

    if (!userId) {
        redirect("/sign-in");
    }

    const store = await prismadb.store.findFirst({
        where: {
            id: storeId,
            userId,
        },
    });

    if (!store) {
        redirect("/");
    }

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <SettingsForm initialData={store} />
            </div>
        </div>
    )
}

export default SettingPage;