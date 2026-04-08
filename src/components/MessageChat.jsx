import React from "react";
import FeedbackMessage from "./FeedbackMessages";

function MessageChat(){
const FeedbackMessages = [
    {
      subject: "Hi,i'm Android:please enter your feedback!",
      replay: "android",
      id: "id1"
    },
    {
      subject: "Yeah! Good",
      replay: "user",
      id: "id2" 
    },
    {
     subject: "Why good rather than Excellent ?",
     replay: "android",
     id: "id3"  
    },
    {
     subject: "Because need to enhance your AI features..!",
     replay: "user",
     id: "id4"   
    }
];

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

