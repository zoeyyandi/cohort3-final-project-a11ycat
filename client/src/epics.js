import { combineEpics, createEpicMiddleware } from 'redux-observable';
import {
  successToastEpic,
  hideToastEpic,
  emptyInputToastEpic
} from './features/toast/toast.epic';

const rootEpic = combineEpics(
  successToastEpic,
  hideToastEpic,
  emptyInputToastEpic
);

export const epicMiddleware = createEpicMiddleware(rootEpic);
