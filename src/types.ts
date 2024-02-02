import { CalenderDayType, ClockWidgetType } from "@/components";

// Add Custome widgets here
const widgets = [ClockWidgetType, CalenderDayType] as const;

// DONT TOUCH - this is for automatically create types
type ValuesOfArray<T extends ReadonlyArray<WidgetType>> = T[number];

type ToObj<K extends string> = {
  [P in K]: Uncapitalize<P>;
};

const createPseudoEnum = <
  T extends readonly WidgetType[],
  K extends ValuesOfArray<T>
>(
  arr: T
): Readonly<ToObj<Capitalize<K>>> => {
  return arr.reduce((acc, elem) => {
    const key = elem;
    const keyCap = key.slice(0, 1).toUpperCase() + key.slice(1);
    const value = elem;
    return {
      ...acc,
      [keyCap]: value,
    };
  }, {} as ToObj<Capitalize<K>>);
};

export const WidgetTypeEnum = createPseudoEnum(widgets);

export type WidgetType = (typeof widgets)[number];
// DONT TOUCH - this is for automatically create types
