var sectionList = new SectionList();
sectionList.fetch().then(function(){
  var sectionListView = new SectionListView({model: sectionList});
  sectionListView.render();
  $('#app').html(sectionListView.el);
});
var triggerList = new TriggerList();
triggerList.fetch().then(function(){
  var triggerListView = new TriggerListView({model: triggerList});
  triggerListView.render();
  console.log("triggerListView = ");console.log(triggerListView);
  $('#trigger-list').html(triggerListView.el);
});