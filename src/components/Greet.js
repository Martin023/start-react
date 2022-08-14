import React from "react";

//using props to make dynamic content and reuse components
const Greet = (props) => {
    return (<div>
        <h2>Hello {props.name} I love {props.hero}</h2>

        {props.children}
    </div>
    )

}
// function Greet(){
//     return <h2>Hello welcome to react functional compoment</h2>
// }

// export this component to the root component so as to be recoginsed in the application
export default Greet //this is called the default exporting way 

// another way of exporting is:

// export const Greet = () => <h2>Hello welcome to react functional compoment</h2>

// Where you have to import it in the app component with the xaact func name ie GREET
