import LeftArrow from '@/assets/icons/left-arrow';
import Header from '../header';
import { Button } from '@/components/ui/button';
import XBtn from '@/assets/icons/x-btn';
import AddOrder from '@/assets/icons/add-order';

export default function Breakfast() {
	return (
		<>
			<Header />
			<section className='bg-[#F5F5F5] border-b border-[#7d858b33]'>
				<div className='w-full max-w-[1432px] px-5 mx-auto '>
					<div className='flex items-center   '>
						<div className='flex items-center w-[950px] bg-[#F5F5F5] border-r  border-[#7d858b33] '>
							<LeftArrow />
							<Button className=' h-[70px] ms-[30px] py-[23.5px] px-4 flex items-center gap-3 rounded-none bg-white text-[#2F3138] shadow-none border-r border-[#7d858b33]  '>
								Корзина №1 <XBtn />
							</Button>
							<Button className='h-[70px] py-[23.5px] px-4 flex items-center gap-3 rounded-none bg-transparent text-[#7D848B] shadow-none border-r border-[#7d858b33]  '>
								Корзина №2 <XBtn />
							</Button>
							<Button className='h-[70px] py-[23.5px] px-[21px] rounded-none bg-[#5566FF]  '>
								<AddOrder />
							</Button>
						</div>

						<div className='bg-white text-left w-[460px] p-4 h-[70px]  '>
							<strong className='text-2xl font-semibold  '>Заказ №1243</strong>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
