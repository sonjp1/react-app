import React, {Component} from "react";
import Subject from "./Subject";

class TOC extends Component {
    render() {
        return(
            <nav>
                <ul>
                    <li><a href="1.html">HTML</a></li>
                    <li><a href="1.html">CSS</a></li>
                    <li><a href="1.html">Javascript</a></li>
                </ul>
            </nav>
        );
    }
}

export default TOC;