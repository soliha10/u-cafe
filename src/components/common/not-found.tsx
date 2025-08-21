import NotFoundIcon from '@/assets/icons/not-found';
import { Button } from '../ui/button';

export default function NotFound() {
	return (
		<section className=''>
			<div className='w-full max-w-[1432px] px-5 mx-auto '>
				<div className='flex flex-col items-center justify-center h-dvh '>
					<NotFoundIcon  />
          <div className='w-[386px] text-center mt-[14px] '>

					<p className='mb-6'>
						Страница, которую вы запрашиваете не существует. Возможно, она
						устарела, была удалена или был введен неверный адрес
					</p>
					<Button variant={'checkbox'} className='py-[14px] px-6 font-medium ' >Вернуться на главную</Button>
          </div>
				</div>
			</div>
		</section>
	);
}
