import React, { useState } from 'react';
import Modal from 'react-modal'



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
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className='modal-back'>
                <form>
                    <div>
                        <label htmlFor="Reply" className='reply-text'>Reply:{" "}</label>
                        <input onChange={(e) => setReplyText(e.target.value)} type= "text" id = 'Reply' className='reply-input'/>
                    </div>
                    <div>
                        <button type = 'button' onClick={() => {handlesubmit()}} className='reply-post'>Post</button>
                        
                    </div>
                </form>
            </Modal>
        </div>
 
    );
}
 
export default Comment;

