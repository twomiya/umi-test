import axios from 'axios';
export default {
    namespace:'user',
    state:{
        number:1,
        name:null,
    
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
        },
        'success' (state,action){
            return{
                ...state,
                name:action.name
            }
        }
    },
    effects:{
        *name({ payload }, { call, put }) {  // eslint-disable-line
           
            const user = yield call(axios.get, "/api/user");
            yield put({ type: "success", name: user.data.name });
            
          },
    }
}