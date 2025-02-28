import { AProposComponent } from './a-propos/a-propos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { ListTickectComponent } from './list-tickect/list-tickect.component';
import { FaqComponent } from './faq/faq.component';
import { EditCategorieComponent } from './edit-categorie/edit-categorie.component';
import { GesUsersComponent } from './ges-users/ges-users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddTickectComponent } from './add-tickect/add-tickect.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'add-ticket', component: AddTickectComponent, canActivate:[AuthGuard] },
  { path: 'add-user', component: AddUserComponent, canActivate:[AuthGuard] },
  { path: 'faq', component: FaqComponent, canActivate:[AuthGuard] },
  { path: 'ges-users', component: GesUsersComponent, canActivate:[AuthGuard] },
  { path: 'edit-categorie', component: EditCategorieComponent, canActivate:[AuthGuard] },
  { path: 'list-ticket', component: ListTickectComponent, canActivate:[AuthGuard] },
  { path: 'a-propos', component: AProposComponent, canActivate:[AuthGuard]},
  { path: '', component: LoginComponent},
  { path: '**', component: PageNotFoundComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

