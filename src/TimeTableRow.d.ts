import { RowDef } from './TimeTable.tsx';
declare function TimeTableRow({ header, cells }: RowDef<string>): import("react/jsx-runtime").JSX.Element;
export declare function PauseRow({ header }: Omit<RowDef<string>, 'cells'>): import("react/jsx-runtime").JSX.Element;
export default TimeTableRow;
