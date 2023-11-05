import env from "react-dotenv";
import ReactDOM from 'react-dom';
import data from "../backend/course_response.json";
import { Channels } from './channels.js';

function init() {
    var curr_session_courses = [];

    for (var i = 0; i < data.length; i++) {
        var start = data[i].term;
        if (start && (start.name.substring(0, 9) == "2023 Fall")) {
            curr_session_courses.push(data[i]);
        }
    }

    return curr_session_courses;
}

function construct(id , name) {

    return (
        <a className="courses" target="_blank" onClick={() => {
            const root = ReactDOM.createRoot(
                document.querySelector("div.channels-list")
            );

            root.render(
                Channels(id)
            );

            document.querySelector('div.text-window').innerHTML = "";
        }}>
            <div>
                <p>{name}</p>
            </div>
        </a>
    );
}

export function Courses() {
    var indents = [];
    var courses = init();

    for (var i = 0; i < courses.length; i++) {
        indents.push(construct(courses[i].id , courses[i].name.substring(0,7)));
    }
    
    return indents;
}