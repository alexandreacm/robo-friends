import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        //logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1 className='tc'>OOOOPS.THERE IS NOT GOOD</h1>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;