DROP TABLE bitings;
DROP TABLE zombies;
DROP TABLE victims;


CREATE TABLE zombies (
  id SERIAL8 PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(255)
);

CREATE TABLE victims (
  id SERIAL8 PRIMARY KEY,
  name VARCHAR(255),
  run_speed INT2
);

CREATE TABLE bitings (
  id SERIAL8 PRIMARY KEY,
  victim_id INT8 REFERENCES victims(id),
  zombie_id INT8 REFERENCES zombies(id)
);

INSERT INTO zombies (name, type) VALUES ('Jarrod', 'witch');

INSERT INTO zombies (name, type) VALUES ('Sandy', 'hunter');

INSERT INTO zombies (name, type) VALUES ('Zsolt', 'tank');


INSERT INTO victims (name, run_speed) VALUES ('Reece', 6);

INSERT INTO victims (name, run_speed) VALUES ('Eugene', 7);

INSERT INTO victims (name, run_speed) VALUES ('Glen', 12);

INSERT INTO victims (name, run_speed) VALUES ('Tony', 10);

INSERT INTO bitings (victim_id, zombie_id) VALUES (1, 1);

INSERT INTO bitings (victim_id, zombie_id) VALUES (2, 3);

INSERT INTO bitings (victim_id, zombie_id) VALUES (3, 2);

INSERT INTO bitings (victim_id, zombie_id) VALUES (4, 1);

-- SELECT * FROM bitings;

SELECT * FROM zombies WHERE name = 'Jarrod';

SELECT victim_id FROM bitings WHERE zombie_id = 1;

SELECT name FROM victims WHERE id IN (1,4)
