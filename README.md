React를 이용한 영화 검색 사이트 만들기.

1일차.

- styled-components 사용하여 js-in-css 사용.
- 오픈 api 사용해보기.
- api로 받아온 데이터 사용해보기.
- react-router-dom 사용해보기.

구현하고자 했던 기능은 메인페이지가 랜더링될때마다 영화를 추천해주는 기능이었다.
우선 api로 받아온 데이터를 랜덤한 인덱스로 가져올 코드를 아래처럼 작성해 보았다.

<!--
const fetchMovie = async () => {
const newMovie = await api.now_playing();
const index = Math.floor(Math.random() * newMovie.data.results.length);
setMovie(newMovie.data.results[index]);
};
useEffect(() => {
    fetchMovie();
  }, []);
-->

위 코드를 사용해 index값은 랜덤으로 부여하여 랜더링될때마다 메인에 소개되는 영화가 달라질 수 있게 하였다.

오늘 공부하며 부족한점이 많다는걸 또 한번 느꼈다.
더 노력해야겠다.
