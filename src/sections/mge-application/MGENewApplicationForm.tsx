'use client'
import * as Yup from 'yup'
import { useCallback, useEffect, useMemo } from 'react'
// form
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
// @mui
import { LoadingButton } from '@mui/lab'
import { Card, Grid, Stack, Typography, MenuItem, Box } from '@mui/material'
// routes
import { PATH_DASHBOARD } from '@/routes/paths'
// @types
import { IMGEApplication } from '@/@types/mge'
// components
import { CustomFile } from '@/components/upload'
import FormProvider, {
    RHFSelect,
    RHFUpload,
    RHFTextField,
    RHFMultiCheckbox,
} from '@/components/hook-form'
import { useRouter } from 'next/navigation'
import { useSnackbar } from '@/components/snackbar'
import { sendMEGApplicationAPI } from '@/utils/httpClient'

// ----------------------------------------------------------------------

interface FormValuesProps extends IMGEApplication {
    // profileImageFile: CustomFile | string | null
    // equipmentImage: CustomFile | string | null
    // resourcesImage: CustomFile | string | null
    // speedupsImage: CustomFile | string | null
}

type Props = {
    isEdit?: boolean
    currentMge?: IMGEApplication
}

export default function MGENewApplicationForm({ isEdit, currentMge }: Props) {
    const navigate = useRouter()
    const { enqueueSnackbar } = useSnackbar()

    const unitTypes = [
        { value: 'infantry', label: 'Infantry' },
        { value: 'cavalry', label: 'Cavalry' },
        { value: 'archer', label: 'Archer' },
    ]

    const combatTypes = [
        { value: 'rally', label: 'Rally' },
        { value: 'garrison', label: 'Garrison' },
        { value: 'openfield', label: 'Open Field' },
    ]

    const commanders = [
        { value: 'Charles Martel', label: 'Charles Martel' },
        { value: 'El Cid', label: 'El Cid' },
        { value: 'Ragnar Lodbrok', label: 'Ragnar Lodbrok' },
    ]

    const NewApplicationSchema = Yup.object().shape({
        governorId: Yup.number().required('Governor ID is required'),
        governorName: Yup.string().required('Governor name is required'),
        profileImage: Yup.mixed().required('Profile image is required'),
        unitTypeSpecialty: Yup.array().min(1).required('Unit type specialty is required'),
        combatTypeSpecialty: Yup.array().min(1).required('Combat type specialty is required'),
        commanderName: Yup.string().required('Commander name is required'),
        vipLevel: Yup.number().required('VIP level is required').min(0, 'VIP level must be at least 0'),
        equipmentImage: Yup.mixed().required('Equipment image is required'),
        resourcesImage: Yup.mixed().required('Resources image is required'),
        speedupsImage: Yup.mixed().required('Speedups image is required'),
    })

    const defaultValues = useMemo(() => ({
        governorId: 0,
        governorName: '',
        commanderName: commanders[0].value,
        vipLevel: 0,
        unitTypeSpecialty: [],
        combatTypeSpecialty: [],
        otherInfo: ''
    }), [currentMge])

    const methods = useForm<FormValuesProps>({
        resolver: yupResolver(NewApplicationSchema),
        defaultValues,
    })

    const {
        reset,
        watch,
        setValue,
        handleSubmit,
        formState: { isSubmitting },
    } = methods

    const values = watch()

    // useEffect(() => {
    //     if (isEdit && currentMge) {
    //         reset(defaultValues)
    //     }
    //     if (!isEdit) {
    //         reset(defaultValues)
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [isEdit, currentMge])

    const onSubmit = async (data: FormValuesProps) => {
        const formData = new FormData()
        Object.entries(data).forEach(([key, value]) => {
            if (value instanceof File || typeof value === 'string') {
                formData.append(key, value)
            } else if (Array.isArray(value)) {
                formData.append(key, JSON.stringify(value))
            } else {
                formData.append(key, String(value))
            }
        })
        try {
            const response = await sendMEGApplicationAPI(formData)
            enqueueSnackbar('Application submitted successfully', { variant: 'success' })
        } catch (error) {
            enqueueSnackbar('Failed to submit application', { variant: 'error' })
        }
    }

    const handleDrop = useCallback(
        (acceptedFiles: File[], name: string) => {
            const newFile = Object.assign(acceptedFiles[0], {
                preview: URL.createObjectURL(acceptedFiles[0]),
            })
            if (name === 'profileImage') setValue('profileImage', newFile, { shouldValidate: true })
            if (name === 'equipmentImage') setValue('equipmentImage', newFile, { shouldValidate: true })
            if (name === 'resourcesImage') setValue('resourcesImage', newFile, { shouldValidate: true })
            if (name === 'speedupsImage') setValue('speedupsImage', newFile, { shouldValidate: true })
        },
        [setValue, values.profileImage, values.equipmentImage, values.resourcesImage, values.speedupsImage]
    )

    const handleRemoveFile = (name: string) => {
        if (name === 'profileImage') setValue('profileImage', null)
        if (name === 'equipmentImage') setValue('equipmentImage', null)
        if (name === 'resourcesImage') setValue('resourcesImage', null)
        if (name === 'speedupsImage') setValue('speedupsImage', null)
    }

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Card sx={{ p: 3 }}>
                        <Box
                            gap={3}
                            display='grid'
                            gridTemplateColumns={{
                                xs: 'repeat(1, 1fr)',
                                sm: 'repeat(2, 1fr)',
                            }}
                        >
                            <RHFTextField name='governorId' label='Type your governor ID' type='number' />
                            <RHFTextField name='governorName' label='Type your name' />
                            <RHFTextField name='vipLevel' label='Type your VIP level' type='number' />
                            <RHFSelect name='commanderName' label='Choose the commander you want'>
                                {commanders.map(commander => (
                                    <MenuItem key={commander.value} value={commander.value}>
                                        {commander.label}
                                    </MenuItem>
                                ))}
                            </RHFSelect>

                            <RHFMultiCheckbox name='unitTypeSpecialty' options={unitTypes} label='What is your main unit type' />

                            <RHFMultiCheckbox name='combatTypeSpecialty' options={combatTypes} label='What is your combat specialty' />

                            <Stack spacing={1}>
                                <Typography variant='subtitle2' sx={{ color: 'text.secondary' }}>
                                    Upload a screenshot of your profle
                                </Typography>

                                <RHFUpload
                                    thumbnail
                                    name='profileImage'
                                    maxSize={3145728}
                                    onDrop={(files) => handleDrop(files, 'profileImage')}
                                    onDelete={() => handleRemoveFile('profileImage')}
                                    onUpload={() => console.log(values.profileImage)}
                                />
                            </Stack>

                            <Stack spacing={1}>
                                <Typography variant='subtitle2' sx={{ color: 'text.secondary' }}>
                                    Upload a screenshot of your equipment
                                </Typography>

                                <RHFUpload
                                    thumbnail
                                    name='equipmentImage'
                                    maxSize={3145728}
                                    onDrop={(files) => handleDrop(files, 'equipmentImage')}
                                    onDelete={() => handleRemoveFile('equipmentImage')}
                                    onUpload={() => console.log(values.equipmentImage)}
                                />
                            </Stack>

                            <Stack spacing={1}>
                                <Typography variant='subtitle2' sx={{ color: 'text.secondary' }}>
                                    Upload a screenshot of your resources
                                </Typography>

                                <RHFUpload
                                    thumbnail
                                    name='resourcesImage'
                                    maxSize={3145728}
                                    onDrop={(files) => handleDrop(files, 'resourcesImage')}
                                    onDelete={() => handleRemoveFile('resourcesImage`')}
                                    onUpload={() => console.log(values.resourcesImage)}
                                />
                            </Stack>

                            <Stack spacing={1}>
                                <Typography variant='subtitle2' sx={{ color: 'text.secondary' }}>
                                    Upload a screenshot of your speedups
                                </Typography>

                                <RHFUpload
                                    thumbnail
                                    name='speedupsImage'
                                    maxSize={3145728}
                                    onDrop={(files) => handleDrop(files, 'speedupsImage')}
                                    onDelete={() => handleRemoveFile('speedupsImage')}
                                    onUpload={() => console.log(values.speedupsImage)}
                                />
                            </Stack>
                        </Box>

                        <Box mt={3}>
                            <RHFTextField name="otherInfo" label="Other info (Optional)" multiline rows={3} />
                        </Box>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card sx={{ p: 3 }}>
                        <LoadingButton type='submit' variant='contained' size='large' loading={isSubmitting} sx={{ ml: 2 }}>
                            Send Application
                        </LoadingButton>
                    </Card>
                </Grid>
            </Grid>
        </FormProvider>
    )
}
