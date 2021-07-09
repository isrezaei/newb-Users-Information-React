import React , {Component} from "react";
import ShowData3 from "./3-ShowData";
import GetDataApi from "../Request/GetDataApi";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner"
import {FcNext , FcPrevious} from 'react-icons/fc'

class GetData2 extends Component{
    constructor(props) {
        super(props);

        this.state = {
            UserInfo : null ,
            PrevProps : null
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


    static getDerivedStateFromProps(nextProps , prevState){
        if(nextProps.Current !== prevState.PrevProps){
            return{
                UserInfo : null ,
                PrevProps : nextProps.Current
            }
        }
        return null
    }


    render() {

        console.log(this.state.UserInfo)

        return (
            <>
                {this.state.UserInfo
                    ?
                    <div className={'Content'}>
                        <div className={'Buttons'}>
                            <button onClick={this.props.Current > 1 ? this.props.PrevCurrent : this.props.RestartPrevCurrent }><FcPrevious size={'35px'}/></button>
                            <button onClick={this.props.Current < 10 ? this.props.NextCurrent : this.props.RestartNextCurrent }><FcNext size={'35px'}/></button>
                        </div>
                        <ShowData3 Data={this.state.UserInfo} Current={this.props.Current}/>
                    </div>
                    :
                    <div className={'Loader'}>
                        <Loader type="Grid" color="#aed581"/>
                    </div>
                }
            </>
        )
    }
}

export default GetData2