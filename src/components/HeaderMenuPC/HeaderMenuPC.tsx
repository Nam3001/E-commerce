import React, { useState } from 'react'
import { Box, Container, Flex } from '@chakra-ui/react'
import { PCMenu } from '@/config/menu'
import MenuItem from './MenuItem'

const HeaderMenuPC: React.FC = () => {
    return (
        <Box className="menu" height="36px" bg="dark">
            <Container
                maxW={{ sm: '100%', xl: '1200px' }}
                px="8px"
                h="100%"
                position="relative"
            >
                <Flex justifyContent="space-between" h="100%">
                    {PCMenu.map((item, idx) => (
                        <MenuItem data={item} key={idx} label={item.label} />
                    ))}
                </Flex>
            </Container>
        </Box>
    )
}

export default HeaderMenuPC
