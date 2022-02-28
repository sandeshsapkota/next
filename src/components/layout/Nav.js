import Icon from "../general/Icon";
import Link from "next/link";
import {useRouter} from "next/router";

function Nav(props) {
    const menuList = [
        {
            name: "home",
            label: "home",
            icon: 'home',
            route: '/',
            hasMenu: false,
        },
        {
            name: "about us",
            label: "about us",
            icon: 'about us',
            route: '/about',
            hasMenu: false,
        },
        {
            name: "services",
            label: "business and services",
            icon: 'services',
            route: '/services',
            hasMenu: false,
        },
        {
            name: "team",
            label: "team",
            icon: 'team',
            route: '/team',
            hasMenu: false,
        },
        {
            name: "news",
            label: "news and media",
            icon: 'news',
            route: '/news',
            hasMenu: false,
        },
        {
            name: "categories",
            label: "categories",
            icon: 'categories',
            route: '/categories',
            hasMenu: true,
            menu: [
                {
                    name: "high quality",
                    label: "high quality",
                    icon: 'high quality',
                    route: '/high-quality',
                    hasMenu: true,
                    menu: [
                        {
                            name: "premium quality",
                            label: "premium quality",
                            icon: 'premium quality',
                            route: '/premium-quality',
                            hasMenu: false,
                        },
                        {
                            name: "secondary quality",
                            label: "secondary quality",
                            icon: 'secondary quality',
                            route: '/secondary-quality',
                            hasMenu: false,
                        },
                    ]
                },
                {
                    name: "medium quality",
                    label: "medium quality",
                    icon: 'medium quality',
                    route: '/medium-quality',
                    hasMenu: false,
                },
                {
                    name: "expensive quality",
                    label: "expensive quality",
                    icon: 'expensive quality',
                    route: '/expensive-quality',
                    hasMenu: false,
                },
                {
                    name: "exporting materials",
                    label: "exporting materials",
                    icon: 'exporting materials',
                    route: '/exporting materials',
                    hasMenu: false,
                },
            ]
        },
        {
            name: "contact",
            label: "contact",
            icon: 'contact',
            route: '/contact',
            hasMenu: false,
        },
    ]

    const router = useRouter()

    function handleError() {
        console.log(new Error('say no to l'))
    }

    // function Menu(menuArr) {
    //     return (
    //         <ul className="dropdown p-4 grid gap-4 capitalize text-grey-700">
    //             {menuArr.map((item, index) => <li key={index}><a href="#">{item.label}</a></li>)}
    //         </ul>
    //     )
    // }


    function Menu(menuList, dropdown) {
        return (
            <ul className={dropdown ? 'nav__dropdown' : "nav-menu gap-5 flex items-center gap-2"}>
                {menuList.map((menuItem, index) => {
                    return (
                        <li key={menuItem.label} className={menuItem.hasMenu ? 'nav__dropdown-parent' : ''}>
                            <a href={menuItem.route}
                               className={dropdown ? 'nav__link !flex items-center' : 'nav__link !flex '
                               + (router.pathname === menuItem.route ? 'active-link' : '')}
                               key={menuItem.label}>
                                {menuItem.label}
                                {menuItem.hasMenu && <Icon className={'!w-5 !h-5'} name={'arrow-down'}/>}
                            </a>
                            {menuItem.hasMenu && Menu(menuItem.menu, true)}
                        </li>
                    )
                })}
            </ul>
        )
    }

    return (
        <div className="bg-white sticky top-0 z-50 shadow-lg">
            <div className="container flex gap-6  ">
                <div className="-mx-1">{Menu(menuList)}</div>
            </div>
        </div>
    );
}


export default Nav;