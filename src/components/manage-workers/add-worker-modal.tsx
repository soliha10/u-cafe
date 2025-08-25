import XBtn from '@/assets/icons/x-btn';
import { Button } from '../ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
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
import { Select } from '@radix-ui/react-select';
import {
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../ui/select';

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

export default function AddWorkerModal() {
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

					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className='flex flex-wrap px-9'
						>
							<FormField
								control={form.control}
								name='name'
								render={({ field }) => (
									<FormItem className='mb-4'>
										<FormLabel className='text-[#7D848B] text-xs  '>
											ФИО
										</FormLabel>
										<FormControl>
											<Input
												placeholder='ФИО'
												{...field}
												className=' w-[325px]  py-[14px] px-4 rounded-[5px] border-[#7d858b33] text-[14px] text-[#2F3138]    '
												value={field.value}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='count'
								render={() => (
									<FormItem className='mb-0 ms-4 mt-0 '>
										<FormLabel className='text-[#7D848B]  text-xs mt-[-4px]  '>
											Должность
										</FormLabel>
										<Select>
											<SelectTrigger className='w-[325px] mt-[-8px]  data-[size=default]:h-[50px]  placeholder:text-[#2F3138]  py-[14px] px-4 rounded-[5px] border-[#7d858b33] text-[14px] text-[#2F3138]    '>
												<SelectValue placeholder='Должность' />
											</SelectTrigger>
											<SelectContent>
												<SelectGroup>
													<SelectItem value='Официант'>Официант</SelectItem>
													<SelectItem value='Курьер'>Курьер</SelectItem>
													<SelectItem value='Бариста'>Бариста</SelectItem>
												</SelectGroup>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='count'
								render={({ field }) => (
									<FormItem className='mb-0 me-4'>
										<FormLabel className='text-[#7D848B] text-xs  '>
											Логин
										</FormLabel>
										<FormControl>
											<Input
												placeholder='Логин'
												{...field}
												className='w-[325px] placeholder:text-[#2F3138]  py-[14px] px-4 rounded-[5px] border-[#7d858b33] text-[14px] text-[#2F3138]    '
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
											Пароль
										</FormLabel>
										<FormControl>
											<Input
												type='password'
												placeholder='Пароль'
												{...field}
												className='w-[325px] placeholder:text-[#2F3138]  py-[14px] px-4 rounded-[5px] border-[#7d858b33] text-[14px] text-[#2F3138]    '
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<div className='flex w-full mt-8 items-center justify-between '>
								<FormField
									control={form.control}
									name='show'
									render={() => (
										<FormItem className='flex mb-0'>
											<Switch className='w-[51px] h-[31px] me-2  ' />
											<FormLabel className='text-[#2F3138] text-[14px] font-medium '>
												Отображать в меню
											</FormLabel>

											<FormMessage />
										</FormItem>
									)}
								/>

								<Button
									variant={'checkbox'}
									type='submit'
									className='py-[14px] px-6 '
								>
									Добавить сотрудника
								</Button>
							</div>
						</form>
					</Form>
				</div>
			</div>
		</div>
	);
}
