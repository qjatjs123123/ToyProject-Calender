import classNames from "classnames";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  type?: "primary" | "danger" | "light" | "dark" | "none";
  style?: "outline"  | "flat";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
}>;

function Button(props: Props) {
  const {
    type,
    style,
    disabled,
    className,
    children,
    ...rest
  } = props;

  return (
    <button
      className={classNames(
        "button",
        {
          [`button--type-${type}`]: type,
          [`button--style-${style}`]: style,
        },
        { disabled: disabled },
        className
      )}
      {...rest}
    >
      <span className="button__content">{children}</span>
    </button>
  );
}

export default Button;
