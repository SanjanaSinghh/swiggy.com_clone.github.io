
import {ADDRESS} from "./ActionType"

export const isAddressSelected=(payload)=>{
    return{
        type:ADDRESS,
        payload
    }
}
