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
    var cTemplate = _.template('<input type="text" value=<%=escape("title")%>>');
    $(events.currentTarget).html(cTemplate(this.model));
  },

  editBody: function (events) {
    events.preventDefault();
    var cTemplate = _.template('<textarea><%=escape("body")%></textarea>');
    $(events.currentTarget).html(cTemplate(this.model));
  },

  updateTitle: function (events) {
    events.preventDefault();
    var value = $(events.currentTarget).find("input").val();

    this.model.set("title", value);
    this.model.save();
    this.render();
  },

  updateBody: function (events) {
    events.preventDefault();
    var value = $(events.currentTarget).find("textarea").val();

    this.model.set("body", value);
    this.model.save();
    this.render();
  }

});

