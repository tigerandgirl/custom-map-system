import React from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import './index.css';

export default class extends React.Component {
    constructor(props) {
		super(props)
    }

    render() {
        return(
            <div className='wrapper'>
                <CommentInput />
                <CommentList/>
            </div>
        )
    }
}