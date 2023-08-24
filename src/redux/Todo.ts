//Redux file where all our functionality will take place
//importing our redux slice
import { createSlice } from "@reduxjs/toolkit";

//just a starter item for our contact list so that it won't look empty and after re-rendering there would be some things to show.
const todoUser = [
  {
    id: 1,
    firstName: "Kunal",
    lastName: "Singh",
  },
  {
    id: 2,
    firstName: "Rahul",
    lastName: "Sharma",
  },
  {
    id: 3,
    firstName: "Ketan",
    lastName: "Jagat",
  },
];

//creating our contact slice
export const todoSlice = createSlice({
  name: "todos",
  //adding array to our initial state
  initialState: { value: todoUser },
  reducers: {
    //adding a new contact functionality with push method from javascript
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    //deleting user by using filter method
    deleteUser: (state, action) => {
      //it checks if the current id of the current user is matching the id that we are passing through payload, and if it matched then it get filtered(deleted)
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    //updating user functionality
    updateUser: (state, action) => {
      //it checks if the current id is matching the id that we are passing through patload and if it matches then we change the value that is in the input
      //It only changes the first name only by doing this I can showcase my skill as a front end developer
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.firstName = action.payload.firstName;
        }
      });
    },
  },
});

//exporting our reducers i.e. our functionalities
export const { addUser, deleteUser, updateUser } = todoSlice.actions;
//exporting this slice
export default todoSlice.reducer;
