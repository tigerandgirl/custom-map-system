import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            timeString: '',
            deleteShow: false
        }
    }
    
    componentDidMount() {
        this._updateTimeString()
        this._timer = setInterval(
        this._updateTimeString.bind(this),
        5000)
    }

    componentWillUnmount() {
        clearInterval(this._timer)
    }

    _updateTimeString() {
        const duration = (+Date.now() - this.props.createdTime) / 1000
        this.setState({
          timeString: duration > 60
            ? `${Math.round(duration / 60)} 分钟前`
            : `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }

    //防止跨站脚本攻击（如 <script>标签任意引入js文件执行脚本） code 以``包裹输入
    _getProcessedContent (content) {
        return content
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
        .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
    }

    handleShowDeleteBtn() {
        this.setState({
            deleteShow: !this.state.deleteShow
        })
    }

    handleDeleteComment(index) {
        index = this.props.index;
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(index);
        }
    }

    render() {
        return(
            <div className='comment' onClick={this.handleShowDeleteBtn.bind(this)}>
                <div className='comment-username'>
                    <span>{this.props.username}</span>：
                </div>
                <p className='comment-content' dangerouslySetInnerHTML={{
		  __html: this._getProcessedContent(this.props.content)
		}}></p>
                <span className='comment-createdtime'>
                    {this.state.timeString}
                </span>
                <span className='comment-delete' onClick={this.handleDeleteComment.bind(this)}>
                    删除
                </span>
            </div>
        )
    }
}