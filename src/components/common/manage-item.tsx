import Edit from '@/assets/icons/edit';
import { Button } from '../ui/button';
import Delete from '@/assets/icons/delete';
import samsa from '@/assets/images/chicken.png';
import { Switch } from '../ui/switch';

export default function ManageItem() {
	return (
		<li
			className='w-full flex items-center p-4 rounded-[6px]  '
			style={{ boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.08)' }}
		>
			<div className='flex items-center gap-4 font-semibold me-[477px] '>
				<img src={samsa} alt='' width={48} height={48} />
				<strong>Самса с курицей</strong>
			</div>
      <div className='flex items-center gap-[74px] '>

			<span className='inline-block w-[150px]  '>12 шт.</span>
			<span className='inline-block w-[150px]  '>25 000 UZS</span>
			<Switch className='w-[51px] h-[31px]  '  />
			<div>
				<Button className='w-10 h-10 bg-[#EEF0FF] me-4 '>
					<Edit />
				</Button>
				<Button className='w-10 h-10 bg-[#FFE9E6] '>
					<Delete />
				</Button>
			</div>
      </div>
		</li>
	);
}
