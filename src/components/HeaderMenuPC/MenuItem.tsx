import React, { useRef, useEffect, useState } from 'react'
import { Box, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'

MenuItem.propTypes = {
    label: PropTypes.string,
    data: PropTypes.object
}
interface Props {
    label: string
    data: StandardMenu | MenuMoreInfo
}

function MenuItem({ label, data }: Props): JSX.Element {
    label = label.toUpperCase()

    const [isShowSubMenu, setIsShowSubMenu] = useState(false)

    const handleMouseEnter = () => setIsShowSubMenu(true)
    const handleMouseLeave = () => setIsShowSubMenu(false)

    return (
        <Box
            cursor="pointer"
            bg="dark"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Text color="white" fontSize="sm" my="8px">
                {label}
            </Text>
            {isShowSubMenu && (
                <Box
                    sx={{
                        height: '300px',
                        backgroundColor: 'red',
                        width: '100vw',
                        position: 'fixed',
                        left: 0
                    }}
                ></Box>
            )}
        </Box>
    )
}

export default MenuItem
