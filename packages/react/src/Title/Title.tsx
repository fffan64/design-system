import { ComponentProps, PropsWithChildren, forwardRef, Ref } from "react"
import { cx } from "classix"
import "@axa-fr/design-system-css/src/Title/Title.agent.scss"

type TitleProps = ComponentProps<"h1"> & {
  classModifier?: string
}

export const Title = forwardRef(
  (
    {
      className,
      classModifier,
      children,
      ...args
    }: PropsWithChildren<TitleProps>,
    ref: Ref<HTMLHeadingElement>
  ) => {
    return (
      <h1 ref={ref} className={cx(classModifier, className)} {...args}>
        {children}
      </h1>
    )
  }
)
