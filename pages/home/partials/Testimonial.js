import React, {Component} from "react";
import Slider from "react-slick";
import 'react-slick/lib'
import Icon from "../../../src/components/general/Icon";

export default function Testimonial() {
    const settings = {
        dots: false, infinite: true, slidesToShow: 1, slidesToScroll: 1
    };

    const testimonials = [
        {
            img: 'images/testimonial/1.jpeg',
            name: 'Yunus SeyHan',
            position: 'CEO, Berkley',
            desc: 'It facilitates the effective\n' + 'agro-based industries enhance the overall economic and industrial development of\n' + 'the country.'
        }, {
            img: '/images/testimonial/2.jpeg',
            name: 'Sanya Shrestha',
            position: 'Managing Director, Nabil Bank',
            desc: 'It facilitates the effective\n' + 'agro-based industries enhance the overall economic and industrial development of\n' + 'the country.'
        }, {
            img: '/images/testimonial/3.jpeg',
            name: 'Ram Prsad Khanal',
            position: 'Chairperson, UNDP Nepal',
            desc: 'It facilitates the effective\n fficient utilization of agricultural raw materials. ' + 'the country.'
        },
        {
            img: '/images/testimonial/4.jpeg',
            name: 'Sandesh Sapkota',
            position: 'Developer, YoungInnovations',
            desc: 'It facilitates the effective' + 'and efficient utilization of agricultural raw materials. It also sets up the co-operative basis for the participation of people. The growth and expansion of\n' + 'the country.'
        },
    ]

    return (
        <section className="testimonial overflow-hidden bg-primary-100 py-16 pb-12">
            <div className=" ">
                <div className={'grid gap-5 text-center mb-16'}>
                    <h2 className="heading-primary !text-4xl !font-bold">What our customers <br/> are saying !</h2>
                    <p className={'sm:w-1/2 mx-auto'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                        adipisci deserunt ducimus, ea
                        explicabo fuga id incidunt nesciunt odio porro velit voluptas. </p>
                </div>
                <div>
                    <Slider {...settings}>
                        {testimonials.map((testimonial, index) => {
                            return (<div key={testimonial.name} className={'min-h-[460px] w-full'}>
                                <div className="flex items-center gap-20 mx-auto md:w-3/5">
                                    <div className="relative">
                                        <div
                                            className="rounded-md bg-secondary-600 absolute top-0  h-full w-full -translate-x-6 translate-y-6"></div>
                                        <div className={'rounded-md overflow-hidden relative '}><img
                                            src={testimonial.img}
                                            className={'w-[330px] h-[380px] object-cover'}
                                            alt={testimonial.name}/>
                                        </div>
                                    </div>
                                    <div className={'grid gap-4 text-secondary-600 w-3/5 relative'}>
                                        <Icon name={'quote'}
                                              className={'absolute -top-10 -left-2 !w-9 !h-9 text-primary-600'}/>
                                        <p className={'text opacity-60 text-lg font-medium'}>{testimonial.desc}</p>

                                        <div className={'flex gap-1'}>
                                            <Icon className={'!w-6 !h-6 text-grey-600'} name={'star'}/>
                                            <Icon className={'!w-6 !h-6 text-grey-600'} name={'star'}/>
                                            <Icon className={'!w-6 !h-6 text-grey-600'} name={'star'}/>
                                            <Icon className={'!w-6 !h-6 text-grey-600'} name={'star'}/>
                                            <Icon className={'!w-6 !h-6 text-grey-600'} name={'star'}/>
                                        </div>

                                        <div className={'grid gap-1'}>
                                            <b className={'heading-primary heading-primary-sm'}>{testimonial.name}</b>
                                            <span className={'opacity-60'}>{testimonial.position}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        })}
                    </Slider>
                </div>
            </div>
        </section>)
}