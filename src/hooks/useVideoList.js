// for fetch vedio from database and use multiple times
import { useEffect, useState } from "react";
import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";

const useVideoList = (page) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      //database related works
      const database = getDatabase(); // for conection establish to database
      const videosRef = ref(database, "videos");
      const videoQuery = query(
        videosRef,
        orderByKey(),
        // If you want infinite scrolling then use bellow funcs
        startAt("" + page), // kotha theke start hobe, must be string for orderByKey()
        limitToFirst(8) //per page e prothom theke koyta dekhabe tar jonno
      );

      // since I have to use await for that i will use try catch method
      try {
        //to handle fetching data
        setError(false);
        setLoading(true);
        // to request firebase database
        const snapshot = await get(videoQuery); // fetch data and return an Object
        // console.log(snapshot);// returns an Object(DataSnapshot)
        // console.log(snapshot.val()); // returns an Array(videos) with an empty value from database
        // console.log(Object.values(snapshot.val())); // returns an Array(videos) with only truthy vlaues
        if (snapshot.exists()) {
          setVideos((prevVideos) => {
            return [...prevVideos, ...Object.values(snapshot.val())];
          });
        } else {
          setHasMore(false);
        }
        setLoading(false);
      } catch (err) {
        console.log(err);
        console.log(err.message);
        setLoading(false);
        setError(true);
      }
    }
    fetchVideos();
  }, [page]);

  return {
    loading,
    error,
    videos,
    hasMore,
  };
};

export default useVideoList;
