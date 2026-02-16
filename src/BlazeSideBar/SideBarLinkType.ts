import React from "react";

export type SideBarLinkType = (
  props: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > & {selected?: boolean}
) => React.ReactNode;