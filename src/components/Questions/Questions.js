import React from 'react';

const Questions = () => {
    return (
        <div className="questions">
            <ul>
                <li>
                    <h2>Question-01: How does react work?</h2>
                    <p>Answer:
                        ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface UI building called components.Its important to note that ReactJS is not a JavaScript framework. Thats because its only responsible for rendering the components of an applications view layer. React is an alternative to frameworks like Angular and Vue, which all allow to create complex functions.This article will explore Reacts features, explain how it works, and go over its benefits for front-end developers. We will also cover the differences between ReactJS and React Native regarding their roles in the web and mobile app development industry.</p>
                </li>

                <li>
                    <h2>Question-01: Different between Props and State?</h2>
                    <p>Answer: Differentiate between Props and State:
                        <li>
                            Props:The Data is passed from one component to another.It is Immutable cannot be modified.Props can be used with state and functional components.Props are read-only.
                        </li>
                        <li>
                            State:The Data is passed within the component only.It is Mutable can be modified.State can be used only with the state components/class component Before 16.0.State is both read and write.
                        </li>
                    </p>
                </li>
                <li>
                    <h2>Question-01: What of the uses of UseEffect API without Data Load?</h2>
                    <p>Answer: Below is what can be done by the UseEffect API in addition to load data:
                        (1)Creating a Project and a Local API.(2)Sending Data to an API.(3)Fetching Data from an API with useEffect
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default Questions;