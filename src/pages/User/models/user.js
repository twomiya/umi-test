import axios from 'axios';
export default {
    namespace:'user',
    state:{
        number:1,
    
    },
    reducers:{
        add(state,{payload}){
            return{
                ...state,
                number:state.number+1
            }
        },
        min(state,{payload}){
            return{
                ...state,
                number:state.number-1
            }
        }
    },
    effects:{
        *name({ payload }, { call, put }) {  // eslint-disable-line
           
            const user = yield call(axios.get, "/api/user");
            console.log(user)
            
          },
    }
}