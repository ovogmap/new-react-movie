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

3일차.

- localStorage를 사용한 좋아요 기능구현.
  음 혼자의 머리로는 방법이 떠오르지 않아 몇시간을 삽질하다 구글의 도움으로 문제를 해결할 수 있었다.
  내가 영감을 받았던 사이트의 방법과 구글링을 통해 알아본 방법으로 코드를 내가 작성했다고 할 수 없을만큼 찾아온걸
  그대로 붙여넣었다. 매우 부끄럽지만 이렇게 할 수도 있구나~하고 배운것에 감사하는 마음으로 공부했다.

  const [like, setLike] = useState(
  localStorage.getItem(getMovieData.data.id) !== null
  );
  useState를 만들어 주고 기본값의 false true 값을 localStorage.getItem과 비교연산자를 통해
  기초 값을 넣어주고 이벤트 함수에서 like State의 값을 변경해줄수있게 작성된 코드였다.
  위 코드처럼 작성시 처음 랜더링 된 영화는 loacl에 저장되어있지 않기 때문에 false를 반환한다.

  const lickClick = () => {
  const newLike = localStorage.getItem(getMovieData.data.id) === null;
  위 코드는 먼저 좋아요를 누르면 좋아요누른 영화가 local에 있는 영화인지 없는 영화인지 조건을 걸기위한 방법이다.
  id값이 없다면 true가 반환되고 if문 true블럭이 실행되어 local에 set해주는 코드이다.
  if (newLike) {
  localStorage.setItem(
  getMovieData.data.id,
  // 이 자료를 찾아보기전에 Object를 문자열로 변경할 방법을 몰랐는데 JSON으로 변경되게 하면 함수가 있었다.
  // 앞으로도 사용할일이 많을거 같아 따로 문서를 찾아봐야겠다.
  JSON.stringify({
  id: getMovieData.data.id,
  title: getMovieData.data.title,
  posterPath: getMovieData.data.posterPath,
  })
  );
  } else {
  localStorage.removeItem(getMovieData.data.id);
  // 조건이 false이면 이미 local에 id값이 있는것이고 그 id값의 데이터를 지워주게 된다.
  }
  setLike(newLike); 위 if문을 다 끝마치고 fals,true를 반환해 준다. 반환된 값에 의해 좋아요 버튼의 UI가 변경되게 된다.
  };

  <LikeBtn onClick={() => {lickClick()}}>
  {like ? <span>좋아요 취소 ❤</span> : <span>좋아요 ♡</span>}
  </LikeBtn>
