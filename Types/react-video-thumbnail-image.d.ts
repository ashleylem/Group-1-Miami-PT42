declare module 'react-video-thumbnail-image' {
    export default function VideoThumbnail(props: {
      videoUrl: string;
      thumbnailHandler: (thumbnail: string) => void;
      width?: number;
      height?: number;
      timeCode?: number;
      endAt?: number;
      volume?: number;
      hidePlayIcon?: boolean;
    }): JSX.Element;
  }
  