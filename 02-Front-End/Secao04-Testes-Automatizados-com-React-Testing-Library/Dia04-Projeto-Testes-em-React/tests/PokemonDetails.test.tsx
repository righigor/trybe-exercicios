import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa o componente PokemonDetails', () => {
  test('Testa se o título com o nome do pokémon estão corretos', async () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    await userEvent.click(details);
    const titulo = screen.getByRole('heading', { name: /pikachu details/i });
    expect(titulo).toBeInTheDocument();
  });

  test('Testa se tem o texto Summary', async () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    await userEvent.click(details);
    const summaryTitulo = screen.getByText(/Summary/i);
    const summaryText = screen.getByText(/this intelligent pokémon roasts hard berries with electricity to make them tender enough to eat/i);
    expect(summaryTitulo).toBeInTheDocument();
    expect(summaryText).toBeInTheDocument();
  });

  test('Testa se tem o título Game Locations correto', async () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    await userEvent.click(details);
    const locationsText = screen.getByText(/Game Locations of Pikachu/i);
    expect(locationsText).toBeInTheDocument();
  });

  test('Testa se o src da game locations está correto', async () => {
    const src1 = 'https://archives.bulbagarden.net/media/upload/0/08/Kanto_Route_2_Map.png';
    const src2 = 'https://archives.bulbagarden.net/media/upload/b/bd/Kanto_Celadon_City_Map.png';
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    await userEvent.click(details);
    const locations = screen.getAllByRole('img', { name: /pikachu location/i });
    expect(locations[0]).toHaveAttribute('src', src1);
    expect(locations[1]).toHaveAttribute('src', src2);
  });

  test('Testa se pode favortitar o pokemon', async () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    await userEvent.click(details);
    const labelFav = screen.getByRole('checkbox', { name: /pokémon favoritado/i });
    expect(labelFav).toBeInTheDocument();
    await userEvent.click(labelFav);
    expect(labelFav).toBeChecked();
  });
});
