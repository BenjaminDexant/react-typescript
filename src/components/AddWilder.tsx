import React, { useState } from "react";
import axios from "axios";
import { Button, Error, Form, Input, Label } from "../styles/form-element";

function AddWilder(): JSX.Element {
 
  const [error, setError] = useState<string>("");

  const [formData, setFormData ] = useState<{name: string, city: string}>({
    name:"",
    city: ""
  })
  const submit = async (): Promise<void> => {
    try {
      const result = await axios.post("http://localhost:5000/api/wilders", formData);
      console.log(result);
      if (result.data.success) {
        setError("");
      }
    } catch (err) {
      console.log(err)
    }
}

   const handleSubmit =  (e: React.ChangeEvent<HTMLFormElement>)  => {
         e.preventDefault();
         submit()
     }
   
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       const {value, name} = e.target
       setFormData({
         ...formData,
         [name] : value
       })
     }
   
   return (
    <Form
      onSubmit={handleSubmit}
    >
      <Label htmlFor="name-input">Name :</Label>
      <Input
        id="name-input"
        type="text"
        name="name"
        placeholder="Type the name"
        value={formData.name}
        onChange={handleChange}
      />
      <Label htmlFor="city-input">City :</Label>
      <Input
        id="city-input"
        type="text"
        name="city"
        placeholder="Type the city"
        value={formData.city}
        onChange={handleChange}
      />
      {error !== "" && <Error>{error}</Error>}
      <Button>Add</Button>
    </Form>
  );
}

export default AddWilder;
