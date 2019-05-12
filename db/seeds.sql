INSERT INTO users (`username`, `password`, `starting_weight`, `target_weight`, `createdAt`, `updatedAt`) VALUES ('Lance', '123', 190, 175, current_timestamp(), current_timestamp());
INSERT INTO users (`username`, `password`, `starting_weight`, `target_weight`, `createdAt`, `updatedAt`) VALUES ('Russell', '321', 180, 170, current_timestamp(), current_timestamp());
INSERT INTO users (`username`, `password`, `starting_weight`, `target_weight`, `createdAt`, `updatedAt`) VALUES ('Igor', '456', 190, 175, current_timestamp(), current_timestamp());
INSERT INTO users (`username`, `password`, `starting_weight`, `target_weight`, `createdAt`, `updatedAt`) VALUES ('Keith', '654', 180, 165, current_timestamp(), current_timestamp());


INSERT INTO userweights (user_id, user_weight, `createdAt`, `updatedAt`) VALUES (1, 195, current_timestamp(), current_timestamp());
INSERT INTO userweights (user_id, user_weight, `createdAt`, `updatedAt`) VALUES (1, 194, current_timestamp(), current_timestamp());
INSERT INTO userweights (user_id, user_weight, `createdAt`, `updatedAt`) VALUES (1, 193, current_timestamp(), current_timestamp());
INSERT INTO userweights (user_id, user_weight, `createdAt`, `updatedAt`) VALUES (1, 192, current_timestamp(), current_timestamp());
INSERT INTO userweights (user_id, user_weight, `createdAt`, `updatedAt`) VALUES (1, 191, current_timestamp(), current_timestamp());
INSERT INTO userweights (user_id, user_weight, `createdAt`, `updatedAt`) VALUES (2, 180, current_timestamp(), current_timestamp());
INSERT INTO userweights (user_id, user_weight, `createdAt`, `updatedAt`) VALUES (2, 179, current_timestamp(), current_timestamp());
INSERT INTO userweights (user_id, user_weight, `createdAt`, `updatedAt`) VALUES (2, 178, current_timestamp(), current_timestamp());
INSERT INTO userweights (user_id, user_weight, `createdAt`, `updatedAt`) VALUES (2, 176, current_timestamp(), current_timestamp());
INSERT INTO userweights (user_id, user_weight, `createdAt`, `updatedAt`) VALUES (2, 175, current_timestamp(), current_timestamp());
INSERT INTO userweights (user_id, user_weight, `createdAt`, `updatedAt`) VALUES (3, 190, current_timestamp(), current_timestamp());
INSERT INTO userweights (user_id, user_weight, `createdAt`, `updatedAt`) VALUES (3, 189, current_timestamp(), current_timestamp());
INSERT INTO userweights (user_id, user_weight, `createdAt`, `updatedAt`) VALUES (3, 188, current_timestamp(), current_timestamp());
INSERT INTO userweights (user_id, user_weight, `createdAt`, `updatedAt`) VALUES (3, 187, current_timestamp(), current_timestamp());
INSERT INTO userweights (user_id, user_weight, `createdAt`, `updatedAt`) VALUES (3, 176, current_timestamp(), current_timestamp());
INSERT INTO userweights (user_id, user_weight, `createdAt`, `updatedAt`) VALUES (4, 190, current_timestamp(), current_timestamp());
INSERT INTO userweights (user_id, user_weight, `createdAt`, `updatedAt`) VALUES (4, 189, current_timestamp(), current_timestamp());
INSERT INTO userweights (user_id, user_weight, `createdAt`, `updatedAt`) VALUES (4, 188, current_timestamp(), current_timestamp());
INSERT INTO userweights (user_id, user_weight, `createdAt`, `updatedAt`) VALUES (4, 187, current_timestamp(), current_timestamp());
INSERT INTO userweights (user_id, user_weight, `createdAt`, `updatedAt`) VALUES (4, 186, current_timestamp(), current_timestamp());

