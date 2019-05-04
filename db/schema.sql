drop database if exists exercise_db;
create database exercise_db;

use exercise_db;
create table users(
    id int not null auto_increment,
    username varchar(255) not null,
    PASSWORD varchar(255) not null,
    starting_weight int(10) not null,
    target_weight int(10) not null,
    primary key (user_id)
);
create table calories(
    id int not null auto_increment,
    food_name varchar(255) not null,
    food_quantity int(10) not null,
    total_cal_con int(10) not null,
    foreign key (user_id) references users(id),
    primary key (id)
);
create table activities(
    id int not null auto_increment,
    activity_name varchar(255) not null,
    activity_quantity int(10) not null,
    total_cal_burn int(10) not null,
    foreign key (user_id) references users(id),
    primary key (id)
);
create table weight(
    id int not null auto_increment,
    user_weight int(10) not null,
    input_time DATETIME
);
