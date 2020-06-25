import React from 'react'

class ErrorBoundries extends React.Component {
    constructor(props) {
        super();
        this.state = {
            gotIssue: false
        }
    }
    componentDidCatch() {
        this.setState({gotIssue: true})
    }
    render() {
        return this.state.gotIssue ? <h1>Ooops sorry for the inconvenience</h1> : this.props.children;

    }
}

export default ErrorBoundries