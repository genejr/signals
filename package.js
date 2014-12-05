Package.describe({
  summary: "A collection that contains all the US states.",
  version: "1.0.3",
  name: "digilord:us-states",
  homepage: "https://github.com/digilord/dm-us-states",
  git: "https://github.com/digilord/dm-us-states.git"
});

Npm.depends({
  'csv':'0.4.0'
})

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");

  api.use(['coffeescript'], ['client','server']);
  api.addFiles('private/states.csv', 'server', {isAsset: true});
  api.addFiles(['client/states.coffee'], ['client']);
  api.addFiles(['collections/states.coffee'], ['client','server']);
  api.addFiles(['server/states.coffee'], ['server']);

});
