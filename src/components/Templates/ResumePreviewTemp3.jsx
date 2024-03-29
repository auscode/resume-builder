function ResumePreviewTemp3({ formData }) {
    const {
      firstName,
      lastName,
      linkedin,
      github,
      email,
      phone,
      age,
      educationList,
      experienceList,
      skills,
      references,
      certificationsList,
      awardsList,
    } = formData;
    console.log('in ResumePrevie:: formdata op');
    console.log(formData);
  
    const isNonEmpty = (value) => {
      console.log("Value Data of isNonEmpty Function");
      console.log(value);
      if (typeof value === 'string') {
        return value.trim().length > 0;
      } else if (Array.isArray(value)) {
        if (value.length === 0) {
          return false;
        }
        if (typeof value[0] === 'string') {
          return value[0].trim().length > 0;
        }
        // Handle other types within the array
        return true;
      } else {
        return !!value; // Handle other types
      }
    };
  
    return (
      <div className=" pb-2">
        <section>
          {/* <h3>Personal Information</h3> */}
          <div className="justify-center flex text-4xl">
            {/* Name: {name} */}
            <div className="mr-1 font-thin">{firstName}</div>
            <div className="font-semibold"> {lastName}</div>
          </div>
          <div className="flex font-medium text-gray-600 justify-center">
            <div>{email}</div> | 
            <div>{phone}</div> |
            <div>Age: {age}</div>
          </div>
        </section>
        <br />
        <hr className="bg-black border-black p-0.2" />
        <section>
          <h3 className="text-xl font-thin">Education</h3>
          {educationList?.map((education, index) => (
            <div key={index}>
              <p className="font-medium">{education.degreeName}</p>
              <p className="font-bold">{education.organization}</p>
              <p className="font-bold text-gray-600">
                Duration: {education.endingYear}
              </p>
              <p className="font-thin">{education.description}</p>
              <br />
            </div>
          ))}
        </section>
        {experienceList && experienceList.length > 0 && experienceList[0].position.trim() !== "" && (
          <>
            <hr className="bg-black border-black p-0.2" />
            <section>
              <h3 className="text-xl font-thin">Experience</h3>
              {experienceList?.map((experience, index) => (
                <div key={index}>
                  <p className="font-medium">{experience.position}</p>
                  <p className="font-bold">{experience.organization}</p>
                  <p className="font-bold text-gray-600">
                    Duration: {experience.duration}
                  </p>
                  {/* <p>Work Type: {experience.workType}</p> */}
                  <p className="font-thin">{experience.description}</p>
                  <br />
                </div>
              ))}
            </section>
          </>
        )}
        {isNonEmpty(skills) && (
          <>
            <hr className="bg-black border-black p-0.2" />
            <section>
              <h3 className="text-xl font-thin">Skills</h3>
              <p className="mb-2">{skills}</p>
              <hr className="bg-black border-black p-0.2" />
            </section>
          </>
        )}
        {references && references.length > 0 && references[0].name.trim() !== "" && (
          <>
            <section>
              <h3 className="text-xl font-thin">References</h3>
              {references?.map((reference, index) => (
                <div key={index}>
                  <p className="font-medium">{reference.name}</p>
                  <p className="font-semibold">{reference.position}</p>
                  <p className="font-bold"> {reference.organization}</p>
                  <p className="font-bold text-gray-600">{reference.email}</p>
                  <p className="font-bold text-gray-600">{reference.phone}</p>
                  <br />
                </div>
              ))}
              <hr className="bg-black border-black p-0.2" />
            </section>
          </>
        )}
  
        {certificationsList && certificationsList.length > 0 && certificationsList[0].certificationName.trim() !== "" && (
          <>
            <section>
              <h3 className="text-xl font-thin">Certifications</h3>
              {certificationsList?.map((certification, index) => (
                <div key={index}>
                  <p className="font-medium">
                    {certification.certificationName}
                  </p>
                  <p className="font-bold">
                    {certification.organization}
                  </p>
                  <p className="font-bold text-gray-600">
                    {certification.completionYear}
                  </p>
                  <p className="font-thin">
                    {certification.description}
                  </p>
                  <br />
                </div>
              ))}
              <hr className="bg-black border-black p-0.2" />
            </section>
          </>
        )}
        {awardsList && awardsList.length > 0 && awardsList[0].awardName.trim() !== "" && (
          <>
            <section>
              <h3 className="text-xl font-thin">Awards</h3>
              {awardsList?.map((award, index) => (
                <div key={index}>
                  <p className="font-medium">{award.awardName}</p>
                  <p className="font-bold">{award.organization}</p>
                  <p className="font-bold text-gray-600">{award.year}</p>
                  <br />
                </div>
              ))}
              <hr className="bg-black border-black p-0.2" />
            </section>
          </>
        )}
        <section>
          {github && github.length > 0 && (
            <>
              <h3 className="text-xl font-thin">Social Links</h3>
              <div className="font-medium">
                <div>
                  {/* <label className="font-medium">LinkedIn: </label> */}
                  LinkedIn:
                  <a className="font-thin" href={linkedin} target="_blank" rel="noopener noreferrer">
                    {linkedin}
                  </a>
  
                </div>
                <div>
                  {/* <label className="font-medium"> GitHub: </label> */}
                  GitHub:
                  <a className="font-thin" href={github} target="_blank" rel="noopener noreferrer">
                    {github}
                  </a>
                </div>
              </div>
            </>
          )}
        </section>
      </div>
    );
  }
  
  export default ResumePreviewTemp3;
  