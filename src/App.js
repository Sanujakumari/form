import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useHistory } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import { useState } from "react";


function App() {
  const data = [
    {
      name: "Isha",
      age: "23",
      email: "isha@gmail.com",
      employee_code: "124578",
    },
    {
      name: "Nitha",
      age: "30",
      email: "nitha@gmail.com",
      employee_code: "1245793",
    },
    {
      name: "Nila",
      age: "25",
      email: "nila@gmail.com",
      employee_code: "1245693",
    },
    {
      name: "Akshu",
      age: "26",
      email: "akshu@gmail.com",
      employee_code: "1245836",
    },
  ];
  const history = useHistory();
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button onClick={() => history.push("/home")} color="inherit">
              Home
            </Button>
            <Button onClick={() => history.push("/view")} color="inherit">
              View Data
            </Button>
            <Button onClick={() => history.push("/add")} color="inherit">
              Add Data
            </Button>
            <Button onClick={() => history.push("/edit")} color="inherit">
              Edit Data
            </Button>
            <Button onClick={() => history.push("/delete")} color="inherit">
              Delete Data
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Switch>
        {/* component= {HomePage} / */}
        <Route path="/home">
          <HomePage />
        </Route>

        <Route path="/add">
          <AddData />
        </Route>

        <Route path="/view">
          <Form data={data} name age email employee_code />
        </Route>
        <Route path="/edit">
          <EditData />
        </Route>

        <Route path="**">{NotFound}</Route>
      </Switch>
    </div>
  );
}
function HomePage() {
  return (
    <div className="user-data">
      <h1>Welcome to My Data Book</h1>
    </div>
  );
}
function Form({ data }) {
  return (
    <div className="user-list">
      {data.map((user) => (
        <ViewData
          name={user.name}
          age={user.age}
          email={user.email}
          employee_code={user.employee_code}
        />
      ))}
    </div>
  );
}
function ViewData({ name, age, email, employee_code }) {
  // data.forEach((element)=>{

  return (
    <card>
      <div className="formhouse">
        <CardContent>
          <div className="form-container">
            <h3 className="form-name">{name}</h3>
            <h3 className="form-name">{age}</h3>

            <h4 className="form-rate"> {email} </h4>
            <p className="form-weight"> {employee_code} </p>
          </div>
        </CardContent>
      </div>
    </card>
    // <div>
    //   <h1 className="name">{name}  {age}  {email}  {employee_code} </h1>
    // </div>
  );
  //})
}

function AddData() {
  const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [employee_code, setEmployee_code] = useState("");
    const history=useHistory();
  
    const setAddName = (event) => setName(event.target.value);
    const setAddAge = (event) => setAge(event.target.value);
    const setAddEmail = (event) => setEmail(event.target.value);
    const setAddEmployee_code = (event) => setEmployee_code(event.target.value);
  
    
         
  return (
    <div>
      <TextField
        name=" Name"
        id="outlined-basic"
        label="enter your name"
        variant="outlined"
      />
      <br />
      <TextField
        name="Age"
        id="outlined-basic"
        label="enter your age"
        variant="outlined"
      />
      <br />
      <TextField
        name="Email"
        id="outlined-basic"
        label="enter your email id"
        variant="outlined"
      />
      <br />
      <TextField
        name="Number"
        id="outlined-basic"
        label="enter your employee_code "
        variant="outlined"
      />
      <br />
      <Button variant="contained">Submit</Button>
    </div>
  );
}

function EditData() {
  return (
    <div>
      <TextField
        name=" Name"
        id="outlined-basic"
        label="enter your name"
        variant="outlined"
      />
      <br />
      <TextField
        name="Age"
        id="outlined-basic"
        label="enter your age"
        variant="outlined"
      />
      <br />
      <TextField
        name="Email"
        id="outlined-basic"
        label="enter your email id"
        variant="outlined"
      />
      <br />
      <TextField
        name="Number"
        id="outlined-basic"
        label="enter your employee_code "
        variant="outlined"
      />
      <br />
      <Button variant="contained">Save Data</Button>
    </div>
  );
}
function NotFound() {
  return (
    <div>
      <img
        src="https://cdn.dribbble.com/users/1676373/screenshots/4177728/404.gif"
        alt="404"
      />
    </div>
  );
}

export default App;
