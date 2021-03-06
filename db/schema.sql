drop database if exists exercise_db;
create database exercise_db;
use exercise_db;

drop table if exists Users;
create table Users(
    user_id int not null auto_increment,
    username varchar(255) not null,
    `password` varchar(255) not null,
    starting_weight int(10) not null,
    target_weight int(10) not null,
    createdAt timestamp default CURRENT_TIMESTAMP not null,
    updatedAt timestamp default CURRENT_TIMESTAMP not null,
    primary key (user_id)
);
SELECT * FROM Users;

drop table if exists Calories;
create table Calories(
    calorie_id int not null auto_increment,
    user_id int not null,
    food_name varchar(255) not null,
    food_date DATE not null,
    total_cal_con int(10) not null,
    createdAt timestamp default CURRENT_TIMESTAMP not null,
    updatedAt timestamp default CURRENT_TIMESTAMP not null,
    foreign key (user_id) references users(user_id),
    primary key (calorie_id)
);
SELECT * FROM Calories;

drop table if exists Activities;
create table Activities(
    activity_id int not null auto_increment,
    user_id int not null,
    activity_name varchar(255) not null,
    activity_quantity int(10) not null,
    activity_date DATE not null,
    total_cal_burn int(10) not null,
    createdAt timestamp default CURRENT_TIMESTAMP not null,
    updatedAt timestamp default CURRENT_TIMESTAMP not null,
    foreign key (user_id) references users(user_id),
    primary key (activity_id)
);
SELECT * FROM Activities;

drop table if exists Userweights;
create table Userweights(
    weight_id int not null auto_increment,
    user_id int not null,
    user_weight int(10) not null,
    createdAt timestamp default CURRENT_TIMESTAMP not null,
    updatedAt timestamp default CURRENT_TIMESTAMP not null,
    foreign key (user_id) REFERENCES users(user_id),
    primary key (weight_id)
);
SELECT * FROM Userweights;