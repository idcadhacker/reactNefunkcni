import React from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';

const ErrorBoundary = () => {
  class ErrorBoundaryClass extends React.Component {
    componentDidCatch(error, errorInfo) {
      // Log the error to an error reporting service
      console.error(error, errorInfo);
    }

    render() {
      return this.props.children;
    }
  }

  return <ErrorBoundaryClass />;
};

const App = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Switch>
          <Route path="/" element={<Home />} />
          {/* Other routes */}
        </Switch>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
