//cali - do something to this page

import React from "react";
import CarouselBootstrap from "../components/Carousel";

function NoMatch() {
  return (
      <CarouselBootstrap>
        <h1>404 Page Not Found</h1>
        <h1>
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
        </h1>
      </CarouselBootstrap>
  );
}

export default NoMatch;
