import { cn } from "@/lib/utils"
import { forwardRef, type FC, type HTMLAttributes, type ReactNode, type Ref } from "react"

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode
  level?: 1 | 2 | 3 | 4
}
const Title: FC<TitleProps> = forwardRef(
  ({ children, level = 1, className, ...restProps }, ref: Ref<HTMLHeadingElement>) => {
    const commonProps = { ref, ...restProps }

    return (
      <>
        {level === 1 && (
          <h1
            className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight text-balance", className)}
            {...commonProps}
          >
            {children}
          </h1>
        )}
        {level === 2 && (
          <h2
            className={cn("scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0", className)}
            {...commonProps}
          >
            {children}
          </h2>
        )}
        {level === 3 && (
          <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)} {...commonProps}>
            {children}
          </h3>
        )}
        {level === 4 && (
          <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)} {...commonProps}>
            {children}
          </h4>
        )}
      </>
    )
  }
)

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode
}
const Paragraph: FC<ParagraphProps> = forwardRef(
  ({ children, className, ...restProps }, ref: Ref<HTMLParagraphElement>) => {
    return (
      <p ref={ref} className={cn("leading-7 not-first:mt-3", className)} {...restProps}>
        {children}
      </p>
    )
  }
)

interface BlockquoteProps extends HTMLAttributes<HTMLQuoteElement> {
  children?: ReactNode
}
const Blockquote: FC<BlockquoteProps> = forwardRef(
  ({ children, className, ...restProps }, ref: Ref<HTMLQuoteElement>) => {
    return (
      <blockquote ref={ref} className={cn("mt-6 border-l-2 pl-6 italic", className)} {...restProps}>
        {children}
      </blockquote>
    )
  }
)

interface TextSmallProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode
}
const TextSmall: FC<TextSmallProps> = forwardRef(
  ({ children, className, ...restProps }, ref: Ref<HTMLElement>) => {
    return (
      <small ref={ref} className={cn("text-sm leading-none font-medium", className)} {...restProps}>
        {children}
      </small>
    )
  }
)
interface TextMutedProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode
}
const TextMuted: FC<TextMutedProps> = forwardRef(
  ({ children, className, ...restProps }, ref: Ref<HTMLParagraphElement>) => {
    return (
      <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...restProps}>
        {children}
      </p>
    )
  }
)

interface ListProps extends HTMLAttributes<HTMLUListElement> {
  children?: ReactNode
}
const List: FC<ListProps> = forwardRef(
  ({ children, className, ...restProps }, ref: Ref<HTMLUListElement>) => {
    return (
      <ul ref={ref} className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)} {...restProps}>
        {children}
      </ul>
    )
  }
)

interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
  children?: ReactNode
}
const ListItem: FC<ListItemProps> = forwardRef(
  ({ children, className, ...restProps }, ref: Ref<HTMLLIElement>) => {
    return (
      <li ref={ref} {...restProps}>
        {children}
      </li>
    )
  }
)

export { Title, Paragraph, Blockquote, TextSmall, TextMuted, List, ListItem }
