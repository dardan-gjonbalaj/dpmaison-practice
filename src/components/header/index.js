import { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import header from "./header.module.scss";

const Header = () => {
  const screenRef = useRef();

  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 900,
    //config: config.molasses,
    onRest: () => set(!flip),
  });

  return (
    <>
      <div className={header.Header}>
        <div className={header["header-wrap"]}>
          <div className={header.left}>
            <a href="/" className={header.logo}>
              <img
                src="https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d10db9372c981e229f12d3d_de-logotype-vert.svg"
                alt=""
                className="h-logo"
              />
            </a>
          </div>
        </div>
        <div className={header["header-wrap"]}>
          <div className={header.mid}>
            <div className={header["ink-tab"]}>
              <div className={header["ink-wrapper"]}>
                <div className={header["ink-text"]}>InK MoDe</div>
              </div>
            </div>
          </div>
        </div>
        <div className={header["header-wrap"]}>
          <div className={header.right}>
            <div className={header.cart}>
              <a href="/">Cart</a>
            </div>
          </div>
        </div>
      </div>
      <div className={header.collage}>
        <div className={header["collage-wrap"]}>
          <div
            className={(header["collage-1"], header["w-clearfix"])}
            ref={screenRef}
          >
            <animated.div style={props}>
              <h1 className={header["head-1"]}>S</h1>
              <h1 className={header["head-1"]}>P</h1>
              <h1 className={header["head-1"]}>R</h1>
              <h1 className={header["head-1"]}>I</h1>
              <h1 className={header["head-1"]}>N</h1>
              <h1 className={header["head-1"]}>G</h1>
              <h1 className={header["head-1"]}>,</h1>
            </animated.div>
          </div>
          <animated.div style={props}>
            <div className={header["collage-2"]}>
              <h1 className={header["head-1"]}>S</h1>
              <h1 className={header["head-1"]}>U</h1>
              <h1 className={header["head-1"]}>M</h1>
              <h1 className={header["head-1"]}>M</h1>
              <h1 className={header["head-1"]}>E</h1>
              <h1 className={header["head-1"]}>R</h1>
            </div>
          </animated.div>
        </div>
      </div>
    </>
  );
};

export default Header;
