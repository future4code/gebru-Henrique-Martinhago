``` 
USE `gebru-4211831-henrique-martinhago`;
# exercicio 1
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
# A 
# B 
# C 

#EXERCICIO 2
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
# A 
# B 

# C
INSERT INTO Actor ( id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Gloria Pires",
  1200000,
  "1963-08-23", 
  "male"
);

# D
INSERT INTO Actor (id, name, salary,birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
# Precisei acrecentar  birth_date, gender pois a tabela 
# foi criada de forma que esses parametros nao podem ficar null

# F
INSERT INTO Actor (id,name, salary, birth_date, gender)
VALUES(
  "004",
" Henrique ", 
  400000,
  "1949-04-18", 
  "male"
);
# ERRO por faltar name entre () e o nome no value, corrigi..

# Exercicio 3
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
#ERRO em data por falta de "" sintaxe correta das datas

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Kaio ",
  719333.33,
  "1985-03-26", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Angelica",
  719333.33,
  "1979-03-26", 
  "female"
);

SELECT id, salary from Actor;

SELECT id, name from Actor WHERE gender = "male"



# Exercicio 4
``` 

