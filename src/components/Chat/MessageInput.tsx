import React, { useState } from 'react';
import './MessageInput.scss';

type ChatSendProps = {
  onSend(sendValue: string): void;
};

const useMessage = (initVal: string) => {
  const [value, setMessage] = useState(initVal);

  return {
    value,
    onChange: (ev: React.ChangeEvent<HTMLInputElement>) =>
      setMessage(ev.target.value),
    clear: () => setMessage(''),
  };
};

export const MessageInput = (props: ChatSendProps) => {
  const message = useMessage('');
  const onSend = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === 'Enter') {
      props.onSend(message.value);
      message.clear();
    }
  };

  return (
    <div className="chat-input-container">
      <div className="chat-text-input-container">
        <input
          className="chat-text-input"
          aria-label="chat-text-input"
          type="text"
          value={message.value}
          onChange={message.onChange}
          onKeyDown={onSend}
        />
      </div>
      <div className="chat-text-send-container">
        <button>送</button>
      </div>
    </div>
  );
};
