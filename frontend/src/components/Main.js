import $ from "jquery"
const Main = (scriptToAppend) => {
        const script = document.createElement("script");
        script.src = scriptToAppend;
        document.body.appendChild(script);
        
    }
    

export default Main;

