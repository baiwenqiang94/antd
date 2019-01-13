import React,{Component} from 'react';

class Shq extends Component{
    constructor(){
        super()
        this.state={
            name:"赛罕区"
        }
    }
    render(){
        let {name} = this.state
        return(
            <div>
                <h1>{name}</h1>
            </div>
        )
    }
}

export default Shq