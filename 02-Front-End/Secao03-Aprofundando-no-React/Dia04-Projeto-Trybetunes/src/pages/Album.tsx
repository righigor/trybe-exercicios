import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AlbumType, SongType } from '../types';
import getMusics from '../services/musicsAPI';
import Loading from '../services/components/Loading';
import MusicCard from '../services/components/MusicCard';

function Album() {
  const { id = '' } = useParams();
  const [loading, setLoading] = useState(false);
  const [album, setAlbum] = useState<AlbumType>();
  const [music, setMusic] = useState<SongType[]>([]);

  useEffect(() => {
    const pegaAlbum = async () => {
      setLoading(true);
      const [albumData, ...musics] = await getMusics(id);
      setAlbum(albumData);
      setMusic(musics);
    };
    pegaAlbum();
    setLoading(false);
  }, [id]);

  if (loading || !album) return <Loading />;
  return (
    <main>
      <img src={ album.artworkUrl100 } alt={ album.artistName } />
      <h2 data-testid="artist-name">{album.artistName}</h2>
      <h3 data-testid="album-name">{album.collectionName}</h3>
      {music.map((song) => (
        <MusicCard
          key={ song.trackId }
          music={ song }
        />
      ))}
    </main>
  );
}

export default Album;
