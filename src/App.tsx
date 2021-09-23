/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { CardRow, Container, Footer, Header } from "./styles/element";
import Wilder from "./components/Wilder";
import { IWilder } from "./global";
import AddWilder from "./components/AddWilder";

const App = (): JSX.Element => {
  const [wilders, setWilders] = useState<IWilder[]>([]);

  useEffect(() => {
    const fetchWilders = async () => {
      try {
        const result = await axios("http://localhost:27017/wilderdb/wilders");
        setWilders(result.data.result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWilders();
  }, []);

  return (
    <div>
      <Header>
        <Container>
          <h1>Wilders Book</h1>
        </Container>
      </Header>
      <Container>
        <AddWilder />
      </Container>
      <Container>
        <h2>Wilders</h2>
        <CardRow>
          {wilders.map((wilder) => (
            <Wilder key={wilder._id} {...wilder} />
          ))}
        </CardRow>
      </Container>
      <Footer>
        <Container>
          <p>&copy; 2020 Wild Code School</p>
        </Container>
      </Footer>
    </div>
  );
}

export default App;