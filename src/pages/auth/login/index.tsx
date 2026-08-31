import type { FC } from "react"
import { Input } from "@/components/ui/input"
import { Field, FieldGroup } from "@/components/ui/field"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { routerPaths } from "@/lib/router/paths"
import { getRouteWithSub } from "@/lib/router/helper"
import AuthForm from "@/features/auth/auth-form"
import InputPassword from "@/components/control/input-password"
import LabelRequired from "@/components/control/label-required"
import LocaleLink from "@/locale/locale-link"
import useLocale from "@/locale/use-locale"

const LoginPage: FC = () => {
  const { lang } = useLocale()

  return (
    <AuthForm formTitle={lang.auth.login.title}>
      <FieldGroup>
        <Field>
          <LabelRequired htmlFor="email">{lang.common.form.label.email}</LabelRequired>
          <Input id="email" placeholder={lang.common.form.placeholder.enter} />
        </Field>
        <Field>
          <LabelRequired htmlFor="password">{lang.common.form.label.password}</LabelRequired>
          <InputPassword id="password" />
        </Field>
      </FieldGroup>
      <div className="my-5 flex items-center justify-end">
        <LocaleLink
          to={getRouteWithSub(routerPaths.AUTH.INDEX, routerPaths.AUTH.FORGOT_PASSWORD)}
          className="text-blue-500"
        >
          {lang.auth.login.forgot}?
        </LocaleLink>
      </div>
      <Field orientation="horizontal" className="mt-4 justify-end">
        <Button type="submit">{lang.auth.login.title}</Button>
        <Separator orientation="vertical" />
        <LocaleLink to={getRouteWithSub(routerPaths.AUTH.INDEX, routerPaths.AUTH.REGISTER)}>
          <Button type="button" variant="outline">
            {lang.auth.register.title}
          </Button>
        </LocaleLink>
      </Field>
    </AuthForm>
  )
}

export default LoginPage
