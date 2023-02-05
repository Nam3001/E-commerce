import React, { Fragment } from 'react'

import './GlobalStyle.css'

const GlobalStyle: React.FC<BaseProps> = ({ children }: BaseProps) => {
    return <Fragment>{children}</Fragment>
}

export default GlobalStyle
