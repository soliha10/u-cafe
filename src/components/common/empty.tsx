import EmptyCard from "@/assets/icons/empty-card";

export default function Empty() {
  return(
    <div className="w-full h-full flex flex-col gap-[10px] items-center justify-center ">
    <EmptyCard/>
    <p className="text-[#7D848B]">Заказов еще нет</p>
    </div>
  )
}