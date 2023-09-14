import './App.css';
import {Header} from "./lauout/header/Header";
import {Main} from "./lauout/sections/main/Main";
import {Skills} from "./lauout/sections/skills/Skills";
import {Works} from "./lauout/sections/works/Works";
import {Testimony} from "./lauout/sections/testimony/Testimony";
import {Contacts} from "./lauout/sections/contacts/Contacts";
import {Slogan} from "./lauout/sections/slogan/Slogan";
import {Footer} from "./lauout/footer/Footer";
import {Particle} from "./components/partikle/Partikle";

function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contacts/>
            <Slogan/>
            <Footer/>
        </div>
    );
}

export default App;

