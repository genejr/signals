Package.describe({
  summary: "A collection that contains all the countries in the world."
});

Package.on_use(function (api, where) {
  api.use(['coffeescript'], ['client','server']);
  api.add_files(['collections/countries.coffee'], ['client','server'])

  api.add_files(['server/countries.coffee'], ['server'])
});