const skills = [
    {id: 125223, skill: 'HTML', done: true},
   {id: 127904, skill: 'CSS', done: false},
   {id: 139608, skill: 'JavaScript', done: false}
];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
  
  function deleteOne(id) {
    id = parseInt(id);
    // Find the index of the skill
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }

  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }
  
  function getAll() {
    return skills;
  }
 
  function getOne(id) {
    id = parseInt(id)

    return skills.find(skill => skill.id === id);
  }