JournalApp.Views.PostsIndex = Backbone.View.extend({
  template: JST["posts/index"],

  render: function () {
    var renderedContent = this.template( {posts: this.collection} );

    this.$el.html(renderedContent);
    return this;
  },

  initialize: function () {
    this.listenTo(this.collection, "add change:title remove reset", this.render)

  },

  events: {
    "click button.delete": "deletePost"
  },

  deletePost: function (event) {
    event.preventDefault();
    var postId = $(event.currentTarget).data("id");
    this.collection.getOrFetch(postId).destroy();
  }

});