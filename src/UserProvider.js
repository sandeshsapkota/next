import {createContext, useState} from "react";

export const UserContext = createContext(undefined)
export const UserContextDispatch = createContext(undefined)

function UserProvider({children}) {
    const products = [
        {
            id: '1',
            price: '4000',
            slug: 'Soil Testing Mini Lab',
            color: 'red',
            title: 'Soil Testing Mini Lab'
        },
        {id: '2', price: '300', slug: 'harrows', color: 'red', title: 'Harrows'},
        {id: '3', price: '23000', slug: 'fertilizer Spreaders', color: 'red', title: 'Fertilizer Spreaders'},
        {id: '4', price: '20000', slug: 'HTP Power Sprayer', color: 'red', title: 'seeders'},
        {id: '5', price: '456000', slug: 'seeders', color: 'red', title: 'seeders'},
        {id: '6', price: '66000', slug: 'Balers', color: 'red', title: 'Balers'},
        {id: '7', price: '1200', slug: 'waterpump', color: 'red', title: '2 IN 1 Sprayer - NEPTUNE'},
        {id: '8', price: '112', slug: 'seeders', color: 'red', title: 'seeders'},
    ]
    const news = [
        {
            id: 1,
            title: '१५ औं साधारण सभाको संक्षिप्त निर्णय',
            date: 'Tuesday, 01 February, 2022',
            img: '1.jpg',
        },
        {
            id: 2,
            title: 'वार्षिकोत्सवको अवसरमा आर्कषक छुट प्रदान गर्दै कृषि विकास बैंक',
            date: 'Saturday, 29 January, 2022',
            img: '2.jpg',
        },
        {
            id: 3,
            title: 'सूचनाको हक २०७८',
            date: 'Tuesday, 21 September, 2021',
            img: '3.jpg',
        },
        {
            id: 4,
            title: '9 year Agricultural Bond Prospectus',
            date: 'Monday, 16 August, 2021',
            img: '4.jpg',
        },

    ]
    const socialLinks = [
        {name: 'facebook', link: 'www.facebook.com', icon: "facebook"},
        {name: 'twitter', link: 'www.twitter.com', icon: "twitter"},
        {name: 'linkedin', link: 'www.linkedin.com', icon: "linkedin"},
    ]

    const [userDetail, setUserDetail] = useState({
        login: true,
        cre_username: 'san',
        cre_password: 'san',
        error: {
            username: '',
            password: '',
        },
        products,
        news,
        socialLinks
    })

    return (
        <UserContext.Provider value={[userDetail, setUserDetail]}>
            {children}
        </UserContext.Provider>
    )

}

export default UserProvider
