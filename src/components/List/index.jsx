import { useContext } from "react";
import { ChallengeContext } from "../../providers/Challenge";
import { Title } from "../../styles/typography";
import { ContainerUl } from "./style";

const title = ["Amanhã:", "Em 15 Dias:", "Em 30 dias:", "Em 90 dias:"];

export const ListData = () => {
  const { calc } = useContext(ChallengeContext);

  return (
    <>
      {Object.keys(calc).length > 0 ? (
        <ContainerUl>
          <Title tag="h2" titleSize="title2">
            Você Receberá:
          </Title>
          {Object.keys(calc).map((item, index) => {
            return (
              <li key={index}>
                <Title tag="h2" titleSize="title2">
                  {title[index]}
                </Title>
                <Title tag="h2" titleSize="title2">
                  {calc[item]}
                </Title>
              </li>
            );
          })}
        </ContainerUl>
      ) : null}
    </>
  );
};
