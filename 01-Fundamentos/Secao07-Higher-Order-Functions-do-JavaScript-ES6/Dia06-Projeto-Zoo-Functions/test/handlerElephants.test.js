const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica o count', () => {
    expect(handlerElephants('count')).toEqual(4);
  });

  it('Verifica os names', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('Verifica o averageAge', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });

  it('Verifica a location', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });

  it('Verifica a popularity', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });

  it('Verifica a availability', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });

  it('Verifica se retorna undefined', () => {
    expect(handlerElephants()).toEqual(undefined);
  });

  it('Verifica se retorna parametro invalido', () => {
    expect(handlerElephants({})).toEqual('Parâmetro inválido, é necessário uma string');
  });

  it('Verifica se retorna null', () => {
    expect(handlerElephants('test')).toEqual(null);
  });
});
