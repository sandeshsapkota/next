import React, {Component} from "react";
import Slider from "react-slick";
import 'react-slick/lib'
import Icon from "../../../src/components/general/Icon";
import Fade from 'react-reveal/Fade';


function Services() {
    const services = [
        {
            title: 'Aarambha Agro Mart',
            desc: 'Add a little zing to your winter wardrobe with this vibrant Winter-breaker Jacket. With a\n' +
                '                            dreams, so be quick to grab yourself one! ttle zing to your winter wardrobe with this\n' +
                '                            vibrant Winter-breaker Jacket. With a',
            icon: 'service-1',
        },
        {
            title: 'Providing tools and ideas',
            desc: 'Add a little zing to your winter wardrobe with this vibrant Winter-breaker Jacket. With a\n' +
                '                            dreams, so be quick to grab yourself one! ttle zing to your winter wardrobe with this\n' +
                '                            vibrant Winter-breaker Jacket. With a',
            icon: 'service-2',
        },
        {
            title: 'Working with local',
            desc: 'Add a little zing to your winter wardrobe with this vibrant Winter-breaker Jacket. With a\n' +
                '                            dreams, so be quick to grab yourself one! ttle zing to your winter wardrobe with this\n' +
                '                            vibrant Winter-breaker Jacket. With a',
            icon: 'service-4',
        }
    ]

    return (<section className="service relative overflow-hidden  pb-20 pt-12 ">
        s <div className="absolute bg-primary-100 top-0 left-0 right-0 bottom-0"></div>
        <div className="container flex flex-col gap-12 relative">
            <div className={'grid gap-5'}>
                <h2 className="heading-primary !text-4xl !font-bold ">Our Services</h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
                {services.map((service, index) => {
                    return (
                        <Fade  delay={(index  + 2) + '00'} >
                            <div className={'card !p-6 flex flex-col gap-2'}>
                               <Fade delay={(index  * 100) + (100)}> <Icon className={'!w-24 !h-24 text-primary-600'} name={service.icon}/></Fade>
                                <h3 className="heading-primary !text-2xl heading-primary-lg">{service.title}
                                </h3>
                                <p>{service.desc}</p>
                            </div>
                        </Fade>
                    )
                })}
            </div>
        </div>
    </section>);
}

export default Services