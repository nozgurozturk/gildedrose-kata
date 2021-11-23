import styled from "styled-components";
import TransferController from "./components/Controller/TransferController";

import GuildInventory from "./containers/Guild";
import HeroInventory from "./containers/Hero";
import { TransferProvider } from "./context/TransferContext";

const Container = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (

      <TransferProvider>
        {({ listOne, listTwo }) => (
          <Container>
            <GuildInventory items={listOne} />

            <TransferController />

            <HeroInventory items={listTwo} />
          </Container>
        )}
      </TransferProvider>

  );
}

export default App;
