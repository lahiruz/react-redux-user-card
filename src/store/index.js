import {createStore} from "redux";
import reducer from "../reducers";

const initialState = {
	name: "Lahiru Jayamanna",
	description: "IT / Software Professional with 4 years of experience in Front-end Development using JavaScript, TypeScript, React, Angular, HTML5, CSS3, SCSS and Latest front-end best practices.",
	likes: "Cricket, Futsal, Carom, Badminton & Checkers",
	location: "Open Source"
};

export const store = createStore(reducer,  initialState);
