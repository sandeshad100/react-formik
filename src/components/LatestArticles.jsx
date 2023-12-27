import React from "react";
import { Link } from "react-router-dom";

const LatestArticles = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      {/* Section: Design Block */}
      <section className="mb-32">
        <style>
          {`
            .zoom:hover img {
              transform: scale(1.1);
            }
          `}
        </style>
        <h2 className="mb-12 text-center text-3xl font-bold">Pickup Lines</h2>

        <div className="grid gap-6 lg:grid-cols-3">
          <Link to={"viewCategory"}>
            <div
              // key={ }
              className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                src={`https://mdbcdn.b-cdn.net/img/new/standard/nature/050.jpg`}
                className="w-full align-middle transition duration-300 ease-linear"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                  <div className="flex h-full items-end justify-start">
                    <div className="m-6 text-white">
                      <h5 className="mb-3 text-lg font-bold">
                        Article Title {}
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
        </div>
      </section>
      {/* Section: Design Block */}
    </div>
    // Container for demo purpose
  );
};

export default LatestArticles;
