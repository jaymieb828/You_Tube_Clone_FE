import React, { useState } from "react";

const ReplyForm = (props) => {

    const [reply, setReply] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault(); 
      props.postReply(reply);
      setReply('');
  }
  
    return (
      <div>
        <form className="comm-form" onSubmit={handleSubmit}>
          <div>
              <label className = 'reply-label' htmlFor="Reply">Reply:{" "}</label>
              <input type= "text" id = 'Comment' className="comm-input" value = {reply} onChange ={(event) => setReply(event.target.value)} />
          </div>
          <div className="comm-but-contain">
              <button type = 'submit' className="comm-button">Post</button>
          </div>
        </form>
      </div>
    );
  };
  
  export default ReplyForm;