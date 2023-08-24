//importing useSelector and useDispatch hook from redux to read, update and delete the data
import { useSelector, useDispatch } from "react-redux";
//importing all of our reducers/funtionalities
import { addUser, deleteUser, updateUser } from "../redux/Todo";
//importing useState hook from react
import { useState } from "react";

const Contact = () => {
  //initializing dispatch
  const dispatch = useDispatch();
  //initializing useSelector
  const todoList = useSelector((state: any) => state.todos.value);

  //making required states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [newUsername, setNewUsername] = useState("");

  //function to adding an element
  const handleAddTodo = () => {
    dispatch(
      addUser({
        // id: todoList[todoList.length - 1].id + 1,
        //I could make the id by doing this but I am going lazy now. ha ha!
        id: Date.now(),
        firstName: firstName,
        lastName: lastName,
      })
    );
  };

  //our basic UI 
  return (
    <div className="m-20 ">
      <h1 className="text-center">Contact page</h1>
      <div className="flex flex-col">
        <span>First Name : </span>
        <input
          className="border-2  "
          type="text"
          placeholder="first name"
          // changing first name 
          onChange={(e) => setFirstName(e.target.value)}
        />
        <span>Second Name : </span>
        <input
          className="border-2 "
          type="text"
          placeholder="last name"
          // changing last name 
          onChange={(e) => setLastName(e.target.value)}
        />
        <button
          className="text-black bg-gray-200 rounded-lg mt-4 cursor-pointer hover:bg-black hover:text-white"
          type="submit"
          //function from above
          onClick={handleAddTodo}
        >
          Create Contact
        </button>
      </div>
      <div className="">
        {/* conditional rendering to show different output  */}
        {todoList.length === 0 ? (
          <>
            <h1>No Contact Found</h1>
            <p>please add contact from create contact button</p>
          </>
        ) : null}
        <ul className="">
        {/* mapping through our list  */}
          {todoList.map((todo: any) => {
            return (
              <li
                key={todo.id}
                className="mt-6  w-50 h-32 flex flex-col items-center justify-evenly shadow-xl"
              >
                <h2>
                  {todo.firstName}
                  {todo.lastName}
                </h2>
                <div>
                  <input
                    className="ml-4 border-2"
                    type="text"
                    placeholder="change first name"
                    onChange={(e) => setNewUsername(e.target.value)}
                  />
                  <button
                    className="px-4 py-2 bg-gray-200 rounded-md"
                    // dispatching update user 
                    onClick={() =>
                      dispatch(
                        updateUser({ id: todo.id, firstName: newUsername })
                      )
                    }
                  >
                    edit
                  </button>
                  <button
                    className="ml-4 px-4 py-2 bg-gray-200 rounded-md"
                    //dispatching delete user
                    onClick={() => dispatch(deleteUser({ id: todo.id }))}
                  >
                    delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Contact;

//so this is it!