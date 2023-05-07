from auth_token import auth_token
import replicate
import webbrowser

import os
import replicate

#Set the REPLICATE_API_TOKEN environment variable
os.environ["REPLICATE_API_TOKEN"] = auth_token

replicate.Client(api_token=auth_token)

model = replicate.models.get("stability-ai/stable-diffusion")
version = model.versions.get("db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf")
output_url = version.predict(prompt="une voiture avec macron")[0]
print(output_url)
webbrowser.open(output_url)