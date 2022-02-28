import Logo from "../general/Logo";
import ButtonLink from "../Buttons/ButtonLink";
import Icon from "../general/Icon";
import SocialLinks from "../general/SocialLinks";

function Footer(props) {
    return (
        <div className={'flex justify-between bg-secondary-600  text-white p-12 '}>
            <div className="container grid gap-24 sm:grid-cols-3">
                <div className={'grid gap-6'}>
                    <Logo/>
                    <div>
                        Copyright @ 2022, Aarambha Krishi Company,
                        Powered by Mindworks
                    </div>
                </div>
                <div className={'grid gap-6 pt-2'}>
                    <span className="heading-primary heading-primary-sm !text-white">Contact Us</span>
                    <div className="grid gap-3 gap-4">
                        <ButtonLink href={'callto:+977 01339487'}> <Icon name={'tel'}/> +977 01339487 </ButtonLink>
                        <ButtonLink href={'mailto:hello@aarambhakrishi.com'}> <Icon className={'!w-4 !h-4'}
                                                                                    name={'mail'}/> hello@aarambhakrishi.com
                        </ButtonLink>
                        <p className={'flex gap-1 text-sm'}><Icon className={'!w-5 !h-5'} name={'map'}/>Basundhara, Ring
                            Road, Kathmandu (44600), Nepal </p>
                    </div>
                </div>
                <div className={'flex flex-col gap-6 pt-2'}>
                    <span className="heading-primary heading-primary-sm !text-white">Follow Us</span>
                    <SocialLinks/>
                </div>
            </div>
        </div>
    );
}

export default Footer;