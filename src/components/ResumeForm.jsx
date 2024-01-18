import React, { useState } from 'react';

function ResumeForm({ onSubmit }) {
  const [firstName, setFirstName] = useState('demo');
  const [lastName, setLastName] = useState('demo');
  const [email, setEmail] = useState('ab@ab.c');
  const [phone, setPhone] = useState('9234');
  const [age, setAge] = useState('23');
  const [skills, setSkills] = useState('demo');
  const [linkedin, setLinkedin] = useState('demo');
  const [github, setGithub] = useState('demo');

  const [educationList, setEducationList] = useState([
    {
      degreeName: 'demo',
      organization: 'demo',
      endingYear: 'demo',
      description: 'demo',
    },
  ]);
  const [experienceList, setExperienceList] = useState([
    {
      position: 'demo',
      organization: 'demo',
      duration: 'demo',
      workType: 'demo',
      description: 'demo',
    },
  ]);
  const [references, setReferences] = useState([
    {
      name: 'demo',
      position: 'demo',
      organization: 'demo',
      email: 'demo@a.c',
      phone: 'demo',
    },
  ]);
  const [certificationsList, setCertificationsList] = useState([
    {
      certificationName: '',
      organization: '',
      completionYear: '',
      description: '',
    },
  ]);
  const [awardsList, setAwardsList] = useState([
    {
      awardName: 'demo',
      organization: 'demo',
      year: 'demo',
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      phone,
      age,
      educationList,
      experienceList,
      skills,
      references,
      certificationsList,
      awardsList,
      linkedin,
      github,
    };
    console.log('in ResumeForm:: op');
    console.log(formData);

    // Call the onSubmit prop with the form data
    onSubmit(formData);
    // resetForm();
  };

  const handleCertificationChange = (index, key, value) => {
    setCertificationsList((prevCertificationsList) => {
      const updatedCertificationsList = [...prevCertificationsList];
      updatedCertificationsList[index][key] = value;
      return updatedCertificationsList;
    });
  };

  const addCertification = () => {
    setCertificationsList((prevCertificationsList) => [
      ...prevCertificationsList,
      {
        certificationName: '',
        organization: '',
        completionYear: '',
        description: '',
      },
    ]);
  };

  const removeCertification = (index) => {
    setCertificationsList((prevCertificationsList) => {
      const updatedCertificationsList = [...prevCertificationsList];
      updatedCertificationsList.splice(index, 1);
      return updatedCertificationsList;
    });
  };

  const handleAwardChange = (index, key, value) => {
    setAwardsList((prevAwardsList) => {
      const updatedAwardsList = [...prevAwardsList];
      updatedAwardsList[index][key] = value;
      return updatedAwardsList;
    });
  };

  const addAward = () => {
    setAwardsList((prevAwardsList) => [
      ...prevAwardsList,
      {
        awardName: 'demo',
        organization: 'demo',
        year: 'demo',
      },
    ]);
  };
  const removeAward = (index) => {
    setAwardsList((prevAwardsList) => {
      const updatedAwardsList = [...prevAwardsList];
      updatedAwardsList.splice(index, 1);
      return updatedAwardsList;
    });
  };

  const handleExperienceChange = (index, key, value) => {
    setExperienceList((prevExperienceList) => {
      const updatedExperienceList = [...prevExperienceList];
      updatedExperienceList[index][key] = value;
      return updatedExperienceList;
    });
  };

  const addExperience = () => {
    setExperienceList((prevExperienceList) => [
      ...prevExperienceList,
      {
        position: 'demo',
        organization: 'demo',
        duration: 'demo',
        workType: 'demo',
        description: 'demo',
      },
    ]);
  };

  const removeExperience = (index) => {
    setExperienceList((prevExperienceList) => {
      const updatedExperienceList = [...prevExperienceList];
      updatedExperienceList.splice(index, 1);
      return updatedExperienceList;
    });
  };

  const handleEducationChange = (index, key, value) => {
    setEducationList((prevEducationList) => {
      const updatedEducationList = [...prevEducationList];
      updatedEducationList[index][key] = value;
      return updatedEducationList;
    });
  };

  const addEducation = () => {
    setEducationList((prevEducationList) => [
      ...prevEducationList,
      {
        degreeName: 'demo',
        organization: 'demo',
        endingYear: 'demo',
        description: 'demo',
      },
    ]);
  };

  const removeEducation = (index) => {
    setEducationList((prevEducationList) => {
      const updatedEducationList = [...prevEducationList];
      updatedEducationList.splice(index, 1);
      return updatedEducationList;
    });
  };

  const handleReferenceChange = (index, key, value) => {
    setReferences((prevReferences) => {
      const updatedReferences = [...prevReferences];
      updatedReferences[index][key] = value;
      return updatedReferences;
    });
  };

  const addReference = () => {
    setReferences((prevReferences) => [
      ...prevReferences,
      {
        name: 'demo',
        position: 'demo',
        organization: 'demo',
        email: 'demo',
        phone: 'demo',
      },
    ]);
  };

  const removeReference = (index) => {
    setReferences((prevReferences) => {
      const updatedReferences = [...prevReferences];
      updatedReferences.splice(index, 1);
      return updatedReferences;
    });
  };

  return (
    <div className="bg-gray-200 width font-medium w-1/2 m-2 p-2 rounded-md border-2">
      <h2 className="text-lg font-bold">Resume Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4 p-2">
        {/* Personal Information */}
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            className="form-input"
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            className="form-input"
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            className="form-input"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            className="form-input"
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="age">Age:</label>
          <input
            className="form-input"
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        {/* Skills and Social Links */}
        <div>
          <label htmlFor="skills">Skills:</label>
          <textarea
            className="form-textarea"
            id="skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
        </div>

        {/* Education */}
        <div>
          <h3>Education</h3>
          {educationList.map((education, index) => (
            <div key={index}>
              <label htmlFor={`degreeName-${index}`}>Degree Name:</label>
              <input
                className="form-input"
                type="text"
                id={`degreeName-${index}`}
                value={education.degreeName}
                onChange={(e) =>
                  handleEducationChange(index, 'degreeName', e.target.value)
                }
                required
              />

              <label htmlFor={`organization-${index}`}>Organization:</label>
              <input
                className="form-input"
                type="text"
                id={`organization-${index}`}
                value={education.organization}
                onChange={(e) =>
                  handleEducationChange(index, 'organization', e.target.value)
                }
                required
              />

              <label htmlFor={`endingYear-${index}`}>Ending Year:</label>
              <input
                className="form-input"
                type="text"
                id={`endingYear-${index}`}
                value={education.endingYear}
                onChange={(e) =>
                  handleEducationChange(index, 'endingYear', e.target.value)
                }
                required
              />

              <label htmlFor={`description-${index}`}>Description:</label>
              <textarea
                className="form-textarea"
                id={`description-${index}`}
                value={education.description}
                onChange={(e) =>
                  handleEducationChange(index, 'description', e.target.value)
                }
              />

              {index > 0 && (
                <button
                  type="button"
                  onClick={() => removeEducation(index)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Remove Education
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addEducation}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add Education
          </button>
        </div>

        {/* Experience */}
        <div>
          <h3>Experience</h3>
          {experienceList.map((experience, index) => (
            <div key={index}>
              <label htmlFor={`position-${index}`}>Position:</label>
              <input
                className="form-input"
                type="text"
                id={`position-${index}`}
                value={experience.position}
                onChange={(e) =>
                  handleExperienceChange(index, 'position', e.target.value)
                }
              />

              <label htmlFor={`organization-${index}`}>Organization:</label>
              <input
                className="form-input"
                type="text"
                id={`organization-${index}`}
                value={experience.organization}
                onChange={(e) =>
                  handleExperienceChange(index, 'organization', e.target.value)
                }
              />

              <label htmlFor={`duration-${index}`}>Duration:</label>
              <input
                className="form-input"
                type="text"
                id={`duration-${index}`}
                value={experience.duration}
                onChange={(e) =>
                  handleExperienceChange(index, 'duration', e.target.value)
                }
              />

              <label htmlFor={`workType-${index}`}>Work Type:</label>
              <input
                className="form-input"
                type="text"
                id={`workType-${index}`}
                value={experience.workType}
                onChange={(e) =>
                  handleExperienceChange(index, 'workType', e.target.value)
                }
              />

              <label htmlFor={`experienceDescription-${index}`}>
                Description:
              </label>
              <textarea
                id={`experienceDescription-${index}`}
                value={experience.description}
                onChange={(e) =>
                  handleExperienceChange(index, 'description', e.target.value)
                }
              />

              {index > 0 && (
                <button
                  type="button"
                  onClick={() => removeExperience(index)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Remove Experience
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addExperience}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add Experience
          </button>
        </div>

        {/* Certifications */}
        <div>
          <h3>Certifications</h3>
          {certificationsList.map((certification, index) => (
            <div key={index}>
              <label htmlFor={`certificationName-${index}`}>
                Certification Name:
              </label>
              <input
                className="form-input"
                type="text"
                id={`certificationName-${index}`}
                value={certification.certificationName}
                onChange={(e) =>
                  handleCertificationChange(
                    index,
                    'certificationName',
                    e.target.value
                  )
                }
              />

              <label htmlFor={`certificationOrganization-${index}`}>
                Organization:
              </label>
              <input
                className="form-input"
                type="text"
                id={`certificationOrganization-${index}`}
                value={certification.organization}
                onChange={(e) =>
                  handleCertificationChange(
                    index,
                    'organization',
                    e.target.value
                  )
                }
              />

              <label htmlFor={`certificationCompletionYear-${index}`}>
                Completion Year:
              </label>
              <input
                className="form-input"
                type="text"
                id={`certificationCompletionYear-${index}`}
                value={certification.completionYear}
                onChange={(e) =>
                  handleCertificationChange(
                    index,
                    'completionYear',
                    e.target.value
                  )
                }
              />

              {index > 0 && (
                <button
                  type="button"
                  onClick={() => removeCertification(index)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Remove Certification
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addCertification}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add Certification
          </button>
        </div>

        {/* Awards */}
        <div>
          <h3>Awards</h3>
          {awardsList.map((award, index) => (
            <div key={index}>
              <label htmlFor={`awardName-${index}`}>Award Name:</label>
              <input
                className="form-input"
                type="text"
                id={`awardName-${index}`}
                value={award.awardName}
                onChange={(e) =>
                  handleAwardChange(index, 'awardName', e.target.value)
                }
              />

              <label htmlFor={`awardOrganization-${index}`}>
                Organization:
              </label>
              <input
                className="form-input"
                type="text"
                id={`awardOrganization-${index}`}
                value={award.organization}
                onChange={(e) =>
                  handleAwardChange(index, 'organization', e.target.value)
                }
              />

              <label htmlFor={`awardYear-${index}`}>Year:</label>
              <input
                className="form-input"
                type="text"
                id={`awardYear-${index}`}
                value={award.year}
                onChange={(e) =>
                  handleAwardChange(index, 'year', e.target.value)
                }
              />

              {index > 0 && (
                <button
                  type="button"
                  onClick={() => removeAward(index)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Remove Award
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addAward}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add Award
          </button>
        </div>

        {/* References */}
        <div>
          <h3>References</h3>
          {references.map((reference, index) => (
            <div key={index}>
              <label htmlFor={`referenceName-${index}`}>Name:</label>
              <input
                className="form-input"
                type="text"
                id={`referenceName-${index}`}
                value={reference.name}
                onChange={(e) =>
                  handleReferenceChange(index, 'name', e.target.value)
                }
              />

              <label htmlFor={`referencePosition-${index}`}>Position:</label>
              <input
                className="form-input"
                type="text"
                id={`referencePosition-${index}`}
                value={reference.position}
                onChange={(e) =>
                  handleReferenceChange(index, 'position', e.target.value)
                }
              />

              <label htmlFor={`referenceOrganization-${index}`}>
                Organization:
              </label>
              <input
                className="form-input"
                type="text"
                id={`referenceOrganization-${index}`}
                value={reference.organization}
                onChange={(e) =>
                  handleReferenceChange(index, 'organization', e.target.value)
                }
              />

              <label htmlFor={`referenceEmail-${index}`}>Email:</label>
              <input
                className="form-input"
                type="email"
                id={`referenceEmail-${index}`}
                value={reference.email}
                onChange={(e) =>
                  handleReferenceChange(index, 'email', e.target.value)
                }
              />

              <label htmlFor={`referencePhone-${index}`}>Phone:</label>
              <input
                className="form-input"
                type="tel"
                id={`referencePhone-${index}`}
                value={reference.phone}
                onChange={(e) =>
                  handleReferenceChange(index, 'phone', e.target.value)
                }
              />

              {index > 0 && (
                <button
                  type="button"
                  onClick={() => removeReference(index)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Remove Reference
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addReference}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add Reference
          </button>
        </div>
        <div>
          <label htmlFor="linkedin">LinkedIn:</label>
          <input
            className="form-input"
            type="text"
            id="linkedin"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="github">GitHub:</label>
          <input
            className="form-input"
            type="text"
            id="github"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ResumeForm;
