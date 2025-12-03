import { Routes } from '@angular/router';

export const complaintRoutes: Routes = [
  {
    path: 'add',
    loadComponent: () =>
      import('./pages/user-complaints-add/user-complaints-add')
        .then(m => m.UserComplaintsAdd),
  },
  {
    path: 'view',
    loadComponent: () =>
        import('./pages/user-complaints-view/user-complaints-view')
          .then(m => m.UserComplaintsView), 
  }

];
