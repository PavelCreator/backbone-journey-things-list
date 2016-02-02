var Section = Backbone.Model.extend({});

var SectionView = Backbone.View.extend({
  tagName: 'div',
  template: _.template(
    '<h4 class="section-header col-md-12 tac"><%= name %>:</h4>'
  ),
  render: function () {
    this.$el
      .addClass('section row ' + this.model.get('id') + ' ' + this.model.get('visibility'))
      .append(this.template(this.model.toJSON()));
    this.addOne();
  },
  addOne: function () {
    var items = new ItemList();
    var thisBackup = this;
    items.fetch().then(function () {
      var filterResult = items.filter(function(item){
        return item.get('group') === thisBackup.model.get('id');
      })
      var itemListView = new ItemListView({collection: filterResult});
      itemListView.render();
      thisBackup.$el.append(itemListView.el);
    });
  }
});
