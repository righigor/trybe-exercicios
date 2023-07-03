import { useState } from 'react';
import { SongType } from '../../types';

type MusicProps = {
  music: SongType
};

function MusicCard({ music }: MusicProps) {
  const { trackId, trackName, previewUrl } = music;
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    setFavorite(!favorite);
  };
  return (
    <div>
      <p>{ trackName }</p>
      <audio data-testid="audio-component" src={ previewUrl } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento:
        {' '}
        <code>audio</code>
      </audio>
      <label
        htmlFor={ `checkbox-music-${trackId}` }
        data-testid={ `checkbox-music-${trackId}` }
      >
        <input
          type="checkbox"
          checked={ favorite }
          id={ `checkbox-music-${trackId}` }
          onChange={ handleFavorite }
        />
        { favorite ? (
          <img src="/src/images/checked_heart.png" alt="favorite" />
        ) : (
          <img src="/src/images/empty_heart.png" alt="favorite" />
        )}
      </label>
    </div>
  );
}

export default MusicCard;
