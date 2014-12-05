console.log "Adding states"

Meteor.startup () ->
  console.log "Adding states"
  # States collection initialization.
  states_csv = Assets.getText('private/states.csv')
  parse = Npm.require('csv').parse
  states_count = States.find().count()
  if states_count is 0
    Future  = Npm.require('fibers/future')
    future = new Future()
    parse states_csv, {comment: '#'}, (err, data)->
        future.return(data)

    results = future.wait()
    for state in results
      iso = state[0]
      name = state[1]
      selected = false

      States.insert {iso: iso, name: name, selected: selected}

Meteor.publish 'states', () ->
  return States.find({})
