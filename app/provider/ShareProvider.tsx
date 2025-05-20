'use client';

import { useCallback, useMemo } from 'react';
import { ShareContext } from '../context/ShareContext';
import { ChildrenProps } from '../types/interfaces/interfaces';

export function ShareProvider({ children }: ChildrenProps) {
    const toggleShare = useCallback(({ title }: { title: string }) => {
        const shareData = {
            title,
            text: `Confira a resenha de "${title}"`,
            url: window.location.href,
        };

        if (navigator.share) {
            navigator
                .share(shareData)
                .catch((error) => console.error("Erro ao compartilhar: ", error));
        } else {
            alert("Compartilhamento não suportado nesse navegador.")
        }
    }, []);

    const contextValue = useMemo(
        () => ({
            toggleShare
        }), [toggleShare]
    )

    return (
        <ShareContext.Provider value={contextValue}>
            {children}
        </ShareContext.Provider>
    )
}