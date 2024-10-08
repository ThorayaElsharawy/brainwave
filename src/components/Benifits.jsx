import React from 'react'
import Section from './Section'
import Heading from './Heading'
import Arrow from "../assets/svg/Arrow"
import ClipPath from "../assets/svg/ClipPath"
import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage2
} from "../assets"

const BENIFITS = [
    {
        id: "0",
        title: "Ask anything",
        text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
        backgroundUrl: "./src/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
    },
    {
        id: "1",
        title: "Improve everyday",
        text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
        backgroundUrl: "./src/assets/benefits/card-2.svg",
        iconUrl: benefitIcon2,
        imageUrl: benefitImage2,
        light: true,
    },
    {
        id: "2",
        title: "Connect everywhere",
        text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
        backgroundUrl: "./src/assets/benefits/card-3.svg",
        iconUrl: benefitIcon3,
        imageUrl: benefitImage2,
    },
    {
        id: "3",
        title: "Fast responding",
        text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
        backgroundUrl: "./src/assets/benefits/card-4.svg",
        iconUrl: benefitIcon4,
        imageUrl: benefitImage2,
        light: true,
    },
    {
        id: "4",
        title: "Ask anything",
        text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
        backgroundUrl: "./src/assets/benefits/card-5.svg",
        iconUrl: benefitIcon1,
        imageUrl: benefitImage2,
    },
    {
        id: "5",
        title: "Improve everyday",
        text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
        backgroundUrl: "./src/assets/benefits/card-6.svg",
        iconUrl: benefitIcon2,
        imageUrl: benefitImage2,
    },
];

export default function Benifits() {
    return (
        <Section id='features' crosses={false}>
            <div className='container relative z-2'>
                <Heading className="md:mx-w-md lg:max-w-2xl" title="Chat Smarter, not Harder with Brainwave" />
                <div className='flex flex-wrap gap-10 mb-10'>
                    {BENIFITS.map(item => (
                        <div
                            className='block relative p-0.5 bg-no-repeat md:max-w-[24rem] bg-[length:100%_100%]'
                            style={{
                                backgroundImage: `url(${item.backgroundUrl})`
                            }}
                            key={item.id}>
                            <div className='relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none'>
                                <h5 className='h5 mb-5'>{item.title}</h5>
                                <p className='body-2 mb-6 text-n-3 '>{item.text}</p>
                                <div className='flex items-center mt-auto'>
                                    <img src={item.iconUrl} alt={item.title} width={48} height={48} />
                                    <p className='ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider'>Explore more</p>
                                    <Arrow />
                                </div>
                            </div>

                            {item.light && <div className="absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#28206C] to-[#28206C]/0 to-70% pointer-events-none" />}
                            <div className='absolute inset-0.5 bg-n-8' style={{ clipPath: 'url(#benefits)' }}>
                                <div className='opacity-0 hover:opacity-10 transition-opacity absolute inset-0'>
                                    {item.imageUrl && (
                                        <img src={item.imageUrl} width={380} height={362} alt={item.title} className='object-cover w-full h-full' />
                                    )}
                                </div>
                            </div>

                            <ClipPath />
                        </div>
                    ))}
                </div>
            </div>

        </Section>
    )
}
