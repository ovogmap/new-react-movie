import React from "react";
import { HeaderBox } from "./HeaderStyle";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderBox>
      <div className="inner">
        <div className="title">
          <Link to="/">
            <h1>MOVIE</h1>
          </Link>
        </div>
        <ul>
          <li>
            <a href="#">검색</a>
          </li>
          <li>
            <Link to="/list">둘러보기</Link>
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
