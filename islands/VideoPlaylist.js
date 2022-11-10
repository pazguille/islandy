import { videosSignal } from '../utils';

export default function VideoPlaylist() {
  const video = videosSignal.value;
  return (
    <div>
      {video && video.playlist && video.playlist.length > 0 && video.playlist.map((id) => <lite-youtube key={id} videoid={id}></lite-youtube>)}
    </div>
  );
}
