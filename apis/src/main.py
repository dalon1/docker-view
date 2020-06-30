from flask import Flask
from flask import jsonify

app = Flask(__name__)

# check if app is running
@app.route('/')
def get_index():
    return "Docker View App is alive!"

# get list of docker images from terminal
@app.route('/images')
def get_docker_images():
    return "list of images"

# get list of docker containers from terminal
@app.route('/containers')
def get_docker_containers():
    return "list of containers"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port='8065')