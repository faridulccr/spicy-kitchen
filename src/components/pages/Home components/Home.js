import Video from "./Video";
import { Link } from "react-router-dom";
import useVideoList from "../../../hooks/useVideoList";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          next={() => setPage(page + 8)}
          hasMore={hasMore}
          loader={<h1>loading...</h1>}
        >
          {videos.map((video) =>
            video.noq > 0 ? (
              <Link
                key={video.youtubeID}
                to={`/quiz/${video.youtubeID}`}
                state={{ videoTitle: video.title }}
              >
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                />
              </Link>
            ) : (
              <div key={video.youtubeID}>
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                />
              </div>
            )
          )}
        </InfiniteScroll>
      )}
      {!error && !loading && videos.length === 0 && (
        <div className="info">Data was not found!</div>
      )}
      {error && <div className="error">There was an error!</div>}
    </div>
  );
};

export default Home;
