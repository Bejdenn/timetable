import TimeTableRow, { PauseRow } from './TimeTableRow.tsx';
import TimeTableCell from './TimeTableCell.tsx';
import { createContext } from 'react';
import { WeekDay } from './types.ts';

export const ColContext = createContext<ColDef[]>([]);

export type ColDef = {
  field: WeekDay;
};

export type RowDef<T> = {
  header: T;
  cells?: CellDef[];
};

export type CellDef = ColDef & { val: string };

function TimeTable({ cols, rows }: { cols: ColDef[]; rows: RowDef<string>[] }) {
  return (
    rows && (
      <table className="m-auto block max-w-max overflow-x-auto">
        <ColContext.Provider value={cols}>
          <thead>
          <tr>
            <TimeTableCell sticky component="th" />
            {cols.map((col) => (
              <TimeTableCell key={col.field} component="th">
                {col.field}
              </TimeTableCell>
            ))}
          </tr>
          </thead>
          <tbody>
          {rows
            .sort((a, b) => a.header.localeCompare(b.header))
            .map((row, index) => (
              <>
                <TimeTableRow
                  key={row.header}
                  header={row.header}
                  cells={row.cells}
                />
                {index < rows.length - 1 && <PauseRow header={row.header} />}
              </>
            ))}
          </tbody>
        </ColContext.Provider>
      </table>
    )
  );
}

export default TimeTable;
