import React from 'react';
import { ChatMessage } from 'src/types/ChatMessage';
import './MessageItem.scss';

export const MessageItem = (props: ChatMessage) => {
  return (
    <div className="chat-message-left" aria-label="chat-message">
      {props.username}: {props.text}
      <br />
      {props.timestamp}
    </div>
  );
};
