// import { useState } from 'react';
// import Feedback from './components/Feedback'
// import FeedbackMessage from './components/FeedbackMessages'
import Usedreference from "./components/Usedreference";
// import UseStatement from "./components/UseStatement";
import UseStatement from "./components/UseStatement";

function App() {
//   const [FeedbackMessages, setMessage] = useState([
//     {
//       subject: "Hi,i'm Android:please enter your feedback!",
//       replay: "android",
//       id: "id1"
//     },
//     {
//       subject: "Yeah! Good",
//       replay: "user",
//       id: "id2" 
//     },
//     {
//      subject: "Why good rather than Excellent ?",
//      replay: "android",
//      id: "id3"  
//     },
//     {
//      subject: "Because need to enhance your AI features..!",
//      replay: "user",
//      id: "id4"   
//     }
// ]);

  return (
    <>
      {/* <Feedback feedbackmessage = {FeedbackMessages} setmessage = {setMessage} /> */}

      {/* <Usedreference /> */}
    <UseStatement />
     </>
  )
}

export default App;
