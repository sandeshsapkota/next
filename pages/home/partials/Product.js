import Link from "next/link";
import {useContext} from "react";
import {UserContext} from "../../../src/UserProvider";
import Icon from "../../../src/components/general/Icon";
import SectionHeader from "../../../src/components/general/SectionHeader";


function Home() {
    const [userDetail] = useContext(UserContext)
    const {products} = userDetail
    return (
        <section className={'py-12'}>
            <div className={'container grid gap-10'}>
                <SectionHeader to={'products'} toText='See all products' title={'Best Selling Products'}/>
                <ProductList products={products}/>
            </div>
        </section>
    )
}


function ProductList({products}) {
    return (
        <ul className={'grid  gap-8 sm:grid-cols-4'}>
            {products.map((product) => (
                <div key={product.id} className={'card overflow-hidden !p-0  hover:-translate-y-[14px] transition-3s'}>
                    <Link
                        href={{
                            pathname: '/product/[slug]',
                            query: {slug: product.slug},
                        }}
                    >
                        <div className={'cursor-pointer'}>
                            <img src={`/images/machines/${product.id}.jpeg`} className={'w-full h-36 object-cover'}
                                 alt={product.label}/>
                            <div className="p-4 gap-1">
                                <h3 className="!text-lg heading-primary heading-primary-sm capitalize">{product.title}</h3>
                                <span className={'text-primary-600'}>NRS. {product.price}</span>
                                <div className="flex items-center gap-2">
                                    <Icon name={'view'}/>
                                    View
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </ul>
    )
}


export default Home
