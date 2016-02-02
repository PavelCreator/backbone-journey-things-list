var ItemList = Backbone.Collection.extend({
  model: Item,
  url: 'json/items.json'
});

var ItemListView = Backbone.View.extend({
  tagName: 'ul',
  render: function () {
    this.$el
      .addClass('section-list col-md-12')
      .append('');
    this.collection.forEach(this.addOne, this);
  },
  addOne: function (model) {
    var itemView = new ItemView({model: model});
    itemView.render()
    this.$el.append(itemView.el);
  }
});