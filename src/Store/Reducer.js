import { SET_LANGUAGE } from "./action-types"

const initialState = {
    currentLanguage: "tr"
}

export const Reducer =(state = initialState , action)=>{

switch(action.type){

case SET_LANGUAGE:
    return{
        ...state,
        currentLanguage: state.currentLanguage === "tr" ? "eng" : "tr"
    }


default:
return state


}




}


