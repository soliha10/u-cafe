import Empty from '@/components/common/empty';
import OrderItem from '@/components/common/order-item';
import { newOrders } from './order-body-data';

export default function NewOrders() {
	return (
		<div className='pt-6'>
			<div className='bg-[#F5F5F5] rounded-t-[8px] w-fit pt-2 px-3 pb-1 h-full '>
				<h2 className='text-[#2F3138] font-medium '>
					Новые <span className='text-[#7D848B]'>(4)</span>
				</h2>
			</div>
			<ul
				style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
				className='p-4 bg-[#F5F5F5] rounded-b-[8px] rounded-tr-[8px] w-[448px] h-[68vh]   overflow-y-auto scrollbar-hide flex flex-col gap-3 '
			>
				{newOrders.map(({ orderNumber, time, type, status, gift }) => (
					<OrderItem
						key={orderNumber}
						orderNumber={orderNumber}
						time={time}
						type={type}
						status={status}
						gift={gift}
					/>
				))}
				{!newOrders && <Empty />}
			</ul>
		</div>
	);
}
