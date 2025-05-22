import { Container, Typography } from "@mui/material";
import CommentCard from "../../molecules/commentCard/CommentCard";
import { comments } from "@/app/data/comments/comments";
import { useTranslations } from 'next-intl';


export default function Comment() {
    const t = useTranslations('Comments');

    return (
        <main className="py-10 bg-gray-50 min-h-screen">
            <Container maxWidth="md">
                <Typography variant="h3" className="font-bold uppercase text-center mt-7 mb-5">
                    {t('Title')}
                </Typography>

                {comments.map((comment, index) => (
                    <CommentCard
                        key={index}
                        name={comment.name}
                        avatar={comment.avatar}
                        comment={comment.comment}
                        bookTitle={comment.bookTitle}
                    />
                ))}
            </Container>
        </main>
    );
};