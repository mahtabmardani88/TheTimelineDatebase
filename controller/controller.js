
const article = require('./mongo')

const getHomePage = (req, res)=> {
  article.find()
 .sort({created_at : -1})
 .then((result) => res.render('index', {article: result}))
 .catch(err => console.log(err))
}


const createArticle = (req, res) => {
    const newArticle = new article(req.body)
    newArticle.save()
    .then(() => res.redirect('home'))
    .catch(err => console.log(err))
  }

const getFullArticle = (req, res) => {
article.findById(req.params.id)
.then((result) => res.render(`index`,{article: result}))
.catch(err => console.log(err))
}



module.exports = { 
    getHomePage, 
    getFullArticle,
    createArticle

}