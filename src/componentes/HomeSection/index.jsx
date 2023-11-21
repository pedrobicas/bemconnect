// src/components/HomeSection.jsx
import React from 'react';
import './sass.scss';

const HomeSection = () => {
    return (
      <section className="home">
        <div className="container">
          <h1>BemConnect - Acompanhamento Hospitalar</h1>
          <p>
            Facilitando o acompanhamento de seus entes queridos durante a internação hospitalar.
          </p>
  
          <div className='features'>
            <div className='feature'>
              <span className='icon'>🔒</span>
              <p>Acesso controlado para garantir a privacidade do paciente.</p>
            </div>
  
            <div className='feature'>
              <span className='icon'>📜</span>
              <p>Visualização do histórico médico para uma compreensão completa do tratamento.</p>
            </div>
  
            <div className='feature'>
              <span className='icon'>🎥</span>
              <p>Câmera em tempo real para proporcionar tranquilidade aos familiares.</p>
            </div>
          </div>
  
          <div className='cta'>
          <p>
            Permita-nos ser o elo que une você ao seu ente querido durante esse período desafiador.{' '}
            <a href="#howItWorks">Saiba como funciona</a> ou <a href="">baixe agora</a>.
          </p>
        </div>

          <div id='howItWorks' className="howItWorks">
          <h2>Como Funciona</h2>
          <p>
            Nosso processo é simples e eficaz. Conecte-se em três passos fáceis e comece a cuidar do seu ente querido hoje mesmo.
          </p>
          <ol>
            <li>Crie uma conta BemConnect.</li>
            <li>Obtenha permissão do paciente para acesso aos recursos.</li>
            <li>Explore os recursos e mantenha-se conectado.</li>
          </ol>
        </div>

        <div className="testimonials">
          <h2>Depoimentos</h2>
          <div className='testimonial'>
            <p>
              "O BemConnect tornou o tempo no hospital muito mais suportável. Poder ver minha família quando eu quisesse fez toda a diferença."
            </p>
            <p className='testimonialAuthor'>- Maria, Cuidadora</p>
          </div>
          <div className='testimonial'>
            <p>
              "Agradeço profundamente por esta ferramenta. Me senti mais próximo da minha família, mesmo a quilômetros de distância."
            </p>
            <p className='testimonialAuthor'>- João, Paciente</p>
          </div>
        </div>
        </div>
        
      </section>
    );
  };
  
  export default HomeSection;