import ImageCardReview from "../../atoms/main/imageCardReview/ImageCardReview";
import Title from "../../atoms/main/title/Title";
import Text from "../../atoms/main/text/Text";
import Button from "../../atoms/main/button/Button";
import Photo from "@/public/latest-book.jpg"
import Link from "next/link";

export default function BookDetails() {
    return (
        <section className="py-12 px-4">
            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <ImageCardReview src={Photo} alt="Divinos Rivais" />

                <div className="flex flex-col justify-between">
                    <div>
                        <Title>Divinos Rivais</Title>
                        <Text className="text-gray-700 text-base leading-relaxed">Divinos Rivais é um livro que mistura fantasia, romance e mitologia de forma envolvente e cativante. A trama gira em torno de personagens que possuem poderes sobrenaturais e que, ao longo da narrativa, enfrentam desafios tanto internos quanto externos, envolvendo rivalidades intensas que colocam suas habilidades e sentimentos à prova.<br/>

                            A escrita é fluida e consegue transportar o leitor para um universo cheio de mistérios, com reviravoltas surpreendentes e um ritmo que prende do começo ao fim. Os personagens são bem construídos, com motivações claras e conflitos emocionais profundos, o que torna a leitura ainda mais envolvente.<br />

                            Além da aventura e da tensão gerada pelas rivalidades, o livro também explora temas como amizade, lealdade, sacrifício e a luta entre o bem e o mal. A mitologia presente na história é um ponto alto, trazendo referências interessantes que enriquecem o enredo e a ambientação. <br />

                            Divinos Rivais é uma ótima opção para quem gosta de histórias que combinam fantasia, ação e romance, entregando uma narrativa emocionante e cheia de surpresas.</Text>
                    </div>

                    <Link href="/home" className="mt-6 w-fit">
                        <Button>Voltar</Button>
                    </Link>
                </div>
            </div></section>


    );
}
