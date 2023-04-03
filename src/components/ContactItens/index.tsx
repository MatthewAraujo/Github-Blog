import { GithubLogo } from "@phosphor-icons/react";
import { ProfileContact, ProfileContactItem } from "./styles";
import { formatter } from "../../utils/formatter";

interface ContactItensProps {
  id: number;
  github: string;
  company?: string;
  date?: number;
  follow?: number;
  followers?: string;
  icons: {
    company?: React.ReactNode;
    follow?: React.ReactNode;
  };
}

export function ContactItens({
  id,
  github,
  company,
  date,
  follow,
  followers,
  icons,
}: ContactItensProps) {
  return (
    <ProfileContact key={id}>
      <ProfileContactItem>
        <div>
          <GithubLogo size={22} />
        </div>
        <div>{github}</div>
      </ProfileContactItem>
      <ProfileContactItem>
        <div>{icons.company}</div>
        {date ? <div>{formatter(date)}</div> : <div>{company}</div>}
      </ProfileContactItem>
      <ProfileContactItem>
        <div>{icons.follow}</div>
        <div>
          <p>{follow}</p>
          <p>{followers}</p>
        </div>
      </ProfileContactItem>
    </ProfileContact>
  );
}
