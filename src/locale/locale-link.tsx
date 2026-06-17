import { Link, useParams } from "react-router-dom";

function LocaleLink() {
  const { locale } = useParams();
  const currentLocale = locale || "vi";

  const changeLocale = (newLocale: string) => {
    // Thay locale trong URL hiện tại
    const pathWithoutLocale = window.location.pathname.replace(`/${currentLocale}`, "") || "/";
    return `/${newLocale}${pathWithoutLocale}`;
  };

  return (
    <div>
      <Link to={changeLocale("vi")}>🇻🇳 Tiếng Việt</Link>
      <Link to={changeLocale("en")}>🇬🇧 English</Link>
    </div>
  );
}

export default LocaleLink