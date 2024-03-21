import { ComponentPropsWithRef } from "react";
import type { Option } from "../../core";
import { ErrorOutline } from "../../../Icons/icons.client";
import { RadioItem } from "./RadioItem";

export enum RadioModes {
  classic = "classic",
  default = "default",
  inline = "inline",
}

type Props = Omit<
  ComponentPropsWithRef<typeof RadioItem>,
  "id" | "label" | "className"
> & {
  options: Option[];
  mode?: keyof typeof RadioModes;
  errorMessage?: string;
};

const baseClassNameMode = "af-form-client__radio";

const getContainerClassNameMode = (mode: Props["mode"]) => {
  switch (mode) {
    case RadioModes.classic:
      return `${baseClassNameMode}-container`;
    case RadioModes.inline:
      return `${baseClassNameMode}-container-inline`;
    default:
      return `${baseClassNameMode}-container-custom`;
  }
};

const getItemClassNameMode = (mode: Props["mode"]) => {
  switch (mode) {
    case RadioModes.classic:
      return baseClassNameMode;
    case RadioModes.inline:
      return `${baseClassNameMode}-inline`;
    default:
      return `${baseClassNameMode}-custom`;
  }
};

const Radio = ({
  classModifier,
  options,
  value = "",
  mode = RadioModes.default,
  errorMessage,
  children,
  disabled,
  ...otherProps
}: Props) => {
  return (
    <>
      <div className={getContainerClassNameMode(mode)}>
        {options.map((option: Option) => (
          <RadioItem
            {...otherProps}
            key={option.value}
            id={option.id}
            value={option.value}
            icon={option.icon}
            choice={option.label}
            description={option.description}
            isChecked={option.value === value}
            disabled={option.disabled || disabled}
            className={getItemClassNameMode(mode)}
            classModifier={classModifier}
            isError={!!errorMessage}
          >
            {children}
          </RadioItem>
        ))}
      </div>
      {errorMessage && (
        <div className={`${baseClassNameMode}-error-message`}>
          <ErrorOutline />
          <p>{errorMessage}</p>
        </div>
      )}
    </>
  );
};

Radio.displayName = "EnhancedInputRadio";

export { Radio };
