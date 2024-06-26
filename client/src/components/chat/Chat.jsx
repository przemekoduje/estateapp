import './chat.scss'
import { useState } from "react"
export default function Chat() {
  
    const [chat, setChat] = useState(null)
    return (
    <div className='chat'>
        <div className="messages">
            <h1>Messages</h1>
            <div className="message" onClick={() => setChat(true)}>
                <img src="https://images.pexels.com/photos/4029925/pexels-photo-4029925.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <span>John Doe</span>
                <p>
                    Lorem ipsum dolor sit amet...
                </p>
            </div>
            <div className="message">
                <img src="https://images.pexels.com/photos/4029925/pexels-photo-4029925.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <span>John Doe</span>
                <p>
                    Lorem ipsum dolor sit amet...
                </p>
            </div>
            <div className="message">
                <img src="https://images.pexels.com/photos/4029925/pexels-photo-4029925.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <span>John Doe</span>
                <p>
                    Lorem ipsum dolor sit amet...
                </p>
            </div>
            <div className="message">
                <img src="https://images.pexels.com/photos/4029925/pexels-photo-4029925.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <span>John Doe</span>
                <p>
                    Lorem ipsum dolor sit amet...
                </p>
            </div>
            <div className="message">
                <img src="https://images.pexels.com/photos/4029925/pexels-photo-4029925.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <span>John Doe</span>
                <p>
                    Lorem ipsum dolor sit amet...
                </p>
            </div>
            <div className="message">
                <img src="https://images.pexels.com/photos/4029925/pexels-photo-4029925.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <span>John Doe</span>
                <p>
                    Lorem ipsum dolor sit amet...
                </p>
            </div>
        </div>
        {chat && <div className="chatBox">
            <div className="top">
                <div className="user">
                    <img src="https://images.pexels.com/photos/4029925/pexels-photo-4029925.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    John Doe
                </div>
                <div className="close" onClick={() => setChat(null)}>x</div>
            </div>
            <div className="center">
                <div className="chatMessage own">
                    <p>Lorem ipsum dolor sit amet ...</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage">
                    <p>Lorem ipsum dolor sit amet ...</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Lorem ipsum dolor sit amet ...</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage">
                    <p>Lorem ipsum dolor sit amet ...</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Lorem ipsum dolor sit amet ...</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage">
                    <p>Lorem ipsum dolor sit amet ...</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Lorem ipsum dolor sit amet ...</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage">
                    <p>Lorem ipsum dolor sit amet ...</p>
                    <span>1 hour ago</span>
                </div>
                
            </div>
            <div className="bottom">
                <textarea name="" id=""></textarea>
                <button>Send</button>
            </div>

        </div>}
    </div>
  )
}
