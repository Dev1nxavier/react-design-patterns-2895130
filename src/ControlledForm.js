import React, { useEffect, useState } from "react";
import styled from "styled-components";

const P = styled.p `
    color: red;
`;

export const ControlledForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [hairColor, setHairColor] = useState("");
  
  const [error, setError] = useState('');

    useEffect(()=>{
        if (name.length<=2) {
            setError("Name must be >2 characters in length");
        }else{
            setError('');
        }
    },[name])
  
  return (
    <form>
        {error && <P>{error}</P>}
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        name="age"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />

      <input
        name="hairCollor"
        type="text"
        placeholder="Hair Color"
        value={hairColor}
        onChange={(e) => setHairColor(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};
