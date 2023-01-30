import { extendTheme } from '@chakra-ui/react'

const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px'
}

const customTheme = extendTheme({
    styles: {
        global: {
            'html, body': {
                fontFamily: 'Roboto'
            }
        }
    },
    breakpoints,
    colors: {
        header: '#CD1818',
        dark: '#252525'
    }
})

export default customTheme
