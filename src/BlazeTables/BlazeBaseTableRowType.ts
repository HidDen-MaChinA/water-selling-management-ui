import type React from "react";

export type BlazeBaseTableRowType = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTableRowElement>,
    HTMLTableRowElement
  >
) => React.ReactNode;