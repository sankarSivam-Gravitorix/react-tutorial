import BackgroundOrigin from "./background/origin";
import AnimatedPosition from "./background/background_position/animation";

import Position from "./background/background_position/position";
import RepeatProperty from "./background/repeat";
import BackgroundSize from "./background/backgorund_size/size";
import AnimatedSize from "./background/backgorund_size/animation";
import BorderBottomLeftRadius from "./border/border_bottom_left_radius";
import BorderBottomLeftRadiusAnimation from "./border/leftradius_animation";
import BorderBottomRightRadius from "./border/border-bottpm-rightradius";
import BorderBottomRightRadiusAnimation from "./border/rightradius_animation";
import BorderBottomStyle from "./border/border_bottom_style";

function App() {
  return (
    <div>
      <BackgroundOrigin />

      <br />
      <br />
      <br />
      <br />
      <br />

      <AnimatedPosition />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Position/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <RepeatProperty/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <BackgroundSize/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <AnimatedSize/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <BorderBottomLeftRadius/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <BorderBottomLeftRadiusAnimation/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <BorderBottomRightRadius/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <BorderBottomRightRadiusAnimation/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <BorderBottomStyle/>
    </div>
  );
}

export default App;
