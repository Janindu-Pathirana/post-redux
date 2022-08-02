import React from "react";
import {connect} from "react-redux";
import { fetchPost } from "../actions";






class PostList extends React.Component{


    componentDidMount(){

        console.log("done");
        
        this.props.fetchPost();
        

    }
    render(){
        
        console.log(this.props);

        return(
            <div>
                {this.props.responce}
            </div>
        );

    }
}


const mapStateToProps = state=>{
    

    return {
        responce :state.responce,
    };
}


export default connect(mapStateToProps,{fetchPost})(PostList);