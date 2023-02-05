import React from 'react'
import { Box } from '@chakra-ui/react'

import Header from '@/components/Header'
import HeaderMenuPC from '@/components/HeaderMenuPC'

const MainLayout = ({ children }: BaseProps): JSX.Element => {
    return (
        <Box>
            <Header />
            <HeaderMenuPC />
            {children}
        </Box>
    )
}

export default MainLayout
