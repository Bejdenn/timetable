import TimeTableCell from './TimeTableCell.tsx';
import { ColContext, RowDef } from './TimeTable.tsx';
import { useContext } from 'react';

function TimeTableRow({ header, cells }: RowDef<string>) {
  const cols = useContext(ColContext);

  return (
    <tr key={header}>
      <TimeTableCell component="th" sticky>
        {header}
      </TimeTableCell>
      {cols.map((col) => (
        <TimeTableCell component="td">
          {cells?.find((cell) => cell.field === col.field)?.val ?? ''}
        </TimeTableCell>
      ))}
    </tr>
  );
}

export function PauseRow({ header }: Omit<RowDef<string>, 'cells'>) {
  const cols = useContext(ColContext);

  return (
    <tr key={header}>
      <TimeTableCell component="th" sticky />
      {cols.map(() => (
        <TimeTableCell component="td" />
      ))}
    </tr>
  );
}

export default TimeTableRow;
