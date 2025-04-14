import { useEffect, useState } from "react";
import axios from "axios";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  videoId: string;
}

const Playlist = ({ playlistId }: { playlistId: string }) => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null); // 선택된 동영상 ID
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

  useEffect(() => {
    const fetchPlaylistItems = async () => {
      const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=4&playlistId=${playlistId}&key=${apiKey}`;
      try {
        const response = await axios.get(url);
        const items = response.data.items.map((item: any) => ({
          id: item.id,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high.url,
          videoId: item.snippet.resourceId.videoId,
        }));
        setVideos(items);
      } catch (error) {
        console.error("Error fetching playlist items:", error);
      }
    };

    fetchPlaylistItems();
  }, [playlistId]);

  return (
    <div className="w-full p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:scale-105"
            onClick={() => setSelectedVideo(video.videoId)} // 클릭 시 동영상 선택
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h5 className="text-lg font-semibold truncate">{video.title}</h5>
            </div>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div className="mt-8 flex justify-center">
          <div className="w-[80%] h-[45vw] lg:w-[70%] lg:h-[40vw]">
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Playlist;
