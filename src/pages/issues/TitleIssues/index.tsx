import {
  ArrowLeft,
  ArrowSquareUpRight,
  CalendarBlank,
  ChatCircle,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { ContactItens } from "../../../components/ContactItens";
import { TitleContainer, TitleContent, TitleHeader, TitleInfo } from "./style";

export function TitleIssues() {
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
          <h1>JavaScript data types and data structures</h1>
          <ContactItens
            github="MatthewAraujo"
            company="há 1 dia"
            follow={5}
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
