import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>
            Ooops! Something went wrong!! <a href="/">return home</a>
          </h1>
          <a href="/">return home</a>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
