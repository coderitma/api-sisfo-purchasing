-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 26, 2023 at 10:44 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_pembelian`
--

-- --------------------------------------------------------

--
-- Table structure for table `barang`
--

CREATE TABLE `barang` (
  `kodeBarang` varchar(20) NOT NULL,
  `namaBarang` varchar(100) NOT NULL,
  `hargaBeli` int(11) NOT NULL,
  `hargaJual` int(11) NOT NULL,
  `jumlahBarang` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `barang`
--

INSERT INTO `barang` (`kodeBarang`, `namaBarang`, `hargaBeli`, `hargaJual`, `jumlahBarang`) VALUES
('BRG-001', 'Barang 001 (ubah 01)', 20000, 25000, 10),
('BRG-002', 'Barang 002', 10000, 15000, 10),
('BRG-003', 'Barang 003', 10000, 15000, 10);

-- --------------------------------------------------------

--
-- Table structure for table `item_beli`
--

CREATE TABLE `item_beli` (
  `id` int(11) NOT NULL,
  `faktur` varchar(20) NOT NULL,
  `kodeBarang` varchar(10) NOT NULL,
  `jumlahBeli` int(11) NOT NULL,
  `namaBarang` varchar(20) NOT NULL,
  `hargaBeli` int(11) NOT NULL,
  `subtotal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `item_beli`
--

INSERT INTO `item_beli` (`id`, `faktur`, `kodeBarang`, `jumlahBeli`, `namaBarang`, `hargaBeli`, `subtotal`) VALUES
(144, 'BELI-001', 'BRG-001', 1, 'Barang 001 (ubah 01)', 20000, 20000),
(145, 'BELI-002', 'BRG-001', 2, 'Barang 001 (ubah 01)', 20000, 40000),
(146, 'BELI-002', 'BRG-002', 3, 'Barang 002', 10000, 30000),
(147, 'BELI-003', 'BRG-001', 2, 'Barang 001 (ubah 01)', 20000, 40000),
(148, 'BELI-003', 'BRG-002', 3, 'Barang 002', 10000, 30000);

-- --------------------------------------------------------

--
-- Table structure for table `pemasok`
--

CREATE TABLE `pemasok` (
  `kodePemasok` varchar(10) NOT NULL,
  `namaPemasok` varchar(100) NOT NULL,
  `alamatPemasok` varchar(200) NOT NULL,
  `teleponPemasok` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pemasok`
--

INSERT INTO `pemasok` (`kodePemasok`, `namaPemasok`, `alamatPemasok`, `teleponPemasok`) VALUES
('PMK-001', 'PT. PMK 001', 'Jl. Jalanan 01', '081221112211'),
('PMK-002', 'PT. PMK 002 (diubah 01)', 'Jl. Jalanan 02', '081223338888');

-- --------------------------------------------------------

--
-- Table structure for table `pembelian`
--

CREATE TABLE `pembelian` (
  `faktur` varchar(20) NOT NULL,
  `tanggal` date NOT NULL,
  `total` int(11) NOT NULL,
  `dibayar` int(11) NOT NULL,
  `kembali` int(11) NOT NULL,
  `kodePemasok` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pembelian`
--

INSERT INTO `pembelian` (`faktur`, `tanggal`, `total`, `dibayar`, `kembali`, `kodePemasok`) VALUES
('BELI-001', '2023-04-30', 20000, 100000, 80000, 'PMK-002'),
('BELI-002', '2023-04-26', 70000, 100000, 30000, 'PMK-002'),
('BELI-003', '2023-04-26', 70000, 100000, 30000, 'PMK-002');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `firstName` varchar(30) NOT NULL,
  `lastName` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`firstName`, `lastName`, `email`, `password`) VALUES
('Budi', 'Doremi', 'budi@gmail.com', '$2a$10$C9HjbHTxqoVQ7RDSdoo2/u5.f304avRJDesAdQ/ACFLwkRcsjZw6y'),
('Mirna', 'Hanipah', 'mirna.h@gmail.com', '$2a$10$58FZhUOwtORJNOMqCnaxku8fHtgiKeeEJzDZdVVqX2W135qd2iEra'),
('Yanwar', 'Solahudin', 'yanwar@gmail.com', '$2a$10$HPPcWruZmbYsD2JF/jY91.pYfelgvQhYZHBRGWfYTCJbTEiwrjr9y'),
('Yuni', 'Hanipah', 'yunyun@gmail.com', '$2a$10$7sgZDvRsCTKKh4f0fGKQYuhgWOoyfynMXxxNHhTORRbQP6xKyek7S');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `barang`
--
ALTER TABLE `barang`
  ADD PRIMARY KEY (`kodeBarang`);

--
-- Indexes for table `item_beli`
--
ALTER TABLE `item_beli`
  ADD PRIMARY KEY (`id`),
  ADD KEY `item_beli_ibfk_1` (`faktur`),
  ADD KEY `item_beli_ibfk_2` (`kodeBarang`);

--
-- Indexes for table `pemasok`
--
ALTER TABLE `pemasok`
  ADD PRIMARY KEY (`kodePemasok`);

--
-- Indexes for table `pembelian`
--
ALTER TABLE `pembelian`
  ADD PRIMARY KEY (`faktur`),
  ADD KEY `kodePemasok` (`kodePemasok`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `item_beli`
--
ALTER TABLE `item_beli`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=149;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `item_beli`
--
ALTER TABLE `item_beli`
  ADD CONSTRAINT `item_beli_ibfk_1` FOREIGN KEY (`faktur`) REFERENCES `pembelian` (`faktur`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `item_beli_ibfk_2` FOREIGN KEY (`kodeBarang`) REFERENCES `barang` (`kodeBarang`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `pembelian`
--
ALTER TABLE `pembelian`
  ADD CONSTRAINT `pembelian_ibfk_1` FOREIGN KEY (`kodePemasok`) REFERENCES `pemasok` (`kodePemasok`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
