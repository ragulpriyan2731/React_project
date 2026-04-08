import React from "react";
import MessageChat from "./Messagechat";
import FeedbackMessage from "./FeedbackMessages";

function Feedback(){
    return(
        <div>
            
        <input type="text" placeholder="write your feedback!" /> 
        <button>Send</button>
        
        <MessageChat />     

        </div>
    )
}
 export default Feedback; 


