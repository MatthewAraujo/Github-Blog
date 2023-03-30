import { ArrowSquareUpRight, Buildings, Users } from "@phosphor-icons/react";
import { useContext } from "react";
import { GithubBlogContext } from "../../contexts/GithubBlogContext";
import { ContactItens } from "../ContactItens";
import {
  ProfileContainer,
  ProfileContent,
  ProfileHeader,
  ProfileInfo,
} from "./style";

export function Profile() {
  const { githubBlog } = useContext(GithubBlogContext);

  return (
    <ProfileContainer>
      <ProfileContent>
        <div>
          <img src={githubBlog.avatar_url} alt="" />
        </div>
        <ProfileInfo>
          <ProfileHeader>
            <h1>{githubBlog.name}</h1>
            <div>
              <a href={githubBlog.html_url} target="_blank">
                GITHUB <ArrowSquareUpRight size={22} color="#3294F8" />
              </a>
            </div>
          </ProfileHeader>
          <div>
            <p>{githubBlog.bio}</p>
          </div>
          <ContactItens
            github={githubBlog.name}
            company={githubBlog.company}
            follow={githubBlog.followers}
            followers="seguidores"
            icons={{
              company: <Buildings size={22} />,
              follow: <Users size={22} />,
            }}
          />
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  );
}
