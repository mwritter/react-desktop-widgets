import { SettingsIcon } from "lucide-react";
import { Button } from "./ui/button";

// This should open a new window where the user can add and configure widgets

const AddWidgetInput = () => {
  return (
    <Button variant="ghost">
      <SettingsIcon />
    </Button>
  );
};

export default AddWidgetInput;
