interface BaseProps {
    children?: JSX.Element[] | JSX.Element
}

declare interface StandardMenu {
    label: string
    path: string
}
interface MenuMoreInfo {
    label: string
    path: string
    category: StandardMenu[]
}
