import React , {Component} from "react";
import GetData2 from "./2-GetData";
import '../Style/Style.css'


export default class Master1 extends Component{

    constructor(props) {
        super(props);

        this.state = {
            Current : 1 ,
        }
    }


    NextCurrent = () => {
        this.setState(state =>{
            return{
                Current : state.Current + 1
            }
        })
    }

    PrevCurrent = () => {
        this.setState(state =>{
            return{
                Current : state.Current - 1
            }
        })
    }

    RestartNextCurrent = () => {
        this.setState({
            Current : 1
        })
    }

    RestartPrevCurrent = () => {
        this.setState({
            Current : 10
        })
    }


    render() {

        return (
            <section className='Project'>

                <GetData2 Current={this.state.Current}
                          NextCurrent ={this.NextCurrent}
                          PrevCurrent={this.PrevCurrent}
                          RestartNextCurrent={this.RestartNextCurrent}
                          RestartPrevCurrent={this.RestartPrevCurrent}
                />

            </section>
        )
    }
}

