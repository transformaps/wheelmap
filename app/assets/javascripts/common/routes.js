import forOwn from 'lodash.forown';

const routes = global.Routes;

// Wrap route helper if main locale differs from current locale
if (I18n.mainLocale !== I18n.locale) {
  forOwn(routes, (route, path) => {
    const routeWrapper = (...args) => `/${I18n.locale}${route(...args)}`;

    routeWrapper.toString = () => `/${I18n.locale}${route.toString()}`;

    routes[path] = routeWrapper;
  });
}

export default routes;
