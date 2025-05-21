import { ComponentType } from "react";

export interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export interface ChildrenProps {
  children: React.ReactNode;
}

export interface TextProps extends ChildrenProps {
  className?: string;
}

export interface IconLinkProps {
  href: string;
  size: number;
  icon: ComponentType<{ size?: number | string; className?: string }>;
  label?: string;
}

export interface BookProps {
  id: string;
  title: string;
  authors: string[];
  thumbnail: string;
  reviewSnippet: string;
}

export interface BookCardProps {
  book: BookProps;
}

export interface BookListProps {
  books: BookProps[];
}

export interface FavoriteButtonProps {
  isActive: boolean;
  onClick: (e: React.MouseEvent) => void;
}

export interface ShareButtonProps {
  onClick: (e: React.MouseEvent) => void;
}

export interface GoogleBookItem {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    description?: string;
    imageLinks?: {
      thumbnail?: string;
    };
  };
}

export interface FavoritesContextType {
  favoriteIds: string[];
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string) => void;
}

export interface ShareContextType {
  toggleShare: (book: { title: string }) => void;
}

export interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  rows?: number;
}

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  options: { value: string; label: string }[];
  error?: string;
}

export interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}
