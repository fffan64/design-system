import "@axa-fr/design-system-css/dist/Form/Date/Date.agent.scss";
import { ComponentPropsWithRef, forwardRef, useMemo } from "react";
import { getComponentClassName } from "../core";

type Props = Omit<ComponentPropsWithRef<"input">, "value"> & {
  classModifier?: string;
  value?: Date;
};

const Date = forwardRef<HTMLInputElement, Props>(
  ({ className, classModifier, value, ...otherProps }, ref) => {
    const componentClassName = getComponentClassName(
      className,
      classModifier,
      "af-form__input-date",
    );

    const currentValue = useMemo(() => {
      if (value) {
        const monthFormatted = `0${value.getMonth() + 1}`.slice(-2);
        const dayFormatted = `0${value.getDate()}`.slice(-2);
        return `${value.getFullYear()}-${monthFormatted}-${dayFormatted}`;
      }
      return undefined;
    }, [value]);

    return (
      <input
        className={componentClassName}
        type="date"
        defaultValue={currentValue}
        ref={ref}
        required={classModifier?.includes("required")}
        {...otherProps}
      />
    );
  },
);

Date.displayName = "Date";

export { Date };
