// Using state
import React, {useState} from 'react'
// type rfc for template



export default function TextForm(props) 
{
  // console.log(text);
  const handleUpClick = ()=>
  {
    // console.log("Upper Case clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    // console.log(text);
    props.showAlert("Converted to UpperCase", "success");
  }
  const handleDoClick = ()=>
  {
    // console.log("Upper Case clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
    // console.log(text);
    props.showAlert("Converted to LowerCase", "success");
  }
  const handleClearClick = ()=>
  {
    // console.log("Upper Case clicked: " + text);
    let newText = "";
    setText(newText);
    // console.log(text);
    props.showAlert("Text Cleard", "success");
  }
  const handleCopy = ()=>
  {
    console.log("I am copy");
    var text = document.getElementById("myBox");
    
    text.select();
    text.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied to Clipboard", "success");
  }

  const handleExtraSpaces = ()=>
  {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  }



  const handleOnChange = (event)=>
  {
    // console.log("On Chnage");
    
    setText(event.target.value);
  }
  
  const [text, setText] = useState("");

  return (
    <>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
       <h2>{props.heading}</h2>
        <div className="mb-3">
            {/* <label for="myBox" class="form-label">Enter your text here</label> */}
            <textarea className="form-control" placeholder='Enter the text you want to alter' style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        {/* button.btn.btn-primary */}
	  <button className="btn btn-primary m-3" onClick={handleUpClick}>Convert to UpperCase</button>
	  <button className="btn btn-primary m-3" onClick={handleDoClick}>Convert to LowerCase</button>
	  <button className="btn btn-primary m-3" onClick={handleClearClick}>Clear Text</button>
	  <button className="btn btn-primary m-3" onClick={handleCopy}>Copy Text</button>
	  <button className="btn btn-primary m-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to Read</p>
      {/* <p>{0.008 * text.length} Minutes to Read</p> */}
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview it"}</p>
    </div>
    </>
  )
}
