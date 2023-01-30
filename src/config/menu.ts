import { routes } from './routes'

interface StandardMenu {
    label: string
    path: string
}
interface MenuMoreInfo {
    label: string
    path: string
    category: StandardMenu[]
}

export const PCMenu: (StandardMenu | MenuMoreInfo)[] = [
    {
        label: 'Điện thoại',
        path: routes.phone,
        category: [
            { label: 'Apple (iphone)', path: routes.productDetail },
            { label: 'Xiaomi', path: routes.productDetail },
            { label: 'Nokia', path: routes.productDetail },
            { label: 'Samsung', path: routes.productDetail },
            { label: 'Vivo', path: routes.productDetail },
            { label: 'OPPO', path: routes.productDetail },
            { label: 'Asus', path: routes.productDetail },
            { label: 'Realme', path: routes.productDetail }
        ]
    },
    {
        label: 'Laptop',
        path: routes.laptop,
        category: [
            { label: 'Apple (Macbook)', path: routes.productDetail },
            { label: 'Lenovo', path: routes.productDetail },
            { label: 'Dell', path: routes.productDetail },
            { label: 'Microsoft (Surface)', path: routes.productDetail },
            { label: 'Asus', path: routes.productDetail },
            { label: 'MSI', path: routes.productDetail },
            { label: 'Acer', path: routes.productDetail },
            { label: 'Chuwi', path: routes.productDetail },
            { label: 'HP', path: routes.productDetail },
            { label: 'LG', path: routes.productDetail }
        ]
    },
    {
        label: 'Máy tính bảng',
        path: routes.tablet,
        category: [
            { label: 'Apple (iPad)', path: routes.productDetail },
            { label: 'Lenovo', path: routes.productDetail },
            { label: 'OPPO', path: routes.productDetail },
            { label: 'Samsung', path: routes.productDetail },
            { label: 'Xiaomi', path: routes.productDetail }
        ]
    },
    {
        label: 'PC - Linh kiện',
        path: routes.PC,
        category: [
            { label: 'PC', path: routes.PC },
            { label: 'Linh kiện', path: routes.component },
            { label: 'Màn hình', path: routes.screen },
            { label: 'Xây dựng PC', path: routes.productDetail }
        ]
    },
    {
        label: 'Phụ kiện',
        path: routes.accessory,
        category: [
            { label: 'Thẻ nhớ', path: routes.productDetail },
            { label: 'Loa', path: routes.productDetail },
            { label: 'Tai nghe', path: routes.productDetail },
            { label: 'Balo - túi xách', path: routes.productDetail },
            { label: 'Bao da ốp lưng', path: routes.productDetail },
            { label: 'Chuột', path: routes.productDetail },
            { label: 'TV BOX', path: routes.productDetail },
            { label: 'Sạc dự phòng', path: routes.productDetail },
            { label: 'Cáp sạc', path: routes.productDetail },
            { label: 'Miếng dán màn hình', path: routes.productDetail }
        ]
    },
    { label: 'Máy cũ giá rẻ', path: routes.oldProduct },
    { label: 'Hàng gia dụng', path: routes.household },
    { label: 'Sim & thẻ', path: routes.SIMCard },
    { label: 'Khuyến mãi', path: routes.promotion }
]

export const MobileMenu: StandardMenu[] | MenuMoreInfo[] = []
