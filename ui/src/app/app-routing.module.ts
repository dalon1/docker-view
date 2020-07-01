import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DockerImagesComponent } from './docker-images/docker-images.component';
import { DockerContainersComponent } from './docker-containers/docker-containers.component';

const routes: Routes = [
  {path: 'docker-images', component: DockerImagesComponent},
  {path: 'docker-containers', component: DockerContainersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
