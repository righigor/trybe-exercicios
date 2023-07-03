import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { AverageWeightType, FoundAtType } from '../types';
import { FavoritePokemon } from '../pages';

describe('Testa a página Favorite Pokémon', () => {
  test('Testa se é exibida a mensagem No favorite pokemon found', () => {
    renderWithRouter(<FavoritePokemon pokemonList={ [] } />);
    const text = screen.getByText(/no favorite pokémon found/i);
    expect(text).toBeInTheDocument();
  });

  test('Testa se são exibidos os pokémons favoritos', () => {
    const averageWeight: AverageWeightType = {
      measurementUnit: '',
      value: '',
    };
    const foundAt: FoundAtType[] = [];

    const pokemonList = [
      { id: 1, name: 'Pikachu', type: 'Electric', averageWeight, foundAt, image: 'https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png', moreInfo: '', summary: '' },
    ];

    renderWithRouter(<FavoritePokemon pokemonList={ pokemonList } />);
    const name = screen.getByText(/Pikachu/i);
    const type = screen.getByText(/Electric/i);
    const pokemonImg = screen.getByRole('img', { name: /Pikachu sprite/i });

    expect(name).toBeInTheDocument();
    expect(type).toBeInTheDocument();
    expect(pokemonImg).toHaveAttribute('src', 'https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
  });
});
