import React, { useState } from 'react';


export default function TextForm(props) {
    const [text, settext] = useState("");
    const handleUpClick = ()=>{
        console.log("Upper Case clicked" + text);
        let newtext = text.toUpperCase();
        settext(newtext);
        // props.showAlert("Text Converted to uppercase","success")
    };

    const handleLowClick = ()=>{
      console.log("Upper Case clicked" + text);
      let newtext = text.toLowerCase();
      settext(newtext);
      // props.showAlert("Text Converted to lowercase","success")
    };
    const handleClear = ()=>{
    
      let newtext = "";
      settext(newtext);
      // props.showAlert("Text is cleared","success")
    };

    const handleCopy=()=>{
      var text = document.getElementById('my-box');
      text.select();
      navigator.clipboard.writeText(text.value);
      // props.showAlert("Text has been copied to clipboard","success")
    }

    const handleSpaces=()=>{
      let newtext = text.split(/[ ]+/);
      settext(newtext.join(" "));
      // props.showAlert("Text is evenly spaced now","success")
    }

    const handleOnChange = (e)=>{
      settext();
      console.log("handleOnChange");
      settext(e.target.value);
    };

  return (
    <>
    <div className='Container' style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} className="form-control" id="my-box" onChange={handleOnChange} value={text} rows={8} defaultValue={""} />
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>ClearText</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleSpaces}>Remove Extra Spaces</button>
      
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}} >
      <h2>Your Text summary</h2>
      <p>{text.length!==0?text.split(" ").length : 0}  words  and {text.length} characters</p>
      <p>{text.length!==0?0.008 * text.split(" ").length:0} minutes  to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Write something in the above text-box to preview it here"}</p>
    </div>
    </>
  )
}
