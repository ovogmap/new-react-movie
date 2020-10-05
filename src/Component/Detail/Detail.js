import React, { useState } from "react";
import {
  DetailBox,
  DetailInner,
  ImgBox,
  Poster,
  Contentbox,
  Title,
  Open,
  LikeBtn,
  IntMovie,
  TitleBox,
} from "./DetailStyle";

// 340102;
// ${movieData.backdrop_path}
export default ({ getMovieData, id }) => {
  const [like, setLike] = useState(
    localStorage.getItem(getMovieData.data.id) !== null
  );
  const {
    backdrop_path,
    poster_path,
    title,
    release_date,
    overview,
    tagline,
  } = getMovieData.data;
  console.log(getMovieData);
  console.log(id);
  const bg = `url(http://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}) center / cover no-repeat`;
  const post = `url(http://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}) center / cover no-repeat`;

  const lickClick = () => {
    const newLike = localStorage.getItem(getMovieData.data.id) === null;
    if (newLike) {
      localStorage.setItem(
        getMovieData.data.id,
        JSON.stringify({
          id: getMovieData.data.id,
          title: getMovieData.data.title,
          posterPath: getMovieData.data.posterPath,
        })
      );
    } else {
      localStorage.removeItem(getMovieData.data.id);
    }
    setLike(newLike);
  };
  return (
    <DetailBox>
      <ImgBox style={{ background: bg }} />
      <DetailInner>
        <Poster style={{ background: post }}></Poster>
        <Contentbox>
          <TitleBox>
            <Title>{title}</Title>
            <Open>({release_date})</Open>
            {getMovieData.data.genres.map((item, i) => {
              return <span key={i}>{item.name},</span>;
            })}
            <LikeBtn
              onClick={() => {
                lickClick();
              }}
            >
              {like ? <span>좋아요 취소 ❤</span> : <span>좋아요 ♡</span>}
            </LikeBtn>
          </TitleBox>
          <IntMovie>
            <h3>{tagline}</h3>
            <br />
            <p>{overview}</p>
          </IntMovie>
        </Contentbox>
      </DetailInner>
    </DetailBox>
  );
};
