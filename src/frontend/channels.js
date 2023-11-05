import { ReactDOM } from 'react';
import data from './../backend/course_response.json';
import { TextWindow, display_syllabus } from './textWindow';


function class_info(course) {
    return (
        <div className='class-info'>
            <h2>
                {course.name}
            </h2>
        </div>
    )
}

export function Channels(given_id) {
    var course;

    for ( var i = 0; i < data.length; i++ ) {
        if (data[i].id == given_id) {
            course = data[i];
            break;
        }
    }

    var indents = [];

    if (course) {
        indents.push(class_info(course));
        indents.push(
            <hr length='100%' color='white' />
        );

        indents.push(
        <div className='channels'>
            <a className='syllabus channels-content'
            onClick= {() => {
                document.querySelector("div.text-window").innerHTML = course.syllabus_body;
            }}>
                <div>
                    <p>View Syllabus</p>
                </div>
            </a>

            <a className='announcements channels-content'>
                 <div>
                    <p>Course Announcements</p>
                </div>
            </a>

            <a className='grades channels-content'>
                 <div>
                    <p>View Letter Grade</p>
                </div>
            </a>

            <a className='collab channels-content'>
                 <div>
                    <p>Collaboration Tools</p>
                </div>
            </a>

            <a className='contact channels-content'>
                 <div>
                    <p>Contact Faculty</p>
                </div>
            </a>
        </div>
        );
    }
    

    return indents;
}

