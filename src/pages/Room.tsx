import { useState } from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import { MessageInput } from 'src/components/Chat/MessageInput';
import { MessageItem } from 'src/components/Chat/MessageItem';
import { ChatMessage } from 'src/types/ChatMessage';
import styles from './Room.module.scss';

export const useMessages = (locationState: string) => {
  const [messages, setMessages] = useState<Array<ChatMessage>>([]);
  const addMessage = (value: string) => {
    const message: ChatMessage = {
      userId: 'aaa',
      username: locationState,
      text: value,
      timestamp: '2020-12-03 22:22:22',
      isOwn: true,
    };
    setMessages([...messages, message]);
  };

  const onSend = (value: string) => {
    addMessage(value);
  };

  return {
    value: messages,
    onSend,
  };
};
export const Room = () => {
  const location = useLocation<string>();
  const match = useRouteMatch<{ roomName: string }>();
  const messages = useMessages(location.state);

  return (
    <React.Fragment>
      <div className={styles.main_container}>
        <h2>{match.params.roomName}</h2>
        <div className={styles.chat_container}>
          {messages.value.map((message, index) => {
            return <MessageItem key={index} {...message}></MessageItem>;
          })}
        </div>
        <p>
          <MessageInput onSend={messages.onSend}></MessageInput>
        </p>
      </div>
      <p>
        <Link to="/">ENTRANCE</Link>
      </p>
    </React.Fragment>
  );
};
