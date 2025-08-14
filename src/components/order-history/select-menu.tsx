
import { useState } from "react";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";

type PaymentOption = {
  id: string;
  label: string;
};

const paymentOptions: PaymentOption[] = [
  { id: "transfer", label: "Переводом" },
  { id: "cash", label: "Наличными" },
  { id: "click", label: "Click" },
  { id: "payme", label: "Payme" },
];

export default function PaymentSelect() {
  const [selected, setSelected] = useState<string[]>(paymentOptions.map(opt => opt.id)); // default all selected

  const toggleOption = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedLabel = selected.length === paymentOptions.length
    ? "Все способы оплаты"
    : paymentOptions
        .filter((opt) => selected.includes(opt.id))
        .map((opt) => opt.label)
        .join(", ");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-[250px] justify-between">
          {selectedLabel}
          <span className="ml-2">▼</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[250px]">
        {paymentOptions.map((option) => (
          <DropdownMenuCheckboxItem
            key={option.id}
            checked={selected.includes(option.id)}
            onCheckedChange={() => toggleOption(option.id)}
            className="flex items-center space-x-2"
          >
            {option.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
