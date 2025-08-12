import IssuedItem from '@/components/common/issued-item';
import { Button } from '@/components/ui/button';
import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableRow,
} from '@/components/ui/table';

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import Check from '@/assets/icons/check';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { ChevronDownIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';
import EmptyLunch from '@/assets/icons/empty-lunch';
import { issueItems } from '../menu-data';
export default function SelectedItems() {

	const [open, setOpen] = useState(false);
	const [date, setDate] = useState<Date | undefined>(undefined);

	return (
		<div className='  absolute right-0 top-0 '>
			<div className='w-[505px] ms-auto  bg-white'>
				<div className=' ps-6 w-[413px]  '>
					<ul className='pt-4 flex flex-col gap-4 pb-11'>
						{issueItems.map(({ pic, name, price }) => (
							<IssuedItem key={name} pic={pic} name={name} price={price} />
						))}
						{!issueItems.length && (
							<li className='flex pt-[193px] pb-[183px]  flex-col items-center justify-center'>
								<EmptyLunch />
								<span>Начните добавлять блюда</span>
							</li>
						)}
					</ul>
				</div>

				<div className='bg-[#F5F5F5] rounded-t-[12px] ps-6 pt-4 pb-9 '>
					<Table className='w-[413px]'>
						<TableBody className='w-full flex flex-col gap-4 pb-4 text-[14px] '>
							<TableRow className='flex items-center justify-between w-[413px] '>
								<TableCell>ID клиента</TableCell>
								<TableCell>{issueItems.length ? '12348293' : 'Неопределено'}</TableCell>
							</TableRow>

							<TableRow className='flex items-center justify-between w-[413px] '>
								<TableCell>Общее количество позиций</TableCell>
								<TableCell>{issueItems.length ? '5' : '0'} позиций</TableCell>
							</TableRow>

							<TableRow className='flex items-center justify-between w-[413px] '>
								<TableCell>Тип заказа</TableCell>
								<TableCell>
									<Select>
										<SelectTrigger className='bg-white'>
											<SelectValue placeholder='Выберите' />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectItem
													className='hover:text-[#56F]'
													value='с собой'
												>
													с собой
												</SelectItem>
												<SelectItem
													className='hover:text-[#56F]'
													value='на месте'
												>
													на месте
												</SelectItem>
												<SelectItem
													className='hover:text-[#56F]'
													value='доставка'
												>
													доставка
												</SelectItem>
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

							{issueItems.length && (
								<TableRow className='flex items-center justify-between w-[413px] '>
									<TableCell>Выберите дату</TableCell>
									<TableCell>
										<Popover open={open} onOpenChange={setOpen}>
											<PopoverTrigger asChild>
												<Button
													variant='outline'
													id='date'
													className='w-[123px] justify-between font-normal'
												>
													{date ? date.toLocaleDateString() : 'Выберите дату'}
													<ChevronDownIcon />
												</Button>
											</PopoverTrigger>
											<PopoverContent
												className='w-auto overflow-hidden p-0'
												align='start'
											>
												<Calendar
													mode='single'
													selected={date}
													captionLayout='dropdown'
													onSelect={(date) => {
														setDate(date);
														setOpen(false);
													}}
												/>
											</PopoverContent>
										</Popover>
									</TableCell>
								</TableRow>
							)}
						</TableBody>

						<TableFooter>
							<TableRow className='flex items-center justify-between w-[413px] pt-4 mb-6 '>
								<TableCell className='text-base font-semibold '>
									Итоговая сумма
								</TableCell>
								<TableCell className='text-right text-2xl font-bold '>
									{issueItems.length ? '213 000 UZS' : '0 UZS'}
								</TableCell>
							</TableRow>
						</TableFooter>
					</Table>

					<div className='flex items-center justify-between w-[413px] '>
						<Button
							disabled={issueItems.length === 0}
							className='w-full'
							variant={'checkbox'}
							size={'checkbox'}
						>
							<Check /> Оплатить
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
