import { ComponentPropsWithoutRef, PropsWithChildren } from "react"
import { cx } from "classix"
import "@axa-fr/design-system-css/src/Title/Title.agent.scss"

type TitleProps = ComponentPropsWithoutRef<"h1"> & {
  classModifier?: string
}

export const Title = ({
  className,
  classModifier,
  children,
  ...args
}: PropsWithChildren<TitleProps>) => {
  return (
    <h1 className={cx(classModifier, className)} {...args}>
      {children}
    </h1>
  )
}
