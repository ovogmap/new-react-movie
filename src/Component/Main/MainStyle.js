import styled from "styled-components";

export const MainBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  h2 {
    font-size: 48px;
    font-weight: 600;
  }
  p {
    margin: 60px auto;
    width: 1100px;
    font-style: italic;
    display: block;
    font-size: 60px;
    text-align: center;
    font-weight: 700;
  }
`;
export const MainInner = styled.div`
  // background: rgba(0, 0, 0, 0.5);
  text-align: center;
  padding: 100px;
  border-radius: 20px;
`;

export const MainTitle = styled.h3`
  color: #fff;
  font-size: 30px;
  font-weight: 900;
`;

export const Btn = styled.button`
  color: #fff;
  font-weight: 700;
  font-size: 40px;
  font-weight: 500;
  margin-top: 60px;
//   border-radius: 5px;
  padding: 10px 30px;
  background: rgba(0, 0, 0, 0.5);
  border: 5px solid #fff;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;
