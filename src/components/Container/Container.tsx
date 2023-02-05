import React from 'react'
import { Container as ChakraContainer } from '@chakra-ui/react'

const Container: React.FC<BaseProps> = ({ children }) => {
    return (
        <ChakraContainer
            maxW={{ sm: '100%', md: '640px', lg: '910px', xl: '1200px' }}
            px="8px"
        >
            {children}
        </ChakraContainer>
    )
}

export default Container
