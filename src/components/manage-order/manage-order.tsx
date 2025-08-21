import Header from '../all-order/header';
import ManageItem from '../common/manage-item';

export default function ManageOrder() {
	return (
		<>
			<Header />
			<section>
				<div className='w-full max-w-[1432px] px-5 mx-auto '>
					<div>
						<ManageItem />
					</div>
				</div>
			</section>
		</>
	);
}
