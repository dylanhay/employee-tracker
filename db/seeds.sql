INSERT INTO departments (name)
VALUES
  ('Melody'),
  ('Rhythm'),
  ('Management'),
  ('Production');

INSERT INTO roles (title, salary, department_id)
VALUES
  ('Guitarist', 100000, 1),
  ('Bassist', 100000, 2),
  ('Drummer', 90000, 2),
  ('Manager', 80000, 3),
  ('Producer', 80000, 4),
  ('Keyboardist', 80000, 1);

INSERT INTO employees (first_name, last_name, role_id)
VALUES
  ('John', 'Lennon', 1),
  ('Paul', 'McCartney', 2),
  ('George', 'Harrison', 1),
  ('Ringo', 'Starr', 3),
  ('Brian', 'Epstein', 4),
  ('George', 'Martin', 5),
  ('Billy', 'Preston', 6);