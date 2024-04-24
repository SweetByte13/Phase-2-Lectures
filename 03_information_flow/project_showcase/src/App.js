import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import { useState } from 'react';
// import projects from "./projects"; not using anymore 

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [projects, setProjects] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  function handleClick() {
    fetch("http://localhost:4000/projects")
      .then((res) => res.json())
      .then(setProjects)
    //.then((proj)=> setProjects(proj))) another way to write this 
  }

  function darkModeChange() {
    setIsDarkMode(!isDarkMode)
  }

  const handleSearchChange= (e) => {
setSearchQuery(e.target.value)
  }

  return (
    <div className="App">
      <Header onChange={darkModeChange} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <ProjectForm />
      <button onClick={handleClick}>Load Project</button>
      <ProjectList projects={projects} search={searchQuery} onchange={handleSearchChange}/>
    </div>
  );
};

export default App;