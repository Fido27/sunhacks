# https://asu.instructure.com/api/v1/courses/${env.REACT_APP_SAMPLE_COURSE_ID}/students?access_token=${env.REACT_APP_CANVAS_TOKEN}

from numpy import dtype
import requests
import os
from dotenv import load_dotenv
import json
from pyzoom import oauth_wizard, ZoomClient

load_dotenv()

canvas_token = os.getenv("REACT_APP_CANVAS_TOKEN")
google_token = os.getenv("REACT_APP_Google_TOKEN")


tokens = oauth_wizard(os.getenv("REACT_APP_ZOOM_CLIENT_ID"), os.getenv("REACT_APP_ZOOM_CLIENT_SECRET"))

client = ZoomClient(tokens, base_url="https://api.zoomgov.us/v2")

# Creating a meeting
meeting = client.meetings.create_meeting('Auto created 1', start_time=dtype.now().isoformat(), duration_min=60, password='not-secure')

# Update a meeting
meeting = client.meetings.update_meeting('Auto updated 1', meeting_id = meeting.id ,start_time=dt.now().isoformat(), duration_min=60,password='not-secure')

y = json.loads("responses.json")


# Adding registrants
client.meetings.add_meeting_registrant(meeting.id, first_name=y[0]['name'], last_name='Doe', email=y[0]['login_id']+"asu.edu")
