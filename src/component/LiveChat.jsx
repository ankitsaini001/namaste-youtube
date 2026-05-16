import { useDispatch, useSelector } from "react-redux";
import ChatMessages from "./ChatMessages";
import { addMessageEvent, generateNames, makeid } from "../utils/chatSlice";
import { useEffect } from "react";

const LiveChat = () => {

    const data = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);
    console.log(chatMessages);
    
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
        </div>
        </>
    );
}

export default LiveChat;