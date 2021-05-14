-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 14, 2021 at 06:20 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `paf`
--

-- --------------------------------------------------------

--
-- Table structure for table `userservice`
--

CREATE TABLE `userservice` (
  `ID` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Address` varchar(255) NOT NULL,
  `Telephone` varchar(20) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `UserName` varchar(50) NOT NULL,
  `Password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userservice`
--

INSERT INTO `userservice` (`ID`, `Name`, `Address`, `Telephone`, `Email`, `UserName`, `Password`) VALUES
(4, 'Kasun', 'Kandy', '0112154985', 'kasun12%4040gmail.com', 'kasun123', 'nocdnd'),
(17, 'Nadun', 'Maharagama', '0771265478', 'nadun@gmail.com', 'nadun001', 'ddd123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `userservice`
--
ALTER TABLE `userservice`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `userservice`
--
ALTER TABLE `userservice`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
