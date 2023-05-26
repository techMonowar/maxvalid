import {Prism as Syntax} from 'react-syntax-highlighter';
import {tomorrow} from 'react-syntax-highlighter';


const Codehighlight=({language, code})=>{
return (
    <Syntax language={language} style = {tomorrow}>
        {code}
    </Syntax>
);
};

export default Codehighlight;