import { useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";

function App() {
  const [item, setItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const socket = io.connect("http://localhost:5000");
    console.log(socket);
    socket.off("newTaskAdded").on("newTaskAdded", () => {
      console.log("first");
      handelFetch();
    });

    const handelFetch = async () => {
      await axios
        .get("http://localhost:5000/todo")
        .then((res) => {
          setTodoList(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    handelFetch();
  }, []);

  const handelSubmit = (e) => {
    e.preventDefault();
    if (item === "") return;

    const handelFetch = async () => {
      await axios
        .post("http://localhost:5000/todo", {
          item,
        })
        .then((res) => {
          // console.log(res);
          // res.json();
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    };
    handelFetch();
  };

  return (
    <div
      style={{
        maxWidth: "80%",
        margin: "0 auto",
        marginTop: "30px",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={handelSubmit}
      >
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          style={{ width: "99%" }}
          onChange={(e) => setItem(e.target.value)}
        ></textarea>

        <button type="submit" style={{ width: "200px", marginTop: "10px" }}>
          submit
        </button>
      </form>

      <h3>Todo list</h3>
      <ul>
        {todoList.map((i) => (
          <li>{i.items}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
