const ADD_TASK = "task/add"

const intialState = {
    task : []
}

const taskReducer = ( state = intialState , action )=>{
    switch (action.type) {

        case ADD_TASK:
            return {
                
            }
            
            break;
    
        default:
            break;
    }

} 