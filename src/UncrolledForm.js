import React from "react";

export const UncontrolledForm = () => {

    const nameInput = React.createRef();
    const ageInput = React.createRef();
    const hairColorInput = React.createRef();

    const handleSubmit = (e)=>{
        console.log(nameInput.current.value);
        console.log(ageInput.current.value);
        console.log(hairColorInput.current.value);

        e.preventDefault();
    }
  return (
    <form>
      <input name="name" type="text" ref={nameInput} placeholder="Name" />
      <input name="age" type="number" placeholder="Age" ref={ageInput}/>
      <input name="haircolor" type="text" placeholder="Hair Color" ref={hairColorInput}/>
      <input type="submit" value="Submit" onClick={handleSubmit}/>
    
    </form>
  );
};
