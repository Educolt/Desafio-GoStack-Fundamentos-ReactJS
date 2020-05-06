import pt, { format } from 'date-fns';

const formatDate = (date: Date): string => {
  return format(date, 'P', {
    locale: pt,
  });
};

export default formatDate;
