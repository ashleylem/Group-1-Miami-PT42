// import React, { useRef } from "react";
// import VideoImageThumbnail from 'react-video-thumbnail-image';

// function VideoThumbnail({ videoUrl }) {
//   const [thumbnailUrl, setThumbnailUrl] = useState(null);
//   const apiVideoUrl =
//   "https://ashleylem.pythonanywhere.com/videos/";

//   useEffect(() => {
//     const thumbnailGenerator = new ThumbnailGenerator({
//       sourcePath: apiVideoUrl+ videoUrl?.filename,
//       thumbnailPath: '/',
//       tmpDir: '/tmp',
//       size: '640x?',
//       count: 1,
//     });

//     thumbnailGenerator.generate().then(thumbnails => {
//       setThumbnailUrl(thumbnails[0].path);
//     });

//     return () => {
//       thumbnailGenerator.cancel();
//     };
//   }, [videoUrl]);

//   if (!thumbnailUrl) {
//     return null;
//   }

//   return (
//     <img src={thumbnailUrl} alt="Video Thumbnail" />
//   );
// }


// export default VideoThumbnail;
