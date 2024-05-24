import '../index.css'
import Logo from "../image/Logo.png";

export default function Header() {
  return (
    <header>
      <img className="header-logo" src={Logo} alt="" />
      <p className="header-title">React Course - Project3</p>
    </header>
  );
}
