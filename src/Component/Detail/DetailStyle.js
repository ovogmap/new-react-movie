import styled from "styled-components"
export const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const DetailInner = styled.div`
  width: 1200px;
  position: relative;
  display: flex;
`;
export const ImgBox = styled.div`
  height: 600px;
  width: 100%;
  filter: grayscale(100%);
  z-index: -1;
`;
export const Poster = styled.div`
  margin-top: -150px;
  width: 350px;
  height: 400px;
`;
export const Contentbox = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // background: #ddd;
  .titlebox {
    width: 100%;
    display: flex;
    align-items: center;
    padding-bottom: 30px;
    margin-bottom: 20px;
    border-bottom: 2px solid #232d4e;
  }
`;
export const Title = styled.h3`
    font-size : 30px;
    color: #232d4e;
    font-weight: 800;
`;
export const Open = styled.p`
    font-size: 18px;
    font-weight: 600;
    color: #232d4e;
    margin: 5px 10px 0 10px;
`;
export const LikeBtn = styled.button`
    margin-left: 20px;
    font-size: 20px;
    background: none;
    border: none;
    cursor: pointer;
    background: #232d4e;
    width: 150px;
    height: 40px;
    border-radius: 5px;
    color: #fff;
    font-weight: 600; 
`;
export const IntMovie = styled.div`
  padding-top: 20px;
`;
export const TitleBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 30px;
  margin-bottom: 20px;
  border-bottom: 2px solid #232d4e;
  > span {
      margin: 10px 10px 0 10px; 
      color: #232d4e;
  }
`;

