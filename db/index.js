const conn = require('./conn');
const Sequelize = conn.Sequelize;
const Employee = require('./Employee');

const sync = () => {
  return conn.sync({force: true})
  .then(()=> Employee.bulkCreate([
      {firstName: 'JC', lastName:'Mauras', nicknames:['jjj','Mau']},
      {firstName: 'Hal', lastName:'Burr'},
      {firstName: 'Jay', lastName:'Newburry'},
      {firstName: 'Peter', lastName:'Chapman', nicknames:['Pete']},
      {firstName: 'Jonathan', lastName:'Klop',nicknames: ['Jon']}
    ])
  )
  .then(() => { return Employee.findAll()})
  .then(employees => console.log(`employee ${employees}`))
  .catch(err => console.log(`err ${err}`))
}

module.exports = {
  sync,
  models: {
    Employee
  }
}
