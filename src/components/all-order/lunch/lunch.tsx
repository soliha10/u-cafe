import LeftArrow from '@/assets/icons/left-arrow';
import Header from '../header';
import BreakfastIcon from '@/assets/icons/breakfast';
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


export default function Lunch() {
	const menuItems = [
		{
			pic: <BreakfastIcon />,
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

	const lunchItems = [
		{
			pic: kotlet,
			name: 'Говяжьи котлеты 2 шт. с подливой / Гарнир рис+гречка / Хлеб / Салат',
			price: 'В наличии: 130 шт.',
      checked: false
		},
		{
			pic: lapsha,
			name: 'Курица в сливочном соусе / Гарнир лапша триолли / Хлеб / Салат',
			price: 'В наличии: 130 шт.',
      checked: false
		},
	];
	// const [isChecked, setIsChecked] = useState(lunchItems);


  // const handleCheckbox = (name: string) => {
  //   setIsChecked(prev => prev.map(item => item.name === name ? {...item, checked: !item.checked} : item))
  // }

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
									<TabsTrigger value='thursday'>Четверг</TabsTrigger>
									<TabsTrigger value='friday'>Пятница</TabsTrigger>
								</TabsList>
								<TabsContent
									className='bg-[#F5F5F5] py-6 px-4 flex flex-col gap-4 -mt-1  '
									value='monday'
								>
									{lunchItems.map(({ pic, name, price }) => (
										<BreakfastItem
											key={name}
											pic={pic}
											name={name}
											price={price}
											className='w-[899px]'
                      // item={item}
										// checked = {checked}
                    // onChange={() => handleCheckbox(name)}
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
