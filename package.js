Package.describe({
  summary: "A collection that contains all the countries in the world.",
  version: "0.1.0",
  name: "digilord:countries",
  homepage: "https://github.com/digilord/dm-countries",
  git: "https://github.com/digilord/dm-countries.git"
});

Npm.depends({
  'csv':'0.4.0'
})

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use('meteorhacks:npm@1.1.3')

  api.use(['coffeescript'], ['client','server']);
  api.addFiles('private/country.csv', 'server', {isAsset: true})
  api.addFiles(['client/countries.coffee'], ['client'])
  api.addFiles(['collections/countries.coffee'], ['client','server'])
  api.addFiles(['csv.js'], ['server'])
  api.addFiles(['server/countries.coffee'], ['server'])

});
