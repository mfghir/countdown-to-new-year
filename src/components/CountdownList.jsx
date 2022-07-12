import React, { useEffect, useState } from "react";

const CountdownList = ({ setCountdown }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    let countdownDate = new Date("Jul 12, 2022 00:00:00").getTime();
    let x = setInterval(() => {
      let now = new Date().getTime();

      let distance = countdownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime(days + "d" + hours + "h" + minutes + "m" + seconds + "s");

      if (distance < 0) {
        clearInterval(x);
        setTime("Happy New Year !");
        setCountdown(true);

        setTimeout(() => {
          setCountdown(false);
        }, 15000);

      }
      
    }, 1000);
  }, []);

  return <div style={style}>{time}</div>;
};

const style = {
  fontSize: "150px",
  textAlign: "center",
};

export default CountdownList;
