// TODO once dev work is done - https://webpack.js.org/guides/production/
// make it so it could run like a real project
import './style.css';
import jb_logo from './assets/images/jb_logo.jpeg';
import { Navbar } from "./components/navbar/navbar.js";

const app = document.createElement("div");
app.classList.add("app");
console.log('LIVE');

const nav = Navbar(jb_logo);
nav.draw(app);

document.body.appendChild(app);