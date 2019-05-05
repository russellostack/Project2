drop database if exists exercise_db;
create database exercise_db;
use exercise_db;

drop table if exists users;
create table users(
    id int not null auto_increment,
    username varchar(255) not null,
    `password` varchar(255) not null,
    starting_weight int(10) not null,
    target_weight int(10) not null,
    primary key (id)
);
drop table if exists calories;
create table calories(
    id int not null auto_increment,
    user_id int not null,
    food_name varchar(255) not null,
    food_quantity int(10) not null,
    food_date DATE not null,
    total_cal_con int(10) not null,
    foreign key (user_id) references users(id),
    primary key (id)
);
drop table if exists activities;
create table activities(
    id int not null auto_increment,
    user_id int not null,
    activity_name varchar(255) not null,
    activity_quantity int(10) not null,
    activity_date DATE not null,
    total_cal_burn int(10) not null,
    foreign key (user_id) references users(id),
    primary key (id)
);
drop table if exists user_weight;
create table user_weight(
    id int not null auto_increment,
    user_id int not null,
    user_weight int(10) not null,
    input_time DATETIME,
    foreign key (user_id) REFERENCES users(id),
    primary key (id)
);
