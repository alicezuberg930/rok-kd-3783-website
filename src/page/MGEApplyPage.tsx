// @mui
import { Container } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '@/routes/paths';
// components
import CustomBreadcrumbs from '@/components/custom-breadcrumbs';
import MGENewApplicationForm from '@/sections/mge-application/MGENewApplicationForm';

export default function MGEApplyPage() {
    return (
        <Container maxWidth='xl'>
            <CustomBreadcrumbs
                heading="MGE Application Form"
                links={[
                    {
                        name: 'Home',
                        href: PATH_DASHBOARD.root,
                    },
                    {
                        name: 'MGE Application',
                        href: '#',
                    },
                    { name: 'New' },
                ]}
            />
            <MGENewApplicationForm />
        </Container>
    )
}