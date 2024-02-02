import SettingsButton from "./components/SettingsButton";
import WidgetDisplayList from "./components/WidgetDisplayList";

const App = () => {
  return (
    <div className="h-full flex flex-col gap-5 px-5 pb-5 rounded-lg overflow-hidden justify-between">
      <WidgetDisplayList widgets={["clock", "calendarDay"]} />
      <div className="self-end">
        <SettingsButton />
      </div>
    </div>
  );
};

export default App;
