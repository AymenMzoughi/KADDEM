import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  { path: '', component: AdminLayoutComponent },
  {
    path: 'universite',
    loadChildren: () =>
      import('./universites/universites.module').then(
        (m) => m.UniversitesModule
      ),
  },
  { path: 'equipes', loadChildren: () => import('./equipes/equipes.module').then(m => m.EquipesModule) },
  { path: 'detailequipes', loadChildren: () => import('./detailequipes/detailequipes.module').then(m => m.DetailequipesModule) },
  { path: 'reclamation', loadChildren: () => import('./reclamation/reclamation.module').then(m => m.ReclamationModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
