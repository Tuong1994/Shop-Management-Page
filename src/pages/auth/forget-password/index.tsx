import type { FC } from "react"
import { Input } from "@/components/ui/input"
import { Field, FieldGroup } from "@/components/ui/field"
import { getRouteWithSub } from "@/lib/router/helper"
import { routerPaths } from "@/lib/router/paths"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import LabelRequired from "@/components/control/label-required"
import LocaleLink from "@/locale/locale-link"
import AuthForm from "@/features/auth/auth-form"
import useLocale from "@/locale/use-locale"

const ForgotPasswordPage: FC = () => {
  const { lang } = useLocale()

  return (
    <AuthForm formTitle={lang.auth.forgotPassword.title}>
      <FieldGroup>
        <Field>
          <LabelRequired htmlFor="email">{lang.common.form.label.email}</LabelRequired>
          <Input id="email" placeholder={lang.common.form.placeholder.enter} />
        </Field>
        <Field orientation="horizontal" className="mt-4 justify-end">
          <Button type="submit">{lang.auth.forgotPassword.action}</Button>
          <Separator orientation="vertical" />
          <LocaleLink
            className="mr-4 text-blue-500"
            to={getRouteWithSub(routerPaths.AUTH.INDEX, routerPaths.AUTH.LOGIN)}
          >
            {lang.auth.login.title}
          </LocaleLink>
        </Field>
      </FieldGroup>
    </AuthForm>
  )
}

export default ForgotPasswordPage
