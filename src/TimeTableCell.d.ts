import { PropsWithChildren } from 'react';
declare function TimeTableCell({ children, component, sticky, }: PropsWithChildren & ({
    component: 'th';
    sticky?: boolean;
} | {
    component: 'td';
    sticky?: false;
})): import("react/jsx-runtime").JSX.Element;
export default TimeTableCell;
