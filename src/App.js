import React, {Component} from 'react';
import Subject from "./components/Subject";
import TOC from "./components/Toc";
import Content from "./components/Content";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            subject : {title : 'WEB', sub: 'World Wide Web'}
        }
    }

    render() {
        return(
            <div className="App">
                <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}/>
                <Subject title="React" sub="For UI" />
                <TOC/>
                <Content title="HTML" desc="HTML is HyperText Markup Language!"/>
            </div>
        );
    }
}

export default App;