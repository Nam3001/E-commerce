import React from 'react'
import Header from '@/components/Header'

interface Props {
    children?: JSX.Element[] | JSX.Element
}

const MainLayout = ({ children }: Props): JSX.Element => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default MainLayout