INSERT INTO activities (user_id, activity_name, activity_quantity, activity_date, total_cal_burn, `createdAt`, `updatedAt`) VALUES (1, 'run', 30, '2019-05-02', 400, current_timestamp(), current_timestamp());
INSERT INTO activities (user_id, activity_name, activity_quantity, activity_date, total_cal_burn, `createdAt`, `updatedAt`) VALUES (1, 'swim', 60, '2019-05-02', 400, current_timestamp(), current_timestamp());
INSERT INTO activities (user_id, activity_name, activity_quantity, activity_date, total_cal_burn, `createdAt`, `updatedAt`) VALUES (1, 'bike', 120, '2019-05-02', 400, current_timestamp(), current_timestamp());
INSERT INTO activities (user_id, activity_name, activity_quantity, activity_date, total_cal_burn, `createdAt`, `updatedAt`) VALUES (1, 'run', 30, '2019-05-02', 400, current_timestamp(), current_timestamp());
INSERT INTO activities (user_id, activity_name, activity_quantity, activity_date, total_cal_burn, `createdAt`, `updatedAt`) VALUES (1, 'swim', 30, '2019-05-02', 400, current_timestamp(), current_timestamp());
INSERT INTO activities (user_id, activity_name, activity_quantity, activity_date, total_cal_burn, `createdAt`, `updatedAt`) VALUES (2, 'run', 30, '2019-05-02', 400, current_timestamp(), current_timestamp());
INSERT INTO activities (user_id, activity_name, activity_quantity, activity_date, total_cal_burn, `createdAt`, `updatedAt`) VALUES (2, 'swim', 60, '2019-05-02', 400, current_timestamp(), current_timestamp());
INSERT INTO activities (user_id, activity_name, activity_quantity, activity_date, total_cal_burn, `createdAt`, `updatedAt`) VALUES (2, 'bike', 120, '2019-05-02', 400, current_timestamp(), current_timestamp());
INSERT INTO activities (user_id, activity_name, activity_quantity, activity_date, total_cal_burn, `createdAt`, `updatedAt`) VALUES (2, 'run', 30, '2019-05-02', 400, current_timestamp(), current_timestamp());
INSERT INTO activities (user_id, activity_name, activity_quantity, activity_date, total_cal_burn, `createdAt`, `updatedAt`) VALUES (2, 'swim', 30, '2019-05-02', 400, current_timestamp(), current_timestamp());
INSERT INTO activities (user_id, activity_name, activity_quantity, activity_date, total_cal_burn, `createdAt`, `updatedAt`) VALUES (3, 'run', 30, '2019-05-02', 400, current_timestamp(), current_timestamp());
INSERT INTO activities (user_id, activity_name, activity_quantity, activity_date, total_cal_burn, `createdAt`, `updatedAt`) VALUES (3, 'swim', 60, '2019-05-02', 400, current_timestamp(), current_timestamp());
INSERT INTO activities (user_id, activity_name, activity_quantity, activity_date, total_cal_burn, `createdAt`, `updatedAt`) VALUES (3, 'bike', 120, '2019-05-02', 400, current_timestamp(), current_timestamp());
INSERT INTO activities (user_id, activity_name, activity_quantity, activity_date, total_cal_burn, `createdAt`, `updatedAt`) VALUES (3, 'run', 30, '2019-05-02', 400, current_timestamp(), current_timestamp());
INSERT INTO activities (user_id, activity_name, activity_quantity, activity_date, total_cal_burn, `createdAt`, `updatedAt`) VALUES (3, 'swim', 30, '2019-05-02', 400, current_timestamp(), current_timestamp());
INSERT INTO activities (user_id, activity_name, activity_quantity, activity_date, total_cal_burn, `createdAt`, `updatedAt`) VALUES (4, 'run', 30, '2019-05-02', 400, current_timestamp(), current_timestamp());
INSERT INTO activities (user_id, activity_name, activity_quantity, activity_date, total_cal_burn, `createdAt`, `updatedAt`) VALUES (4, 'swim', 60, '2019-05-02', 400, current_timestamp(), current_timestamp());
INSERT INTO activities (user_id, activity_name, activity_quantity, activity_date, total_cal_burn, `createdAt`, `updatedAt`) VALUES (4, 'bike', 120, '2019-05-02', 400, current_timestamp(), current_timestamp());
INSERT INTO activities (user_id, activity_name, activity_quantity, activity_date, total_cal_burn, `createdAt`, `updatedAt`) VALUES (4, 'run', 30, '2019-05-02', 400, current_timestamp(), current_timestamp());
INSERT INTO activities (user_id, activity_name, activity_quantity, activity_date, total_cal_burn, `createdAt`, `updatedAt`) VALUES (4, 'swim', 30, '2019-05-02', 400, current_timestamp(), current_timestamp());

