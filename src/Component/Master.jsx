import React , {Component} from "react";
import GetData from "./GetData";
import '../Style/Style.css'


export default class Master extends Component{

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

                <GetData Current={this.state.Current}
                         NextCurrent ={this.NextCurrent}
                         PrevCurrent={this.PrevCurrent}
                         RestartNextCurrent={this.RestartNextCurrent}
                         RestartPrevCurrent={this.RestartPrevCurrent}
                />

            </section>
        )
    }
}

