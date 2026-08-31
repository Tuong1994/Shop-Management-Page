import { forwardRef, useState, type ForwardRefRenderFunction, type InputHTMLAttributes } from "react"
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group"
import { Eye, EyeClosed } from "lucide-react"
import { Button } from "../ui/button"
import useLocale from "@/locale/use-locale"

interface InputPasswordProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputPassword: ForwardRefRenderFunction<HTMLInputElement, InputPasswordProps> = (
  { ...restProps },
  ref
) => {
  const { lang } = useLocale()

  const [isPassword, setIsPassword] = useState<boolean>(true)

  return (
    <InputGroup>
      <InputGroupInput
        ref={ref}
        {...restProps}
        type={isPassword ? "password" : "text"}
        placeholder={lang.common.form.placeholder.enter}
      />
      <InputGroupAddon align="inline-end">
        <Button variant="ghost" className="p-0.5" onClick={() => setIsPassword(!isPassword)}>
          {isPassword ? <EyeClosed /> : <Eye />}
        </Button>
      </InputGroupAddon>
    </InputGroup>
  )
}

export default forwardRef(InputPassword)
