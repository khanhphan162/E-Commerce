import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";
import { MainNav } from "./main-nav";
import StoreSwitcher from "./store-switcher";

const Navbar = async() => {
    const {userId} = await auth();

    if (!userId) {
        redirect("/sign-in");
    }

    const stores = await prismadb.store.findMany({
        where: {
            userId,
        },
    });
    return (  
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <StoreSwitcher items={stores}/>
                <MainNav className="mx-6"/>
                <div className="ml-auto flex items-center space-x-4">
                    <UserButton afterSwitchSessionUrl="/"/>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;