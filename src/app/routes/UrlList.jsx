import Home from "../../pages/Home";
import Coins from "../../pages/Coins";
import TodoList from "../../pages/ToDoList";
import UseEffect from "../../pages/UseEffect";
import MovieDetail from "../../pages/MovieDetail";
import MovieList from "../../pages/MovieList";
import FoodList from "../../pages/FoodList";
import State from "../../pages/State";

function UrlList() {
  return [
    { url: "/", page: <Home />, name: "Home" },
    { url: "/useEffect", page: <UseEffect />, name: "useEffect" },
    { url: "/todoList", page: <TodoList />, name: "TodoList" },
    { url: "/coins", page: <Coins />, name: "Coins" },
    { url: "/movieList", page: <MovieList />, name: "MovieList" },
    { url: "/detail/:id", page: <MovieDetail />, name: "MovieDetail" },
    { url: "/foodList", page: <FoodList />, name: "FoodList" },
    { url: "/state", page: <State />, name: "State" },
  ];
}
export default UrlList;
