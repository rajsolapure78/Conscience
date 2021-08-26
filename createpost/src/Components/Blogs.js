import React, {useState,useEffect} from 'react'
import ReactDataGrid from 'react-data-grid';
import { connect } from 'react-redux';
import * as actions from '../actions/createblog'
const Blogs = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "20px auto"
  }

  useEffect(()=>{
    props.fetchallblogstotal()

    console.log(" --> "+props.createdblogslist)
    props.createdblogslist.forEach(function(record,index) {
      //console.log(record.data);
    }); 
    /*props.createdblogslist.map((record,index)=>{
      return (
        console.log("pos of "+record[0])
      )
    })*/
  },[])

  return (
    <div className="container" style={myStyle} >
      <h3>My Blogs</h3>
      {/*App()*/}
    </div>
  )
}
const mapStateToProps = state =>({  
    createdblogslist: state.createblog.createdblogs
  })
const mapActionsToProps = {
  fetchallblogstotal: actions.fetchallblogs
}
export default connect(mapStateToProps,mapActionsToProps)(Blogs);