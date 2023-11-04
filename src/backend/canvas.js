import env from "react-dotenv";

export function canvasConnect(){
  // return `https://asu.instructure.com/api/v1/courses/${env.REACT_APP_SAMPLE_COURSE_ID}/students?access_token=${env.REACT_APP_CANVAS_TOKEN}`;
  fetch(`https://asu.canvas.instructure.com/api/v1/courses/${env.REACT_APP_SAMPLE_COURSE_ID}/students?access_token=${env.REACT_APP_CANVAS_TOKEN}`)
    .then((response) => response.json())
    .then((json) => {return json});
}