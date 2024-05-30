import React,{useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState('Enter Text Here');
    
    const handleUppercaseclick = () =>{
        let upCase = text.toUpperCase();
        setText (upCase);
    }
    const handleLowercaseclick = () =>{
      let upCase = text.toLowerCase();
      setText (upCase);
  }
    const onChangehandler = (event)=>{
        setText(event.target.value);
    }

   
    //setText = "New Text"; // Worng way
    //setText ("New Text"); // Right Way
  return (
    <> 
    <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
      <h2 className='my-4'>{props.heading}</h2>
      <ul className='d-flex px-0'>
        <li className='list-group-item'><b>Total Character:</b> {text.length}</li>
        <li className='list-group-item mx-3'><b>Total Words:</b> {text.split(" ").length}</li>
        <li className='list-group-item mx-3'><b>Time to Read:</b> {0.003 * text.split(" ").length}</li>
      </ul>
      <div className="mb-1">
        <textarea className="form-control" value={text} id="myBox" rows="8" onChange={onChangehandler}></textarea>
        <button className="btn btn-primary my-3" onClick={handleUppercaseclick}>Convert Uppercase</button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleLowercaseclick}>Convert Lowercase</button>
      </div>
    </div>
    </>
  );
}
