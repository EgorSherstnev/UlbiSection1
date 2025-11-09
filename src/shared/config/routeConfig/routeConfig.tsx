import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';

export const AppRoute = {
    MAIN: 'main',
    ABOUT: 'about',
    NOT_FOUND: 'not_found',
} as const;

export const RoutePath:
Record<(typeof AppRoute)[keyof typeof AppRoute], string> = {
    [AppRoute.MAIN]: '/',
    [AppRoute.ABOUT]: '/about',
    [AppRoute.NOT_FOUND]: '*',
};

export const routeConfig:
 Record<(typeof AppRoute)[keyof typeof AppRoute], RouteProps> = {
     [AppRoute.MAIN]:
      { path: RoutePath[AppRoute.MAIN], element: <MainPage /> },
     [AppRoute.ABOUT]:
      { path: RoutePath[AppRoute.ABOUT], element: <AboutPage /> },
     [AppRoute.NOT_FOUND]:
      { path: RoutePath[AppRoute.NOT_FOUND], element: <NotFoundPage /> },
 };
