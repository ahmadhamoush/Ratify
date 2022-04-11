import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepagePage } from './homepage.page';

const routes: Routes = [
  {
    path: '',
    component: HomepagePage,
    children: [
      {
        path: 'profile',
        loadChildren: () => import('../tabs/profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../tabs/search/search.module').then( m => m.SearchPageModule)
      },
      {
        path: 'feed',
        loadChildren: () => import('../tabs/feed/feed.module').then( m => m.FeedPageModule)
      },
      {
        path: 'leaderboard',
        loadChildren: () => import('../tabs/leaderboard/leaderboard.module').then( m => m.LeaderboardPageModule)
      },
      {
        path: '',
        redirectTo: './tabs/profile',
        pathMatch : 'full'
      }  
    ]
  },
  {
    path: '',
    redirectTo: './tabs/profile',
    pathMatch : 'full'
  }  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepagePageRoutingModule {}
