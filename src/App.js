import { FormPage } from "./components/Form";
import { ListData } from "./components/List";
import GlobalStyle, { ContainerPages } from "./styles/globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <ContainerPages>
        <FormPage />
        <ListData />
      </ContainerPages>
    </>
  );
}

export default App;
