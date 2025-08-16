'use client'
import { Box, Button, Container, Stack } from "@mui/material";
import React, { useState } from "react";
import DescriptionTab from "./tab/DescriptionTab";
import SpecificationTab from "./tab/SpecificationTab";
import ReviewTab from "./tab/ReviewTab";

const description = `
Beryl Cook is one of Britain's most talented and amusing artists .Beryl’s pictures feature women of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband and
It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and the death of spouses or grown children leaving for college are all reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a streamlined plan of cooking that is more efficient for one person creating less
`

const tabTypes = [
    {
        title: 'description',
        component: <DescriptionTab description={description} />
    },
    {
        title: 'specification',
        component: <SpecificationTab />
    },
    {
        title: 'comment',
        component: <ReviewTab />
    },
    {
        title: 'review',
        component: <ReviewTab />
    },
]

export default function ProductDescriptionSection() {
    const [currentTab, setCurrentTab] = useState<string>(tabTypes[3].title)

    return (
        <Container maxWidth='lg'>
            <Box sx={{ my: 12.5, border: (theme) => `1px solid ${theme.palette.grey[200]}` }}>
                <Stack
                    direction='row' spacing={2} justifyContent='center'
                    sx={{ py: 2, bgcolor: (theme) => theme.palette.grey[200] }}
                >
                    {tabTypes.map(tab => (
                        <Button key={tab.title}
                            variant="contained" onClick={() => setCurrentTab(tab.title)}
                            color={`${currentTab == tab.title ? 'info' : 'success'}`}
                        >
                            {tab.title}
                        </Button>
                    ))}
                </Stack>
                <Box p={2}>
                    {tabTypes.map(tab => (
                        <Box key={tab.title} display={tab.title === currentTab ? 'block' : 'none'}>
                            {tab.component}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Container>
    )
}