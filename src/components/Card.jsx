import React from "react";
import { Link } from "react-router-dom";

export const Card = (index) => {
  return (
    <Link to={"/viewCategory"}>
      <div
        key={index}
        className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <img
          src={`https://mdbcdn.b-cdn.net/img/new/standard/nature/0${
            50 + index
          }.jpg`}
          className="w-full align-middle transition duration-300 ease-linear"
          alt={`Article ${index}`}
        />
        <a href="#!">
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
            <div className="flex h-full items-end justify-start">
              <div className="m-6 text-white">
                <h5 className="mb-3 text-lg font-bold">
                  Article Title {index}
                </h5>
                <p>
                  <small>
                    Published <u>01.01.2023</u> by Author Name
                  </small>
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
        </a>
      </div>
    </Link>
  );
};
