import XBtn from '@/assets/icons/x-btn';
import { Button } from '../ui/button';
import BreakfastIcon from '@/assets/icons/breakfast';
import Lunch from '@/assets/icons/lunch';
import Cup from '@/assets/icons/cup';
import Chocolate from '@/assets/icons/chocolate';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import samsa from '@/assets/images/chicken.png';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Switch } from '../ui/switch';

const formSchema = z.object({
	name: z.string().min(2, {
		message: 'Username must be at least 2 characters.',
	}),
	count: z.string().min(2, {
		message: 'Count must be at least 2 characters.',
	}),
	price: z.string().min(2, {
		message: 'Price must be at least 2 characters.',
	}),
	show: z.string().min(2, {
		message: 'Show must be at least 2 characters.',
	}),
});

export default function EditModal() {
	const menuItems = [
		{
			pic: <BreakfastIcon />,
			name: 'Завтраки',
		},
		{
			pic: <Lunch />,
			name: 'Обеды',
		},
		{
			pic: <Cup />,
			name: 'Бар',
		},
		{
			pic: <Chocolate />,
			name: 'Перекусы',
		},
	];
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			count: '',
			price: '',
			show: '',
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}
	return (
		<div className='bg-[#F5F5F5] h-full pt-[178px] pb-[138px] '>
			<div className='w-full max-w-[1432px] px-5 mx-auto '>
				<div className='w-[740px] mx-auto  bg-white rounded-2xl pt-6 pb-12   '>
					<div className='flex items-center justify-between px-9 pb-4 border-b border-[#7d858b33] mb-6  '>
						<h3 className='text-2xl font-semibold '>Добавить блюдо</h3>
						<Button>
							<XBtn />
						</Button>
					</div>

					<div className='px-9 flex gap-6 mb-8'>
						<img src={samsa} alt='' className='w-[120px] h-[120px] ' />
						<div className='py-[26.5px] text-[14px] w-[372px]  '>
							<Button className='text-[#5566FF] font-medium me-3 '>
								Изменить
							</Button>
							<span className='inline-block w-[1px] h-3 bg-[#E5E7E8] me-3 '></span>
							<Button className='text-[#FF1F00] font-medium '>Удалить</Button>
							<p className='mt-2 text-[#7D848B]   '>
								Загрузите изображение блюда в формате .png, .jpg, .jpeg.
								Максимальный размер файла 10MB
							</p>
						</div>
					</div>

					<ul className='flex items-center gap-4 mb-[21px] px-9 '>
						{menuItems.map(({ pic, name }) => (
							<li key={name}>
								<Button
									className={`${
										name === 'Завтраки' ? 'bg-[#EEF0FF] text-[#5566FF]' : ''
									} w-[154px] justify-start `}
									variant={'menu'}
									size={'menu'}
								>
									{pic}
									<span>{name}</span>
								</Button>
							</li>
						))}
					</ul>

					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className='space-y-8 px-9'
						>
							<FormField
								control={form.control}
								name='name'
								render={({ field }) => (
									<FormItem className='mb-4'>
										<FormLabel className='text-[#7D848B] text-xs  '>
											Название блюда
										</FormLabel>
										<FormControl>
											<Input
												placeholder='Самса c мясом и картофелем'
												{...field}
												className='py-[14px] px-4 rounded-[5px] border-[#7d858b33] text-[14px] text-[#2F3138]    '
												value={field.value}
											/>
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
							<div className='flex '>
								<FormField
									control={form.control}
									name='count'
									render={({ field }) => (
										<FormItem className='mb-0 me-4'>
											<FormLabel className='text-[#7D848B] text-xs  '>
												Количество (штук)
											</FormLabel>
											<FormControl>
												<Input
													placeholder='12'
													{...field}
													className='w-[325.5px]  py-[14px] px-4 rounded-[5px] border-[#7d858b33] text-[14px] text-[#2F3138]    '
												/>
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='price'
									render={({ field }) => (
										<FormItem className='mb-0'>
											<FormLabel className='text-[#7D848B] text-xs  '>
												Цена за шт. (UZS)
											</FormLabel>
											<FormControl>
												<Input
													placeholder='25 000'
													{...field}
													className='w-[325.5px]  py-[14px] px-4 rounded-[5px] border-[#7d858b33] text-[14px] text-[#2F3138]    '
												/>
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
              <div className='flex items-center justify-between '>

							<FormField
								control={form.control}
								name='show'
								render={() => (
									<FormItem className='flex mb-0'>
										<Switch className='w-[51px] h-[31px] me-2  ' />
										<FormLabel className='text-[#2F3138] text-[14px] font-medium ' >Отображать в меню</FormLabel>

										<FormMessage />
									</FormItem>
								)}
							/>

							<Button variant={'checkbox'} type='submit' className='py-[14px] px-6 ' >
								Добавить блюдо
							</Button>
              </div>
						</form>
					</Form>
				</div>
			</div>
		</div>
	);
}
