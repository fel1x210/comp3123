import logo from './logo.svg';
import './App.css';
import React, {Fragment} from 'react';
import College from './Components/College/college';
import Student from './Components/student/student';
import StudentObj from './Components/student/studentObj';
import Employee from './Components/employee/employee';

function App() {
  let name = "Nguyen Minh Triet Luu"
  const myStyle = {color:'red', fontSize: 50} 
  const studObj = { 
    fnm: "Nguyen Minh Triet", 
    lnm: "Luu", 
    city: 'Toronto',
    idNum: 101542519
  }

  return (
    <Fragment>
      <h1 style={ {color:'blue', fontSize: 30} }>Hello, ReactJS</h1>
      {/* <img src= {logo} alt='picture'/> */}
      <h2 style={myStyle}>{name}</h2>
      <Employee />
      <College />
      <Student fnm="Nguyen Minh Triet" lnm="Luu" />
      <StudentObj stud={ { fnm: "Nguyen Minh Triet", lnm: "Luu", city: 'Toronto', idNum: 101542520}}/>
      <StudentObj stud={ studObj }/>
    </Fragment>
  );
}

export default App;
