// src/components/HomeSection.jsx
import React, { useState, useEffect } from 'react';
import './sass.scss';
import { addTestimonial } from '../../services/testimonialService';
import "../Buttons/sass.scss"

const Testimonial = ({ text, author }) => (
  <div className='testimonial'>
    <p>"{text}"</p>
    <p className='testimonialAuthor'>- {author}</p>
  </div>
);

const HomeSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [newTestimonialText, setNewTestimonialText] = useState('');
  const [newTestimonialAuthor, setNewTestimonialAuthor] = useState('');

  useEffect(() => {
    // Buscar depoimentos do servidor JSON
    fetch('http://localhost:3000/testimonials')
      .then(response => response.json())
      .then(data => setTestimonials(data));
  }, []);
  const handleAddTestimonial = async () => {
    if (!newTestimonialText.trim() || !newTestimonialAuthor.trim()) {
      alert('Por favor, preencha todos os campos do depoimento.');
      return;
    }
    try {
      const newTestimonial = await addTestimonial(newTestimonialText, newTestimonialAuthor);
      setTestimonials([...testimonials, newTestimonial]);
      setNewTestimonialText('');
      setNewTestimonialAuthor('');
    } catch (error) {
      console.error('Erro ao adicionar depoimento:', error.message);
    }
  };
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
          <div>
            {testimonials.map(testimonial => (
              <Testimonial key={testimonial.id} {...testimonial} />
            ))}
          </div>
          <div className='addTestimonialForm'>
            <h3>Adicionar Novo Depoimento</h3>
            <textarea
              value={newTestimonialText}
              onChange={e => setNewTestimonialText(e.target.value)}
              placeholder="Digite seu depoimento..."
            />
            <input
              type="text"
              value={newTestimonialAuthor}
              onChange={e => setNewTestimonialAuthor(e.target.value)}
              placeholder="Seu Nome"
            />
            <button className='button-login' onClick={handleAddTestimonial}>Adicionar Depoimento</button>
          </div>
        </div>
        </div>
        
      </section>
    );
  };
  
  export default HomeSection;