import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div
      style={{
        maxWidth: "80%",
        margin: "0 auto",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          style={{ width: "99%" }}
        ></textarea>
        <button style={{ width: "200px", marginTop: "10px" }}>submit</button>
      </form>

      <h3>Todo list</h3>
    </div>
  );
}

export default App;
