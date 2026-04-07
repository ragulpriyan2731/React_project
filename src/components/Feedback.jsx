import React from "react";
import FeedbackMessage from "./FeedbackMessage";

function Feedback(){
    return(
        <div>
            
        <input type="text" placeholder="write your feedback!" /> 
        <button>Send</button>
        <FeedbackMessage subject = "Hi,i'm Android:please enter your feedback!" 
            replay = "android"/>
        <FeedbackMessage subject = "Yeah! Good" 
            replay = "user" />
        <FeedbackMessage subject = "Why good rather than Excellent ?" 
            replay = "android"/>
        <FeedbackMessage subject = "Because need to enhance your AI features..!" 
            replay = "user"/>

        </div>
    )
}
export default Feedback;


