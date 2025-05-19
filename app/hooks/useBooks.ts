import { useEffect, useState } from 'react';
import { BookProps, GoogleBookItem } from '../types/interfaces/interfaces';

export const useBooks = (query: string = 'inpublisher:Seguinte') => {
    const [books, setBooks] = useState<BookProps[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
                const data = await response.json();
                const listaLivros: BookProps[] = data.items.map((item: GoogleBookItem) => ({
                    id: item.id,
                    title: item.volumeInfo.title,
                    authors: item.volumeInfo.authors || ['Autor Desconhecido'],
                    thumbnail: item.volumeInfo.imageLinks?.thumbnail
                        ? item.volumeInfo.imageLinks.thumbnail.replace('zoom=1', 'zoom=2')
                        : '/placeholder.png',
                    reviewSnippet: item.volumeInfo.description?.slice(0, 120) + '...' || 'Descrição Indisponível'
                }));
                setBooks(listaLivros);
            } catch (error) {
                console.error('Erro ao buscar livros:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchBooks();
    }, [query]);

    return { books, loading };
};