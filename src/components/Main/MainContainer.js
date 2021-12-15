import React from 'react';
import { connect } from 'react-redux';
import {changeId} from './../../reduxe/action';
import Main from './Main';

const MainContainer = ({tasksId, changeId}) => {
    return <Main tasksId = {tasksId} changeId = {changeId}/>
}

const mapStateToProps = (state) => {
    
    return {
        tasksId: state.tasksId,
    }
}

export default connect(mapStateToProps, {changeId})(MainContainer);