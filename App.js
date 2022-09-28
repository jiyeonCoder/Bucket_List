//import logo from "./logo.svg";
//import "./App.css";
//import "./style.css";
import styled from "styled-components";
import React from "react";
import BucketList from "./BucketList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["Apple", "Kiwis", "Water Melon"],
    };

    this.text = React.createRef();

    console.log(this.text);
  }

  componentDidMount() {
    console.log(this.text);
  }

  addBucket = () => {
    console.log(this.text.current.value);
    const newItem = this.text.current.value;
    this.setState({ list: [...this.state.list, newItem] });
  };

  render() {
    //console.log(this.state.list);
    //console.log(this.text.current);
    return (
      <MyForm>
        <Container>
          <Title>Things To Buy</Title>
          <Line />
          <BucketList list={this.state.list} />
        </Container>

        <InputWrap>
          <input
            type="text"
            ref={this.text}
            onChange={() => {
              console.log(this.text.current.value);
            }}
          />
          <button onClick={this.addBucket}>Add</button>
        </InputWrap>
      </MyForm>
    );
  }
}

// const MyStyled = styled.div`
//   width: 50vw;
//   height: 150px;
//   background-color: ${(props) => (props.bg_color ? "red" : "purple")};
//   p {
//     color: blue;
//   }
//   &:hover {
//     background-color: yellow;
//   }
// `;

const MyForm = styled.div`
  background-color: #eee;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const InputWrap = styled.div`
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;
const Container = styled.div`
  background-color: #fff;
  width: 50vw;
  max-width: 350px;
  margin: auto;
  height: 80vh;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
`;

export default App;
