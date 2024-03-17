# timetable

timetable is a simple React component that allows you to display a timetable in your web application.

## Installation

```bash
npm install @bejdenn/timetable
```

## Usage

```typescript jsx
import TimeTable, { ColDef } from '@bejdenn/timetable';

// ...rest of your imports

const weekDays: ColDef[] = [
  { field: 'monday' },
  { field: 'tuesday' },
  { field: 'wednesday' },
  { field: 'thursday' },
  { field: 'friday' },
];

function App() {
  const { data } = useFirestore('timetable');

  return (
    <TimeTable
        cols={weekDays}
        rows={data ?? []}
    />
  );
}
