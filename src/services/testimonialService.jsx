// src/services/testimonialService.js
const API_BASE_URL = 'http://localhost:3000'; // Altere conforme necessário

export const addTestimonial = async (text, author) => {
  try {
    const response = await fetch(`${API_BASE_URL}/testimonials`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, author }),
    });

    if (!response.ok) {
      throw new Error('Erro ao adicionar depoimento');
    }

    const newTestimonial = await response.json();
    return newTestimonial;
  } catch (error) {
    console.error('Erro ao adicionar depoimento:', error.message);
    throw error;
  }
};
