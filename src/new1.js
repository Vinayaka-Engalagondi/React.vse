import React from 'react'
import Contact from './home/Contact';

function News(props) {
    
    console.log(props.color1)
    return (
        <div>
            <Contact color2={props.color1}/>
            
        </div>
    )
}

export default News



































// const [input, setInput] = useState('')
    // let enteredValue = function (val) {
    //     // console.log(val);
    //     setInput(val.target.value)
    // }





{/* <div style={{ marginLeft: '40rem', marginTop: '10rem' }}>

                <label className='text'>Enter value</label><br /><br />

                <input className='text' onChange={enteredValue} />

                <p className='text'>{input}</p>
            </div> */}