import React from 'react';
import user from '../assets/user-solid-full.svg';
import android from '../assets/android-brands-solid-full.svg';

function FeedbackMessages({subject,replay}) {
  return (
    <div>
    {replay === "android" && 
    (<img src={android} alt='androidicon' width={35} />)}
    {subject}
    {replay === "user" &&
    (<img src={user} alt="usericon" width={35} />)}

   </div>
  )
}

export default FeedbackMessages;