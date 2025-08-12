import LeftArrow from '@/assets/icons/left-arrow';
import Header from '../header';
import Chocolate from '@/assets/icons/chocolate';
import Pp from '@/assets/icons/pp';
import Sweet from '@/assets/icons/sweet';
import { Button } from '@/components/ui/button';
import SelectedItems from '../lunch/selected-items';
import BreakfastItem from '@/components/common/breakfast-item';
import cola1_5 from '@/assets/images/cola-1.5.png';
import cola0_5 from '@/assets/images/cola-0.5.png';
import cola2_5 from '@/assets/images/cola-125.png';
import pepsi from '@/assets/images/pepsi.png';
import fanta from '@/assets/images/fanta.png';
import rich from '@/assets/images/rich-apple.png';
import Lunch from '@/assets/icons/lunch';
import CupBlue from '@/assets/icons/cup-blue';
import Eggs from '@/assets/icons/eggs';
export default function Drinks() {
	const menuItems = [
		{
			pic: <Eggs />,
			name: 'Завтраки',
		},
		{
			pic: <Lunch />,
			name: 'Обеды',
		},
		{
			pic: <CupBlue />,
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
	const breakfastItems = [
		{
			pic: cola1_5,
			name: 'Coca- cola 1,5',
			price: 'В наличии: 130 шт.',
		},
		{
			pic: cola0_5,
			name: 'Coca-cola 0,5',
			price: 'В наличии: 130 шт.',
		},
		{
			pic: cola2_5,
			name: 'Coca-cola 250 ml',
			price: 'В наличии: 130 шт.',
		},
		{
			pic: pepsi,
			name: 'Pepsi 250 ml',
			price: 'В наличии: 130 шт.',
		},
		{
			pic: fanta,
			name: 'Fanta 0,5',
			price: 'В наличии: 130 шт.',
		},
		{
			pic: rich,
			name: 'Сок RICH 200 ml яблоко',
			price: 'В наличии: 130 шт.',
		},
	];
	return (
		<>
			<Header />
			<section className='bg-[#F5F5F5] border-b border-[#7d858b33]'>
				<div className='w-full max-w-[1432px] px-5 mx-auto '>
					<div className='flex items-center '>
						<div className='flex items-center w-[950px] bg-[#F5F5F5] border-r gap-[21px]   border-[#7d858b33] '>
							<LeftArrow />
							<strong className='text-2xl font-semibold inline-block mb-1 '>
								Создать заказ
							</strong>
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
												name === 'Бар' ? 'bg-[#EEF0FF] text-[#5566FF]' : ''
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
