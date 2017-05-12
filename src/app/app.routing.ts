import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { LinksComponent } from './links/links.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';

const appRoutes: Routes = [
  {
     path: '',
     component: WelcomeComponent
   },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'player-list',
    component: PlayerListComponent
  },
  {
    path: 'players/:id',
    component: PlayerDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'links',
    component: LinksComponent
  },
  // {
  //   path: 'edit-player',
  //   component: EditPlayerComponent
  // }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
