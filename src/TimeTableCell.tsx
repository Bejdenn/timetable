import { PropsWithChildren } from 'react';

function TimeTableCell({
  children,
  component = 'td',
  sticky = false,
}: PropsWithChildren &
  (
    | { component: 'th'; sticky?: boolean }
    | { component: 'td'; sticky?: false }
  )) {
  const className =
    'whitespace-pre-wrap border-2 border-dark-blue p-2 text-left font-normal text-white dark:border-gray' +
    (sticky ? ' sticky left-0 z-10' : '');

  switch (component) {
    case 'th':
      return <th className={`${className} bg-light-blue`}>{children}</th>;
    case 'td':
      return <td className={className}>{children}</td>;
  }
}

export default TimeTableCell;
