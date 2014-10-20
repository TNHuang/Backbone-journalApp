JournalApp.Views.PostsForm = Backbone.View.extend({
  template: JST["posts/_form"],

  render: function () {
    var content = this.template({post: this.model, posts: this.collection});
    this.$el.html(content);
    return this;
  },

  events: {
    "submit form": "CreateOrUpdatePost"
  },

  CreateOrUpdatePost: function (event) {
    event.preventDefault();

    var formData = $('form').serializeJSON();
    var postId = $('form').data('id');

    if (postId) {
      var post = this.collection.getOrFetch(postId);
      post.save(formData, {patch: true});
    }else{
      var post = this.collection.create(formData);
    }

    Backbone.history.navigate("#", {trigger: true})
  }


});