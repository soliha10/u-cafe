import { ChevronDownIcon } from 'lucide-react';
import Header from '../all-order/header';
import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Calendar } from '../ui/calendar';
import { useState } from 'react';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../ui/select';
import OrderHistoryItem from './order-history-item';
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '../ui/pagination';
// import { Checkbox } from '../ui/checkbox';

export default function OrderHistory() {
	const [open, setOpen] = useState(false);
	const [date, setDate] = useState<Date | undefined>(undefined);
	return (
		<>
			<Header />
			<section className='bg-white border-b border-[#7d858b33] '>
				<div className='w-full max-w-[1432px] px-5 mx-auto '>
					<div className='flex justify-between items-center py-[18px]  '>
						<h2 className='text-2xl font-semibold'>История заказов (166)</h2>
						<div className='flex items-center gap-4'>
							<Popover open={open} onOpenChange={setOpen}>
								<PopoverTrigger asChild>
									<Button
										variant='date'
										id='date'
										className='w-auto justify-between font-normal px-3 py-2'
									>
										{date ? date.toLocaleDateString() : 'Select date'}
										<ChevronDownIcon className='w-3 h-3' />
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

							<Select>
								<SelectTrigger className='w-[180px] text-[#2F3138] rounded-[5px]  shadow-none '>
									<SelectValue placeholder='Все способы оплаты' />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectItem value='apple'>Переводом</SelectItem>
										<SelectItem value='banana'>Наличными</SelectItem>
										<SelectItem value='blueberry'>Click</SelectItem>
										<SelectItem value='grapes'>Payme</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>

							<Select>
								<SelectTrigger className='w-[180px] rounded-[5px]  shadow-none '>
									<SelectValue placeholder='Все типы заказов' />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectItem value='apple'>С собой</SelectItem>
										<SelectItem value='banana'>На месте</SelectItem>
										<SelectItem value='blueberry'>В кабинет</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
					</div>
				</div>
			</section>

			<section className='bg-[#F5F5F5] '>
				<div className='w-full max-w-[1432px] px-5 mx-auto '>
					<div className='pt-6 pb-9 '>
						<ul className='flex flex-col gap-4 mb-9 '>
							<OrderHistoryItem />
							<OrderHistoryItem />
							<OrderHistoryItem />
							<OrderHistoryItem />
							<OrderHistoryItem />
							<OrderHistoryItem />
							<OrderHistoryItem />
						</ul>

						<Pagination className='text-[14px] ' >
							<PaginationContent>
								<PaginationItem >
									<PaginationPrevious className='' href='#' />
								</PaginationItem>
								<PaginationItem className='border border-[#ECEDEE] rounded-full text-[#7D848B] '>
									<PaginationLink href='#'>1</PaginationLink>
								</PaginationItem>
								<PaginationItem className='border border-[#ECEDEE] rounded-full text-[#7D848B] '>
									<PaginationLink href='#' isActive>
										2
									</PaginationLink>
								</PaginationItem>
								<PaginationItem className='border border-[#ECEDEE] rounded-full text-[#7D848B] '>
									<PaginationLink href='#'>3</PaginationLink>
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
