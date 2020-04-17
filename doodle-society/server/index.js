const fastify = require('fastify')({ logger: true });
require('dotenv').config();
const path = require('path');
const db = require('./db');

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, '../build')
});

const PORT = process.env.PORT || 4000;

const start = async () => {
  try {
    await fastify.listen(PORT);
  }
  catch(error) {
    fastify.log.error(error);
    process.exit(1);
  }
}

start();

fastify.get('/api/noodle', (req, res) => {
  res.status(200).send('My Noodle');
});

fastify.get('/api/doodle', (req, res) => {
  res.status(200).send('Doodle');
});

fastify.post('/api/users', (req, res) => {
  db.getUserByGoogleId(req, res)
  .then((user) => {
    if(user.rowCount) {
      console.log(user.rows);
      console.log("already logged in as " + user.rows[0].name);
      res.status(200).send(user.rows[0].id);
      return;
    }
    return db.createUser(req, res);
  })
  .then((results) => {
    if (results) {
      res.status(201).send(results.rows[0].id);
    }
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send();
  });
});

fastify.get('/api/users/:id', (req, res) => {
  db.getUserById(req, res)
    .then(user => res.status(200).send(user.rows[0]))
    .catch((err) => {
      console.error(err);
      res.status(500).send();
    })
});

fastify.post('/api/images', (req, res) => {
  db.addImage(req, res)
    .then(image => res.status(201).send(image))
    .catch((err) => {
      console.error(err);
      res.status(500).send();
    })
});

fastify.get('/api/images/:id', (req, res) => {
  db.getUserUploads(req, res)
    .then(images => res.status(200).send(images.rows))
    .catch((err) => {
      console.error(err);
      res.status(500).send();
    });
});

fastify.get('/api/doodles/:id', (req, res) => {
  db.getUserDoodles(req, res)
    .then(doodles => res.status(200).send(doodles.rows))
    .catch((err) => {
      console.error(err);
      res.status(500).send();
    });
});

fastify.post('/api/doodles', (req, res) => {
  db.addDoodle(req, res)
    .then(results => res.status(201).send(results.rows[0].id))
    .catch((err) => {
      console.error(err);
      res.status(500).send();
    })
});

fastify.get('/api/originals/:id', (req, res) => {
  db.getImageById(req, res)
    .then(results => res.status(200).send(results.rows[0].url))
    .catch((err) => {
      console.error(err);
      res.status(500).send();
    });
});

fastify.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});