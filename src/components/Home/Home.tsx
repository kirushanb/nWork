import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import { addTaskAction,loadTasksAction } from "../../actions/taskActions";



const Home = (props:any) => {
    useEffect(() => {
        props.getTask()
    },[]);


    const [articleFinal, setArticleFinal] = useState(props.tasks);

    const sortVote = () => {
        const articleFilter = [...articleFinal].sort(
            (a, b) => b.upvotes - a.upvotes
        );
        setArticleFinal(articleFilter);
    };


    return (
        <>
        Home Works!
        </>
    )
}

const mapStateToProps = (state: any) => {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addtask: (data: any) => {
            dispatch(addTaskAction(data))
        },
        getTask:() => {
            dispatch(loadTasksAction())
        },
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
