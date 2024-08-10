import { Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { ProjectsComponent } from './pages/projects/projects.component';

export const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  },
  {
    path: 'experiencia',
    component: ExperienciaComponent
  },
  {
    path: 'proyectos',
    component: ProjectsComponent
  }
];
