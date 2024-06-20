const parent = React.createElement("div",
    { id: "parent" },

    [React.createElement("div",
        { id: "child1" },

        [
            React.createElement("h1", { id: "NestedHeading" }, "Nested Heading 1"),
            React.createElement("h2", { id: "NestedHeading" }, "Nested Heading 2")
        ]
    ),
    React.createElement("div",
        { id: "child1" },

        [
            React.createElement("h1", { id: "NestedHeading" }, "Nested Heading 1"),
            React.createElement("h2", { id: "NestedHeading" }, "Nested Heading 2")
        ]
    )]
);



// Creaing element core thing of react coming > from "React"
const headingReact = React.createElement("h1",
    { id: "heading", class: "heading" }, // props
    "Hello World! from React "); // children
// here {} => is used to give attributes to the tag eg:id=heading > props

// Creating root and rendering inside it > from "react DOM"
const rootReact = ReactDOM.createRoot(document.getElementById('root'));

// rootReact.render(headingReact)
rootReact.render(parent)