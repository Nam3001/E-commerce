import React from 'react'
import { Box, Text, Center } from '@chakra-ui/react'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
    content: string
    icon: IconDefinition
    color?: string
}

const NavItem: React.FC<Props> = ({ content, icon, color = '#FFF' }) => {
    return (
        <Box as="button" mt="1">
            <Center>
                <FontAwesomeIcon icon={icon} color={color} />
            </Center>
            <Text
                sx={{
                    width: 'fit-content',
                    whiteSpace: 'nowrap',
                    fontSize: '14px',
                    color: '#FFF',
                    margin: '0 10px'
                }}
            >
                {content}
            </Text>
        </Box>
    )
}

export default NavItem
