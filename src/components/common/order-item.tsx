import Building from '@/assets/icons/building';
import Chair from '@/assets/icons/chair';
import Gift from '@/assets/icons/gift';
import Walking from '@/assets/icons/walking';

export default function OrderItem({
	orderNumber,
	time,
	type,
	status,
	gift,
	delivered
}: {
	orderNumber: string;
	time: string;
	type: string;
	status: string;
	gift: boolean;
	delivered?: boolean
}) {
	return (
		<li
			className='w-[416px] p-4 rounded-[6px] flex flex-col bg-white '
			style={{ boxShadow: '0 0 5px 0 #00000014' }}
		>
			<div className='flex items-center justify-between mb-4'>
				<strong>{orderNumber}</strong>
				<time className='text-[#7D848B] text-[14px]  '>{time}</time>
			</div>

			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-3'>
					<span className='border border-[#7d858b33] flex items-center gap-1 text-[14px] py-[5px] px-2 rounded-[5px] '>
						{type === 'с собой' && <Walking />}
						{type === 'в кабинет (№303)' && <Building />}
						{type === 'на месте (№12)' && <Chair />}

						{type}
					</span>
					{gift && <span className='border border-[#FCB415] bg-[#fcb41533] w-[30px] h-[30px]  rounded-[5px] flex items-center justify-center '> <Gift/> </span>}
					{delivered && <span className=' bg-[#EEF0FF] text-[#5566FF]  w-[85px]  rounded-[5px] text-center py-[5px]  px-[10px] text-[14px] '>доставлен</span>}
				</div>
				<span
					className={`${
						status === 'оплачено'
							? 'bg-[#2bc12819] text-[#2BC128]'
							: 'bg-[#FFE9E6] text-[#FF1F00]'
					}  text-[14px] py-[5px]  px-[10px] rounded-[5px] `}
				>
					{status}
				</span>
			</div>
		</li>
	);
}
