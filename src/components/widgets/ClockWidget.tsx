import { useEffect, useState } from "react";

export const Type = "clock";

// Implementation
export const Widget = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = (time.getHours() % 12).toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return <WidgetUI hours={hours} minutes={minutes} seconds={seconds} />;
};

// UI to share between the actual Widget and Preview
const WidgetUI = ({
  hours,
  minutes,
  seconds,
}: {
  hours: string;
  minutes: string;
  seconds: string;
}) => (
  <div className="flex p-5 border border-solid border-blue-500 rounded-md w-full bg-white justify-center">
    <div className="text-3xl">{hours}:</div>
    <div className="text-3xl">{minutes}:</div>
    <div className="text-3xl">{seconds}</div>
  </div>
);

// Preview
export const Preview = () => <WidgetUI hours="05" minutes="00" seconds="00" />;

export default {
  Type,
  Widget,
  Preview,
};
