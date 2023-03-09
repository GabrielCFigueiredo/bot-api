/* eslint-disable array-callback-return */
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [sport, setSport] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.sokkerpro.net/liveApi/web_d2y7n1sj5v6rqqyt")
      .then((res) => {
        setSport(res.data.data);
      })
      .catch(() => {
        console.log("errou");
      });
  }, [sport]);
  console.log(sport);

  return (
    <div>
      {sport.map((sport) => {
        if (
          sport?.stats[0]?.attacks?.avg_dangerous_attacks?.toFixed(2) > 0.7 ||
          sport?.stats[1]?.attacks?.avg_dangerous_attacks?.toFixed(2) > 0.7
        ) {
          if (
            sport?.time?.minute > 70 &&
            sport?.time?.minute < 88 &&
            (sport?.stats[0]?.attacks?.dangerous_attacks > 75 ||
              sport?.stats[1]?.attacks?.dangerous_attacks > 75)
          ) {
            return (
              <div>
                <div>
                  <p>
                    JOGO: {sport.localTeam.name} - {sport.visitorTeam.name}{" "}
                  </p>
                </div>
                <div>
                  <p>
                    PLACAR: {sport?.stats[0]?.goals} - {sport?.stats[1]?.goals}{" "}
                  </p>
                </div>
                <div>
                  <p>
                    ATAQUE: {sport?.stats[0]?.attacks?.dangerous_attacks} -{" "}
                    {sport?.stats[1]?.attacks?.dangerous_attacks}{" "}
                  </p>
                </div>
                <div>
                  <p>
                    APPM:{" "}
                    {sport?.stats[0]?.attacks?.avg_dangerous_attacks?.toFixed(
                      2
                    )}{" "}
                    -{" "}
                    {sport?.stats[1]?.attacks?.avg_dangerous_attacks?.toFixed(
                      2
                    )}{" "}
                  </p>
                </div>
                <div>
                  <p>MINUTOS: {sport?.time?.minute} </p>
                </div>
                <div>
                  <p>
                    ESCANTEIOS: {sport?.stats[0]?.corners} -{" "}
                    {sport?.stats[1]?.corners}{" "}
                  </p>
                </div>
                <div>
                  <p>
                    FAVORITO: {sport?.favorite}
                  </p>
                </div>
              </div>
            );
          }
        }
      })}
    </div>
  );
}

export default App;
