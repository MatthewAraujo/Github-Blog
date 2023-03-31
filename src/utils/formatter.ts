import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export const formatter = (date: number) => {
  return formatDistanceToNow(new Date(date), {
    locale: ptBR,
    addSuffix: true,
  });
};
