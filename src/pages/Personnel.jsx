import React, { useEffect } from "react";
import PersonnelList from "../components/PersonnelList";
import "../styles/pages/Personnel.css";
import loaderGif from "../imgs/Loader.gif";
export default function Personnel({ seed, setSeed }) {
  const [people, setPeople] = React.useState([]);
  const getPeople = () => {
    var url = "https://randomuser.me/api/?results=12";
    if (seed !== "") {
      url += `&seed=${seed}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // setSeed(data.info.seed);
        if (!seed) {
          setSeed(data.info.seed);
        }
        setPeople(data.results);
      })
      .catch((error) => {
        console.error("Failed to fetch people:", error);
        setPeople([]);
      });
  };
  useEffect(() => {
    document.title = "E-Learner - Personnel";
    if (seed) {
      localStorage.setItem("personnelSeed", seed);
    }
    getPeople();
  }, [seed]);
  return (
    <div className="pageContainer">
      <h1>Personnel</h1>
      {!people.length ? (
        <div className="loaderContainer">
          <img src={loaderGif} alt="Loading..." className="loaderGif" />
        </div>
      ) : (
        <div className="personnelList">
          {people.length !== 0
            ? people.map((person) => (
                <PersonnelList
                  key={person.login.uuid}
                  person={person}
                  seed={seed}
                  setSeed={setSeed}
                />
              ))
            : null}
        </div>
      )}
    </div>
  );
}
