import { Entrance } from './pages/Entrance';
import { Room } from './pages/Room';

export const routes = [
  {
    path: '/',
    exact: true,
    component: Entrance,
  },
  {
    path: '/room/:roomName',
    component: Room,
  },
];
