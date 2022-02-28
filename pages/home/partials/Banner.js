import React, {Component} from "react";
import Slider from "react-slick";
import 'react-slick/lib'

export default class Banner extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            fade: true,
            autoplay: true,
            autoplaySpeed: 5000,
            lazyLoad: 'progressive',
            waitForAnimate: true,
            useTransform: true,
        };

        const images = [{
            img: '/images/banner/3.jpg',
            title: 'Developing infrastructure',
            desc: 'It facilitates the effective\n' +
                'agro-based industries enhance the overall economic and industrial development of\n' +
                'the country.'
        }, {
            img: '/images/banner/1.jpg',
            title: 'Establishing culture',
            desc: 'It facilitates the effective\n' +
                'agro-based industries enhance the overall economic and industrial development of\n' +
                'the country.'
        }, {
            img: '/images/banner/7.jpg',
            title: 'Innovating new mindset',
            desc: 'It facilitates the effective\n fficient utilization of agricultural raw materials. ' +
                'the country.'
        }, {
            img: '/images/banner/4.jpg',
            title: 'Techonology with Agriculture',
            desc: 'It facilitates the effective\n' +
                'and efficient utilization of agricultural raw materials. It also sets up the co-operative basis for the participation of people. The growth and expansion of\n' +
                'the country.'
        }, ]

        return (
            <section className="banner overflow-hidden" style={{height: 'calc(100vh - 115px)'}}>
                <Slider {...settings} className={'h-full'}>
                    {images.map((item, index) => {
                        return (
                            <div key={index} className={'h-full flex justify-center items-center'}>
                                <div className="h-full flex items-end pb-32 relative">
                                    <img
                                         className={'absolute top-0 z-10 left-0 h-full w-full object-cover'}
                                         src={item.img} alt="images"/>
                                  <div className="container !px-0">
                                      <div className="banner__text relative z-100 !p-4 grid gap-4 w-[40rem] relative z-50 text-white">
                                          <h1 className={'banner__title heading-primary heading-primary-lg !text-white'}> {item.title}</h1>
                                          <p className={'banner__desc'}>{item.desc}</p>
                                      </div>
                                  </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </section>
        );
    }
}