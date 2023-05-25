import {Prism as Syntax} from 'react-syntax-highlighter';
import {atomOnLight} from 'react-syntax-highlighter';


const Codehighlight=({language, code})=>{
return (
    <Syntax language={language} style = {atomOnLight}>
        {code}
    </Syntax>
);
};

export default Codehighlight;