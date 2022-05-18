import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Row, Container } from "reactstrap";
import CardList from "./Components/CardList";
import SearchBox from "./Components/SearchBox";

import { useState, useEffect } from "react";
function App() {
  const [robots, setRobot] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setRobot(data));
  }, []);

  const onSearchChange = (e) => setSearch(e.target.value);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <Container>
        <h1 className="text-center">RoboFriends App</h1>
        <Row>
          <SearchBox onSearchChange={onSearchChange} />

          <CardList robots={filteredRobots} />
        </Row>
      </Container>
    </>
  );
}

export default App;
