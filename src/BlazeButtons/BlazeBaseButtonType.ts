import type { ButtonHTMLAttributes } from "react";
import type React from "react";

export type BlazeBaseButtonType = (
  props: React.DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { variant?: boolean, icon?: string }
) => React.ReactNode;
