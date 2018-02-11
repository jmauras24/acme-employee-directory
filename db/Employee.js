const _conn = require('./conn');
const Sequelize = _conn.Sequelize;

const Employee = _conn.define('employee',{
  firstName:{
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName:{
    type: Sequelize.STRING,
    allowNull: false
  },
  nicknames:{
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
})

// _conn.sync({force: true})
//   .then(()=> Employee.create({firstName: 'JC', lastName:'Maurs'}))
//   .then(employee => console.log(`employee ${employee}`))
//   .catch(err => console.log(`err ${err}`))

module.exports = Employee;
