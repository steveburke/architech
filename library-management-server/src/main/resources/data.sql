INSERT INTO Author (id, first_name, last_name) VALUES (1,'Heller', 'Joseph');
INSERT INTO Author (id, first_name, last_name) VALUES (2,'F. Scott','Fitzgerald');
INSERT INTO Author (id, first_name, last_name) VALUES (3,'Mark', 'Twain');
INSERT INTO Author (id, first_name, last_name) VALUES (4,'J.D.', 'Salinger');
INSERT INTO Author (id, first_name, last_name) VALUES (5,'John', 'Steinbeck');
INSERT INTO Author (id, first_name, last_name) VALUES (6,'Ray', 'Bradbury');
INSERT INTO Author (id, first_name, last_name) VALUES (7,'Nathaniel', 'Hawthorne');
INSERT INTO Author (id, first_name, last_name) VALUES (8,'Truman', 'Capote');
INSERT INTO Author (id, first_name, last_name) VALUES (9,'Margaret', 'Mitchell');
INSERT INTO Author (id, first_name, last_name) VALUES (10,'Margaret', 'Atwood');

INSERT INTO Genre (id,genre_name) VALUES (1,'Satire');
INSERT INTO Genre (id,genre_name) VALUES (2,'Fiction');
INSERT INTO Genre (id,genre_name) VALUES (3,'Dystopian');
INSERT INTO Genre (id,genre_name) VALUES (4,'Adventure');
INSERT INTO Genre (id,genre_name) VALUES (5,'Historical Fiction');
INSERT INTO Genre (id,genre_name) VALUES (6,'Coming of age');

INSERT INTO BOOK (id, title, author_id, ISBN, publish_date, genre_id, summary) VALUES (1,'Catch-22',1,'9781451626650','1961-10-11',1,'A satirical novel by Joseph Heller, set during World War II. It follows the story of a U.S. Army Air Force B-25 bombardier who is trying to maintain his sanity while fulfilling his service requirements.');
INSERT INTO BOOK (id, title, author_id, ISBN, publish_date, genre_id, summary) VALUES (2,'The Great Gatsby',2,'9780743273565','1925-04-10',2,'A classic novel by F. Scott Fitzgerald, set in the Roaring Twenties. It explores themes of wealth, love, and the American Dream through the life of Jay Gatsby.');
INSERT INTO BOOK (id, title, author_id, ISBN, publish_date, genre_id, summary) VALUES (3,'The Adventures of Huckleberry Finn',3,'9780142437179','1884-12-10',4,'A novel by Mark Twain, following the adventures of a young boy named Huck Finn as he travels down the Mississippi River with an escaped slave named Jim.');
INSERT INTO BOOK (id, title, author_id, ISBN, publish_date, genre_id, summary) VALUES (4,'Catcher in the Rye',4,'9780316769488','1951-07-16',6,'A novel by J.D. Salinger, narrated by Holden Caulfield, a disenchanted teenager who is expelled from an elite prep school and embarks on a journey of self-discovery.');
INSERT INTO BOOK (id, title, author_id, ISBN, publish_date, genre_id, summary) VALUES (5,'Grapes of Wrath',5,'9780143039433','1939-04-14',5,'A novel by John Steinbeck, depicting the struggles of a family of tenant farmers during the Great Depression as they migrate from Oklahoma to California.');
INSERT INTO BOOK (id, title, author_id, ISBN, publish_date, genre_id, summary) VALUES (6,'Cannery Row',5,'9780142000687','1945-01-01',2,'A novel by John Steinbeck, set in a colorful neighborhood in Monterey, California. It portrays the lives of the residents, including the marine biologist Doc and the group of misfits who frequent Lee Chong''s grocery store.');
INSERT INTO BOOK (id, title, author_id, ISBN, publish_date, genre_id, summary) VALUES (7,'Fahrenheit 451',6,'9781451673319','1953-10-19',3,'A science fiction novel by Ray Bradbury, set in a future society where books are banned and burned by the government. The story follows a fireman named Guy Montag who becomes disillusioned with the oppressive regime.');

INSERT INTO USERS (id, username, password) VALUES (1,'architech','$2a$10$5IUFBkQA5M/e0ECLvIuR2e4gc8vscfE18R90WejzubsKVgQGhApBm');