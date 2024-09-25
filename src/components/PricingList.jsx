import React from 'react'
import Button from './button';
import { check } from '../assets';

const PRICING = [
    {
        id: "0",
        title: "Basic",
        description: "AI chatbot, personalized recommendations",
        price: "0",
        features: [
            "An AI chatbot that can understand your queries",
            "Personalized recommendations based on your preferences",
            "Ability to explore the app and its features without any cost",
        ],
    },
    {
        id: "1",
        title: "Premium",
        description: "Advanced AI chatbot, priority support, analytics dashboard",
        price: "9.99",
        features: [
            "An advanced AI chatbot that can understand complex queries",
            "An analytics dashboard to track your conversations",
            "Priority support to solve issues quickly",
        ],
    },
    {
        id: "2",
        title: "Enterprise",
        description: "Custom AI chatbot, advanced analytics, dedicated account",
        price: null,
        features: [
            "An AI chatbot that can understand your queries",
            "Personalized recommendations based on your preferences",
            "Ability to explore the app and its features without any cost",
        ],
    },
];

export default function PricingList() {
    return (
        <div className='flex gap-[1rem] max-lg:flex-wrap'>
            {PRICING.map(item => (
                <div key={item.id}
                    className='max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem]
                         even:py-14 odd:py-8 odd:my-4
                        [&>h4]:first:text-color-2
                        [&>h4]:even:text-color-1
                        [&>h4]:odd:text-color-3'
                    >
                    <h4 className='h4 mb-4'>{item.title}</h4>
                    <p className='body-2 min-h-[4rem] mb-3 text-n-1/50'>{item.description}</p>
                    <div className='flex items-center h-[5.5rem] mb-6'>
                        {item.price && (
                            <>
                                <div className='h3'>$</div>
                                <div className='text-[5.5rem] mb-6'>{item.price}</div>
                            </>
                        )}
                    </div>
                    <Button
                        className='w-full mb-6'
                        href={item.price ? '/pricing' : ''}
                        white={!!item.price}
                    >
                        {item.price ? 'Get started' : 'Contact us'}
                    </Button>

                    <ul>
                        {item.features.map((feature, index) => (
                            <li key={index} className='flex items-start gap-4 py-4 border-t border-n-6'>
                                <img src={check} width={24} height={24} alt="" />
                                <p className='body-2'>{feature}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}
