import ReadyTick from "@/assets/icons/ready-tick";

export default function ReadyOrder() {
	return (
		<div className="w-[278px] mx-auto mt-9 text-base rounded-[12px] bg-white border-l-[3px] border-[#56F] p-6 flex items-center gap-3 font-medium  ">
			<ReadyTick />
      <span>Заказ успешно завершен</span>
		</div>
	);
}