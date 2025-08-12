import OrderItem from '@/components/common/order-item';
import Empty from '@/components/common/empty';
import { delivered } from './order-body-data';

export default function Delivered() {
	return (
		<div className='pt-6'>
			<div className='bg-[#F5F5F5] rounded-t-[8px] w-fit pt-2 px-3 pb-1 '>
				<h2 className='text-[#2F3138] font-medium '>
					Готовые <span className='text-[#7D848B]'>(5)</span>
				</h2>
			</div>
			<ul
				style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
				className='p-4 bg-[#F5F5F5] rounded-b-[8px] rounded-tr-[8px] w-[448px] h-[68vh] overflow-y-scroll flex flex-col gap-3 '
			>
				{delivered.map(
					({ orderNumber, time, type, status, gift, delivered }) => (
						<OrderItem
							key={orderNumber}
							orderNumber={orderNumber}
							time={time}
							type={type}
							status={status}
							gift={gift}
							delivered={delivered}
						/>
					),
				)}
				{!delivered && <Empty />}
			</ul>
		</div>
	);
}
