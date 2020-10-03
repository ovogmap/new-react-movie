import styled from "styled-components";

export const HeaderBox = styled.div`
  width: 100%;
  height: 65px;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  z-index: 100;
  h1 {
    color: #fff;
  }
  .inner {
    width: 1200px;
    // background: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      display: flex;
      align-items: center;
    }
    ul {
      display: flex;
      li {
        margin-left: 25px;
        a {
          color: #fff;
          font-size: 26px;
          font-weight: 700;
        }
      }
    }
  }
`;
