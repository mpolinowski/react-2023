import React from "react"

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    // catch error
    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo)
    }

    render() {
        // there was a problem - provide fallback
        if (this.state.hasError) {
            return <p><em>Safe Fallback instead of a Crash</em></p>
        }
        // everything is fine - continue
        return this.props.children
    }
}


function BreakingComponent() {
    return <p>{ anelusiveprop }</p>
}

function CaughtError() {
    
    return (
        <>
            <ErrorBoundary>
                <BreakingComponent />
            </ErrorBoundary>
        </>
    )
  }

  export default CaughtError