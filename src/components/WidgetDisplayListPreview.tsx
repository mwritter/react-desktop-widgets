import { renderWidget } from "@/lib/renderWidget";
import { WidgetType } from "@/types";
import { PlusCircle } from "lucide-react";
import { Button } from "./ui/button";

const WIDGET_PREVIEWS: WidgetType[] = ["clock", "calendarDay"];

const WidgetDisplayListPreview = () => {
  return (
    <div className="overflow-y-auto grid gap-5">
      {WIDGET_PREVIEWS.map((widget) => (
        <div className="flex items-center gap-3">
          {renderWidget(widget, true)}
          <Button
            variant="ghost"
            onClick={() => {
              // TODO add widget to "user widget list"
            }}
          >
            <PlusCircle />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default WidgetDisplayListPreview;
