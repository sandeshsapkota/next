import {useRouter} from "next/router";
import {useContext} from "react";
import {UserContext} from "../../src/UserProvider";

function product() {
    const router = useRouter()
    const {slug} = router.query;
    const [userDetail] = useContext(UserContext)

    const {products} = userDetail
    const product = products.find(item => item.slug === slug)

    return (
        <>
            {
                product &&
                <div>
                    <h1 className={''}>{product.title}</h1>
                </div>
            }
        </>
    )
}

export default product