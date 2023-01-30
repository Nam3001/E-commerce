import React, { Fragment } from 'react'
import { BaseProps } from '@/interfaces'

import './GlobalStyle.css'

const GlobalStyle: React.FC<BaseProps> = ({ children }: BaseProps) => {
    return <Fragment>{children}</Fragment>
}

export default GlobalStyle
