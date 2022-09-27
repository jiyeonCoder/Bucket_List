import logo from "./logo.svg";
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

const MyForm = styled.div`
  .App {
    background-color: #eee;
    height: 100vh;
    width: 100vw;
    display: flex;
  }

  .container {
    background-color: #fff;
    width: 50vw;
    max-width: 350px;
    margin: auto;
    height: 80vh;
    padding: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  .container > h1 {
    color: slateblue;
    text-align: center;
  }

  .container > .line {
    margin: 16px 0px;
  }

  .list-item {
    padding: 16px;
    margin: 8px;
    background-color: aliceblue;
  }
`;


export default App;
