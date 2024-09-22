import { yourlogo } from '../assets'

export const COMPANYLOGOS = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export default function CompanyLogos({ className = '' }) {
    return (
        <div className={`${className}`}>
            <h5 className='tagline mb-6 text-center text-n-1/50'>Helping people create beautiful content at </h5>
            <ul className='flex items-center justify-between'>
                {COMPANYLOGOS.map((item, index) => (
                    <li className='h-[8.5rem]' key={index}>
                        <img src={item} width={134} height={28} alt={item} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
