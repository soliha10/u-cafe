import AddIcon from '@/assets/icons/add-icon';
import Header from '../all-order/header';
import ManageItem from '../common/manage-item';
import { Button } from '../ui/button';
import BreakfastIcon from '@/assets/icons/breakfast';
import Cup from '@/assets/icons/cup';
import Chocolate from '@/assets/icons/chocolate';
import Pp from '@/assets/icons/pp';
import Sweet from '@/assets/icons/sweet';
import Lunch from '@/assets/icons/lunch';
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '../ui/pagination';
import { manageOrder } from './manage-order';

export default function ManageOrder() {
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
			<section className='bg-white border-b border-[#7d858b33] '>
				<div className='w-full max-w-[1432px] px-5 mx-auto '>
					<div className='flex justify-between items-center py-[18px]  '>
						<h2 className='text-2xl font-semibold'>Управление меню</h2>
						<Button
							variant={'checkbox'}
							className='py-[10px] px-[14px] text-[14px] font-medium  '
						>
							<AddIcon /> Добавить блюдо
						</Button>
					</div>
				</div>
			</section>

			<section className='bg-[#F5F5F5]  '>
				<div className='w-full max-w-[1432px] px-5 mx-auto '>
					<div className='pt-[22px] pb-9 '>
						<ul className='flex items-center gap-4 mb-[21px] '>
							{menuItems.map(({ pic, name }) => (
								<li key={name}>
									<Button
										className={`${
											name === 'Завтраки' ? 'bg-[#EEF0FF] text-[#5566FF]' : ''
										} w-[218px] justify-start `}
										variant={'menu'}
										size={'menu'}
									>
										{pic}
										<span>{name}</span>
									</Button>
								</li>
							))}
						</ul>
						<ul className='flex flex-col gap-4 mb-9 '>
							{manageOrder.map(({ pic, name, count, price }) => (
								<ManageItem
									key={name}
									pic={pic}
									name={name}
									count={count}
									price={price}
								/>
							))}
						</ul>
						<Pagination className='text-[14px]  '>
							<PaginationContent>
								<PaginationItem>
									<PaginationPrevious className='' href='#' />
								</PaginationItem>
								<PaginationItem className='border border-[#ECEDEE] rounded-full text-[#7D848B] '>
									<PaginationLink href='#' isActive>
										1
									</PaginationLink>
								</PaginationItem>
								<PaginationItem className='border border-[#ECEDEE] rounded-full text-[#7D848B] '>
									<PaginationLink href='#'>2</PaginationLink>
								</PaginationItem>
								<PaginationItem className='border border-[#ECEDEE] rounded-full text-[#7D848B] '>
									<PaginationLink href='#'>3</PaginationLink>
								</PaginationItem>
								<PaginationItem className='border border-[#ECEDEE] rounded-full text-[#7D848B] '>
									<PaginationLink href='#'>4</PaginationLink>
								</PaginationItem>
								<PaginationItem className='border border-[#ECEDEE] rounded-full text-[#7D848B] '>
									<PaginationLink href='#'>5</PaginationLink>
								</PaginationItem>

								<PaginationItem>
									<PaginationNext href='#' />
								</PaginationItem>
							</PaginationContent>
						</Pagination>
					</div>
				</div>
			</section>
		</>
	);
}
