import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TrelloList from "./components/TrelloList";
import TrelloActionButton from "./components/TrelloActionButton";

class App extends Component {
  constructor() {
    super();
    this.state = {
      formOpen: false,
      text: "",
      newListTitle: "",
      newListTaskNew: "",
      newCardTitle: "",
      dataLists: [],
      dataCards: [],
      // datasample
      lists: [
        {
          key: 1,          
          listsText: 'Todo'
        },
        {
          key: 2,          
          listsText: 'Doing'
        }
      ],
      cards: [
        {
          key: 1,
          cardText: 'final project',
          listKey: 1
        },
        {
          key: 2,
          cardText: 'Trello Clone',
          listKey: 2
        }
      ]
    };
  }

  render() {
    const { lists, cards } = this.state
    return (
      <div>
        <h2>Clone Trello use React</h2>
        <div style={styles.listsContainer}>
          {lists.map(lists => (
            <TrelloList key={lists.id} lists={lists} cards={cards} />
          ))}
          <TrelloActionButton list />
        </div>
      </div>
    );
  }
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row"
  }
};


export default App;
