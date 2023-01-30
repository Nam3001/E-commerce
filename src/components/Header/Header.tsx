import React from 'react'
import iconhd from '@/assets/img/iconhd.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMagnifyingGlass,
    faFileInvoice,
    faCoins,
    faUser,
    faCartShopping
} from '@fortawesome/free-solid-svg-icons'
import { Box, Text, Container, Flex, Button, Input } from '@chakra-ui/react'
import NavItem from '../NavItem'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface NavProp {
    content: string
    icon: IconDefinition
}
const navList: NavProp[] = [
    {
        content: 'Thông tin hay',
        icon: faFileInvoice
    },
    {
        content: 'Thanh toán & tiện ích',
        icon: faCoins
    },
    {
        content: 'Tài khoản của tôi',
        icon: faUser
    },
    {
        content: 'Giỏ hàng',
        icon: faCartShopping
    }
]

const Header: React.FC = () => {
    return (
        <>
            <Box bg="header" height="56px">
                <Container
                    maxW={{ sm: '100%', xl: '1200px' }}
                    px="8px"
                    h="100%"
                >
                    <Flex align="center" h="100%">
                        <Link to="/">
                            <Box
                                sx={{
                                    width: '151px',
                                    height: '40px',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: '-2px -6px',
                                    backgroundImage: `url('${iconhd}')`
                                }}
                            />
                        </Link>
                        <Flex maxW="496px" basis="100%" mx="12">
                            <Input
                                height="38px"
                                borderRadius="base"
                                borderRightRadius="none"
                                bg="#FFF"
                                placeholder="Nhập tên điện thoại, máy tính, phụ kiện... cần tìm"
                                _placeholder={{ fontSize: '0.9rem' }}
                            />
                            <Button
                                bg="dark"
                                _hover={{
                                    bg: 'dark'
                                }}
                                borderLeftRadius="none"
                                h="38px"
                            >
                                <FontAwesomeIcon
                                    icon={faMagnifyingGlass}
                                    color="#FFF"
                                />
                            </Button>
                        </Flex>
                        <Flex>
                            {navList.map((nav) => (
                                <NavItem
                                    content={nav.content}
                                    icon={nav.icon}
                                />
                            ))}
                        </Flex>
                    </Flex>
                </Container>
            </Box>
            <Box className="menu" height="36px" bg="dark">
                <Container maxW={{ sm: '100%', xl: '1200px' }} px="8px">
                    <Box height="100%" maxW="100%">
                        hello
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Header
