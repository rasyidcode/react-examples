/* eslint-disable react/prop-types */
export default function Clock({ time }) {
  return (
    <h1
      className={time.getHours() >= 0 && time.getHours() <= 6 ? "night" : "day"}
    >
      {time.toLocaleTimeString()}
    </h1>
  );
}
