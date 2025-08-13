import XBtn from '@/assets/icons/x-btn';
import { Button } from '@/components/ui/button';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableRow,
} from '@/components/ui/table';
import { Link } from 'react-router-dom';
import logo from '@/assets/images/logo.svg';
import { readyOrders } from './order-body-data';
import PrintIcon from '@/assets/icons/print-icon';

export default function PrintOrder() {
	return (
		<div className='w-[461px] ms-auto bg-white h-[100%] '>
			<div className='py-4 px-6 '>
				<div className='flex justify-between items-center pb-4 border-b border-[#7d858b33] '>
					<Link to={'/'}>
						<img src={logo} alt='' />
					</Link>
					<Button>
						<XBtn />
					</Button>
				</div>

				<Table className='pt-4 flex flex-col gap-4 h-[250px] '>
					<TableCaption className='font-semibold text-left text-[#2F3138] text-base mt-0  '>
						Продажа
					</TableCaption>
					<TableBody className='flex flex-col gap-4 text-[14px] '>
						<TableRow className='flex justify-between'>
							<TableCell className='w-[200px]'>
								Клубничный торт со сливками
							</TableCell>
							<TableCell className='w-[100px]'>1x12 000</TableCell>
							<TableCell className='font-semibold'>12 000 UZS</TableCell>
						</TableRow>
						<TableRow className='flex justify-between'>
							<TableCell className='w-[200px]'>Клубничное мороженое</TableCell>
							<TableCell className='w-[100px]'>2x25 000</TableCell>
							<TableCell className='font-semibold'>50 000 UZS</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>

			<div className='py-4 px-6 bg-[#F5F5F5] rounded-t-[12px]  '>
				<Table className='flex flex-col text-[14px] mb-6'>
					<TableBody className='flex flex-col gap-4 w-full mb-4 '>
						{readyOrders.map(({ name, value }) => (
							<TableRow
								key={name}
								className='flex justify-between items-center w-full'
							>
								<TableCell>{name}</TableCell>
								<TableCell>{value}</TableCell>
							</TableRow>
						))}
					</TableBody>
					<TableFooter className='border-t-0  '>
						<TableRow className='flex justify-between'>
							<TableCell className='font-normal'>Наличными</TableCell>
							<TableCell className='font-bold'>62 000.00 UZS</TableCell>
						</TableRow>
					</TableFooter>
				</Table>
				<Button variant={'checkbox'} size={'checkbox'} className='w-full'>
					<PrintIcon /> Печатать
				</Button>
			</div>
		</div>
	);
}
