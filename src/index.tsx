import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListQuestions from './components/ListQuestions/ListQuestions';
import PointsTemplate from './components/PointsTemplate/PointsTemplate';
import ReportPage from './components/ReportPage/ReportPage';
import StartPage from './components/StartPage/StartPage';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/questions/:num" component={ListQuestions} />
      <Route path="/startPage/:num" component={StartPage} />
      <Route path="/points/:id?" component={PointsTemplate}/>
      <Route path="/reporting" component={ReportPage}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
