import { useState } from 'react';
import ReactTags from 'react-tag-input';

function ResumeForm({ onSubmit }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [skills, setSkills] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [portfolio, setPortfolio] = useState('');


  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const [educationList, setEducationList] = useState([
    {
      degreeName: '',
      organization: '',
      endingYear: '',
      description: '',
    },
  ]);

  const [experienceList, setExperienceList] = useState([
    {
      position: '',
      organization: '',
      duration: '',
      workType: '',
      description: '',
    },
  ]);
  const [references, setReferences] = useState([
    {
      name: '',
      position: '',
      organization: '',
      email: '',
      phone: '',
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
      awardName: '',
      organization: '',
      year: '',
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
      image,
    };
    console.log('in ResumeForm:: op');
    console.log(formData);

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
        awardName: '',
        organization: '',
        year: '',
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
        position: '',
        organization: '',
        duration: '',
        workType: '',
        description: '',
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
        degreeName: '',
        organization: '',
        endingYear: '',
        description: '',
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
        name: '',
        position: '',
        organization: '',
        email: '',
        phone: '',
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
        <div className=' rounded-lg border-4 border-gray-300 p-2'>
            <label htmlFor="image">Upload Profile Image:</label>
            <br />
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
        <div className='flex flex-wrap rounded-lg border-4 border-gray-300'>
          <div className='m-2'>
            {/* <label htmlFor="firstName">First Name:</label> */}
            <input
              className="form-input rounded-full"
              type="text"
              id="firstName"
              value={firstName}
              placeholder='First Name'
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className='m-2'>
            {/* <label htmlFor="lastName">Last Name:</label> */}
            <input
              className="form-input rounded-full "
              type="text"
              id="lastName"
              value={lastName}
              placeholder='Last Name'
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div className='m-2'>
            {/* <label htmlFor="email">Email:</label> */}
            <input
              className="form-input rounded-full"
              type="email"
              id="email"
              value={email}
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className='m-2'>
            {/* <label htmlFor="phone">Phone:</label> */}
            <input
              className="form-input rounded-full"
              type="tel"
              id="phone"
              value={phone}
              placeholder='Phone'
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className='m-2'>
            {/* <label htmlFor="age">Age:</label> */}
            <input
              className="form-input rounded-full"
              type="number"
              id="age"
              value={age}
              placeholder='Age'
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
        </div>
        {/* Skills and Social Links */}
        <div className='flex'>
          {/* <label className="items-center" htmlFor="skills">Skills:</label> */}
          <textarea
            className="form-textarea rounded-md w-full"
            id="skills"
            value={skills}
            placeholder='Add your skills'
            onChange={(e) => setSkills(e.target.value)}
          />
        </div>

        {/* Education */}
        <div className={`border-4 p-2 rounded-lg border-gray-300`}>
          <h3>Education</h3>
          {educationList.map((education, index) => (
            <div key={index} className={`${index > 0 ? 'border-2 mb-1 rounded-lg border-gray-400 p-1' : ''}`}>
              <label htmlFor={`degreeName-${index}`}></label>
              <input
                className="form-input rounded-full m-1"
                type="text"
                id={`degreeName-${index}`}
                value={education.degreeName}
                placeholder='Degree Name'
                onChange={(e) =>
                  handleEducationChange(index, 'degreeName', e.target.value)
                }
                required
              />

              <label htmlFor={`organization-${index}`}></label>
              <input
                className="form-input rounded-full m-1"
                type="text"
                id={`organization-${index}`}
                value={education.organization}
                placeholder='Organization'
                onChange={(e) =>
                  handleEducationChange(index, 'organization', e.target.value)
                }
                required
              />

              <label htmlFor={`endingYear-${index}`}></label>
              <input
                className="form-input rounded-full m-1"
                type="text"
                id={`endingYear-${index}`}
                value={education.endingYear}
                placeholder='Ending Year'
                onChange={(e) =>
                  handleEducationChange(index, 'endingYear', e.target.value)
                }
                required
              />

              <label htmlFor={`description-${index}`}></label>
              <textarea
                className="form-textarea mt-2 w-full rounded-lg"
                id={`description-${index}`}
                value={education.description}
                placeholder='Description'
                onChange={(e) =>
                  handleEducationChange(index, 'description', e.target.value)
                }
              />

              {index > 0 && (
                <button
                  type="button"
                  onClick={() => removeEducation(index)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 m-1"
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
        <div className='border-4 p-2 rounded-lg border-gray-300'>
          <h3>Experience</h3>
          {experienceList.map((experience, index) => (
            <div key={index} className={`${index > 0 ? 'border-2 mb-1 rounded-lg border-gray-400 p-1' : ''}`}>
              <label htmlFor={`position-${index}`}></label>
              <input
                className="form-input rounded-full m-1"
                type="text"
                id={`position-${index}`}
                value={experience.position}
                placeholder='Position'
                onChange={(e) =>
                  handleExperienceChange(index, 'position', e.target.value)
                }
              />

              <label htmlFor={`organization-${index}`}></label>
              <input
                className="form-input rounded-full m-1"
                type="text"
                id={`organization-${index}`}
                value={experience.organization}
                placeholder='Organization'
                onChange={(e) =>
                  handleExperienceChange(index, 'organization', e.target.value)
                }
              />

              <label htmlFor={`duration-${index}`}></label>
              <input
                className="form-input rounded-full m-1"
                type="text"
                id={`duration-${index}`}
                value={experience.duration}
                placeholder='Duration'
                onChange={(e) =>
                  handleExperienceChange(index, 'duration', e.target.value)
                }
              />

              <label htmlFor={`workType-${index}`}></label>
              <input
                className="form-input rounded-full m-1"
                type="text"
                id={`workType-${index}`}
                value={experience.workType}
                placeholder='Work Type'
                onChange={(e) =>
                  handleExperienceChange(index, 'workType', e.target.value)
                }
              />

              <label htmlFor={`experienceDescription-${index}`}></label>
              <textarea
                className='rounded-lg w-full m-1'
                id={`experienceDescription-${index}`}
                value={experience.description}
                placeholder='Description'
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
        <div className='border-4 p-2 rounded-lg border-gray-300'>
          <h3>Certifications</h3>
          {certificationsList.map((certification, index) => (
            <div key={index} className={`${index > 0 ? 'border-2 mb-1 rounded-lg border-gray-400 p-1' : ''}`}>
              <label htmlFor={`certificationName-${index}`}></label>
              <input
                className="form-input rounded-full m-1"
                type="text"
                id={`certificationName-${index}`}
                value={certification.certificationName}
                placeholder='Certification Name'
                onChange={(e) =>
                  handleCertificationChange(
                    index,
                    'certificationName',
                    e.target.value
                  )
                }
              />

              <label htmlFor={`certificationOrganization-${index}`}></label>
              <input
                className="form-input rounded-full m-1"
                type="text"
                id={`certificationOrganization-${index}`}
                value={certification.organization}
                placeholder='Organization'
                onChange={(e) =>
                  handleCertificationChange(
                    index,
                    'organization',
                    e.target.value
                  )
                }
              />

              <label htmlFor={`certificationCompletionYear-${index}`}></label>
              <input
                className="form-input rounded-full m-1"
                type="text"
                id={`certificationCompletionYear-${index}`}
                placeholder='Completion Year'
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
        <div className='border-4 p-2 rounded-lg border-gray-300'>
          <h3>Awards</h3>
          {awardsList.map((award, index) => (
            <div key={index} className={`${index > 0 ? 'border-2 mb-1 rounded-lg border-gray-400 p-1' : ''}`}>
              <label htmlFor={`awardName-${index}`}></label>
              <input
                className="form-input rounded-full m-1"
                type="text"
                id={`awardName-${index}`}
                value={award.awardName}
                placeholder='Award Name'
                onChange={(e) =>
                  handleAwardChange(index, 'awardName', e.target.value)
                }
              />

              <label htmlFor={`awardOrganization-${index}`}></label>
              <input
                className="form-input rounded-full m-1"
                type="text"
                id={`awardOrganization-${index}`}
                value={award.organization}
                placeholder='Organization'
                onChange={(e) =>
                  handleAwardChange(index, 'organization', e.target.value)
                }
              />

              <label htmlFor={`awardYear-${index}`}></label>
              <input
                className="form-input rounded-full m-1"
                type="text"
                id={`awardYear-${index}`}
                value={award.year}
                placeholder='Year'
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
        <div className='border-4 p-2 rounded-lg border-gray-300'>
          <h3>References</h3>
          {references.map((reference, index) => (
            <div key={index} className={`${index > 0 ? 'border-2 mb-1 rounded-lg border-gray-400 p-1' : ''}`}>
              <label htmlFor={`referenceName-${index}`}></label>
              <input
                className="form-input rounded-full m-1"
                type="text"
                id={`referenceName-${index}`}
                placeholder='Name'
                value={reference.name}
                onChange={(e) =>
                  handleReferenceChange(index, 'name', e.target.value)
                }
              />

              <label htmlFor={`referencePosition-${index}`}></label>
              <input
                className="form-input rounded-full m-1"
                type="text"
                id={`referencePosition-${index}`}
                value={reference.position}
                placeholder='Position'
                onChange={(e) =>
                  handleReferenceChange(index, 'position', e.target.value)
                }
              />

              <label htmlFor={`referenceOrganization-${index}`}></label>
              <input
                className="form-input rounded-full m-1"
                type="text"
                id={`referenceOrganization-${index}`}
                value={reference.organization}
                placeholder='Organization'
                onChange={(e) =>
                  handleReferenceChange(index, 'organization', e.target.value)
                }
              />

              <label htmlFor={`referenceEmail-${index}`}></label>
              <input
                className="form-input rounded-full m-1"
                type="email"
                id={`referenceEmail-${index}`}
                value={reference.email}
                placeholder='Email'
                onChange={(e) =>
                  handleReferenceChange(index, 'email', e.target.value)
                }
              />

              <label htmlFor={`referencePhone-${index}`}></label>
              <input
                className="form-input rounded-full m-1"
                type="tel"
                id={`referencePhone-${index}`}
                value={reference.phone}
                placeholder='Phone'
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

        <div className='border-4 p-2 rounded-lg border-gray-300'>
          <h3>Social Links</h3>
          <div className='flex flex-wrap'>
            <div className='m-1'>
              <label htmlFor="linkedin"></label>
              <input
                className="form-input rounded-full"
                type="text"
                id="linkedin"
                value={linkedin}
                placeholder='Linkedin Profile'
                onChange={(e) => setLinkedin(e.target.value)}
              />
            </div>

            <div className='m-1'>
              <label htmlFor="github"></label>
              <input
                className="form-input rounded-full"
                type="text"
                id="github"
                value={github}
                placeholder='GitHub Profile'
                onChange={(e) => setGithub(e.target.value)}
              />
            </div>

            <div className='m-1'>
              <label htmlFor="portfolio"></label>
              <input
                className="form-input rounded-full"
                type="text"
                id="portfolio"
                value={portfolio}
                placeholder='Portfoilio'
                onChange={(e) => setPortfolio(e.target.value)}
              />
            </div>
          </div>
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
