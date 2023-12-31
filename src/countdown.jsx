import { useState } from "react";

const Countdown = () => {
  const targetDate = new Date("11/29/2023 16:00");
  const today = new Date();
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  let timerId;

  const timeSpan = targetDate - today;
  const days = Math.floor(timeSpan / day);
  const hours = Math.floor((timeSpan % day) / hour);
  const minutes = Math.floor((timeSpan % hour) / minute);
  const seconds = Math.floor((timeSpan % minute) / second);

  const [presentSecond, setPresentSecond] = useState(seconds);
  const [presentDay, setPresentDay] = useState(days);
  const [presentHour, setPresentHour] = useState(hours);
  const [presentminute, setPresentMinute] = useState(minutes);

  const countDown = () => {
    console.clear();
    const today = new Date();
    const timeSpan = targetDate - today;
    if (timeSpan <= day) {
      setPresentSecond("");
      setPresentDay("");
      setPresentMinute("");
      setPresentHour("");
      clearInterval(timerId);
      return;
    }

    const days = Math.floor(timeSpan / day);
    const hours = Math.floor((timeSpan % day) / hour);
    const minutes = Math.floor((timeSpan % hour) / minute);
    const seconds = Math.floor((timeSpan % minute) / second);
    setPresentSecond(seconds);
    setPresentHour(hours);
    setPresentMinute(minutes);
    setPresentDay(days);
  };

  timerId = setInterval(countDown, second);

  return (
    <div>
      <h3 style={{ textAlign: "left", marginTop: "5%", fontSize: "80%" }}>
        Countdown to Increase Celebration
      </h3>
      <div
        style={{
          display: "flex",
          gap: "15px",
          fontSize: "50%",
          justifyContent: "left",
        }}
      >
        <h1 className="time">{presentDay + "days"}</h1>
        <h1 className="time">{presentHour + "hrs"}</h1>
        <h1 className="time">{presentminute + "mins"}</h1>
        <h1 className="time">{presentSecond + "sec"}</h1>
      </div>
    </div>
  );
};

export default Countdown;
