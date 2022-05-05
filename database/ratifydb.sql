-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 05, 2022 at 11:01 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ratifydb`
--

-- --------------------------------------------------------

--
-- Table structure for table `friends`
--

CREATE TABLE `friends` (
  `id` int(11) NOT NULL,
  `friend_one` varchar(255) NOT NULL,
  `friend_two` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `friends`
--

INSERT INTO `friends` (`id`, `friend_one`, `friend_two`, `status`) VALUES
(1, 'aaron_smith', 'chloe_s', 'Friends'),
(2, 'skylar.hines', 'chloe_s', 'Friends'),
(3, 'amberbea', 'chloe_s', 'Friends'),
(4, 'parker.v', 'chloe_s', 'Friends'),
(5, 'amberbea', 'layton_1990', 'Friends'),
(6, 'amberbea', 'parker.v', 'Pending'),
(7, 'layton_1990', 'josy123', 'Friends'),
(8, 'layton_1990', 'lilyd', 'Pending'),
(9, 'josy123', 'aaron_smith', 'Friends'),
(11, 'josy123', 'skylar.hines', 'Pending'),
(12, 'sarah_smith', 'melanie321', 'Friends'),
(13, 'sarah_smith', 'amberbea', 'Pending'),
(14, 'sarah_smith', 'aaron_smith', 'Friends'),
(15, 'melanie321', 'aaron_smith', 'Friends'),
(16, 'melanie321', 'lilyd', 'Pending');

-- --------------------------------------------------------

--
-- Table structure for table `rates`
--

CREATE TABLE `rates` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `cute` varchar(255) NOT NULL,
  `personality` varchar(255) NOT NULL,
  `hot` varchar(255) NOT NULL,
  `social` varchar(255) NOT NULL,
  `friendly` varchar(255) NOT NULL,
  `fun` varchar(255) NOT NULL,
  `rated_by` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rates`
--

