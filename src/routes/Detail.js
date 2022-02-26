import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { generatePath } from "react-router-dom/cjs/react-router-dom.min";
function Detail() {
  const { id } = useParams();
  const [info, setInfo] = useState([]);
  const [Loading, setLoading] = useState(false);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setInfo(json.data.movie);
    setLoading(true);
  };
  useEffect(() => {
    getMovie();
  }, []);

  // console.log(info);

  return (
    <div>
      {Loading ? (
        <div>
          {" "}
          <h1>Detail</h1>
          <img src={info.medium_cover_image} />
          <h2>
            {info.title}({info.year})
          </h2>
          <h3>평점 : {info.rating}/10</h3>
          <br />
          <h3>장르</h3>
          {info.genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
          <h3>줄거리</h3>
          <p>{info.description_intro}</p>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
export default Detail;
