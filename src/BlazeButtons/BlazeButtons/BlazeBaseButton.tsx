import type { BlazeBaseButtonType as BaseButton } from "../BlazeBaseButtonType";


export const BlazeBaseButton : BaseButton = (props) => {
  return (
    <button
      {...{
        ...props,
        className: `${props.className}
        ${!(props.variant) ? "hover:brightness-110" : "hover:brightness-130"}
        duration-[200ms] cursor-pointer px-3 py-1 rounded-xl shadow-md
        `,
      }}
    />
  );
};
