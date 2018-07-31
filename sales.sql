-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 31, 2018 at 05:40 PM
-- Server version: 10.1.30-MariaDB
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
-- Database: `sales`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `categoryId` varchar(30) NOT NULL,
  `user_id` varchar(40) NOT NULL,
  `categoryName` varchar(30) NOT NULL,
  `category_desc` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`categoryId`, `user_id`, `categoryName`, `category_desc`) VALUES
('HJwtZjxXX', 'ByfT0NTfg', 'Electronics', 'All electric things'),
('HyBDbjlm7', 'ByfT0NTfg', 'Mobile', 'This is electronics'),
('rJE1BB17m', 'ByfT0NTfg', 't-shirts', 'any ....'),
('S1DfqUWJT', 'S1DfqHRGQ', 'Shoes.', 'Footwear,sandals , sneakers etc'),
('Sy6_UH1Xm', 'ByfT0NTfg', 'caps', 'N/A');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `productId` varchar(30) NOT NULL,
  `user_id` varchar(40) NOT NULL,
  `categoryId` varchar(30) NOT NULL,
  `productName` varchar(30) NOT NULL,
  `quantity` int(20) NOT NULL,
  `details` text NOT NULL,
  `price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`productId`, `user_id`, `categoryId`, `productName`, `quantity`, `details`, `price`) VALUES
('BasT5ATer', 'ByfT0NTfg', 'rJE1BB17m', 'half-sleeve jersey', 550, 'made in bangladesh', 650),
('ryGDKP1QS', 'ByfT0NTfg', 'rJE1BB17m', 'walton.', 200, 'N/A..', 150),
('rylxMixQX', 'ByfT0NTfg', 'HyBDbjlm7', 'Samsung', 120, 'Samsung mobile', 1200),
('SJOhOTx77', 'S1DfqHRGQ', 'S1DfqUWJT', 'dsgdfg', 43, 'gfddf', 32);

-- --------------------------------------------------------

--
-- Table structure for table `sales_table`
--

CREATE TABLE `sales_table` (
  `id` int(11) NOT NULL,
  `saleId` varchar(30) NOT NULL,
  `user_id` varchar(40) NOT NULL,
  `productId` varchar(30) NOT NULL,
  `categoryId` varchar(30) NOT NULL,
  `price` float NOT NULL,
  `customerName` varchar(30) NOT NULL,
  `date` int(11) NOT NULL,
  `month` varchar(10) NOT NULL,
  `year` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sales_table`
--

