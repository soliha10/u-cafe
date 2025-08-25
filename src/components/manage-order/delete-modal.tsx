import XBtn from '@/assets/icons/x-btn';
import { Button } from '../ui/button';
import DeleteItem from '@/assets/icons/delete-item';

export default function DeleteModal() {
	return (
		<div className='bg-[#F5F5F5]  pt-[178px] pb-[230px] '>
			<div className='w-full max-w-[1432px] px-5 mx-auto '>
				<div className='w-[497px] mx-auto  bg-white rounded-2xl pt-6 pb-12   '>
					<div className='flex items-center justify-between px-9 pb-4 border-b border-[#7d858b33] mb-6  '>
						<h3 className='text-2xl font-semibold '>Удалить блюдо</h3>
						<Button>
							<XBtn />
						</Button>
					</div>

					<div className='w-[343px] mx-auto flex flex-col items-center text-center gap-4 '>
						<DeleteItem />
						<p>Вы уверены, что хотите удалить выбранное блюдо из меню?</p>
						<div className='flex items-center gap-4 '>
							<Button className='py-[14px] px-4 text-[#2F3138] bg-[#F5F5F5] text-[14px] font-medium '>
								Отмена
							</Button>
							<Button className='py-[14px] px-4 text-[#FF1F00] bg-[#FFE9E6] text-[14px] font-medium '>
								Удалить
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
