import ImageCardReview from "../../atoms/main/imageCardReview/ImageCardReview";
import Title from "../../atoms/main/title/Title";
import Text from "../../atoms/main/text/Text";
import Button from "../../atoms/main/button/Button";
import Photo from "@/public/latest-book.jpg"
import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function BookDetails() {
    const t = useTranslations('BookDetails');

    return (
        <section className="py-12 px-4">
            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <ImageCardReview src={Photo} alt="Divinos Rivais" />

                <div className="flex flex-col justify-between">
                    <div>
                        <Title>{t('BookTitle')}</Title>
                        <Text className="text-gray-700 text-base leading-relaxed">{t('BookReview')}</Text>
                    </div>

                    <Link href="/home" className="mt-6 w-fit">
                        <Button>{t('Back')}</Button>
                    </Link>
                </div>
            </div></section>


    );
}
