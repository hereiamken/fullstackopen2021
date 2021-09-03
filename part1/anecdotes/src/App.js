import { useState } from "react";
import "./App.css";
import Button from "./Button";
import Content from "./Content";

const App = () => {
  const anecdotes = [
    { quote: "If it hurts, do it more often", vote: 0 },
    {
      quote: "Adding manpower to a late software project makes it later!",
      vote: 0,
    },
    {
      quote:
        "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      vote: 0,
    },
    {
      quote:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      vote: 0,
    },
    { quote: "Premature optimization is the root of all evil.", vote: 0 },
    {
      quote:
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      vote: 0,
    },
    {
      quote:
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
      vote: 0,
    },
  ];

  const random = () => {
    return Math.floor(Math.random() * anecdotes.length);
  };

  const [selected, setSelected] = useState(random);
  const [vote, setVote] = useState(anecdotes);
  const [highest, setHighest] = useState(random);
  const [maxVote, setMaxVote] = useState(0);

  const handleRandom = () => {
    setSelected(random);
  };

  const handleVote = () => {
    const copy = [...vote];
    copy[selected].vote++;
    if (copy[selected].vote > maxVote) {
      setHighest(selected);
      setMaxVote(copy[selected].vote);
    }
    console.log(copy);
    setVote(copy);
  };

  return (
    <div>
      <Content content={"Anecdote of the day"} />
      <p>{vote[selected].quote}</p>
      <p>has {vote[selected].vote} votes </p>
      <Button handleClick={handleVote} text={"vote"} />
      <Button handleClick={handleRandom} text={"next anecdote"} />
      <Content content={"Anecdote with most votes"} />
      <p>{vote[highest].quote}</p>
      <p>has {vote[highest].vote} votes </p>
    </div>
  );
};

export default App;
