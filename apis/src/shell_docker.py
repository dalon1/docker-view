import subprocess

# sh: docker image ls --format '{{json .}},'
def get_docker_images_json():
    docker_images = subprocess.check_output(['docker', 'image', 'ls', '--format', "{{json .}},"])
    docker_images = "[" + docker_images.decode('utf-8')[:-2] + "]"
    print("LOGS: " + docker_images)
    return docker_images

# sh: docker container ls --format '{{json .}},' -a
def get_docker_containers_json():
    docker_containers = subprocess.check_output(['docker', 'container', 'ls', '-a', '--format', "{{json .}},"])
    docker_containers = "[" + docker_containers.decode('utf-8')[:-2] + "]"
    print("LOGS: " + docker_containers)
    return docker_containers
