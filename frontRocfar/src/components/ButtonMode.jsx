import { useContext } from "react";
import { ContextGlobal } from "../Providers/global.context";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

export default function ButtonMode() {
  const { toggleTheme, theme } = useContext(ContextGlobal);

  const elegirIcono = () => {
    if (theme === "light") {
      return <CiLight />;
    } else if (theme === "dark") {
      return <CiDark />;
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="buttonTheme"
    >
      {elegirIcono()}
    </button>
  );
}
