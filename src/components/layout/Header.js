import { UserContext} from "../../UserProvider";
import {useContext} from "react";
import Icon from "../general/Icon";
import {Menu} from '@headlessui/react'
import DropdownItem from "../general/DropdownItem";
import ButtonLink from "../Buttons/ButtonLink";
import Logo from "../general/Logo";


function Header(props) {
    const [userDetail,setUserDetail]  = useContext(UserContext)
    const a = undefined

    const handleLogout = () => {
        setUserDetail((prevState) => {
            return {...prevState, login: false}
        })
    }

    function trigger() {
        return (
            <Menu.Button
                className="w-10 h-10 flex items-center justify-center border-2 border-grey-700 text-gray-100 rounded-full">
                <Icon className={'!w-6 !h-6'} name={'user'}/>f
            </Menu.Button>
        )

    }

    function content() {
        return (
           <div>
               <DropdownItem onClick={handleLogout}>
                    <Icon name={'logout'}/>
                    Logout
               </DropdownItem>
               <DropdownItem>
                   <Icon name={'setting'}/>
               </DropdownItem>
           </div>
        )
    }

    return (
        <div className={'bg-primary-600  text-white justify-between py-4 px-5 font-bold'}>
            <div className="container flex gap-8 items-center justify-between">
                <Logo/>
                <div className="flex gap-4">
                    <ButtonLink href={'callto:+977 01339487'}> <Icon name={'tel'}/> +977 01339487 </ButtonLink>
                    <ButtonLink href={'mailto:hello@aarambhakrishi.com'}> <Icon className={'!w-4 !h-4'} name={'mail'}/> hello@aarambhakrishi.com </ButtonLink>
                </div>
            </div>
        </div>
    );
}

export default Header;