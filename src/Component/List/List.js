import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Listbox = styled.div`
  padding-top: 65px;
  background: #fff;
  display: flex;
  //   align-items: center;
  justify-content: center;
  .inner {
    width: 1200px;
    background: #fff;
    padding: 50px 0;
    ul {
      display: flex;
      justify-content: space-between;
      padding-bottom: 50px;
      li {
        width: 33.3333%;
        font-size: 50px;
        font-weight: 600;
        text-align: center;
        cursor: pointer;
      }
    }
  }
  .listItemBox {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .listItems {
      width: 22%;
      height: 300px;
      background: #eee;
      margin: 10px;
      border-radius: 10px;
      text-align: center;
      color: #fff;
      font-size: 26px;
      font-weight: 600;
      filter: grayscale(30%);
      box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 3px 0px;
      div {
        color: #fff;
        display: block;
        width: 100%;
        height: 100%;
        line-height: 16;
        overflow: hidden;
      }
    }
  }
`;

export default ({ movie }) => {
  return (
    <Listbox>
      <div className="inner">
        <ul>
          <li>인기</li>
          <li>현재상영중</li>
          <li>상영예정</li>
        </ul>
        <div className="listItemBox">
          {movie.map((item) => {
            const { id, title, poster_path } = item;
            return (
              <div
                key={id}
                className="listItems"
                onClick={() => {}}
                style={{
                  background: `url(https://image.tmdb.org/t/p/original/${poster_path}) center / cover no-repeat`,
                }}
              >
                <Link to={`/detail/${id}`}>
                  <div>
                    <p>{title}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </Listbox>
  );
};
