'use client';

import { useContext } from "react";
import { ShareContext } from "../context/ShareContext";
import { ShareContextType } from "../types/interfaces/interfaces";

export const useShareContext = (): ShareContextType => {
    const context = useContext(ShareContext);

    if (context === null) {
        throw new Error(
            'useShareContext deve ser usado dentro de um ShareProvider'
        );
    }
    return context;
}