import React from "react";
import styled from "styled-components";

const HeaderBox = styled.div`
  // width: 100%;
  height: 65px;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
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

function Header() {
  return (
    <HeaderBox>
      <div className="inner">
        <div className="title">
          <h1>MOVIE</h1>
        </div>
        <ul>
          <li>
            <a href="#">검색</a>
          </li>
          <li>
            <a href="#">둘러보기</a>
          </li>
          <li>
            <a href="#">소개</a>
          </li>
        </ul>
      </div>
    </HeaderBox>
  );
}

export default Header;
