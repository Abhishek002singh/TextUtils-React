import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("converted to uppercase!", "success");
    }
    const handleLoClick = () => {
        let newtext = text.toLocaleLowerCase();
        setText(newtext);
        props.showAlert("Converted to lowercase!", "success")
    }

    const handleClear = () => {
        let newtext = '';
        setText(newtext);
        props.showAlert("Text area cleared!","success");
    }
    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra-spaces removed!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert To Uppercase</button>
                <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert To Lowercase</button>
                <button className='btn btn-primary mx-1' onClick={handleClear}>Clear Text</button>
                <button className='btn btn-primary mx-1' onClick={handleCopy}>CopyText</button>
                <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your Text Summary</h2>
                <p><i>{text.split(" ").length} words and {text.length} character</i></p>
                <p><i>Take {0.008 * text.split(" ").length} Minutes to read</i></p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
