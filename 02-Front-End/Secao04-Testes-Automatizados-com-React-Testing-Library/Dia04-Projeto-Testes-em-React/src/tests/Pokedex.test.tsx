import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa o componente Pokedex', () => {
  test('Testa se a página contém um título Encountered Pokémon', () => {
    renderWithRouter(<App />);
    const titulo = screen.getByRole('heading', { name: /Encountered Pokémon/i });
    expect(titulo).toBeInTheDocument();
  });

  test('Testa se tem um botão com o texto Próximo Pokémon', () => {
    renderWithRouter(<App />);
    const btn = screen.getByRole('button', { name: /Próximo Pokémon/i });
    expect(btn).toBeInTheDocument();
  });
});
