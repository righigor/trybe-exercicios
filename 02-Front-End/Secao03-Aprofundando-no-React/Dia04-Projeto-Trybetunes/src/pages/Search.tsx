import { ChangeEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Loading from '../services/components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import { AlbumType } from '../types';

function Search() {
  const [artista, setArtista] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AlbumType[]>([]);
  const [nomeFixo, setNomeFixo] = useState('');

  const verificaArtista = () => artista.length >= 2;

  const handleArtista = (e: ChangeEvent<HTMLInputElement>) => {
    setArtista(e.target.value);
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    const albuns = await searchAlbumsAPI(artista);
    setNomeFixo(artista);
    setLoading(false);
    setResult(albuns);
    setArtista('');
  };

  return (
    <div>
      <div>
        <form>
          <label htmlFor="">
            <input
              type="text"
              name=""
              data-testid="search-artist-input"
              placeholder="Nome do Artista"
              value={ artista }
              onChange={ handleArtista }
            />
            <button
              data-testid="search-artist-button"
              disabled={ !verificaArtista() }
              onClick={ handleClick }
            >
              Procurar
            </button>
          </label>
        </form>
      </div>
      { result.length > 0 && <h2>{ `Resultado de álbuns de: ${nomeFixo}` }</h2> }
      <div>
        { loading ? <Loading /> : '' }
        { result.length === 0 ? <h2>Nenhum álbum foi encontrado</h2>
          : result.map((data, i) => (
            <NavLink
              to={ `/album/${data.collectionId}` }
              key={ i }
              data-testid={ `link-to-album-${data.collectionId}` }
            >
              <div>
                <img src={ data.artworkUrl100 } alt={ data.collectionName } />
                { data.collectionName }
              </div>
            </NavLink>
          ))}
      </div>
    </div>
  );
}

export default Search;
