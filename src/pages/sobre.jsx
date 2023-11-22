import React from 'react';
import '../styles/SobreNos.scss';
import NavBar from "../componentes/NavBar";
import Footer from '../componentes/Footer';
import MainMenu from "../componentes/MainMenu";
import Hospital from "../imgs/hospital.png"

export function Sobre(){
  return (
    <>
    <NavBar />
    <MainMenu text="Conectando Famílias, Facilitando Cuidados." url = {Hospital} />
    <div className="sobre-nos">
      <section className="missao">
        <h2>Nossa Missão</h2>
        <p>
          Na BemConnect, acreditamos que a conexão é essencial para a cura e bem-estar. 
          Nossa missão é fornecer uma plataforma segura e eficaz que permita aos familiares 
          acompanhar de perto o progresso de seus entes queridos durante o período de 
          internação hospitalar, promovendo assim uma comunicação aberta e constante.
        </p>
      </section>

      <section className="quem-somos">
        <h2>Quem Somos</h2>
        <p>
          A equipe por trás da BemConnect é formada por profissionais dedicados das áreas 
          de tecnologia, saúde e design. Unimos forças para criar uma solução inovadora que 
          não apenas simplifica a comunicação, mas também oferece suporte emocional quando mais é necessário.
        </p>
      </section>

      <section className="privacidade-seguranca">
        <h2>Compromisso com a Privacidade e Segurança</h2>
        <p>
          Entendemos a sensibilidade dos dados que lidamos e priorizamos a privacidade e 
          segurança em todas as etapas do desenvolvimento da BemConnect. Implementamos 
          rigorosos protocolos de segurança para garantir que as informações dos pacientes 
          estejam sempre protegidas.
        </p>
      </section>

      <section className="como-surgiu">
        <h2>Como Surgiu a BemConnect</h2>
        <p>
          A BemConnect nasceu da observação de desafios enfrentados por familiares durante 
          internações hospitalares. Ao reconhecer a importância da comunicação e acompanhamento, 
          decidimos criar uma solução que aliviasse as preocupações e proporcionasse aos familiares 
          uma maneira eficaz de se conectar com seus entes queridos.
        </p>
      </section>

      <section className="junte-se">
        <h2>Junte-se a Nós nesta Jornada</h2>
        <p>
          Estamos entusiasmados em compartilhar a BemConnect com você e convidamos você a fazer parte 
          da nossa comunidade. Seja facilitando a comunicação entre familiares e pacientes ou fornecendo 
          suporte emocional quando necessário, acreditamos que cada conexão feita por meio da BemConnect 
          contribui para um ambiente mais acolhedor nos momentos mais desafiadores.
        </p>
      </section>

      <footer>
        <p>Obrigado por escolher a BemConnect.</p>
        <p>Equipe BemConnect</p>
      </footer>
    </div>
    <Footer />
    </>
  );
};
