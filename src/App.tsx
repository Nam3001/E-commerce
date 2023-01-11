import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes'
import MainLayout from './layouts/MainLayout'

function App() {
    return (
        <Routes>
            {publicRoutes.map((route, idx) => {
                const Element = route.component

                /**
                 * route.layout == undefined => MainLayout
                 * route.layout == null => don't has layout
                 * route.layout: Component => that component
                 */
                let Layout = MainLayout as React.ElementType
                if (route.layout === null) Layout = Fragment
                else if (!!route.layout)
                    Layout = route.layout as React.ElementType

                return (
                    <Route
                        key={idx}
                        path={route.path}
                        element={
                            <Layout>
                                <Element />
                            </Layout>
                        }
                    />
                )
            })}
        </Routes>
    )
}

export default App
