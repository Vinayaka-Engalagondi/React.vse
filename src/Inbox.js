import UserCont from "./Context";
import News from "./new1"
import React from "react";


const Inbox = () => {
  const colors = ['red', 'green', 'blue', 'orange', 'purple'];

  return (
    // <UserCont.Provider value={colors}>
    <div>
      <News color1={colors}/>
    </div>
    // </UserCont.Provider>

  )
}

export default Inbox