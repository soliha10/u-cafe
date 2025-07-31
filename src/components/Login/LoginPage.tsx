import cafe from '../../assets/cafe.png';
import logo from '../../assets/logo-login.svg';
export default function LoginPage() {
	return (
		<div className='flex items-start'>
			<img className='me-[100px] ' src={cafe} alt='cafe' />
			<div className='pt-[288px] w-[357px] '>
				<a className='ms-[99px] inline-block mb-6' href='/'>
					<img src={logo} alt='' />
				</a>
        <h1 className='text-[#2F3138] text-2xl font-semibold mb-12 text-center'>Вход в аккаунт</h1>
        <form action="">
          
        </form>
			</div>
		</div>
	);
}
