import NotFoundIcon from '@/assets/icons/not-found';
import { Button } from '../ui/button';

export default function Error() {
	return (
		<section className=''>
			<div className='w-full max-w-[1432px] px-5 mx-auto '>
				<div className='flex flex-col items-center justify-center h-dvh '>
					<NotFoundIcon />
					<div className='w-[386px] text-center mt-[14px] '>
						<p className='mb-6'>
							Ошибка сервера 500. На сервере произошла непредвиденная ошибка.
							Пожалуйста, подождите, она вскоре будет исправлена.
						</p>
						<Button
							type='reset'
							variant={'checkbox'}
							className='py-[14px] px-6 font-medium '
						>
							Обновить
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
