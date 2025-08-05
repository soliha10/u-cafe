import OrderItem from '@/components/common/order-item';

export default function NewOrders() {
	const newOrders = [
		{
			orderNumber: 'Заказ №1243',
			time: '14:49',
			type: 'с собой',
			status: 'оплачено',
			gift: false,
		},
		{
			orderNumber: 'Заказ №1244',
			time: '14:50',
			type: 'в кабинет (№303)',
			status: 'оплачено',
			gift: true,
		},
		{
			orderNumber: 'Заказ №1245',
			time: '14:51',
			type: 'с собой',
			status: 'не оплачено',
			gift: true,
		},
		{
			orderNumber: 'Заказ №1246',
			time: '14:52',
			type: 'на месте (№12)',
			status: 'не оплачено',
			gift: true,
		},
	];
	return (
		<div className='pt-6'>
			<div className='bg-[#F5F5F5] rounded-t-[8px] w-fit pt-2 px-3 pb-1 h-full '>
				<h2 className='text-[#2F3138] font-medium '>Новые <span className='text-[#7D848B]'>(4)</span></h2>
			</div>
			<ul className='p-4 bg-[#F5F5F5] rounded-b-[8px] rounded-tr-[8px] w-fit flex flex-col gap-3 ' >
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
			</ul>
		</div>
	);
}
