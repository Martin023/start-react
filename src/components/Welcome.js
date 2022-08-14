import React, {Component} from "react";
 
class Welcome extends Component {
    render(){
        // return <h2>Welcome to class components</h2>
        return (
            <div>
                <h1>Welcome to {this.props.name} i am {this.props.heroName}</h1>
                {this.props.children}
            </div>
        )
    }
}
export default Welcome