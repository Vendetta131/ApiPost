module.exports = function(app, Post) {
  app.get('/:id',(req,res,next)=>{
    Post.findOne({_id:req.params.id},(err,post)=>{
      if(err) res.send('Nothing')
      
      res.json(post);
    })
  });

  app.post('/',(req,res,next)=>{
    let post = new Post({
      title: req.body.title,
      description: req.body.description
    })
    post.save((err,post)=>{
      if (err) next(err);
      
      res.json(post);
    })
  });

  app.delete('/:id',(req,res,next)=>{
    Post.remove({_id:req.params.id},(err,post)=>{
      if(err) res.send('Nothing')
      res.json(post);
    })
  });

  app.put('/:id',(req,res,next)=>{
    Post.findOne({_id:req.params.id},(err,post)=>{
      post.title = req.body.title || post.title;
      post.description = req.body.description || post.description;
      post.save((err,post)=>{
        if (err) next(err);
        
        res.json(post);
      })
    })
  });
}