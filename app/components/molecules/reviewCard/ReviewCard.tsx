'use client';

import { useFavoritesContext } from '@/app/hooks/useFavoritesContext';
import { FavoriteButton } from '../../atoms/main/favoriteButton/FavoriteButton';
import { ShareButton } from '../../atoms/main/shareButton/ShareButton';
import { BookCardProps } from '@/app/types/interfaces/interfaces';
import ImageCardReview from '../../atoms/main/imageCardReview/ImageCardReview';
import Text from '../../atoms/main/text/Text';

import { useShareContext } from '@/app/hooks/useShareContext';

export default function ReviewCard({ book }: BookCardProps) {
    const { isFavorite, toggleFavorite } = useFavoritesContext();

    const favorite = isFavorite(book.id);

    const alertaResenha = () => {
        alert("Resenha em produção!");
    }

    const { toggleShare } = useShareContext();

    return (
        <div
            onClick={alertaResenha}
            className="relative h-full flex flex-col border border-black shadow-md overflow-hidden bg-white w-full max-w-sm cursor-pointer
                    hover:shadow-xl hover:scale-[1.03] transition-transform duration-200 ease-in-out"
        >
            <ImageCardReview src={book.thumbnail} alt={book.title} />
            <div className="p-4 flex flex-col flex-grow justify-between">
                <div>
                    <h3 className="my-4 text-lg font-bold tracking-wide text-center">{book.title.toUpperCase()}</h3>
                </div>
                <div>
                    <Text className="text-sm text-gray-500 mb-2">{`por ${book.authors.join(', ')}`}</Text>
                    <Text className="text-sm my-3 text-gray-700 text-justify">{book.reviewSnippet}</Text>
                </div>
            </div>
            <div className="flex justify-end gap-4 my-4 mr-4">
                <FavoriteButton
                    isActive={favorite}
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(book.id);
                    }}
                />
                <ShareButton onClick={(e) => {
                    e.stopPropagation();
                    toggleShare(book)
                }} />
            </div>
        </div>
    );
}
