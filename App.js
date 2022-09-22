import logo from "./logo.svg";
//import "./App.css";
import "./style.css";

import React from "react";
import BucketList from "./BucketList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["Apple", "Kiwis", "Water Melon"],
    };
  }

  render() {
    //console.log(this.state.list);
    return (
      <div className="App">
        <div className="container">
          <h1>Things To Buy</h1>
          <hr className="line" />
          <BucketList list={this.state.list} />
        </div>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <BucketList />
//     </div>
//   );
// }

export default App;
