import React, { Component } from "react";
import "css/App";
import EmailsContainer from "./components/EmailsContainer";
import Sidebar from "./components/Sidebar";

class App extends Component {
  render() {
    return (
      <div class='grid grid-rows-6 h-screen'>
        <div class='row-span-1'></div>
        <div class='grid row-span-5 h-full grid-flow-col grid-cols-12'>
          <div class='col-span-3 border-t'>
            <Sidebar />
          </div>
          <div class='col-span-9 w-full border-t border-l'>
            <EmailsContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
