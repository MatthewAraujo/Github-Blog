import { Header } from "../../components/Header";
import { IssuesContainer, IssuesContent } from "./style";
import { TitleIssues } from "./TitleIssues";

export default function Issues() {
  return (
    <div>
      <Header />
      <TitleIssues />

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
