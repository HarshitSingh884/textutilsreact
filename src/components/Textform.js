import React , {useState} from 'react' //rfc


export default function Textform(props) {
  
    const [text, settext] = useState("");              //imrs
    const handleUpClick=()=>{
       // console.log("UpperCase was clicked "+text);
        let newText=text.toUpperCase();
        settext(newText)
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleLoClick=()=>{
        // console.log("LowerCase was clicked "+text);
         let newText=text.toLowerCase();
         settext(newText)
         props.showAlert("Converted to LowerCase", "success");
     }
    const handleOnChange=(event)=>{
       // console.log("On Change");
        settext(event.target.value)
    }

    const handleCopy=()=>{

        var text=document.getElementById("myBox") ;
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is Copied", "success");
 
    }
    
  
    return (
    <>
    <div className="container" style={{color: props.mode==="dark"?"white":"black"}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"#343a40":"white", color: props.mode==="dark"?"white":"black"}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    </div>
    
    <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
    </div>

    </>
  )
}
