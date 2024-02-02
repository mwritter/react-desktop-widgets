import { renderWidget } from "@/lib/renderWidget";
import { WidgetType } from "@/types";

const WidgetDisplayList = ({ widgets }: { widgets: WidgetType[] }) => {
  return (
    <div className="overflow-y-auto grid gap-5">
      {widgets.map((widget) => renderWidget(widget))}
    </div>
  );
};

export default WidgetDisplayList;
