import { jsonplaceholder } from "../apis/jsonplaceholder"

export const fetchPost = ()=> async (dispatch)=>{
    
            const responce = await jsonplaceholder.get("/posts");


            dispatch({ type : "FETCH", payload: responce.data });

}

