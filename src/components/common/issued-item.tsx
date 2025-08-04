import { Button } from '../ui/button';
import Counter from './counter';

export default function IssuedItem({
	pic,
	name,
	price,
}: {
	pic: string;
	name: string;
	price: string;
}) {
	return (
		<li className='w-[413px] flex items-center justify-between '>
			<div className='flex items-center gap-3 '>
				<img src={pic} alt='' />
				<div className='flex items-start flex-col w-full'>
					<span className='text-[14px] font-medium mb-1 inline-block '>
						{name}
					</span>
          <Counter/>
				</div>
			</div>
			<div className='flex items-end justify-center flex-col gap-1'>
				<strong className='text-[14px] font-semibold text-[#2F3138]  '>
					{price}
				</strong>
				<Button className='bg-transparent text-[#FF1F00] w-fit h-fit hover:bg-transparent p-0 shadow-none  '>
					Удалить
				</Button>
			</div>
		</li>
	);
}
