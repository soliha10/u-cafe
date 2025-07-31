import cafe from '../../assets/cafe.png';
import logo from '../../assets/logo-login.svg';
import user from '../../assets/user-icon.svg';
import enter from '../../assets/lock-login.svg';
import lock from '../../assets/enter-lofin.svg';

import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
export default function LoginPage() {
	return (
		<div className='flex items-start'>
			<img className='me-[100px] ' src={cafe} alt='cafe' />
			<div className='pt-[288px] w-[357px] '>
				<a className='ms-[99px] inline-block mb-6' href='/'>
					<img src={logo} alt='pic' width={100} height={100} />
				</a>
				<h1 className='text-[#2F3138] text-2xl font-semibold mb-12 text-center'>
					Вход в аккаунт
				</h1>
				<form action=''>
					<div className='relative w-full mb-4'>
						<Input
							className='border-[#ECEDEE] rounded-[6px] ps-10 placeholder:text-[#7D848B] text-[14px] w-full bg-white'
							placeholder='Логин'
						/>
						<img
							src={user}
							alt=''
							className='absolute left-[14px] top-1/2 transform -translate-y-1/2 w-[15px] h-4'
						/>
					</div>
					<div className='relative w-full mb-6'>
						<Input
							className='border-[#ECEDEE] rounded-[6px] ps-10 w-full bg-white'
							placeholder='Пароль'
							type='password'
						/>
						<img
							src={lock}
							alt=''
							className='absolute left-[14px] top-1/2 transform -translate-y-1/2 w-[15px] h-4'
						/>
					</div>
          <Link to='/all-order'>
          
					<Button className='bg-[#56F] w-full py-[10px] px-3 text-white text-[14px] font-medium cursor-pointer rounded-[5px]  '>
						<img src={enter} alt='' />
						Войти в аккаунт
					</Button>
          </Link>
				</form>
			</div>
		</div>
	);
}
