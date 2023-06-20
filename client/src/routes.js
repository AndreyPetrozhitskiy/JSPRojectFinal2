import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Basket from "./pages/Basket"
import Shop from "./pages/Shop"
import WeaponPage from "./pages/WeaponPage"
import Catalog from "./pages/Catalog"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, WEAPONPAGE_ROUTE,CATALOG_ROUTE, ABOUT_ROUTE,  CONTACTS_ROUTE } from "./utils/consts"


export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: WEAPONPAGE_ROUTE + '/:id',
        Component: WeaponPage
    },
    {
        path: CATALOG_ROUTE,
        Component: Catalog
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
]