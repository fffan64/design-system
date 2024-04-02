import type { ComponentProps, ReactNode } from "react";
import { Checkbox } from "./Checkbox";
import { Icon } from "../../../Icons/Icon.client";

type Props = Omit<ComponentProps<typeof Checkbox>, "placeholder"> & {
  label: ReactNode;
  description?: ReactNode;
  errorLabel?: ReactNode;
};

export const CheckboxInput = ({
  label,
  description,
  erroneous = false,
  errorLabel,
  ...checkboxProps
}: Props) => {
  const baseClass = "af-form-client__checkbox-input";
  return (
    <div>
      <div className={`${baseClass}-label`}>{label}</div>
      <div className={`${baseClass}-description`}>{description}</div>
      <Checkbox erroneous={erroneous} {...checkboxProps} />
      {erroneous && errorLabel && (
        <div className={`${baseClass}-errorlabel`}>
          <Icon name="ErrorOutline" />
          {errorLabel}
        </div>
      )}
    </div>
  );
};
