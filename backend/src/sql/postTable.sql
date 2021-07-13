ALTER TABLE `post` DROP `created_at`;
ALTER TABLE `post` ADD `created_at` TIMESTAMP NOT NULL DEFAULT current_timestamp;
ALTER TABLE `post` ADD `updated_at` TIMESTAMP NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp;

