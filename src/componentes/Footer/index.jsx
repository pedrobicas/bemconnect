import Logo from "../../imgs/logo.png";
import "./sass.scss"

export default function Footer() {
  return (
    <div className="footer">
      <div className="content">
        <div className="section">
          <img src={Logo} alt="Logo" className="logo-image" />
        </div>
        <div className="section">
          <h3 className="text">Navegação</h3>
          <ul className="ul">
            <li className="li">
              <a href="/bemconnect">Home</a>
            </li>
            <li className="li">
              <a href="/bemconnect/sobre"> Sobre </a>
            </li>
            <li className="li">
              <a href="/bemconnect/aplicativo"> Aplicativo </a>
            </li>
          </ul>
        </div>
        <div className="section">
          <h3 className="text">Contato</h3>
          <p className="paragraph">Email: exemplo@bemconnect.com</p>
          <p className="paragraph">Telefone: (99) 9999-9999</p>
        </div>
      </div>
      <div className="copy">
        <p className="paragraph">
          Todos os direitos reservados a BemConnect &copy; - 2023
        </p>
      </div>
    </div>
  );
}
