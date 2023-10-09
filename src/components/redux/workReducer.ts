import { State } from '../../type'; 
import { Action } from './action';

const initialState: State = { lists: [] };
const listReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'work/init':
      return {
        ...state,
        lists: action.payload,
      };
    case 'work/update':
      return {
        ...state,
        lists: state.lists.map((el) =>
          el.id === action.payload.id ? (el = action.payload) : el
        ),
      };
      case 'work/delete':
        return {
        ...state,
        lists: state.lists.filter((el) => el.id !== Number(action.payload.id)),
        };
    case 'work/add':
      return {
        ...state,
        lists: [...state.lists , action.payload],
      };

    default:
      return state;
  }
};
export default listReducer;
