
import Index from './components/Index/index';
import Login from './components/account/Login';

type Routes = {
  path: string;
  component: any;
  exact?: boolean;
}[];

const routes: Routes = [
  {
    path: '/',
    component: Index,
  },
  // {
  //   path: '/account/login',
  //   component: Login
  // }
]

export default routes;
