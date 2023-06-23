import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event'
import { renderWithRouter } from "./utils/renderWithRouter";

import App from "./App";

it('Renderiza texto da página incial', () => {
  render(<App />, { wrapper: BrowserRouter });
  expect(screen.getByText(/Você está na página inicial/i)).toBeInTheDocument();
});

test('Renderiza texto da página Sobre', async () => {
  render(<App />, { wrapper: BrowserRouter });
  const aboutLink = screen.getByRole('link', { name: /Sobre/i});
  await userEvent.click(aboutLink);
  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
});

test('Renderiza página inicial', () => {
  renderWithRouter(<App />);
  expect(screen.getByText(/Você está na página inicial/)).toBeInTheDocument();
});

test('Navega até a página Sobre e verifica o texto', async () => {
  const { user } = renderWithRouter(<App />);
  expect(screen.getByText(/Você está na página inicial/)).toBeInTheDocument();

  const aboutLink = screen.getByRole('link', { name: /Sobre/ });
  await user.click(aboutLink);
  expect(screen.getByText(/Você está na página Sobre/)).toBeInTheDocument();
});

test('Navega da página Sobre para página inicial', async () => {
  const { user } = renderWithRouter(<App />, { route: '/about' });
  expect(screen.getByText(/Você está na página Sobre/)).toBeInTheDocument();

  const incialLink = screen.getByRole('link', { name: /Início/ });
  await user.click(incialLink);
  expect(screen.getByText(/Você está na página inicial/)).toBeInTheDocument();
});

test('Testa a rota NotFound', () => {
  renderWithRouter(<App />, { route: '/qualquercoisa' });
  expect(screen.getByText(/Página não encontrada/)).toBeInTheDocument();
})