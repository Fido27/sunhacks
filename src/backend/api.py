# https://asu.instructure.com/api/v1/courses/${env.REACT_APP_SAMPLE_COURSE_ID}/students?access_token=${env.REACT_APP_CANVAS_TOKEN}

import requests
import os
from dotenv import load_dotenv
import json

load_dotenv()

sample_id = os.getenv("REACT_APP_SAMPLE_COURSE_ID")
canvas_token = os.getenv("REACT_APP_CANVAS_TOKEN")

response = requests.get("https://asu.instructure.com/api/v1/courses/{}/students?access_token={}".format(sample_id, canvas_token))

file = open("src/backend/response.json", "w")

json.dump(response.json(), file)

file.close()
