import type { UseFormRegister } from "react-hook-form";

export type CustomListValueInput<T> = (
  register: UseFormRegister<{ [args: string]: T }>,
  label: string,
  key: string,
  required?: boolean,
  values?: {
    valueIdentifier?: string;
    value: string | number;
  }[]
) => React.ReactNode;