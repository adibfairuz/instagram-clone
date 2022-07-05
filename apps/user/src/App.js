import Page from "./components/Page";
import Grids from "./containers/Grids";
import Header from "./containers/Header";
import Profile from "./containers/Profile";

const App = () => (
    <>
        <Header />
        <Page>
            <Profile />
            <Grids />
        </Page>
    </>
  );

  export default App