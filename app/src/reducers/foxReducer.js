import { FETCH_FOXES, UPDATE_FOXES, SET_ERROR } from '../actions'

const initialState = {
    foxes: {},
    isFetchingData: false,
    error: "",    
};

export const foxReducer = ( state = initialState, action) => {
  switch (action.type ) {
      case FETCH_FOXES:
          return{
              ...state,
              isFetchingData:  true,
          };
       case UPDATE_FOXES:
           return{
               ...state,
               foxes: action.payload,
               isFetchingData: false,               
           };
        case SET_ERROR:
            return{
                ...state,
                isFetchingData: false,
                error: action.payload,
            };    
        default:
            return state;    

  }

};