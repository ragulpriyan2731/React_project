import React from "react";
import MessageChat from "./Messagechat";
import FeedbackMessage from "./FeedbackMessages";
import { useState } from "react";

function Feedback({FeedbackMessages,setMessage}){
    const [textInput, settextInput] = useState('')


    function saveInputData(event){
        event.target.value
    }
    function inputButton(){
        setMessage([
          ...FeedbackMessages,
        {
            subject: "okay good to see you",
            replay: "android",
            id: "id5"
        }
    ])
    }


    return(
        <div>
            
        <input type="text" placeholder="write your feedback!" size={30} onChange={saveInputData} /> 
        <button onClick={inputButton}>Send</button>
        
        <MessageChat feedbackmessage = {FeedbackMessages}/>     

        </div>
    )
}
 export default Feedback; 


