import { useState, useEffect } from 'react'
function ResumePreviewTemp1({ formData }) {
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
    image,
  } = formData;
  console.log('in ResumePrevie:: formdata op');
  console.log(formData);

  const [imageSrc, setImageSrc] = useState(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImageSrc(reader.result);
      };

      reader.readAsDataURL(image);
    }
  }, [image]);
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

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
    <div className=" pb-2 flex">
      <section className='bg-[#323B4C] text-white w-1/3'>
        <div className='m-4'>
          <div className='p-2'>
            {imageSrc && <img src={imageSrc} alt="profile img" className="w-20 h-20 rounded-full" onLoad={handleImageLoad} />}
          </div>
        </div>
        <div>
          <div>Contacts</div>
          <hr />
          <div>Phone</div>
          <div>Email</div>
        </div>
        {educationList && educationList.length > 0 && educationList[0].degreeName.trim() !== "" && (
          <>
            <section>
              <h3 className="">Education</h3>
              <hr />
              {educationList?.map((education, index) => (
                <div key={index}>
                  <p className="">{education.endingYear}</p>
                  <p className="">{education.degreeName}</p>
                  <p className="">{education.organization}</p>
                  <br />
                </div>
              ))}
            </section>
          </>
        )}
        {isNonEmpty(skills) && (
          <>
            <section>
              <h3 className="">Skills</h3>
              <hr className="" />
              <li className="">{skills}</li>
            </section>
          </>
        )}
        <div>
          <div>Social Links</div>
          <hr />
          <div>links here</div>
        </div>
      </section>
      <section className='bg-white'>
        <div className="justify-center flex text-4xl">
          <div className="mr-1 font-thin">{firstName}</div>
          <div className="font-semibold"> {lastName}</div>
        </div>
        <div><div className=""> {age}</div></div>
        {experienceList && experienceList.length > 0 && experienceList[0].position.trim() !== "" && (
          <>
            <section>
              <h3 className="">Experience</h3>
              <hr className="bg-black border-black p-0.2" />
              {experienceList?.map((experience, index) => (
                <div key={index}>
                  <p className="">{experience.duration}</p>
                  <p className="">{experience.position}</p>
                  <p className="">{experience.organization}</p>
                  {/* <p>Work Type: {experience.workType}</p> */}
                  <div>Job Description</div>
                  <p className="">{experience.description}</p>
                  <br />
                </div>
              ))}
            </section>
          </>
        )}
        {certificationsList && certificationsList.length > 0 && certificationsList[0].certificationName.trim() !== "" && (
          <>
            <section>
              <h3 className="text-xl font-thin">Certifications</h3>
              <hr className="bg-black border-black p-0.2" />
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
            </section>
          </>
        )}
        {awardsList && awardsList.length > 0 && awardsList[0].awardName.trim() !== "" && (
          <>
            <section>
              <h3 className="text-xl font-thin">Awards</h3>
              <hr className="bg-black border-black p-0.2" />
              {awardsList?.map((award, index) => (
                <div key={index}>
                  <p className="font-medium">{award.awardName}</p>
                  <p className="font-bold">{award.organization}</p>
                  <p className="font-bold text-gray-600">{award.year}</p>
                  <br />
                </div>
              ))}
            </section>
          </>
        )}
        {references && references.length > 0 && references[0].name.trim() !== "" && (
          <>
            <section>
              <h3 className="text-xl font-thin">References</h3>
              <hr className="bg-black border-black p-0.2" />
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
            </section>
          </>
        )}
      </section>

    </div>
  );
}

export default ResumePreviewTemp1;