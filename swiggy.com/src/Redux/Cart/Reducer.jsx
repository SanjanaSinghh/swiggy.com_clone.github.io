import { ADDRESS} from "./ActionType"

const initialState={
    isAddress:false
}

export const reducer=(state=initialState,{type,payload})=>{
  switch(type){

        case ADDRESS:
          return{
              ...state,
              isAddress:payload
          }
        
       default :
       return state

    }
  }