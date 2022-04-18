import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import { useState } from "react";
import "./App.css"


function App() {
  const [listPage, setListPage] = useState(true);
  return (
    <div className="App">
      {listPage?
      <button className="togglebtn" onClick={()=>setListPage(!listPage)}>Add a new student</button>
      :
      <button className="togglebtn" onClick={()=>setListPage(!listPage)}>Show students list</button>
      }

      {listPage? <ShowStudents /> :  <AddStudent />}
     
      
     
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;
