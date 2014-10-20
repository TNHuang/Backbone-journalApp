JournalApp.Routers.PostsRouter = Backbone.Router.extend({
  routes: {
    "": "postsIndex",
    "posts/:id": "postsShow"
  },


  postsIndex: function () {
    var posts = new JournalApp.Collections.Posts;
    new JournalApp.Collections.Posts().create({"title": "new post2", "body": "post body"});
    var view = new JournalApp.Views.PostsIndex({collection: posts});
    posts.fetch({
      success: function () {
        this._swapView(view)
      }.bind(this)
    });
  },

  postsShow: function (id) {
    var post = new JournalApp.Collections.Posts().getOrFetch(id);
    var view = new JournalApp.Views.PostsShow({model: post});
    post.fetch({
      success: function () {
        this._swapView(view);
      }.bind(this)
    });
  },

  _swapView: function (newView) {
    if (this.currentView) {
      this.currentView.remove();
    }
    $("body").append(newView.render().$el);

    this.currentView = newView;
  }

});

// $(function () {
//     var posts = new JournalApp.Collections.Posts;
//     var view = new JournalApp.Views.PostsIndex( { collection: posts});
//     posts.fetch({
//       success: function () {
//         $('body').append(view.render().$el);
//       }
//     });
// });