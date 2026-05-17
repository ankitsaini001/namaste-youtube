import { useDispatch, useSelector } from "react-redux";
import ChatMessages from "./ChatMessages";
import { addMessageEvent, generateNames, makeid } from "../utils/chatSlice";
import { useEffect, useState } from "react";

const LiveChat = () => {
    const [message, setMessage] = useState("");
    const data = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);
    //console.log(chatMessages);
    
    useEffect(() =>{
      let timeout = setInterval(() => {
        //console.log("This is a new chat message");
        data(addMessageEvent({
            name: generateNames(),
            message: makeid(20) +  "🚀"
        }));
      },2000);
      return () => clearInterval(timeout);
    },[]);

    const sendMessage = () => {
        //console.log("Sending message: ", message);
        data(addMessageEvent({
            name: "You",
            message: message
        }));
        setMessage("");
    }
    
    return (
        <>
        <div className="flex flex-col h-full">
            <div className="bg-gray-100 px-4 py-2 font-bold text-lg border-b border-gray-300">Live Chat</div>
            <div className="flex flex-col gap-2 p-3 overflow-y-scroll flex-1 flex-col-reverse">
               {
               chatMessages.map((message, index) => {
                return <ChatMessages key={index} name={message.name} message={message.message} />
               } )
               }
            </div>
            <div className="p-3 border-t border-gray-300">
                <input type="text" className="w-96 p-2 border border-gray-400 rounded" 
                    value={message}
                    placeholder="Type your message..."
                    onChange={(e)=>setMessage(e.target.value)}
                />
                <button className="w-[126px] ml-2 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => sendMessage()}
                >Send</button>
            </div>
        </div>
        </>
    );
}

export default LiveChat;