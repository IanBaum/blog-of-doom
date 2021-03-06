import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('post', params.post_id)
  },
  actions:{
    update(post, parmas){
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('index');
    },
    destroyPost(post){
      post.destroyRecord();
      this.transitionTo('index');
    }
  }
});
