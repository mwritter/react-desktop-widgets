export const Type = "calendarDay";

// Implementation
export const Widget = () => {
  const day = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    new Date()
  );

  return <WidgetUI day={day} />;
};

// UI to share between the actual Widget and Preview
const WidgetUI = ({ day }: { day: string }) => {
  return (
    <div className="flex p-10 border border-solid bg-black text-white rounded-md w-full justify-center">
      <div className="text-3xl">{day}</div>
    </div>
  );
};

// Preview
export const Preview = () => <WidgetUI day="Thursday" />;

export default {
  Type,
  Widget,
  Preview,
};
