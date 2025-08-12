import LeftArrow from '@/assets/icons/left-arrow';
import Header from '../header';
import Pp from '@/assets/icons/pp';
import Sweet from '@/assets/icons/sweet';
import { Button } from '@/components/ui/button';
import SelectedItems from '../lunch/selected-items';
import BreakfastItem from '@/components/common/breakfast-item';
import laysYellow from '@/assets/images/lays-yellow.png';
import laysBlue from '@/assets/images/lays-blue.png';
import cheetos from '@/assets/images/cheetos.png';
import kitKat from '@/assets/images/kit-kat.png';
import twix from '@/assets/images/twix.png';
import bounty from '@/assets/images/bounty.png';
import snickers from '@/assets/images/snickers.png';
import Lunch from '@/assets/icons/lunch';
import Eggs from '@/assets/icons/eggs';
import ChocolateBlue from '@/assets/icons/chocolate-blue';
import Cup from '@/assets/icons/cup';
export default function Addition() {
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
			pic: <Cup />,
			name: 'Бар',
		},
		{
			pic: <ChocolateBlue />,
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
			pic: laysYellow,
			name: 'Чипсы LAYS 37 гр с сыром',
			price: 'В наличии: 130 шт.',
		},
		{
			pic: laysBlue,
			name: 'Чипсы LAYS 37 гр со сметаной и зеленью',
			price: 'В наличии: 130 шт.',
		},
		{
			pic: cheetos,
			name: 'CHEETOS 47 гр',
			price: 'В наличии: 130 шт.',
		},
		{
			pic: kitKat,
			name: 'KIT-KAT 40 гр',
			price: 'В наличии: 130 шт.',
		},
		{
			pic: twix,
			name: 'TWIX 55 гр',
			price: 'В наличии: 130 шт.',
		},
		{
			pic: bounty,
			name: 'BOUNTY',
			price: 'В наличии: 130 шт.',
		},
		{
			pic: snickers,
			name: 'SNICKERS 50 гр',
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
												name === 'Перекусы' ? 'bg-[#EEF0FF] text-[#5566FF]' : ''
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
