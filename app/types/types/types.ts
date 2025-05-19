import { StaticImageData } from "next/image";

export type NavLinkProps = {
    href: string;
    children: React.ReactNode;
};

export type ImageProps = {
    src: StaticImageData | string;
    alt: string;
    width?: number;
    height?: number;
    quality?: number;
    priority?: boolean;
}

export type InputProps = {
    placeholder?: string;
    type?: string;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    value?: string;
}

export type TextAreaProps = {
    placeholder?: string;
    className?: string;
    name?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export type TextProps = {
    children: React.ReactNode;
    className?: string;
}