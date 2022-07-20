import { Slide } from "react-slideshow-image";

import slideImages from "../../assets/Images";

import "react-slideshow-image/dist/styles.css";
import styles from "./Slider.module.css";

export default function Slider() {

    console.log(slideImages[0] === slideImages[0]);
  return (
    <div className={styles.container}>
      <Slide easing="ease">
        {slideImages.map((slide, index) => {
          return (
            <div className={styles.slide} key={slide}>
              <div style={{ backgroundImage: `url(${slideImages[index]})` }}>
                {slideImages[index] === slideImages[0] ? (
                    <div className={styles.mantul}>
                        <span>THIS IS A PLACE WHERE TECHNOLOGY &  <br /> CREATIVY FUSED INTO DIGITAL CHEMISTRY</span>
                    </div>
                ):(
                    <div className={styles.mantul}>
                        <span>WE DON'T HAVE THE BEST BUT WE HAVE THE  &  <br /> GREATEST TEAM</span>
                    </div>
                )}
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
}
