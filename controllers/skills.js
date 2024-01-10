import { skills } from '../data/skill-data.js'


function index(req, res) {
  res.render('skills/index', {
    skills: skills,
    title:'Skills'
  })
}

export{
  index,
}