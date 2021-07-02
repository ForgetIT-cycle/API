import React, { useEffect, useState } from 'react';
import './App.css';
import GetList from './components/GetList';


function App() {

const [studentList, setStudentList] = useState([]);
useEffect(()=>{
   async function fetchStudentList(){
     try{
      const requesUrl = 'https://60df5963abbdd9001722d398.mockapi.io/api/Student';
      const reponse = await fetch(requesUrl);
      const reponseJSON =await reponse.json();
      console.log(reponseJSON);
      setStudentList(reponseJSON);

     }catch{

     }
   }
   fetchStudentList();
},[]);

  return (
    <div className="App">
      <Getlist studentList={studentList} />
    </div>
  );
}

export default App;
