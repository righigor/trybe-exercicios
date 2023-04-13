# Dia 04: JavaScript - Web Storage


Estudarei a respeito de `Web Storage`.

`Web Storage` provê mecanismos para que as aplicações web possam salvar dados nos navegadores com a finalidade de aprimorar a experiência das pessoas usuárias.

Antes do `HTML 5`, as aplicações tinham de salvar os dados locais em `cookies`, que eram enviados para o servidor a cada requisição do browser. O `Web Storage`, por sua vez, é mais seguro e tem a capacidade de salvar uma quantidade maior de dados sem afetar o desempenho da página.

Em comparação ao dos `cookies`, o limite de armazenamento é muito maior (pelo menos 5MB), além de as informações não serem transferidas para o servidor durante as requisições.

`Web Storage` é um mecanismo por origem (por domínio e protocolo). Todas as páginas de uma mesma origem podem salvar e acessar os mesmos dados. Por exemplo, se o domínio `betrybe.com` salvar o dado `X` no `Web Storage`, o domínio `course.betrybe.com` conseguirá ler esse dado `X`.

### Aprendizados

- Manipular o objeto `localStorag`;
- Manipular o objeto `sessionStorage`.