INSERT INTO `rates` (`id`, `user_id`, `cute`, `personality`, `hot`, `social`, `friendly`, `fun`, `rated_by`) VALUES
(1, 'lilyd', '40', '80', '60', '100', '40', '20', 'chloe_s'),
(2, 'skylar.hines', '60', '40', '80', '60', '40', '80', 'chloe_s'),
(3, 'aaron_smith', '80', '100', '80', '20', '80', '100', 'parker.v'),
(4, 'josy123', '40', '80', '80', '80', '20', '40', 'skylar.hines'),
(6, 'aaron_smith', '80', '20', '80', '60', '40', '60', 'josy123'),
(7, 'parker.v', '20', '40', '20', '40', '40', '20', 'lilyd'),
(8, 'chloe_s', '80', '100', '80', '40', '80', '60', 'lilyd'),
(9, 'skylar.hines', '80', '60', '80', '80', '60', '100', 'aaron_smith'),
(10, 'parker.v', '20', '40', '20', '60', '40', '20', 'aaron_smith'),
(11, 'josy123', '80', '40', '60', '40', '80', '100', 'lilyd'),
(12, 'aaron_smith', '40', '80', '40', '60', '80', '60', 'lilyd'),
(13, 'josy123', '80', '80', '80', '20', '60', '60', 'chloe_s'),
(14, 'chloe_s', '60', '60', '80', '40', '80', '60', 'aaron_smith'),
(15, 'aaron_smith', '40', '20', '40', '20', '40', '20', 'chloe_s'),
(16, 'skylar.hines', '60', '40', '80', '60', '20', '20', 'lilyd'),
(17, 'aaron_smith', '40', '80', '40', '60', '40', '80', 'skylar.hines'),
(18, 'amberbea', '80', '80', '60', '60', '80', '100', 'chloe_s'),
(19, 'jamar.h', '80', '40', '80', '20', '40', '40', 'aaron_smith'),
(20, 'amberbea', '100', '100', '100', '80', '80', '80', 'aaron_smith'),
(21, 'josy123', '80', '60', '60', '60', '80', '40', 'amberbea'),
(22, 'lilyd', '100', '60', '80', '40', '60', '60', 'amberbea'),
(23, 'layton_1990', '40', '80', '60', '60', '80', '100', 'sarah_smith'),
(24, 'melanie321', '40', '40', '60', '40', '80', '40', 'sarah_smith'),
(25, 'skylar.hines', '100', '100', '100', '40', '40', '40', 'sarah_smith'),
(26, 'jamar.h', '60', '40', '60', '80', '60', '80', 'layton_1990'),
(27, 'chloe_s', '100', '80', '100', '80', '80', '100', 'layton_1990'),
(28, 'sarah_smith', '80', '80', '60', '60', '80', '80', 'chloe_s'),
(29, 'jamar.h', '40', '40', '60', '20', '80', '60', 'chloe_s'),
(30, 'melanie321', '100', '60', '60', '80', '60', '80', 'jamar.h');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` text NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `total_rates` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `name`, `image`, `total_rates`) VALUES
(1, 'chloe_s', 'chloesmith@live.com', '$2y$10$9yMw8T5KHVNaqFNqvl/2f.0irdj5MP00mXIjgNeJEknfBcxXfrt.u', 'Chloe Smith', 'stock-photo-88195029.jpg', 3),
(2, 'lilyd', 'lilyd@hotmail.com', '$2y$10$GAoIURdXZoGMXnmE2XdX3uk.U8RF1bDZN26xLP8LPG1Yeihs7ll3W', 'Lily Dyer', '5a8d6a18f22fa91a008b46bf.webp', 1),
(3, 'aaron_smith', 'aaron@live.com', '$2y$10$Z0YiDPfrhQN98Wid0G0Dr.UwKw/RmFgs6OkOLfqM27cxP456Rp4g2', 'Aaron Smith', 'cb05f0ca5a29d510201e2c112aa2c0fa.jpg', 5),
(4, 'skylar.hines', 'skylar@live.com', '$2y$10$vUt2eFtWux1scq1LfPoMl.OT79wGgr0lgvDXR/QzJmkdpaPppDiHq', 'Skylar Hynes', 'img6.jpg', 3),
(6, 'josy123', 'josyparish@hotmail.com', '$2y$10$pDYGJqaEKCzFIA.RMCeuUOFX34gTFgVUL2epkBFSU4rz70j3IklXC', 'Joslyn Parish', 'theoverwhelmedface.jpg.webp', 3),
(7, 'parker.v', 'parker@outlook.com', '$2y$10$0R6IQbZWJflADepO.fkj7uonC.VodnQU7tgz3MQSky4kplega30oa', 'Parker Velez', 'istockphoto-1289461335-170667a.jpg', 2),
(8, 'layton_1990', 'layton@hotmail.com', '$2y$10$xAiDiuYkqXZutdFdS6vBGOjsF8L3oTNEIAlIlc10w9DzmclmIiRMe', 'Layton Farrell', 'img5.jpg', 1),
(9, 'jamar.h', 'jamar_h@live.com', '$2y$10$uuRdYOe8OkOzsZdg4Edy7uQU7ol3bYDT45iPjVwJtA4n/Pu.9QRsK', 'Jamar Hills', 'img4.webp', 3),
(10, 'amberbea', 'amber@live.com', '$2y$10$8SRkKVo/UcZ8q2oZk42o3uvkgeWQ/4bx7gEZZnq/V6W6FBoC8Z4Hi', 'Amber Bea', 'img1.jpg', 2),
(11, 'melanie321', 'melanie@outlook.com', '$2y$10$QlkZ89JPCA93IZRJsAPW..xkRzWotkatOnJTCUAurULSZkEnIn9.e', 'Melanie Tree', 'img2.webp', 2),
(12, 'sarah_smith', 'sarah.smith@live.com', '$2y$10$97xZBW3cPJhlrsn.HhntTu/QN1Ywn5j4YU.Zj2PzHmSKDwF4DpzAG', 'Sarah Smith', 'redhead-face-portrait-women-women-indoors-hd-wallpaper-preview.jpg', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `friends`
--
ALTER TABLE `friends`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rates`
--
ALTER TABLE `rates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`) USING HASH;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `friends`
--
ALTER TABLE `friends`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `rates`
--
ALTER TABLE `rates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
