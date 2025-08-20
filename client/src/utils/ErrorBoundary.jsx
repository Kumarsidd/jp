import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container mt-5">
          <div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">Oops! Something went wrong.</h4>
            <p>
              We encountered an unexpected issue. Please try refreshing the page or contact support if the problem persists.
            </p>
            <hr />
            <p className="mb-0">
              <strong>Error:</strong> {this.state.error?.toString()}
            </p>
            <details className="mt-3">
              <summary>Click for more details</summary>
              <pre className="mt-2">
                {this.state.errorInfo?.componentStack}
              </pre>
            </details>
          </div>
        </div>
      );
    }

    return this.props.children;
  }

}

export default ErrorBoundary;
