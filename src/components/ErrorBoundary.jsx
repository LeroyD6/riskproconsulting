import { Component } from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details for debugging
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="container py-5">
          <div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">Something went wrong!</h4>
            <p>
              We're sorry, but something unexpected happened. Please try refreshing the page or
              contact support if the problem persists.
            </p>
            {import.meta.env.DEV && this.state.error && (
              <details className="mt-3">
                <summary className="fw-bold">Error Details (Development Only)</summary>
                <pre className="mt-2 p-3 bg-light rounded">
                  <code>{this.state.error.toString()}</code>
                  {this.state.errorInfo && <code>{this.state.errorInfo.componentStack}</code>}
                </pre>
              </details>
            )}
            <hr />
            <button className="btn btn-primary" onClick={() => window.location.reload()}>
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
