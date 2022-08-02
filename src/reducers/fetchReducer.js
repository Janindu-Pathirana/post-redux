const fetchReducer = (state = [], action ) => {
    switch (action.type) {
      case 'FETCH':
        return action.payload;
      default:
        return state;
    }
  };
  

// const fetchReducer = (state = [],action = {})=>{

//     switch(action.type){
//         case "FETCH":
//             console.log(action.payload);
//             return action.payload;

//         default:
//             return state;

//     }


// }

export default fetchReducer;