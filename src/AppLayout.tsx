import type { FC } from "react"
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Outlet } from "react-router"
import Header from "./components/page/header"

const AppLayout: FC = () => {
  // const { locale } = useParams();
  // const navigate = useNavigate();
  // const location = useLocation();

  // const supportedLocales = ["vi", "en", "fr"]; // danh sách ngôn ngữ hỗ trợ
  // const defaultLocale = "vi";

  // useEffect(() => {
  //   let currentLocale = locale;

  //   // Nếu không có locale → redirect về default + locale
  //   if (!currentLocale) {
  //     navigate(`/${defaultLocale}${location.pathname}`, { replace: true });
  //     return;
  //   }

  //   // Nếu locale không hợp lệ → redirect về default
  //   if (!supportedLocales.includes(currentLocale)) {
  //     navigate(`/${defaultLocale}${location.pathname.replace(`/${locale}`, "")}`, {
  //       replace: true,
  //     });
  //   }
  // }, [locale, navigate, location.pathname]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default AppLayout
