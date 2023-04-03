import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { IssuesContainer, IssuesContent } from "./style";
import { TitleIssues } from "./TitleIssues";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";

interface IssuesParams {
  number: number;
  title: string;
  body: string;
  user: {
    login: string;
  };
  updated_at: number;
  comments: number;
  html_url: string;
}

export default function Issues() {
  const [issues, setIssues] = useState<IssuesParams>({} as IssuesParams);
  const { id } = useParams();

  async function fetchGithubIssues() {
    const response = await api.get(
      `repos/MatthewAraujo/Github-Blog/issues/${id}`
    );
    setIssues(response.data);
  }
  console.log(issues);
  useEffect(() => {
    fetchGithubIssues();
  }, []);

  return (
    <div>
      <Header />
      <TitleIssues
        id={issues.number}
        title={issues.title}
        updated_at={issues.updated_at}
        comments={issues.comments}
        user={issues.user?.login}
        html_url={issues?.html_url}
      />

      <IssuesContainer>
        <IssuesContent>
          <p>{issues.body}</p>
        </IssuesContent>
      </IssuesContainer>
    </div>
  );
}
