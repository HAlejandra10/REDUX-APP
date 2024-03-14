import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name: "",
    username: "",
    email: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState, 
    reducers: {
        //esto será un reducer y no una accion: addUser
        addUser: (state ,action)  => { //recibe el estado y la acción y e addUser es donde vamos a modificar el estado
            const {name, username, email} = action.payload; //no confundir con el estaeInitial, esos atributos llegan desde el payload para dispatch dentro de un compoenente de react
            state.name =name;
            state.username = username;
            state.email = email;
        }, 
        changeEmail: (state, action) => {
            //cambiar el email del estado por el que nos llega por payload
            state.email=action.payload;
        }
    }
});

export const {addUser, changeEmail} = userSlice.actions;

export default userSlice.reducer;