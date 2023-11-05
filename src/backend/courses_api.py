
import requests
import os
from dotenv import load_dotenv
import json

load_dotenv()

sample_id = os.getenv("REACT_APP_SAMPLE_COURSE_ID")
canvas_token = os.getenv("REACT_APP_CANVAS_TOKEN")

response = requests.get("https://asu.instructure.com/api/v1/courses/?access_token={}".format(canvas_token), params={'per_page' : 100, 'include[]' : ['term', 'syllabus_body']})

print(response.status_code)

file = open("src/backend/course_response.json", "w")

json.dump(response.json(), file)

file.close()