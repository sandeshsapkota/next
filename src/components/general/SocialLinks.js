import {useContext} from "react";
import {UserContext} from "../../UserProvider";
import Icon from "./Icon";

function SocialLinks() {
    const [userDetail] = useContext(UserContext)
    const {socialLinks} = userDetail

    return (<div className={'flex gap-4'}>
        {socialLinks.map((link,index) => <a href={'/'}
                                    key={index}
                                    className={'hover:bg-white transition-3s hover:text-black rounded-full'}><Icon
            className={'!w-7 !h-7'} key={link.name} name={link.icon}/> </a>)}
    </div>)

}

export default SocialLinks