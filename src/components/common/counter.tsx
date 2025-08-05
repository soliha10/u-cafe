import { useState } from 'react';
import { Button } from '../ui/button';
import Minus from '@/assets/icons/minus';
import Plus from '@/assets/icons/plus';

export default function Counter() {
	const [count, setCount] = useState(1);

	return (
		<div className='bg-[#ECEDEE] w-[87px] flex items-center justify-between rounded-[100px] p-1 '>
			<Button
				className='bg-white hover:bg-white rounded-full cursor-pointer p-0 w-[22px] h-[22px]'
				onClick={() => setCount(count > 1 ? count - 1 : count)}
			>
				<Minus />
			</Button>
			<span className='text-[14px] font-semibold text-[#2F3138]'>{count}</span>
			<Button
				className='bg-white hover:bg-white rounded-full cursor-pointer p-0 w-[22px] h-[22px]'
				onClick={() => setCount(count + 1)}
			>
				<Plus />
			</Button>
		</div>
	);
}
