import { WidgetType, WidgetTypeEnum } from "@/types";
import Clock from "@/components/widgets/ClockWidget";
import CalendarDay from "@/components/widgets/CalendarDayWidget";

export const renderWidget = (widget: WidgetType, previewMode?: boolean) => {
  switch (widget) {
    case WidgetTypeEnum.Clock:
      return previewMode ? <Clock.Preview /> : <Clock.Widget />;
    case WidgetTypeEnum.CalendarDay:
      return previewMode ? <CalendarDay.Preview /> : <CalendarDay.Widget />;
    default:
      console.error("No wiget found for: ", widget);
  }
};
