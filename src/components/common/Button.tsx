import classNames from "classnames";
import type { CSSProperties, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  type?: "primary" | "danger" | "light" | "dark" | "none";
  style?: "outline"  | "flat";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
  css? : CSSProperties
}>;

function Button(props: Props) {
  const {
    type,
    style,
    disabled,
    className,
    children,
    css,
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
      style={css}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
