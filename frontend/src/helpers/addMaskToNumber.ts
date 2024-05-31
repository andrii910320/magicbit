import { UseFormSetValue } from "react-hook-form";
import { IFindUserRes } from "../constants/interface";

export const handleNumberChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setValue: UseFormSetValue<IFindUserRes>
) => {
  let value = e.target.value;
  value = value.slice(0, 8);
  if (value.length <= 8) {
    const formattedValue = value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1-$2")
      .replace(/(\d{2})-(\d{2})(\d)/, "$1-$2-$3");
    // Встановлення нового значення у форму
    setValue("number", formattedValue);
  } else {
    // setValue("number", value);
    return;
  }
};
