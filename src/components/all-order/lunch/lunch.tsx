import LeftArrow from '@/assets/icons/left-arrow';
import Header from '../header';
import Cup from '@/assets/icons/cup';
import LunchBlue from '@/assets/icons/lunch-blue';
import Chocolate from '@/assets/icons/chocolate';
import Pp from '@/assets/icons/pp';
import Sweet from '@/assets/icons/sweet';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BreakfastItem from '@/components/common/breakfast-item';
import kotlet from '@/assets/images/kotlet.png';
import lapsha from '@/assets/images/lapsha.png';
import SelectedItems from './selected-items';
import manti from '@/assets/images/manti.png';
import teftel from '@/assets/images/teftel.png';
import chickenKotlet from '@/assets/images/chicken-kotlet.png';
import gulyash from '@/assets/images/gulyash.png';
import lagman from '@/assets/images/lagman.png';
import bedro from '@/assets/images/bedro.png';
import jarko from '@/assets/images/jarko.png';
import garnir from '@/assets/images/garnir.png';
import Eggs from '@/assets/icons/eggs';

export default function Lunch() {
	const menuItems = [
		{
			pic: <Eggs />,
			name: 'Завтраки',
		},
		{
			pic: <LunchBlue />,
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

	const mondayItems = [
		{
			pic: kotlet,
			name: 'Говяжьи котлеты 2 шт. с подливой / Гарнир рис+гречка / Хлеб / Салат',
			price: 'В наличии: 130 шт.',
			checked: false,
		},
		{
			pic: lapsha,
			name: 'Курица в сливочном соусе / Гарнир лапша триолли / Хлеб / Салат',
			price: 'В наличии: 130 шт.',
			checked: false,
		},
	];
	const tuesdayItems = [
		{
			pic: manti,
			name: 'Манты с говядиной / Кефир / Хлеб / Салат',
			price: 'В наличии: 130 шт.',
			checked: false,
		},
		{
			pic: teftel,
			name: 'Тефтели с подливой / Гарнир картофель фри / Хлеб / Салат',
			price: 'В наличии: 130 шт.',
			checked: false,
		},
	];
	const wednesdayItems = [
		{
			pic: chickenKotlet,
			name: 'Куриные котлеты 2 шт / Гарнир рис+пюре / Хлеб / Салат',
			price: 'В наличии: 130 шт.',
			checked: false,
		},
		{
			pic: gulyash,
			name: 'Гуляш с говядиной / Гарнир рис+пюре / Хлеб / Салат',
			price: 'В наличии: 130 шт.',
			checked: false,
		},
	];
	const thirsdayItems = [
		{
			pic: lagman,
			name: 'Ковурма лагман с яйцом / Хлеб / Салат',
			price: 'В наличии: 130 шт.',
			checked: false,
		},
		{
			pic: bedro,
			name: 'Куриное бедро / Гарнир картофель по деревенски / Хлеб / Салат',
			price: 'В наличии: 130 шт.',
			checked: false,
		},
	];
	const fridayItems = [
		{
			pic: jarko,
			name: 'Жаркое с говядиной / Хлеб / Салат',
			price: 'В наличии: 130 шт.',
			checked: false,
		},
		{
			pic: garnir,
			name: 'Курица с овощами / Гарнир рис+кукуруза / Хлеб / Салат',
			price: 'В наличии: 130 шт.',
			checked: false,
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
					<div className='flex '>
						<div className='pt-6 pe-6 flex gap-6 flex-col w-[950px] border-e  '>
							<ul className='flex items-center gap-4'>
								{menuItems.map(({ pic, name }) => (
									<li key={name}>
										<Button
											className={`${
												name === 'Обеды' ? 'bg-[#EEF0FF] text-[#5566FF]' : ''
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

							<Tabs defaultValue='monday' className='w-full gap-0 '>
								<TabsList className='bg-white p-0 font-medium'>
									<TabsTrigger
										className='data-[state=active]:shadow-none py-[10px] px-6  '
										value='monday'
									>
										Понедельник
										<span className='text-[#5566FF] '>(Сегодня)</span>
									</TabsTrigger>
									<TabsTrigger value='tuesday'>Вторник</TabsTrigger>
									<TabsTrigger value='wednesday'>Среда</TabsTrigger>
									<TabsTrigger value='thirsday'>Четверг</TabsTrigger>
									<TabsTrigger value='friday'>Пятница</TabsTrigger>
								</TabsList>
								<TabsContent
									className='bg-[#F5F5F5] py-6 px-4 flex flex-col gap-4 -mt-1  '
									value='monday'
								>
									{mondayItems.map(({ pic, name, price }) => (
										<BreakfastItem
											key={name}
											pic={pic}
											name={name}
											price={price}
											className='w-[899px]'
										/>
									))}
								</TabsContent>
								<TabsContent
									className='bg-[#F5F5F5] py-6 px-4 flex flex-col gap-4 -mt-1 opacity-50   '
									value='tuesday'
								>
									{tuesdayItems.map(({ pic, name, price }) => (
										<BreakfastItem
											key={name}
											pic={pic}
											name={name}
											price={price}
											className='w-[899px]'
										/>
									))}
								</TabsContent>
								<TabsContent
									className='bg-[#F5F5F5] py-6 px-4 flex flex-col gap-4 -mt-1 opacity-50 '
									value='wednesday'
								>
									{wednesdayItems.map(({ pic, name, price }) => (
										<BreakfastItem
											key={name}
											pic={pic}
											name={name}
											price={price}
											className='w-[899px]'
										/>
									))}
								</TabsContent>
								<TabsContent
									className='bg-[#F5F5F5] py-6 px-4 flex flex-col gap-4 -mt-1 opacity-50 '
									value='thirsday'
								>
									{thirsdayItems.map(({ pic, name, price }) => (
										<BreakfastItem
											key={name}
											pic={pic}
											name={name}
											price={price}
											className='w-[899px]'
										/>
									))}
								</TabsContent>
								<TabsContent
									className='bg-[#F5F5F5] py-6 px-4 flex flex-col gap-4 -mt-1 opacity-50 '
									value='friday'
								>
									{fridayItems.map(({ pic, name, price }) => (
										<BreakfastItem
											key={name}
											pic={pic}
											name={name}
											price={price}
											className='w-[899px]'
										/>
									))}
								</TabsContent>
							</Tabs>
						</div>

						<SelectedItems />
					</div>
				</div>
			</section>
		</>
	);
}
