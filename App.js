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

const MyStyled = styled.div`
  width: 50vw;
  height: 150px;
  background-color: ${(props) => (props.bg_color ? "red" : "purple")};
  p {
    color: blue;
  }
  &:hover {
    background-color: yellow;
  }
`;

export default App;
