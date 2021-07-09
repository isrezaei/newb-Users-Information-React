import React , {Component} from "react";
import ShowData from "./ShowData";
import GetDataApi from "../Request/GetDataApi";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner"
import {FcNext , FcPrevious} from 'react-icons/fc'

class GetData extends Component{
    constructor(props) {
        super(props);

        this.state = {
            UserInfo : null ,
            PrevPros : null
        }
    }


    static getDriveStateFromProps(nextProps , prevState){
        if(nextProps.Current !== prevState.PrevPros){
            return{
                PrevPros : nextProps.Current
            }
        }
    }


    GetDate(Current){
        GetDataApi(Current).then(UserInfo => this.setState({UserInfo}))
    }


    componentDidMount() {

        this.GetDate(this.props.Current)

    }

    componentDidUpdate(prevProps) {
        if (prevProps.Current !== this.props.Current){
            this.GetDate(this.props.Current)
        }
    }


    render() {
        return (
            <>
                {this.state.UserInfo
                    ?
                    <div className={'Content'}>
                        <div className={'Buttons'}>
                            <button onClick={this.props.Current > 1 ? this.props.PrevCurrent : this.props.RestartPrevCurrent }><FcPrevious size={'35px'}/></button>
                            <button onClick={this.props.Current < 10 ? this.props.NextCurrent : this.props.RestartNextCurrent }><FcNext size={'35px'}/></button>
                        </div>
                        <ShowData Data={this.state.UserInfo} Current={this.props.Current}/>
                    </div>
                    :
                    <div className={'Loader'}>
                        <Loader type="Puff" color="#aed581"/>
                    </div>
                }
            </>
        )
    }
}

export default GetData