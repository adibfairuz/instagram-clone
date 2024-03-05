import React from "react";
import SearchBar from './components/SearchBar'
import Page from './components/Page'
import Header from './containers/Header'
import Messages from "./containers/Messages";

const App = () => {
  return (
    <>
      <Header />
      <Page>
        <SearchBar />
        <Messages />
      </Page>
    </>
  )
}


export default App;
