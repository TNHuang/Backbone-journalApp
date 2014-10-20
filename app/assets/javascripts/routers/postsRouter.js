JournalApp.Routers.PostsRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.collection = options.collection;
  },
  routes: {
    "": "postsIndex",
    "posts/new": "postsNew",
    "posts/:id": "postsShow",
    "posts/:id/edit": "postsEdit",
  },


  postsIndex: function () {
    var posts = this.collection;
    // new JournalApp.Collections.Posts().create({"title": "new post2", "body": "post body"});
    var view = new JournalApp.Views.PostsIndex({collection: posts});
    posts.fetch({
      success: function () {
        this._swapView(view, $('.sidebar'))
      }.bind(this)
    });
  },

  postsNew: function () {
    var post = new JournalApp.Models.Post;
    var posts = this.collection;
    var view = new JournalApp.Views.PostsForm({model: post, collection: posts});
    this._swapView(view, $('.content'));
  },

  postsShow: function (id) {
    var post = this.collection.getOrFetch(id);
    var view = new JournalApp.Views.PostsShow({model: post});
    post.fetch({
      success: function () {
        this._swapView(view, $('.content'));
      }.bind(this)
    });
  },

  postsEdit: function (id) {
    var post = this.collection.getOrFetch(id);
    var posts = this.collection;
    var view = new JournalApp.Views.PostsForm({model: post, collection: posts});

    post.fetch({
      success: function () {
        this._swapView(view, $('.content'));
      }.bind(this)
    });
  },



  _swapView: function (newView, target) {
    if (this.currentView === $('.content')) {
      this.currentView.remove();
    }

    target.html(newView.render().$el);

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