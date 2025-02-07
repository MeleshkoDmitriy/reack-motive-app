import { format, parseISO } from "date-fns";

export const getFormattedDate = (created: string) => {
  const date = parseISO(created);
  const formattedDate = format(date, "dd MMMM yyyy, HH:mm:ss");

  return formattedDate;
};
