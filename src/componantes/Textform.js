import React,{useState} from 'react'


export default function Textform(props) {
    const [text, setText] = useState('Enter Text Here');
    
    const handleUppercaseclick = () =>{
        let upCase = text.toUpperCase();;
        setText (upCase);
    }
    const onChangehandler = (event)=>{
        setText(event.target.value);
    }

   
    //setText = "New Text"; // Worng way
    //setText ("New Text"); // Right Way
  return (
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} id="myBox" rows="8" onChange={onChangehandler}></textarea>
        <button className="btn btn-primary my-3" onClick={handleUppercaseclick}>Convert Uppercase</button>
      </div>
    </div>
  );
}
