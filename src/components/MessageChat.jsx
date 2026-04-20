// import { useState } from "react";
import FeedbackMessage from "./FeedbackMessages";

function MessageChat({FeedbackMessages}){
return (
    <>
    
        {FeedbackMessages.map((feedbackMessages) => {
            return (
                <FeedbackMessage
                    subject = {feedbackMessages.subject}
                    replay = {feedbackMessages.replay}
                    key = {feedbackMessages.id}
                />
            )
        })}
    </>
    )
}
   
export default MessageChat;

