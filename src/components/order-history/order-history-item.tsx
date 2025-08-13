import HistoryMeal from '@/assets/icons/history-meal';
import { Button } from '../ui/button';
import Walking from '@/assets/icons/walking';
import Chek from '@/assets/icons/chek';

export default function OrderHistoryItem() {
	return (
		<li
			className='flex items-center py-4 w-full justify-between rounded-md bg-white px-4 text-[14px]  '
			style={{ boxShadow: ' 0 0 5px 0 #00000014' }}
		>
			<strong>Заказ №1243</strong>
			<span>+998 93 494 39 49</span>
			<span className='flex items-center px-2 py-[5px] gap-1 border border-[#7d858b33] rounded-[5px] '>
				<HistoryMeal /> 6 позиций
			</span>
			<span className='flex items-center px-2 py-[5px] gap-1 border border-[#7d858b33] rounded-[5px] '>
				<Walking /> с собой
			</span>
			<span>Терминал</span>
			<span>0 UZS</span>
			<span className='bg-[#EAF9EA] text-[#2BC128] inline-block py-[5px] px-[10px] rounded-[5px]  '>оплачено</span>
			<Button variant={'history'} size={'history'}>
				<Chek /> Посмотреть чек
			</Button>
		</li>
	);
}
