-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: xantory-mysql-app:3306
-- Generation Time: May 07, 2022 at 09:44 AM
-- Server version: 5.7.38
-- PHP Version: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `xantory_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `lang`
--

CREATE TABLE `lang` (
  `id` int(11) NOT NULL,
  `alias` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `base` enum('0','1') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `lang`
--

INSERT INTO `lang` (`id`, `alias`, `code`, `title`, `base`) VALUES
(4, 'en', 'en', 'En', '1'),
(5, 'ua', 'ua', 'Ua', '0');

-- --------------------------------------------------------

--
-- Table structure for table `menuitems`
--

CREATE TABLE `menuitems` (
  `id` int(11) NOT NULL,
  `link` varchar(256) NOT NULL,
  `parent` int(11) NOT NULL,
  `alias` varchar(256) NOT NULL,
  `position` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `menuitems`
--

INSERT INTO `menuitems` (`id`, `link`, `parent`, `alias`, `position`) VALUES
(1, '/', 0, 'home', 0),
(4, '/animations', 0, 'animations', 1),
(5, '/animations/lines', 4, 'lines', 0),
(6, '/animations/gradient', 4, 'gradient', 2),
(7, '/animations/other', 4, 'other', 3),
(24, '/animations/velocity', 4, '-animations-velocity4', 999),
(25, '/animations/charts', 4, '-animations-charts4', 999),
(26, '/experiments', 0, 'experiments', 2);

-- --------------------------------------------------------

--
-- Table structure for table `menuitems_translate`
--

CREATE TABLE `menuitems_translate` (
  `id` int(11) NOT NULL,
  `menuitem_alias` varchar(255) NOT NULL,
  `lang_alias` varchar(255) NOT NULL,
  `value` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `menuitems_translate`
--

INSERT INTO `menuitems_translate` (`id`, `menuitem_alias`, `lang_alias`, `value`) VALUES
(4, 'home', 'en', 'Main'),
(7, 'home', 'ua', 'Головна'),
(11, 'animations', 'en', 'Animations'),
(12, 'animations', 'ua', 'Анімації'),
(14, 'lines', 'en', 'Lines'),
(15, 'lines', 'ua', 'Лінії'),
(17, 'gradient', 'en', 'Gradient'),
(18, 'gradient', 'ua', 'Градієнт'),
(20, 'other', 'en', 'Other'),
(21, 'other', 'ua', 'Інше'),
(35, '-animations-velocity4', 'en', 'Velocity'),
(37, '-animations-velocity4', 'ua', 'Швидкість'),
(38, '-animations-charts4', 'en', 'Charts'),
(40, '-animations-charts4', 'ua', 'Графики'),
(41, 'experiments', 'ua', 'Експерименти'),
(42, 'experiments', 'en', 'Experiments');

-- --------------------------------------------------------

--
-- Table structure for table `translate`
--

CREATE TABLE `translate` (
  `id` int(11) NOT NULL,
  `alias` varchar(255) NOT NULL,
  `lang_alias` varchar(255) NOT NULL,
  `value` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `translate`
--

INSERT INTO `translate` (`id`, `alias`, `lang_alias`, `value`) VALUES
(1, 'hero_description', 'en', 'Web-framework with good documentation!'),
(3, 'hero_description', 'ua', 'Веб-фреймворк з гарною документаціею'),
(4, 'read_docs', 'en', 'Read docs'),
(5, 'read_docs', 'ua', 'Читати документацію'),
(7, 'page_title', 'en', 'Xantory Games'),
(9, 'page_title', 'ua', 'Xantory Games');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `login` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `role` enum('user','admin') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `lang`
--
ALTER TABLE `lang`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menuitems`
--
ALTER TABLE `menuitems`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menuitems_translate`
--
ALTER TABLE `menuitems_translate`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `translate`
--
ALTER TABLE `translate`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `login` (`login`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `lang`
--
ALTER TABLE `lang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `menuitems`
--
ALTER TABLE `menuitems`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `menuitems_translate`
--
ALTER TABLE `menuitems_translate`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `translate`
--
ALTER TABLE `translate`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