INSERT INTO calories (user_id, `food_name`, `food_date`, `total_cal_con`, `createdAt`, `updatedAt`) VALUES (1, 'ice cream', '2019-05-02', 400, current_timestamp(), current_timestamp());
INSERT INTO calories (user_id, `food_name`, `food_date`, `total_cal_con`, `createdAt`, `updatedAt`) VALUES (1, 'hot dog', '2019-05-01', 200, current_timestamp(), current_timestamp());
INSERT INTO calories (user_id, `food_name`, `food_date`, `total_cal_con`, `createdAt`, `updatedAt`) VALUES (1, 'cake', '2019-05-01', 300, current_timestamp(), current_timestamp());
INSERT INTO calories (user_id, `food_name`, `food_date`, `total_cal_con`, `createdAt`, `updatedAt`) VALUES (1, 'cereal', '2019-05-01', 350, current_timestamp(), current_timestamp());
INSERT INTO calories (user_id, `food_name`, `food_date`, `total_cal_con`, `createdAt`, `updatedAt`) VALUES (1, 'chips', '2019-05-01', '125', current_timestamp(), current_timestamp());
INSERT INTO calories (user_id, `food_name`, `food_date`, `total_cal_con`, `createdAt`, `updatedAt`) VALUES (2, 'ice cream', '2019-05-02', 400, current_timestamp(), current_timestamp());
INSERT INTO calories (user_id, `food_name`, `food_date`, `total_cal_con`, `createdAt`, `updatedAt`) VALUES (2, 'hot dog', '2019-05-01', 200, current_timestamp(), current_timestamp());
INSERT INTO calories (user_id, `food_name`, `food_date`, `total_cal_con`, `createdAt`, `updatedAt`) VALUES (2, 'cake', '2019-05-01', 300, current_timestamp(), current_timestamp());
INSERT INTO calories (user_id, `food_name`, `food_date`, `total_cal_con`, `createdAt`, `updatedAt`) VALUES (2, 'cereal', '2019-05-01', 350, current_timestamp(), current_timestamp());
INSERT INTO calories (user_id, `food_name`, `food_date`, `total_cal_con`, `createdAt`, `updatedAt`) VALUES (2, 'chips', '2019-05-01', '125', current_timestamp(), current_timestamp());
INSERT INTO calories (user_id, `food_name`, `food_date`, `total_cal_con`, `createdAt`, `updatedAt`) VALUES (3, 'ice cream', '2019-05-02', 400, current_timestamp(), current_timestamp());
INSERT INTO calories (user_id, `food_name`, `food_date`, `total_cal_con`, `createdAt`, `updatedAt`) VALUES (3, 'hot dog', '2019-05-01', 200, current_timestamp(), current_timestamp());
INSERT INTO calories (user_id, `food_name`, `food_date`, `total_cal_con`, `createdAt`, `updatedAt`) VALUES (3, 'cake', '2019-05-01', 300, current_timestamp(), current_timestamp());
INSERT INTO calories (user_id, `food_name`, `food_date`, `total_cal_con`, `createdAt`, `updatedAt`) VALUES (3, 'cereal', '2019-05-01', 350, current_timestamp(), current_timestamp());
INSERT INTO calories (user_id, `food_name`, `food_date`, `total_cal_con`, `createdAt`, `updatedAt`) VALUES (3, 'chips', '2019-05-01', '125', current_timestamp(), current_timestamp());
INSERT INTO calories (user_id, `food_name`, `food_date`, `total_cal_con`, `createdAt`, `updatedAt`) VALUES (4, 'ice cream', '2019-05-02', 400, current_timestamp(), current_timestamp());
INSERT INTO calories (user_id, `food_name`, `food_date`, `total_cal_con`, `createdAt`, `updatedAt`) VALUES (4, 'hot dog', '2019-05-01', 200, current_timestamp(), current_timestamp());
INSERT INTO calories (user_id, `food_name`, `food_date`, `total_cal_con`, `createdAt`, `updatedAt`) VALUES (4, 'cake', '2019-05-01', 300, current_timestamp(), current_timestamp());
INSERT INTO calories (user_id, `food_name`, `food_date`, `total_cal_con`, `createdAt`, `updatedAt`) VALUES (4, 'cereal', '2019-05-01', 350, current_timestamp(), current_timestamp());
INSERT INTO calories (user_id, `food_name`, `food_date`, `total_cal_con`, `createdAt`, `updatedAt`) VALUES (4, 'chips', '2019-05-01', '125', current_timestamp(), current_timestamp());
