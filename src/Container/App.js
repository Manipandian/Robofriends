import React from "react";
import RobotList from "../Component/RobotList";
import SearchBox from "../Component/SearchBox";
import Scroll from "../Component/Scroll";
import ErrorBoundries from "../Component/ErrorBoundries"
import "./App.css"


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            this.setState({robots: users});
        })
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }
    render() {
        const {robots, searchField } = this.state;
        const filteredArray = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return (
            <div className="tc">
                <h1>RobotFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundries>
                        <RobotList robots={filteredArray}/>
                    </ErrorBoundries>
                </Scroll>
            </div>
        )
    }
}

export default App;