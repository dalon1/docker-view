import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DockerImage } from 'src/models/DockerImage';


@Component({
  selector: 'app-docker-images',
  templateUrl: './docker-images.component.html',
  styleUrls: ['./docker-images.component.css']
})
export class DockerImagesComponent implements OnInit {
  private dockerImages: DockerImage[];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getDockerImagesAPI()
  }

  getDockerImagesAPI() { 
    console.log("Reading docker images API")
    this.http.get('http://localhost:8065/images').subscribe((result: DockerImage[]) =>  {
      console.log(result);
      this.dockerImages = result;
    })
  }

  
  
}
