import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [isLoading, setIsLoading] = useState(true); // to store if we have received an answer from the server (false=we have received)
  const [data, setData] = useState(""); // to store the reply form the server (received via the useEffect) so that we can re-use it later

  useEffect(() => {
    const fetchData = async () => {
      const serverReponse = await axios.get(); // TBD how to link back and front?
      setData(serverResponse.data); // TBD once above line is set, do a console.log to understand better the format of the reponse
      setIsLoading(false); // because we have heard back from the server
    };
  });

  return (
    <div className="app">
      <div></div>
    </div>
  );
}

export default App;
