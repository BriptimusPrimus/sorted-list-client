import ListRouteHandler from './containers/ListRouteHandler';
import CustomersRouteHandler from './containers/CustomersRouteHandler';

const routes = [
  {
    key: 'list',
    path: '/list',
    component: ListRouteHandler
  },
  {
    key: 'customers',
    path: '/customers',
    component: CustomersRouteHandler
  }
];

export default routes;
