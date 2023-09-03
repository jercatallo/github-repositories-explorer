import { faBug } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import  { Component, ErrorInfo } from 'react';
import { IErrorBoundary } from './types';

class ErrorBoundary extends Component<IErrorBoundary> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by error boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-4/5 h-screen grid items-center m-auto text-3xl" role="alert">
          <div>
          <span className="block h-full bg-red-100 text-red-700 px-4 py-3 rounded relative"><strong className="font-bold"><FontAwesomeIcon className='mx-1' icon={faBug} /></strong> You found this bug, we will hide it again, please try again later!</span>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;