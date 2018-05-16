import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="App">
                <div className="title">
                    Reminder Pro
                </div>
                <div className="form-inline">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="I have to..."/>
                    </div>
                </div>
                <button type="button" className="btn btn-success">Add reminder</button>
            </div>
        );
    }
}

export default App;