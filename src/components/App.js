import React from "react";
// import Header from "./Header";
import Bio from "./Bio";
import Profile from "./Profile";
import Postboard from "./Postboard";
import AddFriend from "./AddFriend";
import Header from "./Header";

const mainUserList1 = [
  {
    name: "Beavis",
    description: "Fire!!!!", 
    imgURL: "../img/beavis.jpg", 
    message: "I'm cornholio. 1 like = 1 TP, 1 share = 1 bunghole",
    id: 1
  },
  {
    name: "Daria",
    description: "Whatever...",
    imgURL: "",
    message: "...",
    id: 2
  },
  {
    name: "Butthead",
    description: "Woah! That was cool!",
    imgURL: "",
    message: "You dumass!",
    id: 3
  }
];

function App(){
  return ( 
    <React.Fragment>
      <Header />
      <Profile name={mainUserList1[0].name} imgURL={mainUserList1[0].imgURL}/>
      <Bio description={mainUserList1[2].description} />
      <AddFriend mainUserList={mainUserList1}/>
      <Postboard mainUserList={mainUserList1}/>
    </React.Fragment>
  );
}

export default App;