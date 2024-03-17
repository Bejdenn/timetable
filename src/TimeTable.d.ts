/// <reference types="react" />
import { WeekDay } from './types.ts';
export declare const ColContext: import("react").Context<ColDef[]>;
export type ColDef = {
    field: WeekDay;
};
export type RowDef<T> = {
    header: T;
    cells?: CellDef[];
};
export type CellDef = ColDef & {
    val: string;
};
declare function TimeTable({ cols, rows }: {
    cols: ColDef[];
    rows: RowDef<string>[];
}): import("react/jsx-runtime").JSX.Element;
export default TimeTable;