INSERT INTO `sales_table` (`id`, `saleId`, `user_id`, `productId`, `categoryId`, `price`, `customerName`, `date`, `month`, `year`) VALUES
(5, 'r1uPOc1QQ', 'ByfT0NTfg', 'ryGDKP1QS', 'Sy6_UH1Xm', 150, 'arabi', 8, '6', 2018),
(8, 'SJWBj51Q7', 'ByfT0NTfg', 'ryGDKP1QS', 'rJE1BB17m', 150, 'dg', 8, '6', 2018),
(9, 'BJFvi51QX', 'ByfT0NTfg', 'BasT5ATer', 'rJE1BB17m', 150, 'sdasdasd', 8, '6', 2018),
(10, 'S1UKVo177', 'ByfT0NTfg', 'BasT5ATer', 'rJE1BB17m', 150, 'dg', 8, '6', 2018),
(11, 'ryuHHiyQX', 'ByfT0NTfg', 'ryGDKP1QS', 'Sy6_UH1Xm', 150, 'sadasd', 8, '6', 2018),
(12, 'S1KxPAkXX', 'ByfT0NTfg', 'BasT5ATer', 'rJE1BB17m', 150, 'nabid', 9, '6', 2018),
(13, 'HJ96TC1QQ', 'ByfT0NTfg', 'BasT5ATer', 'rJE1BB17m', 150, 'nabid', 9, '6', 2018),
(14, 'ryyle1l77', 'ByfT0NTfg', 'BasT5ATer', 'rJE1BB17m', 150, 'nabid', 9, '6', 2018),
(15, 'ryyle1l77', 'ByfT0NTfg', 'BasT5ATer', 'rJE1BB17m', 150, 'nabid', 9, '6', 2018),
(25, 'ry_QNWeX7', 'ByfT0NTfg', 'BasT5ATer', 'rJE1BB17m', 4, 'nabid', 9, '6', 2018),
(26, 'BJC2Bbl7m', 'ByfT0NTfg', 'BasT5ATer', 'rJE1BB17m', 2, 'nabid', 9, '6', 2018),
(27, 'r1ZTRYgXm', 'ByfT0NTfg', 'BasT5ATer', 'rJE1BB17m', 343, 'fdgdf', 9, '6', 2018),
(28, 'r1ZLr9g7m', 'ByfT0NTfg', 'BasT5ATer', 'rJE1BB17m', 300, 'arabi', 9, '6', 2018),
(29, 'r1ZLr9g7m', 'ByfT0NTfg', 'ryGDKP1QS', 'rJE1BB17m', 87, 'arabi', 9, '6', 2018),
(30, 'rJpfboxXm', 'ByfT0NTfg', 'ryGDKP1QS', 'Sy6_UH1Xm', 123, 'Iphone', 9, '6', 2018),
(31, 'SyVxGieXX', 'ByfT0NTfg', 'rylxMixQX', 'HyBDbjlm7', 90, 'Alif', 9, '6', 2018),
(32, 'SyVxGieXX', 'ByfT0NTfg', 'ryGDKP1QS', 'HJwtZjxXX', 20, 'Alif', 9, '6', 2018),
(33, 'rJyJ-hg7X', 'ByfT0NTfg', 'rylxMixQX', 'HyBDbjlm7', 20000, 'hasan', 9, '6', 2018),
(34, 'rJyJ-hg7X', 'ByfT0NTfg', 'ryGDKP1QS', 'Sy6_UH1Xm', 60, 'hasan', 9, '6', 2018),
(35, 'Hyye73e7Q', 'ByfT0NTfg', 'rylxMixQX', 'HJwtZjxXX', 22, 'adwd', 9, '6', 2018),
(36, 'Hyye73e7Q', 'ByfT0NTfg', 'rylxMixQX', 'HJwtZjxXX', 2, 'adwd', 9, '6', 2018),
(37, 'rJ8_XneX7', 'ByfT0NTfg', 'ryGDKP1QS', 'HyBDbjlm7', 3, 'abul', 9, '6', 2018),
(38, 'rJ8_XneX7', 'ByfT0NTfg', 'ryGDKP1QS', 'HyBDbjlm7', 2, 'abul', 9, '6', 2018),
(39, 'rJ8_XneX7', 'ByfT0NTfg', 'ryGDKP1QS', 'HyBDbjlm7', 2, 'abul', 9, '6', 2018),
(40, 'SJNTOpgQX', 'S1DfqHRGQ', 'SJOhOTx77', 'S1DfqUWJT', 4343, 'fsfs', 9, '6', 2018),
(41, 'SJNTOpgQX', 'S1DfqHRGQ', 'SJOhOTx77', 'S1DfqUWJT', 43, 'fsfs', 9, '6', 2018),
(42, 'HJl1t8fQ7', 'S1DfqHRGQ', 'SJOhOTx77', 'S1DfqUWJT', 500, 'aynal', 10, '6', 2018),
(43, 'HJl1t8fQ7', 'S1DfqHRGQ', 'SJOhOTx77', 'S1DfqUWJT', 1000, 'aynal', 10, '6', 2018),
(44, 'HJl1t8fQ7', 'S1DfqHRGQ', 'SJOhOTx77', 'S1DfqUWJT', 2000, 'aynal', 10, '6', 2018),
(45, 'r1TFtIfX7', 'ByfT0NTfg', 'rylxMixQX', 'HJwtZjxXX', 100, 'arman', 10, '6', 2018),
(46, 'rJzzqUfm7', 'ByfT0NTfg', 'rylxMixQX', 'HJwtZjxXX', 200, 'arman', 10, '6', 2018),
(47, 'rJzzqUfm7', 'ByfT0NTfg', 'rylxMixQX', 'HJwtZjxXX', 100, 'arman', 10, '6', 2018),
(48, 'r1S4iIf77', 'ByfT0NTfg', 'rylxMixQX', 'HJwtZjxXX', 100, 'arman', 10, '6', 2018),
(49, 'r1S4iIf77', 'ByfT0NTfg', 'rylxMixQX', 'HJwtZjxXX', 200, 'arman', 10, '6', 2018),
(50, 'r1ZMTLzQm', 'ByfT0NTfg', 'rylxMixQX', 'HJwtZjxXX', 4000, 'afnan', 10, '6', 2018),
(51, 'r1ZMTLzQm', 'ByfT0NTfg', 'rylxMixQX', 'HJwtZjxXX', 5000, 'afnan', 10, '6', 2018),
(52, 'r1ZMTLzQm', 'ByfT0NTfg', 'rylxMixQX', 'HJwtZjxXX', 3000, 'afnan', 10, '6', 2018),
(53, 'HyXkR3NNQ', 'ByfT0NTfg', 'rylxMixQX', 'HyBDbjlm7', 20000, 'sakib', 24, '6', 2018),
(54, 'HyXkR3NNQ', 'ByfT0NTfg', 'BasT5ATer', 'rJE1BB17m', 259, 'sakib', 24, '6', 2018);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(50) NOT NULL,
  `fullName` varchar(50) NOT NULL,
  `registrationDate` text NOT NULL,
  `email` varchar(30) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(40) NOT NULL,
  `mobileNumber` varchar(30) NOT NULL,
  `shopName` varchar(50) NOT NULL,
  `shopAddress` varchar(200) NOT NULL,
  `shopDesc` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullName`, `registrationDate`, `email`, `username`, `password`, `mobileNumber`, `shopName`, `shopAddress`, `shopDesc`) VALUES
('ByfT0NTfg', 'jaber al rafian', '31/1/2017', 'r@g.com', 'jRafian', '1234', '2310464', 'my Shop', 'kalabagan', 'not now'),
('S1DfqHRGQ', 'asds', '2018-07-07 20:11:27.382', 'asda@g.cvom', 'arabi', '1234', '234234234', 'Shopify', 'sdaasds', 'asdass'),
('S1qp9HCMX', 'sdfsfdsfs', '2018-07-07 20:14:26.465', 'asda@g.asdcvom', 'kabir', '1234', 'sadadsasd', 'asda', 'sadasd', 'asd');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`categoryId`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`productId`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `sales_table`
--
ALTER TABLE `sales_table`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sales_table`
--
ALTER TABLE `sales_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `category`
--
ALTER TABLE `category`
  ADD CONSTRAINT `category_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `sales_table`
--
ALTER TABLE `sales_table`
  ADD CONSTRAINT `sales_table_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
