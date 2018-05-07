import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import commentStore from '../../stores/commentStores';

@observer
export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: commentStore.username,
            content: ''
        }
    }
    
    componentDidMount() {
        
    }
    //监听用户名输入
    handleUsernameChange (event) {
        this.setState({
          username: event.target.value
        })
    }
    //监听评论内容输入
    handleContentChange (event) {
        this.setState({
          content: event.target.value
        })
    }
    //监听发送按钮提交
    handleSubmit (event) {
        const comment = {
            username: this.state.username,
            content: this.state.content,
            createdTime: +new Date()
        }
        commentStore.addComment(comment);
        this.setState({ content: '' })
    }

    render() {
        return(
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>
                        用户名：
                    </span>
                    <div className='comment-field-input'>
                        <input 
                            value={this.state.username}
                            onChange={this.handleUsernameChange.bind(this)}
                        />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>
                        评论内容：
                    </span>
                    <div className='comment-field-input'>
                        <textarea 
                            value={this.state.content}
                            onChange={this.handleContentChange.bind(this)}
                        />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}