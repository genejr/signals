console.log "Adding countries"

Meteor.startup () ->
  console.log "Adding countries"
  # Countries collection initialization.
  countries_csv = Assets.getText 'private/country.csv', (err) ->
    console.log err
  csv = Meteor.npmRequire('csv')
  countries_count = Countries.find().count()
  if countries_count is 0
    Future  = Npm.require('fibers/future')
    future = new Future()
    csv()
    .from.string(countries_csv, {comment: '#'})
    .to.array (data) ->
      return future.return(data)

    results = future.wait()
    for country in results
      iso = country[0]
      name = country[1]
      selected = false

      # Setup the default country.  Do this so there is no
      # flashing in the interface when the country list is
      # populated then changed when there is no user selected
      # country.
      if name is 'United States'
        selected = true

      Countries.insert {iso: iso, name: name, selected: selected}

Meteor.publish 'countries', () ->
  return Countries.find({})
