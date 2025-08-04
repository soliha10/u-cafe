import cafe from '../../assets/images/cafe.png';
import logo from '../../assets/images/logo-login.svg';
import user from '../../assets/images/user-icon.svg';
import enter from '../../assets/images/lock-login.svg';
import lock from '../../assets/images/enter-lofin.svg';

import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
	email: yup.string().email('Неверный формат').required('Обязательное поле'),
	password: yup
		.string()
		.min(3, 'Минимум 3 символа')
		.required('Обязательное поле'),
});

export default function LoginPage() {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
		mode: 'all',
		resolver: yupResolver(schema),
	});
	const router = useNavigate();
	const onSubmit = () => {
		router('/all-order');
	};
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
				<form action='' onSubmit={handleSubmit(onSubmit)}>
					<div className='relative w-full mb-4'>
						<Input
							className='border-[#ECEDEE] rounded-[6px] ps-10 placeholder:text-[#7D848B] text-[14px] w-full bg-white'
							placeholder='Логин'
							{...register('email')}
						/>
						<img
							src={user}
							alt=''
							className='absolute left-[14px] top-1/2 transform -translate-y-1/2 w-[15px] h-4'
						/>
						<span className='text-red-500 absolute bottom-[-15px] left-1 text-xs'>
							{errors.email?.message}
						</span>
					</div>
					<div className='relative w-full mb-6'>
						<Input
							className='border-[#ECEDEE] rounded-[6px] ps-10 w-full bg-white'
							placeholder='Пароль'
							type='password'
							{...register('password')}
						/>
						<img
							src={lock}
							alt=''
							className='absolute left-[14px] top-1/2 transform -translate-y-1/2 w-[15px] h-4'
						/>
						<span className='text-red-500 absolute bottom-[-15px] left-1 text-xs'>
							{errors.password?.message}
						</span>
					</div>

					<Button
						disabled={!isValid}
						type='submit'
						className='bg-[#56F] w-full py-[10px] px-3 text-white text-[14px] font-medium cursor-pointer rounded-[5px]  '
					>
						{/* <Link className='flex items-center' to='/all-order'> */}
						<img src={enter} alt='' />
						Войти в аккаунт
						{/* </Link> */}
					</Button>
				</form>
			</div>
		</div>
	);
}
