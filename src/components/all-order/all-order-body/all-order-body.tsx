import AddIcon from '@/assets/icons/add-icon';
import { Button } from '../../ui/button';
import { Checkbox } from '../../ui/checkbox';
import { Label } from '../../ui/label';
import NewOrders from './new-orders';
import InProcessOrders from './in-process-orders';
import Delivered from './delivered';

export default function AllOrderBody() {
	return (
		<main>
			<section className='border-b border-[#7d858b33] relative '>
				<div className='w-full max-w-[1432px] px-5 mx-auto '>
					<div className='flex items-center justify-between py-[15px] '>
						<h1 className='text-2xl font-semibold text-[#2F3138]  '>
							Все заказы
						</h1>
						<div className='flex items-center '>
							<span className='text-[#7D848B] inline-block me-4 '>
								Отображать заказы:
							</span>
							<form action='' className='flex items-center '>
								<Checkbox
									id='terms'
									className='data-[state=checked]:bg-[#2BC128] w-[18px] h-[18px] me-3 '
								/>
								<Label htmlFor='terms' className='text-[#2F3138] me-4'>
									оплаченные
								</Label>
								<Checkbox
									id='terms'
									className='data-[state=checked]:bg-[#FF1F00] w-[18px] h-[18px] me-3 '
								/>
								<Label htmlFor='terms' className='text-[#2F3138] me-6'>
									не оплаченные
								</Label>
								<Button variant={'checkbox'} size={'create'}>
									<AddIcon />
									Создать заказ
								</Button>
							</form>
						</div>
					</div>
				</div>
				{/* <ChooseItem/> */}

			</section>

			<section >
				<div className='w-full max-w-[1432px] px-5 mx-auto '>
					<div className='flex items-start gap-6 '>
					<NewOrders/>
					<InProcessOrders/>
					<Delivered/>
					</div>
				</div>
			</section>

		</main>
	);
}
