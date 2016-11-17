import Ember from 'ember';

export default Ember.Controller.extend({

  data: [...Array(100)].map((el, i) => `Lorem ${i}`)

});
