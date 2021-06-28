/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();


module.exports = (db) => {
  //   //login
  //   router.post("/login", (req, res) => {
  //     let loginCheck = false;
  //     let { email, password } = req.body;
  //   })
  //   if (!email || !password) {
  //     loginCheck = false;
  //     //error message
  //     res.redirect("/");
  //   }
  // }

  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // login route
  router.get('/login/:id', (req, res) => {
    req.session.user_id = req.params.id;
    res.redirect('/');
  });

  // make edit route for user profiles
  router.get("/edit/:id", (req, res) => {
    const templateVars = {
      user: req.params.id,
    };

    res.render("edit", templateVars);
    return;
  });

  return router;
};
