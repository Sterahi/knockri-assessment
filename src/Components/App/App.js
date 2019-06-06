import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { cx, css } from 'emotion';

import Candidates from '../Candidates/Candidates';
import Applications from '../Applications/Applications';
import Questions from '../Questions/Questions';

export default function AppRouter() {
  const router = css`
      width:95vw;
      margin: 0 auto;
  `
  return (
    <Router>
      <div className={cx(router, 'router')}>
        <Candidates />
        {/* <Route path="/" exact component={ Candidates } /> */}
        <Route path="/application/:id" component={ Applications } />
        <Route path="/questions/" exact component={ Questions } />
      </div>
    </Router>
  );
}
