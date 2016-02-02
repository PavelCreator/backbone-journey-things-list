var TriggerList = Backbone.Collection.extend({
  model: Trigger,
  url: 'json/sections.json'
});

var TriggerListView = Backbone.View.extend({
  tagName: 'ul',
  render: function () {
    this.$el
      .addClass('section-list col-md-12')
      .append('');
    this.model.models.forEach(this.addOne, this);
  },
  addOne: function (model) {
    var triggerView = new TriggerView({model: model});
    triggerView.render()
    $(document).on("click", "#" + triggerView.model.get('id'), function () {
      $("." + triggerView.model.get('id')).toggleClass('hide');
    });
    this.$el.append(triggerView.el);
  }
});