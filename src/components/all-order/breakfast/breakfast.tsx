import LeftArrow from '@/assets/icons/left-arrow';
import Header from '../header';
import { Button } from '@/components/ui/button';
import XBtn from '@/assets/icons/x-btn';
import AddOrder from '@/assets/icons/add-order';
import BreakfastIcon from '@/assets/icons/breakfast';
import Lunch from '@/assets/icons/lunch';
import Cup from '@/assets/icons/cup';
import Chocolate from '@/assets/icons/chocolate';
import Pp from '@/assets/icons/pp';
import Sweet from '@/assets/icons/sweet';
import BreakfastItem from '@/components/common/breakfast-item';
import SelectedItems from './selected-items';
import { breakfastItems } from '../menu-data';

export default function Breakfast() {
	const menuItems = [
		{
			pic: <BreakfastIcon />,
			name: 'Завтраки',
		},
		{
			pic: <Lunch />,
			name: 'Обеды',
		},
		{
			pic: <Cup />,
			name: 'Бар',
		},
		{
			pic: <Chocolate />,
			name: 'Перекусы',
		},
		{
			pic: <Pp />,
			name: 'ПП',
		},
		{
			pic: <Sweet />,
			name: 'Десерты',
		},
	];



	return (
		<>
			<Header />
			<section className='bg-[#F5F5F5] border-b border-[#7d858b33]'>
				<div className='w-full max-w-[1432px] px-5 mx-auto '>
					<div className='flex items-center '>
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

						<div className='bg-white text-left w-[434px] p-4 h-[70px]  '>
							<strong className='text-2xl font-semibold  '>Заказ №1243</strong>
						</div>
					</div>
				</div>
			</section>

			<section className='relative'>
				<div className='w-full max-w-[1432px] px-5 mx-auto '>
					<div className='flex'>
						<div className='pt-6 pe-6 flex gap-6 flex-col w-[950px] border-e  '>
							<ul className='flex items-center gap-4'>
								{menuItems.map(({ pic, name }) => (
									<li key={name}>
										<Button
											className={`${
												name === 'Завтраки' ? 'bg-[#EEF0FF] text-[#5566FF]' : ''
											}`}
											variant={'menu'}
											size={'menu'}
										>
											{pic}
											<span>{name}</span>
										</Button>
									</li>
								))}
							</ul>

							<ul className='flex flex-col gap-4'>
								{breakfastItems.map(({ pic, name, price }) => (
									<BreakfastItem pic={pic} name={name} price={price} />
								))}
							</ul>
						</div>

						<SelectedItems />
					</div>
				</div>
			</section>
		</>
	);
}
