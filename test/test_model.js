/******************************************************
  * Model tests
  *****************************************************/

module("Model");

test("Create package", function () {
  var indata = {
    title: 'My New Package',
    notes: '## Xyz',
    tags: ['abc', 'efg']
  };
  var pkg = new CKAN.Model.Package(indata);

  equals(pkg.get('title'), indata.title);
  equals(pkg.notesHtml(), '<h2>Xyz</h2>');
});