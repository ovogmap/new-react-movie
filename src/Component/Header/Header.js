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
            <Link>검색</Link>
          </li>
          <li>
            <Link to="/list">둘러보기</Link>
          </li>
          <li>
            <Link>소개</Link>
          </li>
        </ul>
      </div>
    </HeaderBox>
  );
}

export default Header;
