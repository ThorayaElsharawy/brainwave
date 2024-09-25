import React from 'react'
import Section from './Section'
import { discordBlack, facebook, instagram, telegram, twitter } from '../assets';

const SOCIALS = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export default function Footer() {
  return (
    <Section className="!px-0 !py-10">
      <div className='container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col'>
        <p className='caption text-n-4 lg:block'>{new Date().getFullYear()}. All right reserved.</p>
        <ul className='flex gap-5 flex-wrap'>
          {SOCIALS.map(item => (
            <li key={item.id}>
              <a href={item.url}
                target='_blank'
                className='w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6 flex items-center justify-center'>
                <img src={item.iconUrl}
                  width={16}
                  height={16}
                  alt={item.title} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
