import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { Pokemon } from '../components';
import App from '../App';
import pokemonList from '../data';

const pikaxu = {
  id: 1,
  name: 'Pikachu',
  type: 'Electric',
  averageWeight: { value: '6.0', measurementUnit: 'kg' },
  image: 'https://example.com/pikachu.png',
  foundAt: [],
  moreInfo: '',
  summary: '',
};
describe('Testa se é renderizado um card e as informações de um Pokémon', () => {
  test('Testa se o nome do Pokémon aparece corretamente', () => {
    renderWithRouter(<Pokemon pokemon={ pikaxu } showDetailsLink isFavorite={ false } />);
    const name = screen.getByText(/Pikachu/i);
    expect(name).toBeInTheDocument();
  });
  test('Testa se o tipo do Pokémon é mostrado corretamente', () => {
    renderWithRouter(<Pokemon pokemon={ pikaxu } showDetailsLink isFavorite={ false } />);
    const type = screen.getByText(/Electric/i);
    expect(type).toBeInTheDocument();
  });
  test('Testa se o peso do Pokémon é exibido corretamente', () => {
    renderWithRouter(<Pokemon pokemon={ pikaxu } showDetailsLink isFavorite={ false } />);
    const weight = screen.getByText(/Average weight: 6.0 kg/i);
    expect(weight).toBeInTheDocument();
  });
  test('Testa se a imagem do Pokémon é exibida com todos os atributos corretos', () => {
    renderWithRouter(<Pokemon pokemon={ pikaxu } showDetailsLink isFavorite={ false } />);
    const pikachuImg = screen.getByRole('img', { name: /Pikachu sprite/i });
    expect(pikachuImg).toHaveAttribute('src', 'https://example.com/pikachu.png');
  });
});

describe('Testa a existência e o funcionamento do link correto para detalhes de um Pokémon na página da Pokédex', () => {
  test('Testa a URL /pokemon/:id', () => {
    renderWithRouter(<App />);
    const { id } = pokemonList[0];
    const detailsLink = screen.getByRole('link', { name: /more details/i });

    expect(detailsLink).toHaveAttribute('href', `/pokemon/${id}`);
    expect(detailsLink).toBeInTheDocument();
  });
});

describe('Testa ícone de estrela nos Pokémons favirtitados', () => {
  test('O ícone deve ser uma estrela com atributo src correto', () => {
    renderWithRouter(<Pokemon pokemon={ pikaxu } showDetailsLink isFavorite />);
    const pikachuFav = screen.getByRole('img', { name: /Pikachu is marked as favorite/i });

    expect(pikachuFav).toBeInTheDocument();
  });
});
