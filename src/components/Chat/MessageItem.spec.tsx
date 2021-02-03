import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { MessageItem } from 'src/components/Chat/MessageItem';
import { ChatMessage } from 'src/types/ChatMessage';

describe('MessageItem', () => {
  const props: ChatMessage = {
    userId: 'aaaaa',
    username: 'onamae',
    text: 'messe-ji',
    timestamp: '2020-12-03 10:12:34',
  };

  const setup = () => {
    const elm = render(<MessageItem {...props} />);
    return elm.getByLabelText('chat-message');
  };

  it('表示', () => {
    const elm = setup();
    console.log(elm);
    expect(elm.innerText).toBe(
      `${props.username}: ${props.text}\n${props.timestamp}`
    );
  });
});
