ALTER TABLE `post` DROP `created_at`;
ALTER TABLE `post` ADD `created_at` TIMESTAMP NOT NULL DEFAULT current_timestamp;
ALTER TABLE `post` ADD `updated_at` TIMESTAMP NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp;
ALTER TABLE `post` ADD `is_updated` TINYINT NOT NULL DEFAULT 0;
ALTER TABLE `post` ADD `views` INT NOT NULL DEFAULT 0;
