/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';
import ColorProvider from 'themes/ColorContext';
import CopyRight from './components/CopyRight';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import AuthPage from './pages/Auth';
import { PawnPage } from './pages/PawnPage/Loadable';

export function App() {
  const { i18n } = useTranslation();
  return (
    <ColorProvider>
      <BrowserRouter>
        <Helmet
          titleTemplate="%s - React Boilerplate"
          defaultTitle="React Boilerplate"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="description" content="A React Boilerplate application" />
        </Helmet>

        <Navigation />

        <Switch>
          <Route exact path="/">
            <Redirect to="/pawn" />
          </Route>

          <Route path="/pawn">
            <PawnPage />
          </Route>

          <Route path="/auth">
            <AuthPage />
          </Route>

          <Route component={NotFoundPage} />
        </Switch>

        <Footer />

        <CopyRight />
        <GlobalStyle />
      </BrowserRouter>
    </ColorProvider>
  );
}
