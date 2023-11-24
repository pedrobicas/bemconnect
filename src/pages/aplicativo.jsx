import React from 'react';
import '../styles/aplicativo.scss';
import NavBar from "../componentes/NavBar";
import Footer from '../componentes/Footer';
import MainMenu from "../componentes/MainMenu";
import App from "../imgs/app.png"
import { Link } from "react-router-dom";

export function Aplicativo() {
    return (
        <>
            <NavBar />
            <MainMenu text={"Seu Aplicativo de Acompanhamento de Saúde"} url={App}/>
            <div className="pagina-aplicativo">
            <section className="banner">
                    <div className="conteudo">
                        <h2>Descubra uma Nova Forma de Cuidar</h2>
                        <p>Conecte-se com seus entes queridos e acompanhe sua jornada de recuperação.</p>
                        <Link to="/bemconnect/aplicativo" className="cta-button"> Baixar Agora </Link>
                    </div>
                </section>

                <section className="descricao">
                    <h2>Descrição do Aplicativo</h2>
                    <p>
                        O BemConnect é mais do que um aplicativo; é uma ponte entre pacientes e familiares.
                        Facilitamos a comunicação, fornecendo uma plataforma segura e eficaz para que familiares
                        estejam sempre informados e conectados durante internações hospitalares.
                    </p>
                </section>

                <section className="como-funciona">
                    <h2>Como Funciona</h2>
                    <p>
                        Para começar a usar o BemConnect, siga estes simples passos:
                    </p>
                    <ol>
                        <li>Crie uma conta gratuita no aplicativo.</li>
                        <li>Obtenha permissão do paciente para acessar os recursos completos.</li>
                        <li>Insira o código e nome do paciente para acessar o histórico e a câmera.</li>
                        <li>Explore os recursos do aplicativo para acompanhar o bem-estar do paciente.</li>
                    </ol>
                </section>

                <section className="recursos">
                    <h2>Recursos Principais</h2>
                    <ul>
                        <li>Acesso ao histórico completo do paciente.</li>
                        <li>Monitoramento em tempo real por meio da câmera.</li>
                        <li>Comunicação instantânea com a equipe médica.</li>
                        <li>Alertas personalizáveis para atualizações importantes.</li>
                    </ul>
                </section>

                <section className="seguranca">
                    <h2>Segurança e Privacidade</h2>
                    <p>
                        A segurança dos dados do paciente é nossa principal prioridade. Implementamos rigorosos
                        protocolos de segurança para garantir que todas as informações estejam protegidas e
                        acessíveis apenas para aqueles autorizados.
                    </p>
                </section>

                <section className="download">
                    <h2>Como Baixar</h2>
                    <p>
                        Baixe o BemConnect agora e comece a cuidar de quem você ama de maneira mais informada
                        e eficiente. Nosso aplicativo está disponível para dispositivos iOS e Android.
                    </p>
                    <div className="store-links">
                    <Link to="/bemconnect/aplicativo" className="cta-button"> Baixar na App Store </Link>
                    <Link to="/bemconnect/aplicativo" className="cta-button"> Baixar no Google Play </Link>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};