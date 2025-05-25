import { createSlice } from "@reduxjs/toolkit";


const getCurrentTime = () => {
    const time = new Date();
    return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
  };


const initialState = {

    initialCounter: 1,

    data: [
            {   author: "Julio",
                comentario: "I like this app",
                id: 1,
                hour: getCurrentTime()
            }
    ]
}

const comments = createSlice({
    name: "comments",
    initialState,

    reducers: {
        addComment : (state, action) => {
            const houring = getCurrentTime()
            let item = action.payload;

            const existe = state.data.find((elem) => elem.id === item.id)

            if (!existe) {
                state.initialCounter++;
                state.data.push({
                  author: item.nombre, 
                  comentario: item.comment,
                  id: state.initialCounter,
                  hour: houring
                });
              }
        },

        deleteComment : (state, action) => {
            let item = action.payload.id
            state.data = state.data.filter((elem) => elem.id !== item)
        },

        updateComment : (state, action) => {
            const houring = getCurrentTime()
            let index = state.data.findIndex((item) => item.id === action.payload.id)

            if (index !== -1 ) {
                state.data[index] = {
                    ...state.data[index],
                    author: action.payload.nombre,
                    comentario: action.payload.comment,
                    id: state.initialCounter,
                    hour: `updated: ${houring}`
                }
            }
        }
    }

})

export const {addComment, deleteComment, updateComment} = comments.actions
export default comments.reducer