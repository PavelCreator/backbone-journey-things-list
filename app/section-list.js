var SectionList = Backbone.Collection.extend({
  model: Section,
  url:"json/sections.json"
});

var SectionListView = Backbone.View.extend({
  tagName: 'div',
  render: function () {
    this.model.models.forEach(this.addOne, this);
  },
  addOne: function (model) {
    var sectionView = new SectionView({model: model});
    sectionView.render();
    this.$el.append(sectionView.el);
  }
});