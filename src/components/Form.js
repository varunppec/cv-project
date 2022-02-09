/* eslint-disable no-useless-constructor */
import React, { useState } from "react";
import uniqid from "uniqid";
import "../styles/form.css";

const Form = (props) => {
  const [educations, setEducations] = useState([uniqid()]);
  const [education, setEducation] = useState(uniqid());
  const [jobs, setJobs] = useState([uniqid()]);
  const [job, setJob] = useState(uniqid());

  const onSubmitForm = (e) => {
    e.preventDefault();
    let jobs = [];
    let educations = [];
    const fullname = document.querySelector(".fullname").value;
    const email = document.querySelector(".email").value;
    const phone = document.querySelector(".phone").value;
    const address = document.querySelector(".address").value;
    const description = document.querySelector("#description").value;

    const jobname = Array.from(document.querySelectorAll(".company")).map(
      (x) => x.value
    );
    const position = Array.from(document.querySelectorAll(".position")).map(
      (x) => x.value
    );
    const tasks = Array.from(document.querySelectorAll(".tasks")).map(
      (x) => x.value
    );
    const fromjob = Array.from(document.querySelectorAll(".fromjob")).map(
      (x) => x.value
    );
    const tojob = Array.from(document.querySelectorAll(".tojob")).map(
      (x) => x.value
    );

    const instname = Array.from(document.querySelectorAll(".instname")).map(
      (x) => x.value
    );
    const titlestudy = Array.from(document.querySelectorAll(".titlestudy")).map(
      (x) => x.value
    );
    const fromstudy = Array.from(document.querySelectorAll(".fromstudy")).map(
      (x) => x.value
    );
    const tostudy = Array.from(document.querySelectorAll(".tostudy")).map(
      (x) => x.value
    );
    for (let i = 0; i < jobname.length; i++) {
      const obj = {
        jobname: jobname[i] ? jobname[i] : "",
        position: position[i] ? position[i] : "",
        tasks: tasks[i] ? tasks[i] : "",
        fromjob: fromjob[i] ? fromjob[i] : "",
        tojob: tojob[i] ? tojob[i] : "",
      };
      jobs.push(obj);
    }
    for (let i = 0; i < instname.length; i++) {
      const obj = {
        instname: instname[i] ? instname[i] : "",
        titlestudy: titlestudy[i] ? titlestudy[i] : "",
        fromstudy: fromstudy[i] ? fromstudy[i] : "",
        tostudy: tostudy[i] ? tostudy[i] : "",
      };
      educations.push(obj);
    }
    props.onSub(fullname, email, phone, address, description, jobs, educations);
  };

  const educationSubmit = () => {
    setEducations(educations.concat(education));
    setEducation(uniqid());
  };

  const jobSubmit = (value) => {
    setJobs(jobs.concat(job));
    setJob(uniqid());
  };

  const onJobDelete = (value) => {
    const arr = jobs;
    arr.splice(arr.indexOf(value), 1);
    setJobs(arr);
  };
  const onEduDelete = (value) => {
    const arr = educations;
    arr.splice(arr.indexOf(value), 1);
    setEducations(arr);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <h2>General Info</h2>
      <GeneralInfo />
      <h2>Education Information</h2>
      {educations.map((education) => {
        return (
          <EducationalInfo
            key={education}
            id={education}
            onEduDelete={onEduDelete}
          />
        );
      })}
      <div className="add">
        <div>
          <button className="addbutt" onClick={educationSubmit}>
            Add
          </button>
        </div>
      </div>
      <h2>Practical Experience</h2>
      {jobs.map((job) => {
        return <PracticalInfo key={job} id={job} onJobDelete={onJobDelete} />;
      })}
      <div className="add">
        <div>
          <button className="addbutt" onClick={jobSubmit}>
            Add
          </button>
        </div>
      </div>
      <div className="submit">
        <button id="submit" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
const GeneralInfo = (props) => {
  return (
    <div className="GeneralInfo">
      <div>
        <input
          type="text"
          required
          className="fullname"
          placeholder="Full Name"
        ></input>
      </div>
      <div>
        <input
          type="email"
          required
          className="email"
          placeholder="Email"
        ></input>
      </div>
      <div>
        <input
          type="text"
          required
          className="phone"
          minLength="10"
          maxLength="10"
          placeholder="Phone Number"
        ></input>
      </div>
      <div>
        <input type="text" className="address" placeholder="Addess"></input>
      </div>
      <div>
        <textarea id="description" placeholder="Description"></textarea>
      </div>
    </div>
  );
};

const EducationalInfo = (props) => {
  return (
    <div id={props.id} className="EducationalInfo">
      <div>
        <input
          type="text"
          className="instname"
          placeholder="Institution Name"
        ></input>
      </div>
      <div>
        <input
          type="text"
          className="titlestudy"
          placeholder="Title of Study"
        ></input>
      </div>
      <div>
        <input type="text" className="fromstudy" placeholder="From"></input>
      </div>
      <div>
        <input type="text" className="tostudy" placeholder="To"></input>
      </div>
      <div>
        <button
          className="delbutt"
          onClick={(e) => {
            props.onEduDelete(e.target.parentNode.parentNode.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const PracticalInfo = (props) => {
  return (
    <div id={props.id} className="JobExperience">
      <div>
        <input
          type="text"
          className="company"
          placeholder="Company Name"
        ></input>
      </div>
      <div>
        <input
          type="text"
          className="position"
          placeholder="Position Title"
        ></input>
      </div>
      <div>
        <input type="text" className="tasks" placeholder="Tasks"></input>
      </div>
      <div>
        <input type="text" className="fromjob" placeholder="From"></input>
      </div>
      <div>
        <input type="text" className="tojob" placeholder="To"></input>
      </div>
      <div>
        <button
          className="delbutt"
          onClick={(e) => {
            props.onJobDelete(e.target.parentNode.parentNode.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Form;
