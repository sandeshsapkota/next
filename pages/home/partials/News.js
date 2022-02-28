import Link from "next/link";
import {useContext} from "react";
import {UserContext} from "../../../src/UserProvider";
import Icon from "../../../src/components/general/Icon";
import SectionHeader from "../../../src/components/general/SectionHeader";

function News() {
    const [userDetail] = useContext(UserContext)
    const {news} = userDetail
    return (
        <section className={'py-12'}>
            <div className={'container grid gap-10'}>
                <SectionHeader to={'news'} toText='See all News' title={'News And Media'}/>
                <Posts news={news}/>
            </div>
        </section>
    )
}


function Posts({news}) {
    return (
        <ul className={'grid  gap-8 sm:grid-cols-4'}>
            {news.map((item) => (
                <li key={item.id} className={'card overflow-hidden !p-0  hover:-translate-y-[14px] transition-3s'}>
                    <Link
                        href={{
                            pathname: '/item/[slug]',
                            query: {slug: item.slug},
                        }}
                    >
                        <div className={'cursor-pointer'}>
                            <img src={`/images/news/${item.id}.jpeg`} className={'w-full h-[220px] object-cover'}
                                 alt={item.label}/>
                            <div className="p-4 grid gap-2">
                                <div className="flex items-center gap-2">
                                    <Icon name={'date'}/>
                                    {item.date}
                                </div>
                                <h3 className="!text-lg heading-primary heading-primary-sm capitalize">{item.title}</h3>
                            </div>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    )
}


export default News
