import { ReactDOM } from "react";


function construct(id , name) {
    return (
        <div className="courses">
            <p>{name}</p>
        </div>
    );
}

export function display_syllabus(course) {
    return (
        <div>
            {course.syllabus_body}
        </div>
    );
}

export function TextWindow(func, course) {
    return (func(course));
}