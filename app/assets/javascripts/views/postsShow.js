JournalApp.Views.PostsShow = Backbone.View.extend({
  template: JST["posts/show"],

  render: function () {
    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  },

  events: {
    "dblclick .title": "editTitle",
    "dblclick .body": "editBody",
    "blur .title": "updateTitle",
    "blur .body": "updateBody"
  },

  editTitle: function (events) {
    events.preventDefault();
        console.log("enter title")
    $('p.title').html("Title: <input type='text' class='title'>");

  },

  editBody: function (events) {
    events.preventDefault();
    console.log("enter body")
  },

  updateTitle: function (events) {
    events.preventDefault();
    var formData = $('input.title').serializeJSON();
    console.log($('input.title'));
    this.model.save(formData, {patch: true});
    console.log(this.model);
    this.render();
  }

});

