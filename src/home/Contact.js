import React, { useEffect, useState } from 'react';
import UserCont from '../Context';

function Contact(props) {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const changeColor = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1));
  };
  useEffect(() => {
    const intervalId = setInterval(changeColor, 4000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);

  }, [changeColor]);
  return (
    // <UserCont.Consumer>
      // {(col) => (
        <div style={{ marginTop: '10.75rem' }}>
          <div
            style={{
              width: '100px', height: '100px', margin: 'auto', backgroundColor: props.color2[currentColorIndex % props.color2.length],
            }}>
          </div>
          <button style={{ marginLeft: '44.75rem' }} onClick={changeColor}>Change Color</button>
        </div>
      // )}
    // </UserCont.Consumer>
  );
}

export default Contact;

