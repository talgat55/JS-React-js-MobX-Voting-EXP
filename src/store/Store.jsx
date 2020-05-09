import {observable, action, computed} from 'mobx';

class Store {
    @observable likeCount = 0;

    @observable comment = ['Wow', 'Awesome'];

    @action updateCount() {
        this.likeCount++;
    }

    @action postComment(comment) {
        this.comment.push(comment)
    }


    @computed get commentCount() {
        return this.comment.length;
    }

}

const storeInstance = new Store();

export default  storeInstance;