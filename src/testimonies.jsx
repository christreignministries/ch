import { useState } from "react";
import "./Devotionals.css";
import "./testimonies.css";
import { testimoniesSource } from "./testimoniesSource";
import Footer from "./footer";
import Typewriter from "typewriter-effect";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const Testimonies = () => {
  const [search, setSearch] = useState("");
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const test = () => {
    Swal.fire("Good job!", "You clicked the button!", "success");
  };

  return (
    <div className="parent-bg">
      <hr className="ruler" />
      <div className="top-header">
        <h3>Category</h3>
        <h2 className="devotional">
          <Typewriter
            options={{
              strings: ["Testimonies", "Testimonies"],
              autoStart: true,
              loop: true,
              deleteSpeed: 100,
            }}
          />
        </h2>
        <div className="search-parent">
          <input
            placeholder="Search for a testimony"
            className="sermon-search"
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </div>
      <div>
        <div>
          <div className="testimonies-parent">
            {testimoniesSource
              .filter((items) => {
                if (search == "") {
                  return items;
                } else if (
                  items.title
                    .toLocaleLowerCase()
                    .includes(search.toLocaleLowerCase())
                ) {
                  return items;
                }
              })
              .map((items, i) => {
                return (
                  <div key={i}>
                    <div className="iframe-head">
                      <div className="iframe-parent">
                        <iframe
                          src={items.link}
                          width="640"
                          height="350"
                          allow="autoplay"
                        ></iframe>
                      </div>
                      <h3>{items.title}</h3>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <button onClick={test}> test</button>
      <Footer />
    </div>
  );
};

export default Testimonies;
