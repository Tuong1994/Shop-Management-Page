import { type FormHTMLAttributes, forwardRef, type ForwardRefRenderFunction, type ReactNode } from "react"
import { Title } from "@/components/ui/typography"
import { Settings } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Logo from "@/components/page/logo"
import LocaleDropdown from "@/components/page/locale-dropdown"
import ThemeDropdown from "@/components/page/theme-dropdown"

interface AuthFormProps extends FormHTMLAttributes<HTMLFormElement> {
  children?: ReactNode
  formTitle?: ReactNode
  onSave?: (formData: FormData) => void
}

const AuthForm: ForwardRefRenderFunction<HTMLFormElement, AuthFormProps> = (
  { children, formTitle, onSave, ...restProps },
  ref
) => {
  const handleSubmit = (formData: FormData) => onSave?.(formData)

  return (
    <form ref={ref} {...restProps} className="w-full" action={handleSubmit}>
      <Card className="w-full">
        <CardHeader className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo />
            <Separator orientation="vertical" />
            <Title level={4}>{formTitle}</Title>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Settings />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <LocaleDropdown />
              <ThemeDropdown />
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent>
          <Separator className="mb-5" />
          {children}
        </CardContent>
      </Card>
    </form>
  )
}

export default forwardRef(AuthForm)
