import Obj,{a,b,obj} from  './greeter.js'
/*let React=require('react');
let ReactDOM=require('react-dom');*/
import React from 'react';
import ReactDOM from 'react-dom'

console.log(React);
console.log(ReactDOM);
console.log(a);
console.log(b);
console.log(Obj);

class Hello extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render() {
        return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is </h2>
        </div>
    );
    }
}
ReactDOM.render(<Hello />,document.getElementById('demo'));



