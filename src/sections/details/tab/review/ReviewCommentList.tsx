import { CustomAvatar } from "@/components/custom-avatar"
import Iconify from "@/components/iconify"
import { Box, Stack, Typography } from "@mui/material"


const comments = [
    {
        fullname: "Blake Ruiz",
        avatar: "https://themewagon.github.io/karma/img/product/review-1.png",
        star: 4,
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
    },
    {
        fullname: "Blake Ruiz 2",
        avatar: "https://themewagon.github.io/karma/img/product/review-2.png",
        star: 2,
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
    },
    {
        fullname: "Blake Ruiz 3",
        avatar: "https://themewagon.github.io/karma/img/product/review-3.png",
        star: 5,
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
    },
]

export default function ReviewCommentList() {
    return (
        <Stack spacing={3} mt={4}>
            {comments.map(comment => (
                <Box key={comment.avatar}>
                    <Stack direction='row' spacing={1} alignItems='center' mb={1}>
                        <CustomAvatar alt={comment.avatar} src={comment.avatar} sx={{ width: 64, height: 64 }} />
                        <Stack spacing={1}>
                            <Typography variant='subtitle2'>{comment.fullname}</Typography>
                            <Stack direction='row'>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Iconify key={i} icon='ri:star-fill' color={comment.star > i ? `yellow` : `inherit`} width={14} />
                                ))}
                            </Stack>
                        </Stack>
                    </Stack>
                    <Typography variant='body2'>{comment.comment}</Typography>
                </Box>
            ))}
        </Stack>
    )
}