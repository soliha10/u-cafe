import AddIcon from '@/assets/icons/add-icon';
import Header from '../all-order/header';
import { Button } from '../ui/button';
import WorkersItem from '../common/workers-item';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '../ui/pagination';
import { workers } from './workers';

export default function ManageWorkers() {
	return (
		<>
			<Header />
			<section className='bg-white border-b border-[#7d858b33] '>
				<div className='w-full max-w-[1432px] px-5 mx-auto '>
					<div className='flex justify-between items-center py-[18px]  '>
						<h2 className='text-2xl font-semibold'>Управление меню</h2>
						<Button
							variant={'checkbox'}
							className='py-[10px] px-[14px] text-[14px] font-medium  '
						>
							<AddIcon /> Добавить блюдо
						</Button>
					</div>
				</div>
			</section>

			<section className='bg-[#F5F5F5] '>
				<div className='w-full max-w-[1432px] px-5 mx-auto '>
          <div className='pt-4 h-[calc(100vh-150px)] flex flex-col justify-between '>
            <ul className='flex flex-col gap-4'>
              {workers.map(({name, login, role}) => (
                <WorkersItem name={name} login={login} role={role}/>

              ))}
            
            </ul>

            <Pagination className='text-[14px] mt-auto mb-9  '>
							<PaginationContent>
								<PaginationItem>
									<PaginationPrevious className='' href='#' />
								</PaginationItem>
								<PaginationItem className='border border-[#ECEDEE] rounded-full text-[#7D848B] '>
									<PaginationLink href='#' isActive>
										1
									</PaginationLink>
								</PaginationItem>
								<PaginationItem className='border border-[#ECEDEE] rounded-full text-[#7D848B] '>
									<PaginationLink href='#'>2</PaginationLink>
								</PaginationItem>
								<PaginationItem className='border border-[#ECEDEE] rounded-full text-[#7D848B] '>
									<PaginationLink href='#'>3</PaginationLink>
								</PaginationItem>
								<PaginationItem className='border border-[#ECEDEE] rounded-full text-[#7D848B] '>
									<PaginationLink href='#'>4</PaginationLink>
								</PaginationItem>
								<PaginationItem className='border border-[#ECEDEE] rounded-full text-[#7D848B] '>
									<PaginationLink href='#'>5</PaginationLink>
								</PaginationItem>

								<PaginationItem>
									<PaginationNext href='#' />
								</PaginationItem>
							</PaginationContent>
						</Pagination>
          </div>
        </div>
			</section>
		</>
	);
}
