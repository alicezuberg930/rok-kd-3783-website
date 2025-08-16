import { PATH_PAGE, ROOTS_HOME } from '@/routes/paths'
import { Button, Menu, MenuItem, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { useRouter } from 'next/navigation'
import React, { MouseEvent, useState } from 'react'

const navigations = [
    {
        title: 'Home',
        link: ROOTS_HOME
    },
    {
        title: 'Shop',
        subMenus: [
            {
                title: 'Shop category',
                link: PATH_PAGE.category,
            },
            // {
            //     title: 'Product details',
            //     link: PATH_PAGE.productDetails,
            // },
            {
                title: 'Product checkout',
                link: PATH_PAGE.checkout,
            },
            {
                title: 'Shopping cart',
                link: PATH_PAGE.cart,
            },
            {
                title: 'Confirmation',
                link: PATH_PAGE.confirmation,
            },
        ]
    },
    {
        title: 'Blog',
        subMenus: [
            {
                title: 'Blog',
                link: PATH_PAGE.productDetails,
            },
            {
                title: 'Blog details',
                link: PATH_PAGE.productDetails,
            },
        ]
    },
    {
        title: 'Pages',
        subMenus: [
            {
                title: 'Login',
                link: PATH_PAGE.productDetails,
            },
            {
                title: 'Tracking',
                link: PATH_PAGE.productDetails,
            },
            {
                title: 'Elements',
                link: PATH_PAGE.productDetails,
            },
        ]
    },
    {
        title: 'Contact',
        link: PATH_PAGE.productDetails
    },
]

export default function PagesSection() {
    const [anchorEls, setAnchorEls] = useState<{ [key: string]: Element | null }>({})
    const router = useRouter()

    const handleClick = (event: MouseEvent, title: string) => {
        setAnchorEls((prev) => ({ ...prev, [title]: event.currentTarget }))
    }

    const handleClose = (title: string) => {
        setAnchorEls((prev) => ({ ...prev, [title]: null }))
    }

    return (
        <Stack direction='row' spacing={3}>
            {
                navigations.map(item => (
                    <React.Fragment key={item.title}>
                        <Button onClick={(e) => handleClick(e, item.title)}>
                            <Typography sx={{ ':hover': { color: 'orange' } }} variant='subtitle1'>
                                {item.title}
                            </Typography>
                        </Button>
                        {item.subMenus && (
                            <Menu
                                id={`menu-${item.title}`}
                                anchorEl={anchorEls[item.title]}
                                keepMounted
                                open={Boolean(anchorEls[item.title])}
                                onClose={() => handleClose(item.title)}
                            >
                                {
                                    item.subMenus.map((subItem, index) => (
                                        <MenuItem
                                            onClick={() => router.push(subItem.link)} key={subItem.title}
                                            sx={{
                                                paddingY: 2,
                                                borderBottom: index < item.subMenus.length - 1 ? '.2px solid rgba(185, 185, 185, 0.2)' : 'none',
                                            }}
                                        >
                                            {subItem.title}
                                        </MenuItem>
                                    ))
                                }
                            </Menu>
                        )}
                    </React.Fragment>
                ))
            }
        </Stack >
    )
}