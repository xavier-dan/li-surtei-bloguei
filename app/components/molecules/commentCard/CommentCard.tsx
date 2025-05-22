import { Avatar, Card, CardContent, Typography, Chip } from "@mui/material";

interface CommentCardProps {
    name: string;
    avatar?: string;
    comment: string;
    bookTitle: string;
}

export default function CommentCard({ name, avatar, comment, bookTitle }: CommentCardProps) {
    return (
        <Card className="my-4 shadow-md">
            <CardContent className="flex gap-4 items-start">
                <Avatar src={avatar} alt={name} />
                <div className="flex flex-col gap-1">
                    <Typography variant="subtitle1" className="font-semibold">
                        {name}
                    </Typography>
                    <Typography variant="body2" className="text-gray-700">
                        {comment}
                    </Typography>
                    <Chip
                        label={bookTitle}
                        variant="outlined"
                        size="small"
                        className="mt-2 w-fit"
                    />
                </div>
            </CardContent>
        </Card>
    );
}