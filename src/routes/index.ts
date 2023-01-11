import React from 'react'

import { routes } from '@/config'
import Home from '@/pages/Home'
import Cart from '@/pages/Cart'
import News from '@/pages/News'
import Laptop from '@/pages/Laptop'
import Phone from '@/pages/Phone'
import Promotion from '@/pages/Promotion'
import PCPage from '@/pages/PCPage'
import Tablet from '@/pages/Tablet'
import Apple from '@/pages/Apple'
import SimCardPage from '@/pages/SimCardPage'
import ServicePage from '@/pages/ServicePage'
import Accessory from '@/pages/Accessory'
import NotFound from '@/pages/NotFound'
import ProductDetail from '@/pages/ProductDetail'

interface Route {
    path: string
    component: React.ElementType
    layout?: null | React.FC | React.Component
}

const publicRoutes: Route[] = [
    { path: routes.notFound, component: NotFound, layout: null },
    { path: routes.home, component: Home },
    { path: routes.cart, component: Cart },
    { path: routes.news, component: News },
    { path: routes.laptop, component: Laptop },
    { path: routes.phone, component: Phone },
    { path: routes.promotion, component: Promotion },
    { path: routes.PC, component: PCPage },
    { path: routes.tablet, component: Tablet },
    { path: routes.apple, component: Apple },
    { path: routes.SIMCard, component: SimCardPage },
    { path: routes.service, component: ServicePage },
    { path: routes.accessory, component: Accessory },
    { path: routes.productDetail, component: ProductDetail }
]

const privateRoutes: Route[] = []

export { publicRoutes, privateRoutes }
