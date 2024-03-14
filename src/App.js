import { useEffect } from "react";
import { useDispatch } from "react-redux";
import  Header   from "./components/Header";
import  Email  from "./components/Email";
import { addUser } from "./redux/userSlice";
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users/1")
   .then((response) => response.json())
  //  "dentro de dispatch estarán las acciones y el addUser necesita un payload"
   .then((data) => dispatch(addUser(data)))
   .catch((error) => console.log(error));

  //  "se deja el array vacio  para que se ejecute la primera vez el componente'like a base o column'"
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <Email />

    </div>
  );
}

export default App;
