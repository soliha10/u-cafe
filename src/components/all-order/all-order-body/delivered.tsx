import OrderItem from '@/components/common/order-item';

export default function Delivered() {
	const delivered = [
		{
			orderNumber: 'Заказ №1243',
			time: '14:49',
			type: 'с собой',
			status: 'оплачено',
			gift: true,
      delivered: true
		},
		{
			orderNumber: 'Заказ №1244',
			time: '14:50',
			type: 'в кабинет (№303)',
			status: 'оплачено',
			gift: true,
		},
		{
			orderNumber: 'Заказ №1243',
			time: '14:49',
			type: 'с собой',
			status: 'оплачено',
			gift: true,
		},
		{
			orderNumber: 'Заказ №1244',
			time: '14:50',
			type: 'в кабинет (№303)',
			status: 'оплачено',
			gift: true,
		},
		{
			orderNumber: 'Заказ №1243',
			time: '14:49',
			type: 'с собой',
			status: 'оплачено',
			gift: true,
		},
		{
			orderNumber: 'Заказ №1244',
			time: '14:50',
			type: 'в кабинет (№303)',
			status: 'оплачено',
			gift: true,
		},
		{
			orderNumber: 'Заказ №1244',
			time: '14:50',
			type: 'в кабинет (№303)',
			status: 'оплачено',
			gift: true,
		},

	];
	return (
		<div className='pt-6'>
			<div className='bg-[#F5F5F5] rounded-t-[8px] w-fit pt-2 px-3 pb-1 '>
				<h2 className='text-[#2F3138] font-medium '>Готовые <span className='text-[#7D848B]'>(5)</span></h2>
			</div>
			<ul className='p-4 bg-[#F5F5F5] rounded-b-[8px] rounded-tr-[8px] w-fit flex flex-col gap-3 ' >
				{delivered.map(({ orderNumber, time, type, status, gift, delivered }) => (
					<OrderItem
						key={orderNumber}
						orderNumber={orderNumber}
						time={time}
						type={type}
						status={status}
						gift={gift}
						delivered={delivered}
					/>
				))}
			</ul>
		</div>
	);
}
