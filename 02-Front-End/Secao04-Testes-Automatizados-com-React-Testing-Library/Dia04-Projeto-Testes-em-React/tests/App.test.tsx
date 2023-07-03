import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste se o topo da aplicação contém um conjuto fixo de links de navegação', () => {
  test('O primeiro link deve ter o texto Home', () => {
    renderWithRouter(<App />);
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
  });
  test('O segundo link deve ter o texto About', () => {
    renderWithRouter(<App />);
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
  });
  test('O terceiro link deve ter o texto Favorite Pokémon', () => {
    renderWithRouter(<App />);
    expect(screen.getByRole('link', { name: /favorite pokémon/i })).toBeInTheDocument();
  });
});

describe('Teste se a página é redirecionada para...', () => {
  test('Para a página inicial ao clicar no link Home', async () => {
    renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: /home/i });
    await userEvent.click(homeLink);
    const titulo = screen.getByRole('heading', { name: /Encountered Pokémon/i });
    expect(titulo).toBeInTheDocument();
  });

  test('Para a página about ao clicar no link About', async () => {
    renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: /about/i });
    await userEvent.click(aboutLink);
    const titulo = screen.getByRole('heading', { name: /About Pokédex/i });
    expect(titulo).toBeInTheDocument();
  });

  test('Para a página Favorite Pokémon ao clicar no link Favorite Pokémon', async () => {
    renderWithRouter(<App />);
    const favLink = screen.getByRole('link', { name: /Favorite Pokémon/i });
    await userEvent.click(favLink);
    const titulo = screen.getByRole('heading', { name: /Favorite Pokémon/i });
    expect(titulo).toBeInTheDocument();
  });

  test('Para a página NotFound ao ir para um link inválido', async () => {
    renderWithRouter(<App />, { route: 'notfound' });
    const nonLink = screen.getByRole('heading', { name: /Page requested not found/i });
    expect(nonLink).toBeInTheDocument();
  });
});
