import CloseX from '@/assets/icons/close-x';
import IssuedItem from '@/components/common/issued-item';
import { Button } from '@/components/ui/button';
import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableRow,
} from '@/components/ui/table';
import iceCream from '@/assets/images/ice-cream.png';
import capuchino from '@/assets/images/capuchino.png';
import water from '@/assets/images/water.png';
import cake from '@/assets/images/cake-peace.png';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import Archive from '@/assets/icons/archive';
import Check from '@/assets/icons/check';
export default function ChooseItem() {
	const issueItems = [
		{
			pic: cake,
			name: 'Клубничный торт со сливками и...',
			price: '120 000 UZS',
		},
		{
			pic: iceCream,
			name: 'Клубничное мороженое',
			price: '120 000 UZS',
		},
		{
			pic: capuchino,
			name: 'Капучино (средний)',
			price: '120 000 UZS',
		},
		{
			pic: capuchino,
			name: 'Капучино (большой)',
			price: '120 000 UZS',
		},
		{
			pic: water,
			name: 'Вода без газа Nestle 0,5',
			price: '120 000 UZS',
		},
	];

	return (
    <div className='bg-[#D9D9D9] z-10 absolute right-0 top-0  w-screen'>

		<div className='w-[500px] ms-auto  bg-white'>
			<div className='pt-6 ps-6 w-[413px]  '>
				<div className='flex items-center justify-between text-[#7D848B] text-[14px] mb-4  '>
					<div>
						<span>
							Оформлен в <time>14:49</time>
						</span>
						<span></span>
						<span> Готово</span>
					</div>
					<CloseX />
				</div>

				<h2 className='text-[#2F3138] text-2xl font-semibold  mb-4 '>
					Заказ №1243
				</h2>

				<ul className='border-t border-[#7d858b33] pt-4 flex flex-col gap-4 pb-11'>
					{issueItems.map(({ pic, name, price }) => (
						<IssuedItem key={name} pic={pic} name={name} price={price} />
					))}
				</ul>
			</div>

			<div className='bg-[#F5F5F5] rounded-t-[12px] ps-6 pt-4 pb-9 '>
				<Table className='w-[413px]'>
					<TableBody className='w-full flex flex-col gap-4 pb-4 text-[14px] '>
						<TableRow className='flex items-center justify-between w-[413px] '>
							<TableCell>ID клиента</TableCell>
							<TableCell>12348293</TableCell>
						</TableRow>

						<TableRow className='flex items-center justify-between w-[413px] '>
							<TableCell>Общее количество позиций</TableCell>
							<TableCell>5 позиций</TableCell>
						</TableRow>

						<TableRow className='flex items-center justify-between w-[413px] '>
							<TableCell>Тип заказа</TableCell>
							<TableCell>
								<Select>
									<SelectTrigger className='bg-white'>
										<SelectValue placeholder='Выберите' />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup >
											<SelectItem className='hover:text-[#56F]' value='с собой' >с собой</SelectItem>
											<SelectItem className='hover:text-[#56F]' value='на месте'>на месте</SelectItem>
											<SelectItem className='hover:text-[#56F]' value='доставка'>доставка</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</TableCell>
						</TableRow>

						<TableRow className='flex items-center justify-between w-[413px] '>
							<TableCell>Способ оплаты</TableCell>
							<TableCell>
								<Select>
									<SelectTrigger className='bg-white'>
										<SelectValue placeholder='Выберите' />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectItem value='с наличными'>с наличными</SelectItem>
											<SelectItem value='переводом'>переводом</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</TableCell>
						</TableRow>

						<TableRow className='flex items-center justify-between w-[413px] '>
							<TableCell>Статус</TableCell>
							<TableCell className='bg-[#F6E0DC] text-[#FF1F00] text-[14px] px-[10px] py-[5px] rounded-[5px] '>
								не оплачено
							</TableCell>
						</TableRow>
					</TableBody>

					<TableFooter>
						<TableRow className='flex items-center justify-between w-[413px] pt-4 mb-6 '>
							<TableCell className='text-base font-semibold '>
								Итоговая сумма
							</TableCell>
							<TableCell className='text-right text-2xl font-bold '>
								213 000 UZS
							</TableCell>
						</TableRow>
					</TableFooter>
				</Table>

				<div className='flex items-center justify-between w-[413px] '>
					<Button variant={'archive'} size={'checkbox'}>
						<Archive />
						Архивировать
					</Button>
					<Button variant={'checkbox'} size={'checkbox'}>
						<Check /> Оплатить
					</Button>
				</div>
			</div>
		</div>
    </div>
	);
}
