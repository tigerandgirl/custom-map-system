import React from 'react';
import CommentItem from './CommentItem';
import { observer } from 'mobx-react';
import commentStore from '../../stores/commentStores';

@observer
export default class extends React.Component {
    constructor(props) {
		super(props)
    }
    
    componentDidMount() {
        // console.log(this.props.store.comment)
    }
    
    render() {
        return(
            <div className='comment-list'>
                {commentStore.comment.map((item, i) => 
                    // key值不能作为props传递
                    <CommentItem key={i} index={i} onDeleteComment={commentStore.deleteComment} username={item.username} content={item.content} createdTime={item.createdTime}/>
                )}
            </div>
        )
    }
}