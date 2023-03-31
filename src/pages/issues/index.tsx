import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { IssuesContainer, IssuesContent } from "./style";
import { TitleIssues } from "./TitleIssues";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";

export default function Issues() {
  const [issues, setIssues] = useState([]);
  const { id } = useParams();

  async function fetchGithubIssues() {
    const response = await api.get(
      `search/issues?q=repo:MatthewAraujo/Github-Blog/issues/${id}`
    );
    setIssues(response.data.items);
    console.log(response.data.items);
  }

  useEffect(() => {
    fetchGithubIssues();
  }, []);

  return (
    <div>
      <Header />
      <TitleIssues
        key={id}
        title={issues.title}
        comments={comment}
        updated_at={updated_at}
        user={user.login}
      />

      <IssuesContainer>
        <IssuesContent>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis quibusdam cumque neque suscipit similique voluptatum
            officiis id doloribus, modi alias accusamus consequatur iusto
            facilis eaque, illo architecto, odit perferendis saepe.
          </p>
          <a>Dynamic typing</a>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
            repellendus facilis impedit quidem qui hic sit blanditiis nulla
            sequi, quas laboriosam, nesciunt iste dolore quo amet libero ab
            tempore fugiat.
          </p>
        </IssuesContent>
      </IssuesContainer>
    </div>
  );
}
