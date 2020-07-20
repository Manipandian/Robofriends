import React from "react";
import { connect } from 'react-redux'; // To connect redux store and action into props
import RobotList from "../Component/RobotList";
import SearchBox from "../Component/SearchBox";
import Scroll from "../Component/Scroll";
import ErrorBoundries from "../Component/ErrorBoundries"
import "./App.css"
import { setSearchField, setRequestRobot } from '../actions';


const mapStateToProps = state => {
    return {
        searchField: state.searchRobot.searchField,
        isPending: state.requestRobots.isPending,
        robots: state.requestRobots.robots,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        requestRobot: () => dispatch(setRequestRobot())
    }
}

class App extends React.Component {
    //(This one is achived from redux)
    // constructor() {
    //     super()
    //     this.state = {
    //         robots: []
    //         //searchField: '' 
    //     }
    // }

    componentDidMount() {
        // This asyn operation can be done from redux middleware
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(response => response.json())
        // .then(users => {
        //     this.setState({robots: users});
        // })
        this.props.requestRobot();
    }

    //This one is achived from redux
    // onSearchChange = (event) => {
    //     this.setState({searchField: event.target.value});
    // }
    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredArray = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return (
            <div className="tc">
                <h1>RobotFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                { isPending ? '' :
                <Scroll>
                    <ErrorBoundries>
                        <RobotList robots={filteredArray}/>
                    </ErrorBoundries>
                </Scroll>
                }
            </div>
                
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);