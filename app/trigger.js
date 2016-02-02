var Trigger = Backbone.Model.extend({});

var TriggerView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'change input': 'toggleVisibility'
  },
  initialize: function () {
    this.model.on('change', this.render, this);
  },
  template: _.template('<input id="<%= id %>" type="checkbox" <% if(visibility === "visible") print("checked") %> />' +
    '<span class="<%= visibility %>"><%= short_name %></span>'
  ),
  toggleVisibility: function () {
    console.log("this.model.get('visibility') = ");
    console.log(this.model.get('visibility'));
    if (this.model.get('visibility') === 'visible') {
      this.model.set({"visibility": "unvisible"});
    } else {
      this.model.set({"visibility": "visible"});
    }
  },
  render: function () {
    this.$el
      .addClass('col-lg-3 col-md-4 col-sm-6 col-xs-12')
      .html(this.template(this.model.toJSON()));
  }
});