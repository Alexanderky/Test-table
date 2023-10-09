import { List, ListId } from "../../type";


export type Action =
  | {
      type: 'work/init';
      payload: List[];
    }
  | { type: 'work/update'; payload: List }
  | {
    type: 'work/delete';
    payload: {id: ListId};
    }|
    {
      type: 'work/add',
      payload: List
    }
