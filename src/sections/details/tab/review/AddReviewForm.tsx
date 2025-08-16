import * as Yup from 'yup';
import { useCallback, useEffect, useMemo } from 'react';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Box, Card, Grid, Stack, Typography, InputAdornment, Button, Container } from '@mui/material';
// @types

// components
import { useSnackbar } from '@/components/snackbar';
import FormProvider, {
    RHFSwitch,
    RHFSelect,
    RHFTextField,
    RHFRadioGroup,
    RHFAutocomplete,
} from '@/components/hook-form';
import LoadingButton from '@/theme/overrides/LoadingButton';
import Iconify from '@/components/iconify';

// ----------------------------------------------------------------------

const GENDER_OPTION = [
    { label: 'Men', value: 'Men' },
    { label: 'Women', value: 'Women' },
    { label: 'Kids', value: 'Kids' },
];

const CATEGORY_OPTION = [
    { group: 'Clothing', classify: ['Shirts', 'T-shirts', 'Jeans', 'Leather'] },
    { group: 'Tailored', classify: ['Suits', 'Blazers', 'Trousers', 'Waistcoats'] },
    { group: 'Accessories', classify: ['Shoes', 'Backpacks and bags', 'Bracelets', 'Face masks'] },
];

const TAGS_OPTION = [
    'Toy Story 3',
    'Logan',
    'Full Metal Jacket',
    'Dangal',
    'The Sting',
    '2001: A Space Odyssey',
    "Singin' in the Rain",
    'Toy Story',
    'Bicycle Thieves',
    'The Kid',
    'Inglourious Basterds',
    'Snatch',
    '3 Idiots',
];

// ----------------------------------------------------------------------

interface FormValuesProps {
    fullname: string
    email: string
    phone: string
    review: string
}

export default function AddReviewForm() {
    const { enqueueSnackbar } = useSnackbar();

    const NewReviewSchema = Yup.object().shape({
        fullname: Yup.string().required('Name is required'),
        email: Yup.string().required('Email is required'),
        phone: Yup.string().required('Phone is required'),
        review: Yup.string().required('Review is required'),
    });

    const defaultValues = useMemo(() => ({
        fullname: '',
        email: '',
        phone: '',
        review: '',
    }), []);

    const methods = useForm<FormValuesProps>({
        resolver: yupResolver(NewReviewSchema),
        defaultValues,
    });

    const {
        reset,
        watch,
        setValue,
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const values = watch();

    const onSubmit = async (data: FormValuesProps) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 500));
            reset();
            enqueueSnackbar('Review Added');
            console.log('DATA', data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container>
            <Box>
                <Typography variant="h4" gutterBottom>Add a Review</Typography>
                <Stack direction='row' alignItems='center' spacing={1} mb={2}>
                    <Typography variant="body1">Your rating:</Typography>
                    <Stack direction='row'>
                        <Iconify icon='ri:star-fill' width={14} />
                        <Iconify icon='ri:star-fill' width={14} />
                        <Iconify icon='ri:star-fill' width={14} />
                        <Iconify icon='ri:star-fill' width={14} />
                        <Iconify icon='ri:star-fill' width={14} />
                    </Stack>
                </Stack>
            </Box>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={3}>
                    <Stack spacing={2} mt={2}>
                        <RHFTextField name="fullname" label="Your full name" />

                        <RHFTextField name="email" label="Email address" />

                        <RHFTextField name="phone" label="Phone number" />

                        <RHFTextField name="review" label="Review" />
                    </Stack>

                    <Button type="submit" variant="contained">
                        Submit Now
                    </Button>
                </Stack>
            </FormProvider>
        </Container>
    )
}