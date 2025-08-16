'use client'
import CustomBreadcrumbs from "@/components/custom-breadcrumbs";
import Image from "@/components/image";
import useMGE from "@/hooks/api/useMGE";
import { PATH_DASHBOARD } from "@/routes/paths";
import { Box, Card, Container, Stack, TextField, Typography } from "@mui/material";
import { SkeletonProductDetails } from "@/components/skeleton";
import Page500 from "./Page500";
import Label from "@/components/label";

export default function MGEApplicationPage({ id }: { id: string }) {
    const { getMGEDetails } = useMGE()
    const { data, isLoading, isError } = getMGEDetails(id)

    if (isError) {
        return (<Page500 />)
    }

    return (
        <Container maxWidth='lg'>
            <CustomBreadcrumbs
                heading="MGE Application Details"
                links={[
                    { name: 'Home', href: PATH_DASHBOARD.root },
                    { name: 'MGE List', href: '/mge-list' },
                    { name: id },
                ]}
            />
            {isLoading ? (
                <SkeletonProductDetails />
            ) : (
                <Card sx={{ p: 3 }}>
                    <Box
                        gap={3}
                        display='grid'
                        gridTemplateColumns={{
                            xs: 'repeat(1, 1fr)',
                            sm: 'repeat(2, 1fr)',
                        }}
                    >
                        <Stack gap={1}>
                            <Typography variant='subtitle2' sx={{ color: 'text.secondary' }}>
                                Profile Image
                            </Typography>
                            {typeof data?.data.profileImage === "string" && (
                                <Box sx={{ borderRadius: 2, overflow: 'hidden' }}>
                                    <Image src={data?.data.profileImage} ratio='16/9' />
                                </Box>
                            )}
                        </Stack>

                        <Stack gap={1}>
                            <Typography variant='subtitle2' sx={{ color: 'text.secondary' }}>
                                Equipment Image
                            </Typography>
                            {typeof data?.data.equipmentImage === "string" && (
                                <Box sx={{ borderRadius: 2, overflow: 'hidden' }}>
                                    <Image src={data?.data.equipmentImage} ratio='16/9' />
                                </Box>
                            )}
                        </Stack>

                        <Stack gap={1}>
                            <Typography variant='subtitle2' sx={{ color: 'text.secondary' }}>
                                Speedups Image
                            </Typography>
                            {typeof data?.data.speedupsImage === "string" && (
                                <Box sx={{ borderRadius: 2, overflow: 'hidden' }}>
                                    <Image src={data?.data.speedupsImage} ratio='16/9' />
                                </Box>
                            )}
                        </Stack>

                        <Stack gap={1}>
                            <Typography variant='subtitle2' sx={{ color: 'text.secondary' }}>
                                Resources Image
                            </Typography>
                            {typeof data?.data.resourcesImage === "string" && (
                                <Box sx={{ borderRadius: 2, overflow: 'hidden' }}>
                                    <Image src={data?.data.resourcesImage} ratio='16/9' />
                                </Box>
                            )}
                        </Stack>

                        <Stack gap={1}>
                            <Typography variant='subtitle2' sx={{ color: 'text.secondary' }}>
                                Governor ID
                            </Typography>
                            <TextField value={data?.data.governorId} disabled />
                        </Stack>

                        <Stack gap={1}>
                            <Typography variant='subtitle2' sx={{ color: 'text.secondary' }}>
                                Governor Name
                            </Typography>
                            <TextField value={data?.data.governorName} disabled />
                        </Stack>

                        <Stack gap={1}>
                            <Typography variant='subtitle2' sx={{ color: 'text.secondary' }}>
                                VIP Level
                            </Typography>
                            <TextField value={data?.data.vipLevel} disabled />
                        </Stack>

                        <Stack gap={1}>
                            <Typography variant='subtitle2' sx={{ color: 'text.secondary' }}>
                                Commander wanted
                            </Typography>
                            <TextField value={data?.data.commanderName} disabled />
                        </Stack>

                        <Stack gap={1}>
                            <Typography variant='subtitle2' sx={{ color: 'text.secondary' }}>
                                Governor's unit type specialty
                            </Typography>
                            <Stack gap={1} flexWrap='wrap' direction='row'>
                                {data?.data.unitTypeSpecialty.map(type => (
                                    <Label color='info'>{type}</Label>
                                ))}
                            </Stack>
                        </Stack>

                        <Stack gap={1}>
                            <Typography variant='subtitle2' sx={{ color: 'text.secondary' }}>
                                Governor's combat type specialty
                            </Typography>
                            <Stack gap={1} flexWrap='wrap' direction='row'>
                                {data?.data.combatTypeSpecialty.map(type => (
                                    <Label color='info'>{type}</Label>
                                ))}
                            </Stack>
                        </Stack>

                        <Stack gap={1}>
                            <Typography variant='subtitle2' sx={{ color: 'text.secondary' }}>
                                Other info
                            </Typography>
                            <TextField value={data?.data.otherInfo} disabled />
                        </Stack>
                    </Box>
                </Card>
            )}
        </Container>
    )
}