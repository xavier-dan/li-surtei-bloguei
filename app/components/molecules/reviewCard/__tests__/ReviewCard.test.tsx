import React from 'react';
import type { ImgHTMLAttributes } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReviewCard from '../ReviewCard';
import { BookCardProps } from '@/app/types/interfaces/interfaces';

const mockIsFavorite = jest.fn();
const mockToggleFavorite = jest.fn();
const mockToggleShare = jest.fn();

jest.mock('@/app/hooks/useFavoritesContext', () => ({
    useFavoritesContext: () => ({
        isFavorite: mockIsFavorite,
        toggleFavorite: mockToggleFavorite,
    }),
}));

jest.mock('@/app/hooks/useShareContext', () => ({
    useShareContext: () => ({
        toggleShare: mockToggleShare,
    }),
}));

jest.mock('next/image', () => ({
    __esModule: true,
    default: (props: ImgHTMLAttributes<HTMLImageElement>) => <img {...props} alt={props.alt} />,
}));

const mockBook: BookCardProps['book'] = {
    id: '1',
    title: 'Livro Teste',
    authors: ['Autor 1'],
    thumbnail: 'https://example.com/image.jpg',
    reviewSnippet: 'Snippet do Livro Teste',
};

describe('ReviewCard Component', () => {
    let user: ReturnType<typeof userEvent.setup>;

    beforeEach(() => {
        user = userEvent.setup();
        mockIsFavorite.mockClear();
        mockToggleFavorite.mockClear();
        mockToggleShare.mockClear();
    });

    it('deve renderizar corretamente os dados do livro', () => {
        mockIsFavorite.mockReturnValue(false);

        render(<ReviewCard book={mockBook} />);

        expect(screen.getByAltText(mockBook.title)).toBeInTheDocument();
        expect(screen.getByText(mockBook.title.toUpperCase())).toBeInTheDocument();
        expect(screen.getByText(`por ${mockBook.authors.join(', ')}`)).toBeInTheDocument();
        expect(screen.getByText(mockBook.reviewSnippet)).toBeInTheDocument();
    });

    it('deve chamar toggleFavorite ao clicar no botão de favorito', async () => {
        mockIsFavorite.mockReturnValue(false);

        render(<ReviewCard book={mockBook} />);

        const favoriteBtn = screen.getByRole('button', { name: /Favoritar/i });
        await user.click(favoriteBtn);

        expect(mockToggleFavorite).toHaveBeenCalledTimes(1);
        expect(mockToggleFavorite).toHaveBeenCalledWith(mockBook.id);
    });

    it('deve chamar toggleShare ao clicar no botão de compartilhar', async () => {
        render(<ReviewCard book={mockBook} />);

        const shareBtn = screen.getByRole('button', { name: /Compartilhar/i });
        await user.click(shareBtn);

        expect(mockToggleShare).toHaveBeenCalledTimes(1);
        expect(mockToggleShare).toHaveBeenCalledWith(mockBook);
    });

    it('deve disparar alert ao clicar no card', () => {
        mockIsFavorite.mockReturnValue(false);
        window.alert = jest.fn();

        render(<ReviewCard book={mockBook} />);
        const card = screen.getByText(mockBook.title.toUpperCase()).closest('div');
        expect(card).toBeInTheDocument();
        card!.click();

        expect(window.alert).toHaveBeenCalledWith('Resenha em produção!');
    });
});
