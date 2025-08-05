import { Input } from '../ui/input';
import Counter from './counter';

export default function BreakfastItem({
	pic,
	name,
	price,
}: {
	pic: string;
	name: string;
	price: string;
}) {
	return (
		<li className='flex items-center justify-between w-[931px] border border-[#ECEDEE] rounded-md py-3 pe-4 ps-3  '>
			<div className='flex items-center '>
				<Input
					type='checkbox'
					className='w-[18px] h-[18px] checked:bg-[#56F] rounded-[3px] border-[#7D858B · 20%] me-5 '
				/>
				<img src={pic} alt='' />
				<div className='flex flex-col ms-4'>
					<strong className='font-medium text-[#2F3138]  '>{name}</strong>
					<span className='text-[#7D848B] text-[14px] '>{price}</span>
				</div>
			</div>
			<Counter />
		</li>
	);
}
