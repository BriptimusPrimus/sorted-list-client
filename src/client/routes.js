import ListRouteHandler from './containers/ListRouteHandler';
import CustomersRouteHandler from './containers/CustomersRouteHandler';
import CustomerDetailsRouteHandler from './containers/CustomerDetailsRouteHandler';
import DisplayDetailsRouteHandler from './containers/DisplayDetailsRouteHandler';

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
  },
  {
    key: 'customer',
    path: '/customer/:customerId',
    component: CustomerDetailsRouteHandler
  },
  {
    key: 'displayDetails',
    path: '/details',
    component: DisplayDetailsRouteHandler
  }
];

export default routes;
