import { Link } from 'react-router-dom';
import { Input } from '../ui/input';
import logo from '../../assets/images/logo.svg';
import search from '../../assets/images/search-icon.svg';
import qr from '../../assets/images/qr-code.svg';
import avatar from '../../assets/images/user_avatar.svg';
import arrow from '../../assets/images/bottom-arrow.svg';
import redCircle from '../../assets/images/circle-red.svg';
export default function Header() {
	return (
		<header className='border-b border-[#7d858b33] bg-[#F5F5F5]'>
			<div className='w-full max-w-[1432px] px-5 mx-auto '>
				<div className='flex items-center justify-between pt-[14px]  '>
					{/* left side */}
					<div className='flex items-start'>
						<Link to={'/'} className='mb-[14px] me-[52px] '>
							<img src={logo} alt='' />
						</Link>
						<ul className='flex items-start mt-3 font-medium gap-6'>
							<li>
								<Link
									to={'/'}
									className='pb-[25px] flex gap-2 text-[#56F]  border-b-2 border-[#56F] '
								>
									Все заказы <img src={redCircle} className='mt-1' alt='' />
								</Link>
							</li>
							<li>
								<Link to={'/'} className='pb-[25px] '>
									Управление меню
								</Link>
							</li>
							<li>
								<Link to={'/'} className='pb-[25px] '>
									История заказов
								</Link>
							</li>
							<li>
								<Link to={'/'} className='pb-[25px] '>
									Долги
								</Link>
							</li>
						</ul>
					</div>
					{/* right side */}
					<div className='flex items-center gap-6 mb-[15px] '>
						<form action=''>
							<div className='relative'>
								<Input
									className='border-[#ECEDEE] w-[311px] bg-white ps-10 pe-5 placeholder:text-[#7D848B] text-[14px] py-[10px] h-auto '
									placeholder='Поиск'
								/>
								<img
									className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 '
									src={search}
									alt=''
								/>
							</div>
						</form>

						<div className='w-10 h-10 bg-[#56F] rounded-[5px] flex items-center justify-center '>
							<img src={qr} alt='' />
						</div>

						<div className='flex items-start gap-3'>
							<img src={avatar} alt='' />
							<div className='flex flex-col'>
								<strong className='flex items-center text-[14px] text-[#2F3138]  gap-[6px]  '>
									Солиева Лазиза
									<img src={arrow} alt='' />
								</strong>
								<span className='text-xs text-[#5566FF] '>Администратор</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
