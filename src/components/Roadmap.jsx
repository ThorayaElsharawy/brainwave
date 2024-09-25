import React from 'react'
import Section from './Section'
import Heading from './Heading'
import { check2, gradient, grid, loading1, roadmap1, roadmap2, roadmap3, roadmap4 } from '../assets';
import Tagline from './Tagline';
import Button from './button';

const ROADMAP = [
    {
        id: "0",
        title: "Voice recognition",
        text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
        date: "May 2023",
        status: "done",
        imageUrl: roadmap1,
        colorful: true,
    },
    {
        id: "1",
        title: "Gamification",
        text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
        date: "May 2023",
        status: "progress",
        imageUrl: roadmap2,
    },
    {
        id: "2",
        title: "Chatbot customization",
        text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
        date: "May 2023",
        status: "done",
        imageUrl: roadmap3,
    },
    {
        id: "3",
        title: "Integration with APIs",
        text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
        date: "May 2023",
        status: "progress",
        imageUrl: roadmap4,
    },
];


export default function Roadmap() {
    return (
        <Section className="overflow-hidden" id="roadmap" crosses={false}>
            <div className='container md:pb-10'>
                <Heading tag="Ready to get started"
                    title="What we're working on"
                />

                <div className='relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]'>
                    {ROADMAP.map(item => {
                        const status = item.status === 'done' ? 'Done' : 'In progress';

                        return (
                            <div key={item.id}
                                className={`md:flex even:md:translate-y-[7rem] p-0.5 rounded-[2.5rem] 
                                ${item.colorful ? 'bg-conic-gradient' : 'bg-n-6'}`}>

                                <div className='relative p-8 bg-n-8 rounded-[2.3rem] xl:p-15 overflow-hidden'>
                                    <div className='absolute top-0 left-0 max-w-full'>
                                        <img src={grid} alt="Grid" className='w-full' width={550} height={550} />
                                    </div>

                                    <div className='relative z-1'>
                                        <div className='flex items-center justify-between max-w-[27rem] mb-8 md:mb-20'>
                                            <Tagline>{item.date}</Tagline>
                                            <div className='flex items-center px-4 py-1 rounded bg-n-1 text-n-8'>
                                                <img className='mr-2.5' src={item.status === 'done' ? check2 : loading1} alt={status} />
                                                <div className='tagline'>{status}</div>
                                            </div>
                                        </div>

                                        <div className='mb-10 -my-10 -mx-15'>
                                            <img src={item.imageUrl} alt={item.title} className='w-full' width={630} height={420} />
                                        </div>

                                        <h4 className='h4 mb-4'>{item.title}</h4>
                                        <p className='body-2 text-n-4'>{item.text}</p>

                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div className="absolute top-[18.25rem] -left-[30.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
                            <img
                                className="w-full"
                                src={gradient}
                                width={942}
                                height={942}
                                alt="Gradient"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
                    <Button href="/roadmap">Our roadmap</Button>
                </div>
            </div>
        </Section>
    )
}
