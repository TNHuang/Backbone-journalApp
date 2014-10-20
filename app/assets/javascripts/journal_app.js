window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var posts = new JournalApp.Collections.Posts();
    new JournalApp.Routers.PostsRouter({collection: posts});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
