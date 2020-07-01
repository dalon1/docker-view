from flask import Flask
from shell_docker import get_docker_images_json, get_docker_containers_json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# check if app is running
@app.route('/')
def get_index():
    return "Docker View App is alive!"

# get list of docker images from terminal
@app.route('/images')
def get_docker_images():
    return get_docker_images_json()

# get list of docker containers from terminal
@app.route('/containers')
def get_docker_containers():
    return get_docker_containers_json()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port='8065')