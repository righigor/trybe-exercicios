import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { About } from '../pages';

describe('Testa as informações da página About', () => {
  test('Testa se é renderizado o título About Pokédex', () => {
    renderWithRouter(<About />);
    const titulo = screen.getByRole('heading', { name: /About Pokédex/i });
    expect(titulo).toBeInTheDocument();
  });

  test('Testa se a página contém dois parágrafos sobre a Pokedex', () => {
    renderWithRouter(<About />);
    const paragraph1 = screen.getByText(/This application simulates a Pokédex, a digital encyclopedia containing all Pokémon/i);
    const paragraph2 = screen.getByText(/One can filter Pokémon by type, and see more details for each one of them/i);
    expect(paragraph1).toBeInTheDocument();
    expect(paragraph2).toBeInTheDocument();
  });

  test('Testa se a página contém a imagem de uma Pokédex', () => {
    renderWithRouter(<About />);
    const pokedexImg = screen.getByRole('img', { name: /pokédex/i });
    expect(pokedexImg).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
