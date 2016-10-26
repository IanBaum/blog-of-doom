import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions:{
    postFormShow(){
      this.set('addNewPost', true);
    },

    savePost(){
      var params = {
        title: this.get('title'),
        date: this.get('date'),
        author: this.get('author'),
        image: this.get('image'),
        content: this.get('content'),
      };
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});
