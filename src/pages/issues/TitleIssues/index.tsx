import {
  ArrowLeft,
  ArrowSquareUpRight,
  CalendarBlank,
  ChatCircle,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { ContactItens } from "../../../components/ContactItens";
import { TitleContainer, TitleContent, TitleHeader, TitleInfo } from "./style";
interface IssuesParams {
  id: number;
  updated_at: string;
  comments: number;
  title: string;
  user: {
    login: string;
  };
}

export function TitleIssues({
  id,
  updated_at,
  comments,
  title,
  user,
}: IssuesParams) {
  return (
    <TitleContainer>
      <TitleContent>
        <TitleHeader>
          <Link to="/">
            <ArrowLeft size={22} color="#3294F8" /> voltar
          </Link>
          <a href="">
            ver no github
            <ArrowSquareUpRight size={22} color="#3294F8" />
          </a>
        </TitleHeader>
        <TitleInfo>
          <h1>{title}</h1>
          <ContactItens
            id={id}
            github={user.login}
            company={updated_at}
            follow={comments}
            followers="comentarios"
            icons={{
              company: <CalendarBlank size={22} />,
              follow: <ChatCircle size={22} />,
            }}
          />
        </TitleInfo>
      </TitleContent>
    </TitleContainer>
  );
}
