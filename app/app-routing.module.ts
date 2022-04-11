import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./tabs/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./homepage/homepage.module').then( m => m.HomepagePageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./tabs/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'feed',
    loadChildren: () => import('./tabs/feed/feed.module').then( m => m.FeedPageModule)
  },
  {
    path: 'leaderboard',
    loadChildren: () => import('./tabs/leaderboard/leaderboard.module').then( m => m.LeaderboardPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
