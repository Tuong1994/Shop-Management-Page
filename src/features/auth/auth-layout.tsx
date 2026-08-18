import { forwardRef, type FormHTMLAttributes, type ForwardRefRenderFunction, type ReactNode } from "react"
import { Settings } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Title } from "@/components/ui/typography"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Logo from "@/components/page/logo"
import LocaleDropdown from "@/components/page/locale-dropdown"
import ThemeDropdown from "@/components/page/theme-dropdown"

interface AuthLayoutProps extends FormHTMLAttributes<HTMLFormElement> {
  formTitle?: ReactNode;
  children?: ReactNode
  onSave?: (formData: FormData) => void;
}

const AuthLayout: ForwardRefRenderFunction<HTMLFormElement, AuthLayoutProps> = (
  { formTitle, children, onSave, ...restProps },
  ref
) => {
  
  const handleSubmit = (formData: FormData) => onSave?.(formData)

  return (
    <div className="flex h-screen">
      <div className="h-full w-1/2"></div>
      <div className="flex h-full w-1/2 items-center justify-center px-50">
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
            <CardContent>{children}</CardContent>
          </Card>
        </form>
      </div>
    </div>
  )
}

export default forwardRef(AuthLayout)
