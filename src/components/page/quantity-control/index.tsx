import type { ComponentProps, FC } from "react"
import type { VariantProps } from "class-variance-authority"
import { ButtonGroup } from "@/components/ui/button-group"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Minus, Plus } from "lucide-react"

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonVariants>

interface QuantityControlProps {
  plusButtonProps?: ButtonProps
  minusButtonProps?: ButtonProps
  inputProps?: ComponentProps<"input">

}

const QuantityControl: FC<QuantityControlProps> = ({ plusButtonProps, minusButtonProps, inputProps }) => {
  return (
    <ButtonGroup>
      <Button {...minusButtonProps}>
        <Minus size={15} />
      </Button>
      <Input className="w-10 text-center" {...inputProps} />
      <Button {...plusButtonProps}>
        <Plus size={15} />
      </Button>
    </ButtonGroup>
  )
}

export default QuantityControl
