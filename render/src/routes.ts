
import Index from './components/Index/index';

type Routes = {
  path: string;
  component: any;
  exact?: boolean;
}[];

const routes: Routes = [
  {
    path: '/',
    component: Index,
  }
]

export default routes;
