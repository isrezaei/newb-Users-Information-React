import React ,{Component} from "react";
import Level from "./Level";
import ExploreTeam from "./ExploreTeam";



export default class Footer extends Component{

    constructor(props) {
        super(props);

        this.state={
            AllUsers :
                [
                    [50,'#cddc39'],
                    [70,'#9ccc65'],
                    [30,'#ff8a65'],
                    [25,'#e57373'],
                    [42,'#ffb74d'],
                    [80,'#8bc34a'],
                    [60,'#9ccc65'],
                    [12,'#ff5722'],
                    [50,'#cddc39'] ,
                    [65,'#9ccc65']
                ]
        }
    }


    render() {

        return (
            <>
                <div className={'Data'}>
                    <p>Website</p>
                    <p>{this.props.WebSite}</p>
                </div>

                <div className={'ParentLevel'}>
                    <Level Width={this.state.AllUsers} Current={this.props.Current}/>
                </div>
                <ExploreTeam/>


            </>
        )
    }
}

