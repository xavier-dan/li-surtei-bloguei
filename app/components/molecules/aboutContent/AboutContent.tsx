import Title from "../../atoms/main/title/Title";
import Text from "../../atoms/main/text/Text";
import ImageAbout from "../../atoms/main/imageAbout/ImageAbout";
import Photo from '@/public/about.png';
import { useTranslations } from 'next-intl';

export default function AboutContent() {
    const t = useTranslations('About');

    return (
        <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
                <ImageAbout src={Photo} alt="Imagem da seção Sobre" />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
                <Title>{t('AboutTitle')}</Title>
                <Text>{t('AboutText')}</Text>
            </div>
        </div>
    );
}
