import pycanvas
import os
from dotenv import load_dotenv

load_dotenv() 

token = os.getenv('BOT_TOKEN')
client = AccountsAPI(instance_address="https://mycanvas.instance.com", access_token="my access token")
