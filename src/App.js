import React, { useState } from "react";
import Form from "./components/Form";
import Resume from "./components/Resume";

const App = (props) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState(1);
  const [jobs, setJobs] = useState([]);
  const [educations, setEducations] = useState([]);

  let state = {fullname, email, phone, address, description, id, jobs, educations};

  const onSubmit = (
    fullname,
    email,
    phone,
    address,
    description,
    jobs,
    educations
  ) => {
    const arr1 = [];
    for (let job of jobs) {
      arr1.push(job);
    }
    const arr2 = [];
    for (let education of educations) {
      arr2.push(education);
    }
    setFullname(fullname);
    setEmail(email);
    setPhone(phone);
    setAddress(address);
    setDescription(description);
    setId(1);
    setJobs(arr1);
    setEducations(arr2);
    state = {fullname, email, phone, address, description, id, jobs, educations};
  };
  if (fullname !== "") {
    return (
      <div className="App">
        <Form onSub={onSubmit} />
        <Resume details={state} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Form onSub={onSubmit} />
      </div>
    );
  }
};

export default App;
