import type { FC } from "react"
import { Input } from "@/components/ui/input"
import { Field, FieldGroup } from "@/components/ui/field"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { getRouteWithSub } from "@/lib/router/helper"
import { routerPaths } from "@/lib/router/paths"
import AuthForm from "@/features/auth/auth-form"
import LocaleLink from "@/locale/locale-link"
import LabelRequired from "@/components/control/label-required"
import InputPassword from "@/components/control/input-password"
import useLocale from "@/locale/use-locale"

const RegisterPage: FC = () => {
  const { lang } = useLocale()

  return (
    <AuthForm formTitle={lang.auth.register.title}>
      <FieldGroup>
        <Field>
          <LabelRequired htmlFor="email">{lang.common.form.label.email}</LabelRequired>
          <Input id="email" placeholder={lang.common.form.placeholder.enter} />
        </Field>
        <Field>
          <LabelRequired htmlFor="password">{lang.common.form.label.password}</LabelRequired>
          <InputPassword id="password" />
        </Field>
        <Field>
          <LabelRequired htmlFor="phone">{lang.common.form.label.phone}</LabelRequired>
          <Input id="phone" placeholder={lang.common.form.placeholder.enter} />
        </Field>
      </FieldGroup>
      <Field orientation="horizontal" className="mt-4 justify-end">
        <span>{lang.auth.register.note}?</span>
        <LocaleLink
          className="text-blue-500 mr-4"
          to={getRouteWithSub(routerPaths.AUTH.INDEX, routerPaths.AUTH.LOGIN)}
        >
          {lang.auth.login.title}
        </LocaleLink>

        <Separator orientation="vertical" />
        <Button type="submit">{lang.auth.register.title}</Button>
      </Field>
    </AuthForm>
  )
}

export default RegisterPage
