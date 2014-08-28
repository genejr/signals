Package.describe({
  summary: "A collection that contains all the countries in the world.",
  version: "0.1",
  name: "digilord:countries"
  homepage: "https://github.com/digilord/dm-countries",
  git: "https://github.com/digilord/dm-countries.git"
});

Npm.depends({
  'csv':'0.4.0'
})

Package.on_use(function (api) {
  api.use(['coffeescript'], ['client','server']);
  api.add_files(['client/countries.coffee'], ['client'])
  api.add_files(['collections/countries.coffee'], ['client','server'])
  api.add_files(['server/countries.coffee'], ['server'])
  api.add_files('private/country.csv', 'server', {isAsset: true})
});