import React, { useState } from 'react';




const Comment = (props) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [replyText, setReplyText] = useState('')

   

    function handlesubmit(){
       setModalIsOpen(false)
        let newReplyPost = {
        "comment_id": props.id,
        "text": replyText
        }
        props.postReply(newReplyPost);
    }

    let reply = props.text


    return (  
        <div>
            <div>
                <button type='button' className='comment-reply' onClick={() => setModalIsOpen(true)}>Reply</button>
            </div>
            
            <div className='reply-text'>Reply: {reply}</div>
        </div>
 
    );
}
 
export default Comment;

