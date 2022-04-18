import { useState } from "react";
import "../App.css"



export const AddStudent = () => {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");


  const [userRegistration, setUserRegistration] = useState({
    Firstname: "",
    Lastname: "",
    Email: "",
    Age: "",
    Tenth: "",
    Twelth: "",

  });

  const handleInput = (event)=> {
      const name = event.target.name;
      const value = event.target.value;
      console.log(name, value);

      setUserRegistration({...userRegistration, [name]: value });

  };


  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(userRegistration)
  
  };




  return (
    <form className="addstudent">
      <div>
        Firstname:{" "}
        <input
          type="text"
          name="first_name"
          className="first_name"
          placeholder="enter first name"
          value={userRegistration.name}
          onChange={handleInput}
          
        />
      </div>
      <div>
        {" "}
        Last Name:
        <input
          type="text"
          name="last_name"
          className="last_name"
          placeholder="enter last name"
          value={userRegistration.name}
          onChange={handleInput}
          
        />
      </div>
      <div>
        {" "}
        Email:
        <input
          type="email"
          name="email"
          className="email"
          placeholder="enter email"
          value={userRegistration.name}
          onChange={handleInput}
         
        />
      </div>

      <div>
        Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Male
          <input
            name="gender"
            className="male"
            type="radio"
            value={"male"}
          />{" "}
          Female{" "}
          <input
            name="gender"
            className="female"
            type="radio"
            value={"female"}
          />
        </div>
      </div>
      <div>
        Age{" "}
        <input
          type="number"
          name="age"
          className="age"
          placeholder="enter age"
          value={userRegistration.name}
          onChange={handleInput}
          
        />
      </div>
      <div>
        Tenth Score:{" "}
        <input
          type="number"
          name="tenth_score"
          className="tenth_score"
          placeholder="enter 10th score"
          value={userRegistration.name}
          onChange={handleInput}
          
        />{" "}
      </div>
      <div>
        Twelth Score:{" "}
        <input
          type="number"
          name="twelth_score"
          className="twelth_score"
          placeholder="enter 12th score"
          value={userRegistration.name}
          onChange={handleInput}
         
        />{" "}
      </div>
      <div>
        <select
          value={""} // select dropdown needs both value and onChange attributes
          name="preferred_branch"
          className="preferred_branch"
        >
          <option value="law">law</option>
          <option value="commerce">commerce</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="arts">arts</option>
          <option value="acting">acting</option>
        </select>
      </div>

      <input className="submit" type="submit" value="Submit" onClick={handleSubmit}/>
      {
        // <div className="error"></div>
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
      }
    </form>
  );
};
