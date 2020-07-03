import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DockerContainer } from 'src/models/DockerContainer';

@Component({
  selector: 'app-docker-containers',
  templateUrl: './docker-containers.component.html',
  styleUrls: ['./docker-containers.component.css']
})
export class DockerContainersComponent implements OnInit {
  private dockerContainers: DockerContainer[];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getDockerContainersAPI();
  }

  getDockerContainersAPI() {
    console.log("Reading docker containers API")
    this.http.get('http://localhost:8065/containers').subscribe((response:DockerContainer[]) => {
      console.log(response);
      this.dockerContainers = response;
    });
  }

}
