import { forwardRef, ComponentPropsWithRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { id, label, ...rest } = props;

  return (
    <p>
      <label htmlFor={label}>{label}</label>
      <input id={id} name={id} ref={ref} {...rest} />
    </p>
  );
});

export default Input;
