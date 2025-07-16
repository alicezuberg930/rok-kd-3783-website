import { Typography } from "@mui/material";

type Props = {
    description: string
}

export default function DescriptionTab({ description }: Props) {
    return (
        <Typography variant="body2">
            {description}
        </Typography>
    )
}