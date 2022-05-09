import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';   
import { createRoot } from 'react-dom/client';
import GifExpertApp from "./GifExpertApp";

const divRoot = document.querySelector('#root')
const root = createRoot(divRoot);
root.render(<GifExpertApp />)