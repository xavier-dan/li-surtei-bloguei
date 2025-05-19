import Title from "../../atoms/main/title/Title";
import Text from "../../atoms/main/text/Text";
import ImageAbout from "../../atoms/main/imageAbout/ImageAbout";
import Photo from '@/public/about.png';

export default function AboutContent() {
    return (
        <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
                <ImageAbout src={Photo} alt="Imagem da seção Sobre" />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
                <Title>Sobre o Blog</Title>
                <Text>
                    Bem-vindo ao meu cantinho literário! Aqui compartilho minhas experiências com livros,
                    resenhas sinceras, e tudo o que me faz vibrar nesse mundo de histórias. Seja você um leitor ávido
                    ou alguém buscando a próxima leitura, esse espaço é feito com carinho para inspirar e conectar
                    apaixonados por livros como eu.
                </Text>
            </div>
        </div>
    );
}
