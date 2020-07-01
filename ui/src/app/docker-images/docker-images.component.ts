import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-docker-images',
  templateUrl: './docker-images.component.html',
  styleUrls: ['./docker-images.component.css']
})
export class DockerImagesComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getDockerImagesAPI()
  }

  getDockerImagesAPI() {
    const headers = new HttpHeaders()
            .set("Accept", "application/json")
            .set('Access-Control-Allow-Origin', '*');
    
    let dockerImages = this.http.get('http://localhost:8065/containers', {headers: headers}).subscribe(result => console.log(result))
  }

  
  
}
