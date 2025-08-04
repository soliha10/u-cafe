import Walking from '@/assets/icons/walking';

export default function OrderItem({
	orderNumber,
	time,
	type,
	status,
}: {
	orderNumber: string;
	time: string;
	type: string;
	status: string;
}) {
	return (
		<li
			className='w-[416px] p-4 rounded-[6px] flex flex-col '
			style={{ boxShadow: '0 0 5px 0 #00000014' }}
		>
			<div className='flex items-center justify-between mb-4'>
				<strong>{orderNumber}</strong>
				<time className='text-[#7D848B] text-[14px]  '>{time}</time>
			</div>

			<div className='flex items-center justify-between'>
				<span className='border border-[#7d858b33] flex items-center gap-1 text-[14px] py-[5px] px-2 rounded-[5px] '>
					<Walking />
					{type}
				</span>
				<span className='bg-[#2bc12819] text-[#2BC128] text-[14px] py-[5px]  px-[10px] rounded-[5px] '>
					{status}
				</span>
			</div>
		</li>
	);
}
