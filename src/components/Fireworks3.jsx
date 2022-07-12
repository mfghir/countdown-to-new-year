import { Fireworks } from "fireworks/lib/react";

function Fireworks3() {
  let fxProps = {
    count: 3,
    interval: 200,
    colors: ["#e6271d", "#FE942B", "#FFF746"],
    calc: (props, i) => ({
      ...props,
      x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
      y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0),
    }),
  };

  return (
    <div>
      <Fireworks {...fxProps} />
    </div>
  );
}

export default Fireworks3;
