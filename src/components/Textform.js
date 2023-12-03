import React,{useState} from 'react'

function Textform(props) {
    const[text,setText]=useState("")

    const toUpCase=()=>{
        const newText=text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase","success")
    }
    const toLoCase=()=>{
        const newText=text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to uppercase","success")
    }
    const toClearCase=()=>{
        const newText=" "
        setText(newText)
        props.showAlert("Text is clear","success")
    }
    const handleSpace=()=>{
        const newText=text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra spaces are removed.","success")
    }
    const handleCopy=()=>{
        var text=document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text copy to Clipboard","success")
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }

    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
        <textarea className='form-control' id="myBox" rows="8" value={text} style={{backgroundColor: props.mode==='dark'?'#131533':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange}></textarea>
        </div>
        <button disabled={text.length===0 }className='btn btn-primary mx-2' onClick={toUpCase}>ChangeToUpperCase</button>
        <button disabled={text.length===0 } className='btn btn-primary mx-2' onClick={toLoCase}>ChangeToLowerCase</button>
        <button disabled={text.length===0 } className='btn btn-primary mx-2' onClick={toClearCase}>Clear</button>
        {/* <button className='btn btn-primary mx-2' onClick={toDarkMode}>{mode}</button> */}
        <button disabled={text.length===0 } className='btn btn-primary mx-2' onClick={handleSpace}>Remove Extra spaces</button>
        <button disabled={text.length===0 } className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
        <h1>Your Text Summary...</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words & {text.length} character </p>
        <h2>Preview...</h2>
        <p>{ text.length>0 ? text : "Nothing to preview..."}</p>
    </div>
    </>
    )
}

export default Textform