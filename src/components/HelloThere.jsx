import React from "react";

// functional component
function HelloWorld() {
    return <h1>Hello World!</h1>
}

// arrow function
const ILikeArrows = () => {
    return <h2>I am Artemis.</h2>
}

// class component
class ClassyComponent extends React.Component {
    render() {
        return (
            <>
                <HelloWorld />
                <ILikeArrows />
            </>
        )
    }
}

export default ClassyComponent