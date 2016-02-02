var Item = Backbone.Model.extend({
  defaults: function () {
    return {
      gender: "male female",
      status: "incomplete"
    }
  }
});

var ItemView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'change input':'toggleStatus'
  },
  template: _.template('<input type="checkbox" <% if(status === "complete") print("checked") %> />'+
    '<span class="<%= status %>"><%= title %></span>'),
  initialize: function(){
    this.model.on('change', this.render, this);
  },
  toggleStatus: function () {
    if (this.model.get('status') === 'incomplete') {
      this.model.set({"status":"complete"});
    } else {
      this.model.set({"status":"incomplete"});
    }
    this.model.save();
  },
  render: function () {
    this.$el
      .attr('id', this.model.get('id'))
      .addClass('col-lg-3 col-md-4 col-sm-6 col-xs-12 ' + this.model.get('group') + " "
                  + this.model.get('gender'))
      .html(this.template(this.model.toJSON()));
  }
});