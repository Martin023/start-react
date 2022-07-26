import React, {Component} from "react";
 
// class Welcome extends Component {
//     render(){
//         // return <h2>Welcome to class components</h2>
//         return (
//             <div>
//                 <h1>Welcome to {this.props.name} i am {this.props.heroName}</h1>
//                 {this.props.children}
//             </div>
//         )
//     }
// }

// class comp desructuring - usually done within the render method.
class Welcome extends Component {
    render(){

        const {name, heroName} = this.props
        // return <h2>Welcome to class components</h2>
        return (
            <div>
                <h1>Welcome to {name} i am {heroName}</h1>
                {this.props.children}
            </div>
        )
    }
}
export default Welcome