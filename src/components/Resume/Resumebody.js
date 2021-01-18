import React from 'react';
import './resume.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faTools, faUserGraduate, faFileInvoice, faUniversity, faGlobeAmericas, faGuitar } from '@fortawesome/free-solid-svg-icons'

const languageIcon = <FontAwesomeIcon icon={faGlobeAmericas} size="lg"/>
const interestIcon = <FontAwesomeIcon icon={faGuitar} size="lg"/>
const edCareerIcon = <FontAwesomeIcon icon={faUniversity} size="lg"/>
const techCareerIcon = <FontAwesomeIcon icon={faFileInvoice} size="lg"/>
const educationIcon = <FontAwesomeIcon icon={faUserGraduate} size="lg"/>
const skillsIcon = <FontAwesomeIcon icon={faTools} size="lg"/>
const codeIcon = <FontAwesomeIcon icon={faCode} size="lg"/>


function Resumebody() {
  return (
    <section className="resume-background">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg resume-body">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Tara Brichetto
          </h3>
          <p className="mt-1 max-w-2xl text-med text-gray-500">
            Full Stack Software Developer
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="alternating-bg px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-med font-medium text-gray-500">
                <div>
                Competencies
                <p className="resumeIcon">{codeIcon}</p>
                </div>
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <ul className="resume-ul">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>jQuery</li>
                  <li>AJAX</li>
                  <li>Node</li>
                  <li>Sequelize</li>
                  <li>MySQL</li>
                  <li>NoSQL</li>
                  <li>MERN Stack</li>
                  <li>RESTful APIs</li>
                  <li>Object-Oriented Programming</li>
                </ul>
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-med font-medium text-gray-500">
                Additional Skills
                <p className="resumeIcon">{skillsIcon}</p>
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <ul className="resume-ul">
                  <li>Project Management</li>
                  <li>Strategic Planning</li>
                  <li>Ideation</li>
                  <li>Team Leadership</li>
                  <li>Business Writing</li>
                  <li>Curriculum Design</li>
                  <li>Classroom Instruction</li>
                  <li>Recruitment + Onboarding</li>
                  <li>Customer Service</li>
                  <li>Event Coordination</li>
                  <li>Microsoft Office Suite</li>
                </ul>
              </dd>
            </div>
            <div className="alternating-bg px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-med font-medium text-gray-500">
                Education History
                <p className="resumeIcon">{educationIcon}</p>
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <p className="title-text">University of Arizona</p>
                <p>Coding Bootcamp | Web Development | 2021</p>
                <p>Bachelor of Arts | Creative Writing, Spanish + Portuguese | 2008</p>
                <br />
                <p className="title-text">Arizona State University</p>
                <p>Master of Arts | Elementary Education | 2010</p>
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-med font-medium text-gray-500">
                Career History | Technology and Finance
                <p className="resumeIcon">{techCareerIcon}</p>
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <p className="title-text">Chief of Staff</p>
                <p>Turbulence, ZIVELO | Jan 2018 - Jun 2020</p>
                <br />
                <p className="title-text">Regional Operations Analyst</p>
                <p>The Party Staff | Sptember 2014 - December 2017</p>
              </dd>
            </div>
            <div className="alternating-bg px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-med font-medium text-gray-500">
                Career History | Education
                <p className="resumeIcon">{edCareerIcon}</p>
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <p className="title-text">Academic Associate</p>
                <p>Arizona State University | Aug 2015 - May 2018</p>
                <br />
                <p className="title-text">Tutor</p>
                <p>Varsity Tutors, Freelance | Apr 2014 - Present</p>
                <br />
                <p className="title-text">Academic Coach</p>
                <p>Teacher Retention Project | Sep 2014 - May 2015</p>
                <br />
                <p className="title-text">Content Specialist</p>
                <p>Teach for America | Jul 2014 - May 2015</p>
                <br />
                <p className="title-text">Local Coordinator</p>
                <p>Council on International Educational Exchange | May 2014 - May 2017</p>
                <br />
                <p className="title-text">English Instructor</p>
                <p>Himeji Board of Education | Aug 2010 - Aug 2012</p>
                <br />
                <p className="title-text">Teacher</p>
                <p>Pueblo Middle School - Isaac School District | Aug 2008 - Jun 2010</p>
                <br />
                <p className="title-text">Corps Member</p>
                <p>Teach for America | Jun 2008 - July 2010</p>
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-med font-medium text-gray-500">
                  Languages
                <p className="resumeIcon">{languageIcon}</p>
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <ul className="resume-ul">
                  <li>Spanish (intermediate)</li>
                  <li>Japanese (intermediate)</li>
                  <li>Portuguese (beginner)</li>
                  <li>Italian (beginner)</li>
                </ul>
              </dd>
            </div>
            <div className="alternating-bg px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-med font-medium text-gray-500">
                Interests
                <p className="resumeIcon">{interestIcon}</p>
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul className="resume-ul">
                  <li>Hiking</li>
                  <li>Racquetball</li>
                  <li>Gardening</li>
                  <li>Postcrossing</li>
                  <li>Ukulele</li>
                  <li>Violin</li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

export default Resumebody;