# Phrases-API
## About

📜 Phrases-API - A simple API for storing and managing phrases in a MySQL database using Node.js, Express.js, Sequelize, and mysql2.

Project developed in order to practice what I am studying.

---

## Features

- [x] Add a new phrase to the database
- [x] Retrieve all phrases from the database
- [x] Retrieve a specific phrase by ID
- [x] Modify a phrase by ID
- [x] Delete a phrase by ID
- [x] Get a random phrase from the database

---

## How it works

### Pre-requisites

Before you begin, make sure you have the following tools installed on your machine: [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [MySQL](https://www.mysql.com/), and a tool like [Postman](https://www.postman.com/) for testing the API endpoints.
In addition, it is good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/)

#### Running the API

```bash

# Clone this repository
$ git clone https://github.com/3lucasrs/phrases-api.git

# Access the project folder in your terminal
$ cd phrases-api

# Install the dependencies
$ npm install

# Set up your MySQL database
$ mysql -u your_username -p

# Create the database
mysql> CREATE DATABASE IF NOT EXISTS `phrases`;
mysql> USE `phrases`;

# Create the phrases table
mysql> CREATE TABLE IF NOT EXISTS `phrases` (
  `author` varchar(100) NOT NULL,
  `txt` text NOT NULL,
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

# Insert sample data
mysql> INSERT IGNORE INTO `phrases` (`author`, `txt`, `id`) VALUES
  ('Lucas', 'Frase de teste', 1);

# Exit the MySQL shell
mysql> exit

# Update the Sequelize configuration in phrases-api/src/instances/mysql.js with your database credentials

# Run the application

# To start the API, navigate to the project folder in your terminal and run the following command:

$ nodemon src/server.js

# The API be accessible on the port: 3001

```

---

## Tech Stack

The following tools were used in the construction of the project:

#### **Backend**  ([Node.js](https://nodejs.org/en)  +  [Express.js](https://expressjs.com/) + [Sequelize](https://sequelize.org/) + [MySQL](https://www.mysql.com/)) 
