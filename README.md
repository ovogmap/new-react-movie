React를 이용한 영화 검색 사이트 만들기.

1일차.

- styled-components 사용하여 js-in-css 사용.
- 오픈 api 사용해보기.
- api로 받아온 데이터 사용해보기.
- react-router-dom 사용해보기.

구현하고자 했던 기능은 메인페이지가 랜더링될때마다 영화를 추천해주는 기능이었다.
우선 api로 받아온 데이터를 랜덤한 인덱스로 가져올 코드를 아래처럼 작성해 보았다.

const fetchMovie = async () => {
const newMovie = await api.now_playing();
const index = Math.floor(Math.random() \* newMovie.data.results.length);
setMovie(newMovie.data.results[index]);
};
useEffect(() => {
fetchMovie();
}, []);

위 코드를 사용해 index값은 랜덤으로 부여하여 랜더링될때마다 메인에 소개되는 영화가 달라질 수 있게 하였다.

오늘 공부하며 부족한점이 많다는걸 또 한번 느꼈다.
더 노력해야겠다.

2일차.

- Router를 사용해 detail페이지를 랜더링할때 /:id 값을 넣어줘 선택된 영화에 맞는 detail페이지를 만들어 주었다.
- 처음 메인페이지에서 더보기를 누르면 랜덤으로 받아온 영화데이터의 id값을 detail component로 넘겨주고
  그 id값으로 details api 호출값으로 넣어줘야하는데 id값을 detila component로 넘겨줄 방법을 찾다가
  match라는 걸 알게되어 찾아보고 match.params 를 이용해 id값을 넘겨주고 detail api호출에 성공할수 있었다.
  좀 더 공부해야할부분을 찾은거 같다.
  match, location, history 에 대한 공부가 필요하다고 느꼇다.
- 좋아요 기능을 만들어 좋아요를 누르면 localStorage에 데이터를 넘겨줘 사용자가 누른 좋아요 목록을 보여주는 페이지를 만들생각이다,
  localStorage를 사용해볼 좋은 기회인거 같아 찾아보며 공부해서 적용시켜 볼 생각이다.

2일차 추가.

- 둘러보기 페이지 30%작업완료후 업로드.
- 둘러보기 페이지에서 구현하려는 기능은 인기, 현재상영중, 상영예정 3가지 리스트를 보여주고 클릭시 해당 api를 호출해 영화 리스트를
  보요주는 페이지이다.
  일단 UI구성만 만들어둔 상태이고 리스트클릭시 거기에 맞는 api호출후 데이터를 뿌려주는 방법은 아직 잘모르겠다
  자료들을 찾아보며 방법을 찾아볼 예정.
