import React, { useEffect, useState } from "react";
import { ChatBox, ChatScreen, Search } from "../../components/ChatComponents";
import { CurrUserDtlProvider } from "../../context/chatContext";
import { getChatBoxes, getChat, markAsSeen } from "../../utils/supabase/supaOperations";
import './ChatInterface.css'
import { useUserContext } from '../../context/userContext'
import { Outlet, useNavigate } from "react-router-dom";

function ChatInterface() {

  const [chatDisplay, setChatDisplay] = useState(0);
  const [chats, setChats] = useState([]);
  const [chatInfo, setChatInfo] = useState([]);
  const [chatBoxes, setChatBoxes] = useState([]);
  const [currUser, setUserName] = useState("");
  const [val, setVal] = useState("");
  const [isChat, setIsChat] = useState(false);
  const { user, setUser } = useUserContext();
  // const navigate = useNavigate()
  
  let data = ''

  useEffect(() => {
    const updateUi = async () => {
    if(user){
    const res = await getChatBoxes(user.email);
    setChatBoxes(res);
    }
    else{
      // const data = await getUserDetails()
      // if(!data) navigate('/login');
      setUser(data)
      const res = await getChatBoxes(data.email);
      setChatBoxes(res);
    }
    }
    updateUi();
  }, [])

  const handleClickChatBox = async (chatBoxDtl) => {
    let res = await getChat(chatBoxDtl.chatBoxId);
    setChatInfo(chatBoxDtl);
    setChats(res);
    markAsSeen(chatBoxDtl);
    setIsChat(true);
    setChatDisplay((prev) => (prev) ? 0 : 1)
  };

  const chatBoxess = [{
    chat_box_id: 1,
  }]

  return (
    <CurrUserDtlProvider
      value={{ currUser, setUserName, chatDisplay, setChatDisplay }}
    >
      <div className="chatInterface flex">
        <div className="chatBoxContainer ">
          <Search />
          {chatBoxess.map((chatBox) => (
            <ChatBox
              key={chatBox.chat_box_id}
              chatBox={chatBox}
              handleClick={handleClickChatBox}
            />
          ))}
        </div>
        <div className="chatContainer ">
          <ChatScreen chats={chats}  chatInfo={chatInfo} isChat={isChat}/>
        </div>
      </div>
    </CurrUserDtlProvider>
  );
}

export default ChatInterface;