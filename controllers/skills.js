import { Skill } from '../models/skill.js'

// Import the model that we exported in the Todo.js model file

// Inside the index controller, use the Todo model to query for ALL todos
function index(req, res) {
  Skill.find({})
  .then(skills => { // todos represents the result of the query, in this case ALL todos
    res.render('skills/index', {
      skills: skills,
    })
  })
  .catch(error => { // If there's an error, console.log it and redirect back home!
    console.log(error)
    res.redirect('/')
  })
}
function newSkill(req, res) {
  res.render('skills/new')
}
function create(req, res) {
  console.log(req.body)
  req.body.obtained = true
  Skill.create(req.body)
  .then(skill => {
		// Notice we are doing a redirect here!
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function show(req, res) {
  Skill.findById(req.params.skillId)
  .then(skill => {
    res.render('skills/show', {
      skill: skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}
export {
  index,
  newSkill as new,
  create,
  show

}