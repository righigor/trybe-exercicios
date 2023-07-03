import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { NotFound } from '../pages';

describe('Testa a página NotFound', () => {
  test('Testa se a página NotFound exibe o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);
    const nonLink = screen.getByRole('heading', { name: /Page requested not found/i });
    expect(nonLink).toBeInTheDocument();
  });

  test('Testa se a página mostra uma imagem', () => {
    renderWithRouter(<NotFound />);
    const pikachuImg = screen.getByRole('img', { name: /pikachu crying because the page requested was not found/i });
    expect(pikachuImg).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
