'use client'
import { Box, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import slugify from "slugify";
// ...existing code...

export default function EquipmentBuilderPage() {
    // ...existing code...

    const [inputValue, setInputValue] = useState("");
    const [slugValue, setSlugValue] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        setSlugValue(slugify(value, { lower: false }).replace("'", ""));
    };

    // ...existing code...
    return (
        <Container maxWidth='xl'>
            <Typography variant="h3">Equipment Builder</Typography>
            {/* Slugify input example */}
            <Box sx={{ mb: 4 }}>
                <Stack direction="row" spacing={2} alignItems="center">
                    <Box>
                        <Typography variant="subtitle2">Name</Typography>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            style={{ padding: 8, width: 200 }}
                        />
                    </Box>
                    <Box>
                        <Typography variant="subtitle2">Slug</Typography>
                        <input
                            type="text"
                            value={slugValue}
                            readOnly
                            style={{ padding: 8, width: 200, background: "#f5f5f5" }}
                        />
                    </Box>
                </Stack>
            </Box>
            {/* ...existing code... */}
        </Container>
    )
}