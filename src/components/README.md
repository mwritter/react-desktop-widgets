## Creating a new Widget

1. Create your React Widget in `/src/components`.
   - You should have a at least 3 parts to every component
     1. Start by adding and `Type`
     ```js
     export const Type = "awesomeWidget";
     ```
     2. Add your widget implementations
     ```js
     export const Widget = () => {...}
     ```
     3. And you'll want to add some kind of `preview`.
     ```js
     export const Preview = () => {...}
     ```
2. Now you need to `export` your new component.

`/src/components/index.ts`

```js
export {
  // Awesome Widget
  Widget as AwesomeWidget,
  Preview as AwesomeWidgetPreview,
  Type as AwesomeWidgetType,
} from "@/components/AwesomeWidget";
```

`types.ts`

```js
import { AwesomeWidgetType } from "@/components";

// Add Custome widgets here
const widgets = [AwesomeWidgetType] as const;
```

3. Add your React Widget to `renderWidget` function in `/src/lib/renderWidget.tsx`

```js
...
import { AwesomeWidget } from "@/components";

export const renderWidget = (widget: WidgetType) => {
  switch (widget) {
    ...
    case WidgetTypeEnum.AwesomeWidget:
      return <AwesomeWidget />;
    ...
  }
};
```
