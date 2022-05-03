import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/tabs/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./pages/tabs/homepage/homepage.module').then( m => m.HomepagePageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/tabs/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'feed',
    loadChildren: () => import('./pages/tabs/feed/feed.module').then( m => m.FeedPageModule)
  },
  {
    path: 'leaderboard',
    loadChildren: () => import('./pages/tabs/leaderboard/leaderboard.module').then( m => m.LeaderboardPageModule)
  },
  {
    path: 'settings-modal',
    loadChildren: () => import('./pages/settings-modal/settings-modal.module').then( m => m.SettingsModalPageModule)
  },
  {
    path: 'rating',
    loadChildren: () => import('./pages/tabs/rating/rating.module').then( m => m.RatingPageModule)
  },
  {
    path: 'user-stats',
    loadChildren: () => import('./pages/user-stats/user-stats.module').then( m => m.UserStatsPageModule)
  },
  {
    path: 'friends',
    loadChildren: () => import('./pages/friends/friends.module').then( m => m.FriendsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
