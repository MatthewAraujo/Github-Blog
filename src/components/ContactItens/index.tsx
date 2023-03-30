import { Buildings, GithubLogo, Users } from "@phosphor-icons/react";
import { ProfileContact, ProfileContactItem } from "./styles";

interface ContactItensProps {
  github: string;
  company?: string;
  follow?: number;
  followers?: string;
  icons: {
    company?: React.ReactNode;
    follow?: React.ReactNode;
  };
}

export function ContactItens({
  github,
  company,
  follow,
  followers,
  icons,
}: ContactItensProps) {
  return (
    <ProfileContact>
      <ProfileContactItem>
        <div>
          <GithubLogo size={22} />
        </div>
        <div>{github}</div>
      </ProfileContactItem>
      <ProfileContactItem>
        <div>{icons.company}</div>
        <div>{company}</div>
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
