DROP TABLE IF EXISTS tasks CASCADE;
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  category_name VARCHAR(255) NOT NULL,
  priority INTEGER,
  date_created TIMESTAMP NOT NULL
);
