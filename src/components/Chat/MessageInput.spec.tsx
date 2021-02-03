import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { MessageInput } from 'src/components/Chat/MessageInput';

describe('MessageInput', () => {
  const props = {
    onSend: () => jest.fn(),
  };

  const setup = () => {
    const elm = render(<MessageInput onSend={props.onSend} />);
    return elm.getByLabelText('chat-text-input') as HTMLInputElement;
  };

  it('初期値確認', () => {
    const elm = setup();
    expect(elm.value).toBe('');
  });

  it('onChange', () => {
    const inputValue = 'aaa';
    const elm = setup();
    fireEvent.change(elm, {
      target: { value: inputValue },
    });
    expect(elm.value).toBe(inputValue);
  });
});
