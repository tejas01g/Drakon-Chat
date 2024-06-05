import { useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat =() => {

    const[open,setopen] = useState(false);
    const[text,setText] = useState("");

    const handleEmoji = (e) =>{
        setText((prev) => prev + e.emoji);
        setopen(false)
    };

    console.log(text)
    return (
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt =""/>
                    <div className="text">
                        <span>Jane Doe</span>
                        <p>Lorem ipsum dolor.</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt =""/>
                    <img src="./video.png" alt =""/>
                    <img srlc="./info.png" alt =""/>
                </div>
            </div>
            <div className="center">
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel animi iusto porro, deleniti amet eveniet eos quo repudiandae repellat vero eum, ex aut aperiam laboriosam nostrum? Quis officia voluptas ex!</p>
                        <span>10:45 AM</span>
                    </div>
                </div>

                <div className="message own">
                    <div className="text">
                    {/* <img src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH" alt="" /> */}
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores veniam dolor aliquid commodi aperiam harum corrupti, dolorum dicta sequi voluptatum fugiat iure obcaecati nostrum rem beatae. Sunt incidunt consequatur blanditiis.</p>
                        <span>10:00 AM</span>
                    </div>
                </div>

                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel animi iusto porro, deleniti amet eveniet eos quo repudiandae repellat vero eum, ex aut aperiam laboriosam nostrum? Quis officia voluptas ex!</p>
                        <span>10:45 AM</span>
                    </div>
                </div>

                <div className="message own">
                <div className="text">
                <img src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae accusamus ab quia fugit, velit perferendis unde quasi aspernatur asperiores, architecto corrupti. Quo eaque cupiditate sed nostrum voluptates aliquid voluptate quasi.</p>
                        <span>10:00 AM</span>
                    </div>
                </div>

            </div>
            <div className="bottom">
                <div className="icons">
                   <img src="./img.png" alt=""/>
                   <img src="./camera.png" alt=""/>
                   <img src="./mic.png" alt=""/>
                </div>
                <input type="text" placeholder="Type a message..." onChange={e=>setText(e.target.value)}
                value={text}/>
                
                <div className="emoji">
                    <img src="./emoji.png"
                     alt=""
                     onClick={() =>setopen(prev=>!prev)}
                     />
                     <div className="picker">
                    <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                     </div>
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    )
}

export default Chat