"use client";

import {useEffect, useState} from "react";

import { StoreModal } from "@/components/modals/store-modal";

export const ModalProvider = ()=> {
    const [mounted, setIsMounted] = useState(false);

    // This effect ensures that the component is mounted before rendering
    // This is useful for avoiding hydration issues in Next.js
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <>
            <StoreModal />
        </>
    );
}