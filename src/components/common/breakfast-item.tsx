import { useState } from 'react';
import { Input } from '../ui/input';
import Counter from './counter';
import { cn } from '@/lib/utils';

export default function BreakfastItem({
	pic,
	name,
	price,
	className,
}: {
	pic: string;
	name: string;
	price: string;
	className?: string;
}) {
	const [isChecked, setIsChecked] = useState(false);
	return (
		<li
			key={name}
			className={cn(
				isChecked ? 'border-[#5566FF]' : 'border-[#ECEDEE]',
				'flex items-center justify-between w-[931px] border bg-white rounded-md py-3 pe-4 ps-3 ',
				className,
			)}
		>
			<div className='flex items-center '>
				<Input
					checked={isChecked}
					onChange={() => setIsChecked(!isChecked)}
					type='checkbox'
					className='w-[18px] h-[18px] checked:bg-[#56F] rounded-[3px] border-[#7D858B · 20%] me-5 '
				/>
				<img src={pic} alt='' width={65} height={65} className='rounded-[8px] h-[65px] ' />
				<div className='flex flex-col ms-4'>
					<strong className='font-medium text-[#2F3138]  '>{name}</strong>
					<span className='text-[#7D848B] text-[14px] '>{price}</span>
				</div>
			</div>
			<Counter />
		</li>
	);
}
