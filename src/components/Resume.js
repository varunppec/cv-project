/* eslint-disable no-useless-constructor */
import React from "react";
import uniqid from "uniqid";

const Resume = (props) => {
  const { fullname, email, phone, jobs, educations, description, address } =
    props.details;
  let jobdiv, educationdiv;
  if (jobs.length === 0) {
    jobdiv = <div />;
  } else {
    jobdiv = (
      <div>
        {jobs.map((job) => {
          return (
            <div key={uniqid()} className="job">
              <h4>
                {job.fromjob} - {job.tojob}
              </h4>
              <div>
                <h4>{job.position},</h4>
                <div>{job.jobname},</div>
                <div>{job.tasks}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  if (educations.length === 0) {
    educationdiv = <div />;
  } else {
    educationdiv = (
      <div>
        {educations.map((education) => {
          return (
            <div key={uniqid()} class="edu">
              <h4>
                {education.fromstudy} - {education.tostudy}
              </h4>
              <div>
                <h4>{education.instname},</h4>
                <div>Degree: {education.titlestudy}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div className="Resume">
      <div className="resumeheader">
        <h1>{fullname}</h1>
      </div>

      <div className="resumeinfo">
        <div className="nongeneral">
          <h3>Description</h3>
          <div>{description}</div>
          <h3>Education</h3>
          {educationdiv}
          <h3>Experience</h3>
          {jobdiv}
        </div>
        <div className="general">
          <h3>Personal Details</h3>
          <div>
            <b>Name</b>
            <div>{fullname}</div>
          </div>
          <div>
            <b>Email</b>
            <div>{email}</div>
          </div>
          <div>
            <b>Phone Number</b>
            <div>{phone}</div>
          </div>
          <div>
            <b>Address</b>
            <div>{address}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
