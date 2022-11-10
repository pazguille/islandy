import { useEffect, useRef } from 'preact/hooks';
import { getVideoURL, slugify, videosSignal } from '../utils';

export default function Video({ title }) {
  const $video = useRef(null);

  useEffect(async () => {
    const video = await fetch(getVideoURL(slugify(title))).then(res => res.json());
    videosSignal.value = video;

    if (!window.matchMedia('(prefers-reduced-motion)').matches || (navigator.connection && !navigator.connection.saveData)) {
      if (video && video.full) {
        $video.current
          .addEventListener('loadedmetadata', function() {
            this.toggleAttribute('hidden');
          });
        $video.current.src = videosSignal.value.full;
      }
    }

    return () => {};
  }, []);

  return (
    <video ref={$video} class="hero game-preview-trailer" autoplay loop muted playsinline hidden />
  );
}
