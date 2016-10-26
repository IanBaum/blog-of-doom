import Ember from 'ember';

export default Ember.Component.extend({

  actions:{
    delete(post){
      if(confirm('Are you sure you want to banish this demon?')){
        this.sendAction('destroyPost', post);
      }
    }
  }
});
