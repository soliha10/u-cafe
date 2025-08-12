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
import SelectedItems from './selected-items';
import Eggs from '@/assets/icons/eggs';
import { fridayItems, mondayItems, thirsdayItems, tuesdayItems, wednesdayItems } from '../menu-data';

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
