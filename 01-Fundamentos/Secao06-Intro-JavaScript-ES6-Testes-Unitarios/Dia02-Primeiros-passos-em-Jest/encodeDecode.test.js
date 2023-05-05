const {encode, decode} = require('./encodeDecode');

describe('Test funcao encode', () => {
  it('encode é função', () => {
    expect(typeof encode).toEqual('function');
  })
  it('a função encode converte a em 1', () => {
    expect(encode('a')).toEqual('1')
  })
  it('a função encode converte e em 2', () => {
    expect(encode('e')).toEqual('2')
  })
  it('a função encode converte i em 3', () => {
    expect(encode('i')).toEqual('3')
  })
  it('a função encode converte o em 4', () => {
    expect(encode('o')).toEqual('4')
  })
  it('a função encode converte u em 5', () => {
    expect(encode('u')).toEqual('5')
  })
  it('a função encode não converte b em numero', () => {
    expect(encode('b')).toEqual('b')
  })
  it('a função encode retorna mesmo num de caracteres', () => {
    expect(encode('cruzeiro').length).toEqual(8)
  });
})

describe('Test função decode', () => {
  it('a função decode converte 1 em a', () => {
    expect(decode('1')).toEqual('a')
  })
  it('a função decode converte 2 em e', () => {
    expect(decode('2')).toEqual('e')
  });
  it('a função decode converte 3 em i', () => {
    expect(decode('3')).toEqual('i')
  })
  it('a função decode converte 4 em o', () => {
    expect(decode('4')).toEqual('o')
  })
  it('a função decode converte 5 em u', () => {
    expect(decode('5')).toEqual('u')
  })
  it('a função decode não converte 1 em b', () => {
    expect(decode('1')).not.toEqual('b')
  })
  it('a função decode retorna mesmo num de caracteres', () => {
    expect(decode('3g4r').length).toEqual(4)
  })
})