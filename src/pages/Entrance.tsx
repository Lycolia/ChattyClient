import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const useUsername = (initVal: string) => {
  const [value, setUserame] = useState('');
  const changeUserame = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setUserame(ev.target.value);
  };

  return {
    value,
    onChange: (ev: React.ChangeEvent<HTMLInputElement>) => {
      changeUserame(ev);
    },
  };
};

const useRoomname = (initVal: string) => {
  const [value, setRoomname] = useState('');
  const changeRoomname = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setRoomname(ev.target.value);
  };

  return {
    value,
    onChange: (ev: React.ChangeEvent<HTMLInputElement>) => {
      changeRoomname(ev);
    },
  };
};

const createUserId = () => {
  // let userId = localStorage.getItem('userId');
  // if (!userId) {
  //   userId = uuid.v5(Date.now().toString(), 'chatty');
  // }
};

export const Entrance = () => {
  const history = useHistory();
  const username = useUsername('');
  const roomname = useRoomname('');

  const joinRoom = () => {
    history.push(`/room/${roomname.value}`, username);
  };

  return (
    <div>
      <h2>entrance</h2>
      <form>
        <ul>
          <li>
            部屋：
            <input type="text" name="roomname" {...roomname} />
          </li>
          <li>
            名前：
            <input type="text" name="username" {...username} />
          </li>
          <li>
            <input type="submit" value="入る" onClick={joinRoom} />
          </li>
        </ul>
      </form>
    </div>
  );
};
