import { UrlPath } from 'commons';
import { Coupon, Home, NotFound } from 'components/pages';
import {
  ResizeDisplaySize,
  ScrollToTop,
  Wallpaper
} from 'components/templates';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { store } from 'stores';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <ResizeDisplaySize />
        <Wallpaper>
          <Switch>
            <Route exact path={UrlPath.HOME} component={Home} />
            <Route exact path={UrlPath.COUPON} component={Coupon} />
            <Route component={NotFound} />
          </Switch>
        </Wallpaper>
      </Router>
    </Provider>
  );
};

export default App;
