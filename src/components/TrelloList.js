import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";
import Icon from "@material-ui/core/Icon";

const TrelloList = ({ lists, cards }) => {
  console.log(cards);
  const cardsFiltered = cards.filter(
    card => card.listKey === lists.key
  );
  return (
    <div style={styles.container}>
      <div>
        <h4>{lists.listsText}</h4>
        <Icon style={{ marginLeft: 8, cursor: "pointer" }}>close</Icon>
      </div>
      {
        cardsFiltered.map(card => (
            <TrelloCard key={card.id} text={card.cardText} />
        ))
      }
      <TrelloActionButton />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#dfe3e6",
    borderRadius: 3,
    width: 300,
    padding: 8,
    height: "100%",
    marginRight: 8
  }
};

export default TrelloList;