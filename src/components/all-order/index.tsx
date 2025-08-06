import AllOrderBody from './all-order-body/all-order-body';
import ChooseItem from './choose-item/choose-item';
import Header from './header';

export default function AllOrder() {
	return (
		<>
			<Header />
			<AllOrderBody />
			<ChooseItem/>
		</>
	);
}
