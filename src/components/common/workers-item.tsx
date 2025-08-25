import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import Eye from '@/assets/icons/eye';

export default function WorkersItem({
	name,
	login,
	role,
}: {
	name: string;
	login: string;
	role: string;
}) {
	return (
		<li
			className='w-full flex items-center p-4 rounded-[6px] bg-white justify-between  '
			style={{ boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.08)' }}
		>
			<strong className='inline-block w-[150px] '>{name}</strong>
			{/* <div className='flex items-center gap-[74px] '> */}
			<span className='inline-block w-[150px]  '>{login}</span>
			<span className='inline-block w-[150px]  '>{role}</span>
			<Switch className='w-[51px] h-[31px]  ' />
				<Button className=' h-10 text-[#5566FF] me-4 py-[10px] px-[14px] ' variant={'history'} >
					<Eye />
					Посмотреть
				</Button>
			{/* </div> */}
		</li>
	);
}
