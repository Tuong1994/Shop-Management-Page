import { forwardRef, type ForwardRefRenderFunction, type FormHTMLAttributes, type ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Field } from "@/components/ui/field"
import { Button } from "@/components/ui/button"
import useLocale from "@/locale/use-locale"

interface FormLayoutProps extends FormHTMLAttributes<HTMLFormElement> {
  left?: ReactNode
  right?: ReactNode
  onSave?: (formData: FormData) => void;
}

const FormLayout: ForwardRefRenderFunction<HTMLFormElement, FormLayoutProps> = (
  { left, right, onSave, ...restProps },
  ref
) => {
  const { lang } = useLocale()

  const handleSubmit = (formData: FormData) => onSave?.(formData)

  return (
    <form ref={ref} {...restProps} action={handleSubmit}>
      <div className="grid w-full grid-col-1 md:grid-cols-3 lg:grid-cols-3 gap-2">
        <Card className="md:col-span-2 lg:col-span-2 p-3">
          <CardContent className="p-1">{left}</CardContent>
        </Card>
        <Card className="md:col-span-1 lg:col-span-1 p-3">
          <CardContent className="p-1">{right}</CardContent>
        </Card>
      </div>
      <Field orientation="horizontal" className="mt-4 justify-end">
        <Button type="submit">{lang.common.actions.save}</Button>
      </Field>
    </form>
  )
}

export default forwardRef(FormLayout)
