import { createContext, useState } from "react";
import { api } from "../../service/Api";

export const ChallengeContext = createContext();

export const ChallengeProvider = ({ children }) => {
  const [calc, setCalc] = useState([]);

  const postChallenge = (data) => {
    api
      .post("", data)
      .then((res) => {
        setCalc(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ChallengeContext.Provider
      value={{
        calc,
        postChallenge,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
};
