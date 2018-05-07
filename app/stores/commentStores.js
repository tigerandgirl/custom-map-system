//公共store区域
import {useStrict, observable, action, computed} from 'mobx';

useStrict(true);

class commentStore {
    constructor(){
      this.getComment();
      this.getUsername();
    }
    @observable comment = [];
    @observable username = '';
    @action getComment = async () => {
        const comments  = JSON.parse(localStorage.getItem('comment'));
        this.comment = comments ? comments : [];
    };
    //@computed 不能带参数
    @action addComment = async (commentItem) => {
        this.comment.push(commentItem);
        localStorage.setItem('comment', JSON.stringify(this.comment));
        localStorage.setItem('username', commentItem.username);
    }
    //不加async异步执行会导致this.comment为undefined
    @action deleteComment = async (commentIndex) => {
        const comments = this.comment;
        this.comment = [...comments.slice(0, commentIndex), ...comments.slice(commentIndex + 1)];
        localStorage.setItem('comment', JSON.stringify(this.comment));
    }
    @action getUsername = async () => {
        this.username = localStorage.getItem('username')
    }
}

export default new commentStore();