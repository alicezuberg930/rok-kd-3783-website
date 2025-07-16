import { Box, Stack } from "@mui/material";
import AverageRating from "./review/AverageRating";
import AddReviewForm from "./review/AddReviewForm";
import ReviewCommentList from "./review/ReviewCommentList";

export default function ReviewTab() {
    return (
        <Stack direction='row'>
            <Box flex={1}>
                <AverageRating />
                <ReviewCommentList />
            </Box>
            <Box flex={1}>
                <AddReviewForm />
            </Box>
        </Stack>
    )
}