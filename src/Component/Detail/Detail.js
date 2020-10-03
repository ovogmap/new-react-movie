import React, {useState} from "react";
import { DetailBox, DetailInner, ImgBox, Poster, Contentbox, Title, Open, LikeBtn, IntMovie, TitleBox } from './DetailStyle'

// 340102;
// ${movieData.backdrop_path}
export default ({ getMovieData , id}) => {
  const [ like, setLike ] = useState(false)
  const [ local, setLocal ] = useState({
    id: "",
    title : "",
    url : ""
  })
  const { backdrop_path, poster_path, title, release_date, overview, tagline } = getMovieData.data
  console.log(getMovieData)
  console.log(id)
  const bg = `url(http://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}) center / cover no-repeat`;
  const post = `url(http://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}) center / cover no-repeat`;

  const lickClick = () => {
    const loc = window.localStorage
    setLocal({
      ...local,
      id: getMovieData.data.id,
      title: getMovieData.data.title,
      url: getMovieData.data.poster_path
    })
    loc.setItem(local.id, local)
    console.log(local.id)
    setLike(!like)
  }
  return (
    <DetailBox>
      <ImgBox style={{background: bg}} />
      <DetailInner>
        <Poster style={{ background: post }}></Poster>
        <Contentbox>
          <TitleBox>
            <Title>{title}</Title>
            <Open>({release_date})</Open>
            {getMovieData.data.genres.map((item, i)=> {
              return (
              <span key={i}>{item.name},</span>
              )
            })}
            <LikeBtn onClick={()=>{setLike(!like)}}>{!like ? <span>좋아요 ♡</span> : <span>좋아요 취소 ❤</span> }</LikeBtn>
          </TitleBox>
          <IntMovie>
            <h3>{tagline}</h3>
            <br/>
            <p>{overview}</p> 
          </IntMovie>
        </Contentbox>
      </DetailInner>
    </DetailBox>
  );
};
