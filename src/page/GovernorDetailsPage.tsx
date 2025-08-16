'use client'
import { IGorvernor } from "@/@types/gorvernor";
import { Card, Container } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function GovernorDetailsPage({ governorId }: { governorId: string }) {
    const [governor, setGovernor] = useState<IGorvernor | null>(null)

    useEffect(() => {
        const fetchGovernorDetails = async () => {
            try {
                const response = await axios.get('https://script.google.com/macros/s/AKfycbySG8akWSG1OXjOFyqdP4y3qRGxAnXe5Yw_14dFo1W_7HjMCSOWq4jFc04N7uqA7k3s/exec', {
                    params: { governorId }
                });
                setGovernor(response.data?.data);
            } catch (error) {
                console.error('Error fetching governor details:', error);
            }
        }
        fetchGovernorDetails()
    }, [])

    return (
        <Container maxWidth="xl">
            <Card>
                {/* {JSON.stringify(governor, null, 2)} */}
            </Card>
        </Container>
    )
}