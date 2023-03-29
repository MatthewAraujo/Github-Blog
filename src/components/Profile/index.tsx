import {
  ArrowSquareUpRight,
  Buildings,
  GithubLogo,
  Users,
} from "@phosphor-icons/react";
import {
  ProfileContact,
  ProfileContactItem,
  ProfileContainer,
  ProfileContent,
  ProfileHeader,
  ProfileInfo,
} from "./style";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileContent>
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/90223014?v=4"
            alt=""
          />
        </div>
        <ProfileInfo>
          <ProfileHeader>
            <h1>Matthew Araujo</h1>
            <div>
              <a href="https://github.com/MatthewAraujo" target="_blank">
                GITHUB <ArrowSquareUpRight size={22} color="#3294F8" />
              </a>
            </div>
          </ProfileHeader>
          <div>
            <p>
              Hey there, I'm all about living an active lifestyle! Catch me at
              the gym, playing sports outside, or exploring new hobbies to learn
              new skills.
            </p>
          </div>
          <ProfileContact>
            <ProfileContactItem>
              <div>
                <GithubLogo size={22} />
              </div>
              <div>MatthewAraujo</div>
            </ProfileContactItem>
            <ProfileContactItem>
              <div>
                <Buildings size={22} />
              </div>
              <div>Internit</div>
            </ProfileContactItem>
            <ProfileContactItem>
              <div>
                <Users size={22} />
              </div>
              <div>
                <p>11</p>
                <p>seguidores</p>
              </div>
            </ProfileContactItem>
          </ProfileContact>
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  );
}
