-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 22, 2023 at 07:45 PM
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
('', 'Kotak Pandora', 7000, 7400, 200),
('BRG-001', 'Baju Harry Potter', 10000, 12000, 1),
('BRG-002', 'Dompet Nevergate', 14000, 23000, 168),
('BRG-004', 'Happy Care Hand Sanitizer', 12000, 15000, 110),
('BRG-005', 'Yupi Candy Bear', 920, 1000, 142),
('BRG-006', 'Krisbow Battery A2', 7000, 7400, 235),
('BRG-1', 'Kotak Pandora', 7000, 7400, 226),
('BRG-101', 'Baju Harry Potter', 0, 110000, 24),
('BRG-111', 'Kotak Pandora', 7000, 7400, 255),
('BRG-112', 'Kotak Pandora', 7000, 7400, 212),
('BRG-114', 'Kotak Pandora', 7000, 7400, 230),
('BRG-122', 'Baju Harry Potter', 10000, 12000, 1),
('BRG-132', 'Stand PC', 10000, 12000, 1);

-- --------------------------------------------------------

--
-- Table structure for table `item_beli`
--

CREATE TABLE `item_beli` (
  `id` int(11) NOT NULL,
  `faktur` varchar(20) NOT NULL,
  `kodeBarang` varchar(10) NOT NULL,
  `jumlahBarang` int(11) NOT NULL,
  `jumlahBeli` int(11) NOT NULL,
  `namaBarang` varchar(20) NOT NULL,
  `hargaBeli` int(11) NOT NULL,
  `hargaJual` int(11) NOT NULL,
  `subtotal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `item_beli`
--

INSERT INTO `item_beli` (`id`, `faktur`, `kodeBarang`, `jumlahBarang`, `jumlahBeli`, `namaBarang`, `hargaBeli`, `hargaJual`, `subtotal`) VALUES
(27, 'BELI-003', 'BRG-002', 0, 1, 'Nevergate Dompet', 10000, 23000, 10000),
(28, 'BELI-002', 'BRG-002', 0, 4, 'Nevergate Dompet', 10000, 23000, 40000),
(30, 'BELI-006', 'BRG-002', 0, 1, 'Nevergate Dompet', 10000, 23000, 10000),
(35, 'BELI-011', 'BRG-002', 0, 4, 'Dompet Nevergate', 14000, 23000, 56000),
(36, 'BELI-011', 'BRG-004', 0, 2, 'Happy Care Hand Sani', 12000, 15000, 24000),
(37, 'BELI-1681039335401', 'BRG-006', 0, 5, 'Krisbow Battery A2', 7000, 7400, 35000),
(38, 'BELI-1681039701165', 'BRG-111', 0, 2, 'Kotak Pandora', 7000, 7400, 14000),
(39, 'BELI-1681039701165', 'BRG-006', 0, 2, 'Krisbow Battery A2', 7000, 7400, 14000),
(40, 'BELI-1681039928731', 'BRG-006', 0, 2, 'Krisbow Battery A2', 7000, 7400, 14000),
(41, 'BELI-1681040822851', 'BRG-1', 0, 3, 'Kotak Pandora', 7000, 7400, 21000),
(42, 'BELI-1681042314939', 'BRG-006', 0, 2, 'Krisbow Battery A2', 7000, 7400, 14000),
(43, 'BELI-1681042689039', 'BRG-111', 0, 2, 'Kotak Pandora', 7000, 7400, 14000),
(44, 'BELI-1681042689039', 'BRG-006', 0, 1, 'Krisbow Battery A2', 7000, 7400, 7000),
(45, 'BELI-1681042971609', 'BRG-112', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(46, 'BELI-1681043186306', 'BRG-111', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(47, 'BELI-1681043689028', 'BRG-1', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(48, 'BELI-1681043710379', 'BRG-111', 0, 4, 'Kotak Pandora', 7000, 7400, 28000),
(49, 'BELI-1681044432580', 'BRG-1', 0, 3, 'Kotak Pandora', 7000, 7400, 21000),
(50, 'BELI-1681044432580', 'BRG-006', 0, 2, 'Krisbow Battery A2', 7000, 7400, 14000),
(51, 'BELI-1681044432580', 'BRG-004', 0, 4, 'Happy Care Hand Sani', 12000, 15000, 48000),
(52, 'BELI-1681044432580', 'BRG-005', 0, 4, 'Yupi Candy Bear', 920, 1000, 3680),
(53, '', 'BRG-111', 0, 2, 'Kotak Pandora', 7000, 7400, 14000),
(54, '', 'BRG-005', 0, 2, 'Yupi Candy Bear', 920, 1000, 1840),
(55, 'BELI-1681058663887', 'BRG-004', 0, 4, 'Happy Care Hand Sani', 12000, 15000, 48000),
(56, 'BELI-1681058722320', 'BRG-1', 0, 2, 'Kotak Pandora', 7000, 7400, 14000),
(57, 'BELI-1681058893901', 'BRG-005', 0, 1, 'Yupi Candy Bear', 920, 1000, 920),
(58, 'BELI-1681059068026', 'BRG-005', 0, 1, 'Yupi Candy Bear', 920, 1000, 920),
(59, 'BELI-1681059068026', 'BRG-002', 0, 1, 'Dompet Nevergate', 14000, 23000, 14000),
(60, 'BELI-1681059808403', 'BRG-006', 0, 6, 'Krisbow Battery A2', 7000, 7400, 42000),
(61, 'BELI-1681059808403', 'BRG-005', 0, 2, 'Yupi Candy Bear', 920, 1000, 1840),
(62, 'BELI-1681061645426', 'BRG-111', 0, 6, 'Kotak Pandora', 7000, 7400, 42000),
(63, 'BELI-1681061645426', 'BRG-006', 0, 1, 'Krisbow Battery A2', 7000, 7400, 7000),
(64, 'BELI-1681062873322', 'BRG-006', 0, 1, 'Krisbow Battery A2', 7000, 7400, 7000),
(65, 'BELI-1681063887555', 'BRG-1', 0, 5, 'Kotak Pandora', 7000, 7400, 35000),
(66, 'BELI-1681064713104', 'BRG-006', 0, 3, 'Krisbow Battery A2', 7000, 7400, 21000),
(67, 'BELI-1681064713104', 'BRG-005', 0, 2, 'Yupi Candy Bear', 920, 1000, 1840),
(68, 'BELI-1681064875614', 'BRG-1', 0, 2, 'Kotak Pandora', 7000, 7400, 14000),
(69, 'BELI-1681064875614', 'BRG-005', 0, 2, 'Yupi Candy Bear', 920, 1000, 1840),
(70, 'BELI-1681064875614', 'BRG-114', 0, 6, 'Kotak Pandora', 7000, 7400, 42000),
(71, 'BELI-1681068236547', 'BRG-006', 0, 3, 'Krisbow Battery A2', 7000, 7400, 21000),
(72, 'BELI-1681068236547', 'BRG-004', 0, 2, 'Happy Care Hand Sani', 12000, 15000, 24000),
(73, 'BELI-1681068236547', 'BRG-005', 0, 1, 'Yupi Candy Bear', 920, 1000, 920),
(74, 'BELI-1681082226507', 'BRG-114', 0, 2, 'Kotak Pandora', 7000, 7400, 14000),
(75, 'BELI-1681082226507', 'BRG-111', 0, 2, 'Kotak Pandora', 7000, 7400, 14000),
(76, 'BELI-1681082422537', 'BRG-111', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(77, 'BELI-1681082765539', 'BRG-112', 0, 2, 'Kotak Pandora', 7000, 7400, 14000),
(78, 'BELI-1681082904856', 'BRG-111', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(79, 'BELI-1681086400023', 'BRG-111', 0, 2, 'Kotak Pandora', 7000, 7400, 14000),
(80, 'BELI-1681086400023', 'BRG-111', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(81, 'BELI-1681086468955', 'BRG-111', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(82, 'BELI-1681087140791', 'BRG-111', 0, 3, 'Kotak Pandora', 7000, 7400, 21000),
(83, 'BELI-1681087975373', 'BRG-111', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(84, 'BELI-1681088094572', 'BRG-111', 0, 3, 'Kotak Pandora', 7000, 7400, 21000),
(85, 'BELI-1681088125758', 'BRG-111', 0, 2, 'Kotak Pandora', 7000, 7400, 14000),
(86, 'BELI-1681088178855', 'BRG-111', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(87, 'BELI-1681088219389', 'BRG-111', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(88, 'BELI-1681088253172', 'BRG-111', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(89, 'BELI-1681088312590', 'BRG-111', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(90, 'BELI-1681088354989', 'BRG-111', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(91, 'BELI-1681088414923', 'BRG-112', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(92, 'BELI-1681088583040', 'BRG-111', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(93, 'BELI-1681088674407', 'BRG-111', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(94, 'BELI-1681088754110', 'BRG-111', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(95, 'BELI-1681089006474', 'BRG-111', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(96, 'BELI-1681089101090', 'BRG-111', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(97, 'BELI-1681089318309', 'BRG-112', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(98, 'BELI-1681090322971', 'BRG-111', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(99, 'BELI-1681090462042', 'BRG-111', 0, 2, 'Kotak Pandora', 7000, 7400, 14000),
(100, 'BELI-1681090557822', 'BRG-111', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(101, 'BELI-1681090577239', 'BRG-1', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(102, 'BELI-1681090659707', 'BRG-111', 0, 2, 'Kotak Pandora', 7000, 7400, 14000),
(103, 'BELI-1681090712224', 'BRG-111', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(104, 'BELI-1681090712224', 'BRG-006', 0, 2, 'Krisbow Battery A2', 7000, 7400, 14000),
(105, 'BELI-1681090712224', 'BRG-005', 0, 4, 'Yupi Candy Bear', 920, 1000, 3680),
(106, 'BELI-1681090818906', 'BRG-112', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(107, 'BELI-1681091399139', 'BRG-111', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(108, 'BELI-1681091399139', 'BRG-006', 0, 1, 'Krisbow Battery A2', 7000, 7400, 7000),
(109, 'BELI-1681091399139', 'BRG-002', 0, 1, 'Dompet Nevergate', 14000, 23000, 14000),
(110, 'BELI-1681134385096', 'BRG-114', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(111, 'BELI-1681134385096', 'BRG-006', 0, 2, 'Krisbow Battery A2', 7000, 7400, 14000),
(112, 'BELI-1681134971661', 'BRG-006', 0, 2, 'Krisbow Battery A2', 7000, 7400, 14000),
(113, 'BELI-1681134971661', 'BRG-005', 0, 1, 'Yupi Candy Bear', 920, 1000, 920),
(114, 'BELI-1681134971661', 'BRG-004', 0, 2, 'Happy Care Hand Sani', 12000, 15000, 24000),
(115, 'BELI-090', 'BRG-112', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(116, 'BELI-1091', 'BRG-114', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(117, 'BELI-1091', 'BRG-005', 0, 1, 'Yupi Candy Bear', 920, 1000, 920),
(118, 'BEL-0912', 'BRG-114', 0, 3, 'Kotak Pandora', 7000, 7400, 21000),
(119, 'BEL-0912', 'BRG-112', 0, 2, 'Kotak Pandora', 7000, 7400, 14000),
(120, 'BELI-904', 'BRG-114', 0, 2, 'Kotak Pandora', 7000, 7400, 14000),
(121, 'BELI-904', 'BRG-111', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(122, 'BELI-905', 'BRG-114', 0, 2, 'Kotak Pandora', 7000, 7400, 14000),
(123, 'BELI-906', 'BRG-1', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(124, 'BELI-906', 'BRG-111', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(125, 'BELI-907', 'BRG-114', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(126, 'BELI-907', 'BRG-005', 0, 1, 'Yupi Candy Bear', 920, 1000, 920),
(127, 'BELI-908', 'BRG-114', 0, 3, 'Kotak Pandora', 7000, 7400, 21000),
(128, 'BELI-908', 'BRG-112', 0, 2, 'Kotak Pandora', 7000, 7400, 14000),
(129, 'BELI-90A', 'BRG-1', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(130, 'BELI-90A', 'BRG-112', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(131, 'BELI-90A', 'BRG-114', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(132, 'BELI-90A', 'BRG-111', 0, 2, 'Kotak Pandora', 7000, 7400, 14000),
(133, 'BELI-098A', 'BRG-114', 0, 1, 'Kotak Pandora', 7000, 7400, 7000),
(134, 'BELI-098A', 'BRG-1', 0, 7, 'Kotak Pandora', 7000, 7400, 49000),
(135, 'BELI-09E', 'BRG-114', 0, 7, 'Kotak Pandora', 7000, 7400, 49000),
(136, 'BELI-09E', 'BRG-111', 0, 1, 'Kotak Pandora', 7000, 7400, 7000);

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
('SPL-001', 'PT. Supplier Jaya Jakarta', 'Jakarta', '081222002002'),
('SPL-002', 'PT. Supplier 002', 'Jakarta', '081222002002'),
('SPL-003', 'PT. Supplier 002', 'Jakarta', '081222002002'),
('SPL-005', 'PT. Supplier 002', 'Jakarta', '081222002002'),
('SPL-006', 'PT. Supplier 002', 'Jakarta', '081222002002'),
('SPL-007', 'PT. Supplier 002', 'Jakarta', '081222002002'),
('SPL-008', 'PT. Supplier 002', 'Jakarta', '081222002002'),
('SPL-009', 'PT. Supplier 002', 'Jakarta', '081222002002'),
('SPL-010', 'PT. Supplier 002', 'Jakarta', '081222002002'),
('SPL-011', 'PT. Supplier 002', 'Jakarta', '081222002002'),
('SPL-012', 'PT. Supplier Jaya Jakarta', 'Jl. Kembang Goyang No. 12 Jakarta Selatan', '081222002002'),
('SPL-014', 'PT. Supplier 002', 'Jakarta', '081222002002'),
('SPL-015', 'PT. Supplier 015', 'Bandung', '081222002002'),
('SPL-016', 'PT. Supplier 002', 'Jakarta', '081222002002'),
('SPL-017', 'PT. Supplier 002', 'Jakarta', '081222002002'),
('SPL-018', 'PT. Kembang Goyang', 'Jakarta Timur', '081222002002'),
('SPL-105', 'PT. Masvion Jaya Angin', 'Jakarta Barat', '089455522334'),
('SPL-120', 'PT. Supplier 015', 'Jl. Kemanggisan Raya No. 14 Jakarta Barat', '081222002002'),
('SPL-121', 'PT. Supplier 015', 'Jl. Kemanggisan Raya No. 14 Jakarta Barat', '0812220020022222'),
('SPL-122', 'PT. Supplier 015', 'Jl. Kemanggisan Raya No. 14 Jakarta Barat', 'S081221120110'),
('SPL-123', 'PT. Supplier 015', 'Jl. Kemanggisan Raya No. 14 Jakarta Barat', '081221120110'),
('SPL-124', 'PT. Kembang Manis', 'Jl. Kembang Goyang No. 12 Jakarta Selatan', '081222002002');

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
('', '2023-04-09', 15840, 0, 0, 'SPL-124'),
('BEL-0912', '2023-04-13', 35000, 90000, 55000, 'SPL-124'),
('BELI-002', '2023-03-01', 40000, 0, 0, 'SPL-001'),
('BELI-003', '2023-03-01', 34000, 0, 0, 'SPL-001'),
('BELI-004', '2023-03-30', 12000, 0, 0, 'SPL-001'),
('BELI-006', '2023-03-31', 10000, 0, 0, 'SPL-001'),
('BELI-011', '2023-04-06', 80000, 0, 0, 'SPL-010'),
('BELI-090', '2023-04-12', 7000, 9000, 2000, 'SPL-124'),
('BELI-098A', '2023-04-13', 56000, 60000, 4000, 'SPL-124'),
('BELI-09E', '2023-04-13', 56000, 90000, 34000, 'SPL-124'),
('BELI-1091', '2023-04-12', 7920, 10000, 2080, 'SPL-124'),
('BELI-1681039335401', '2023-04-09', 35000, 0, 0, 'SPL-124'),
('BELI-1681039701165', '2023-04-09', 28000, 0, 0, 'SPL-124'),
('BELI-1681039928731', '2023-04-09', 14000, 0, 0, 'SPL-124'),
('BELI-1681040822851', '2023-04-09', 21000, 0, 0, 'SPL-124'),
('BELI-1681042314939', '2023-04-09', 14000, 0, 0, 'SPL-124'),
('BELI-1681042689039', '2023-04-09', 21000, 0, 0, 'SPL-124'),
('BELI-1681042971609', '2023-04-09', 7000, 0, 0, 'SPL-124'),
('BELI-1681043186306', '2023-04-09', 7000, 0, 0, 'SPL-015'),
('BELI-1681043689028', '2023-04-09', 7000, 0, 0, 'SPL-122'),
('BELI-1681043710379', '2023-04-09', 28000, 0, 0, 'SPL-124'),
('BELI-1681044432580', '2023-04-09', 86680, 0, 0, 'SPL-124'),
('BELI-1681058663887', '2023-04-09', 48000, 0, 0, 'SPL-124'),
('BELI-1681058722320', '2023-03-01', 14000, 0, 0, 'SPL-123'),
('BELI-1681058893901', '2023-04-09', 920, 0, 0, 'SPL-124'),
('BELI-1681059068026', '2023-04-09', 14920, 0, 0, 'SPL-105'),
('BELI-1681059808403', '2023-04-09', 43840, 0, 0, 'SPL-124'),
('BELI-1681061645426', '2023-05-01', 49000, 0, 0, 'SPL-123'),
('BELI-1681062873322', '2023-04-09', 7000, 0, 0, 'SPL-124'),
('BELI-1681063887555', '2023-04-09', 35000, 0, 0, 'SPL-105'),
('BELI-1681064713104', '2023-04-09', 22840, 0, 0, 'SPL-124'),
('BELI-1681064875614', '2023-04-09', 57840, 0, 0, 'SPL-122'),
('BELI-1681068236547', '2023-04-09', 45920, 0, 0, 'SPL-105'),
('BELI-1681082226507', '2023-04-09', 28000, 0, 0, 'SPL-124'),
('BELI-1681082422537', '2023-04-09', 7000, 0, 0, 'SPL-124'),
('BELI-1681082765539', '2023-04-09', 14000, 0, 0, 'SPL-124'),
('BELI-1681082904856', '2023-04-09', 7000, 0, 0, 'SPL-124'),
('BELI-1681086400023', '2023-04-10', 21000, 0, 0, 'SPL-124'),
('BELI-1681086468955', '2023-04-10', 7000, 0, 0, 'SPL-123'),
('BELI-1681087140791', '2023-04-10', 21000, 0, 0, 'SPL-124'),
('BELI-1681087975373', '2023-04-10', 7000, 0, 0, 'SPL-123'),
('BELI-1681088094572', '2023-04-10', 21000, 0, 0, 'SPL-124'),
('BELI-1681088125758', '2023-04-10', 14000, 0, 0, 'SPL-124'),
('BELI-1681088178855', '2023-04-10', 7000, 0, 0, 'SPL-124'),
('BELI-1681088219389', '2023-04-10', 7000, 0, 0, 'SPL-124'),
('BELI-1681088253172', '2023-04-10', 7000, 0, 0, 'SPL-124'),
('BELI-1681088312590', '2023-04-10', 7000, 0, 0, 'SPL-124'),
('BELI-1681088354989', '2023-04-10', 7000, 0, 0, 'SPL-123'),
('BELI-1681088414923', '2023-04-10', 7000, 0, 0, 'SPL-124'),
('BELI-1681088583040', '2023-04-10', 7000, 0, 0, 'SPL-124'),
('BELI-1681088674407', '2023-04-10', 7000, 0, 0, 'SPL-123'),
('BELI-1681088754110', '2023-04-10', 7000, 0, 0, 'SPL-123'),
('BELI-1681089006474', '2023-04-10', 7000, 0, 0, 'SPL-124'),
('BELI-1681089101090', '2023-04-10', 7000, 0, 0, 'SPL-124'),
('BELI-1681089318309', '2023-04-10', 7000, 0, 0, 'SPL-124'),
('BELI-1681090322971', '2023-04-10', 7000, 0, 0, 'SPL-124'),
('BELI-1681090462042', '2023-04-10', 14000, 0, 0, 'SPL-124'),
('BELI-1681090557822', '2023-04-10', 7000, 0, 0, 'SPL-124'),
('BELI-1681090577239', '2023-04-10', 7000, 0, 0, 'SPL-124'),
('BELI-1681090659707', '2023-04-10', 14000, 0, 0, 'SPL-124'),
('BELI-1681090712224', '2023-04-10', 24680, 0, 0, 'SPL-124'),
('BELI-1681090818906', '2023-04-10', 7000, 0, 0, 'SPL-124'),
('BELI-1681091399139', '2023-04-10', 28000, 0, 0, 'SPL-124'),
('BELI-1681134385096', '2023-04-10', 21000, 0, 0, 'SPL-124'),
('BELI-1681134971661', '2023-04-10', 38920, 40000, 1080, 'SPL-124'),
('BELI-904', '2023-04-13', 21000, 49999, 28999, 'SPL-124'),
('BELI-905', '2023-04-13', 14000, 20000, 6000, 'SPL-124'),
('BELI-906', '2023-04-13', 14000, 90000, 76000, 'SPL-124'),
('BELI-907', '2023-04-13', 7920, 50000, 42080, 'SPL-124'),
('BELI-908', '2023-04-13', 35000, 90000, 55000, 'SPL-124'),
('BELI-90A', '2023-04-13', 35000, 80000, 45000, 'SPL-123');

-- --------------------------------------------------------

--
-- Table structure for table `reporting`
--

CREATE TABLE `reporting` (
  `id` int(11) NOT NULL,
  `email` varchar(40) NOT NULL,
  `jenis` varchar(30) NOT NULL,
  `path` varchar(200) NOT NULL,
  `link` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reporting`
--

INSERT INTO `reporting` (`id`, `email`, `jenis`, `path`, `link`) VALUES
(15, 'andikaoreo@gmail.com', 'pembelian', './reporting/1680409780871.xlsx', 'http://localhost:4000/reports/1680409780871.xlsx'),
(16, 'andikaoreo@gmail.com', 'pembelian', './reporting/1680409781598.xlsx', 'http://localhost:4000/reports/1680409781598.xlsx'),
(20, 'andikaoreo@gmail.com', 'pembelian', './reporting/1680417977434.xlsx', 'http://localhost:4000/reports/1680417977434.xlsx'),
(21, 'andikaoreo@gmail.com', 'pembelian', './reporting/1680418378307.xlsx', 'http://localhost:4000/reports/1680418378307.xlsx'),
(22, 'andikaoreo@gmail.com', 'pembelian', './reporting/1680418399584.xlsx', 'http://localhost:4000/reports/1680418399584.xlsx'),
(23, 'andikaoreo@gmail.com', 'pembelian', './reporting/1680418600984.xlsx', 'http://localhost:4000/reports/1680418600984.xlsx'),
(24, 'andikaoreo@gmail.com', 'pembelian', './reporting/1680419014389.xlsx', 'http://localhost:4000/reports/1680419014389.xlsx'),
(25, 'andikaoreo@gmail.com', 'pembelian', './reporting/1680426033764.xlsx', 'http://localhost:4000/reports/1680426033764.xlsx');

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
('Andika', 'Oreo', 'andikaoreo@gmail.com', '$2a$10$IW5.4J1Y2.zcunF.DAZigu3f65LArdqxNjKjGH7H/qH85iJNrLiYa'),
('budi', 'asik', 'budiasik@gmail.com', '$2a$10$s4.LjHT5uP9wUXwK4vRBJOqZ3OpYfh8oCAKI5WdUQyEcMOc2lW5jy'),
('Marni', 'Oreo', 'marni@gmail.com', '$2a$10$tPA46pY6ILXAjBOnEnrFcO98cfhlxFTAERORM3P/Lkqprjfr4FWui'),
('Mirna', 'Oreo', 'mirna@gmail.com', '$2a$10$ip6O24oG5B.kB5Qf8qOLMeLPaZCNPJUKaxLkLHYJqITsAwPPEtNJy'),
('Sandi', 'Oreo', 'sandioreo@gmail.com', '$2a$10$O8eK2Y6CywN9OFEcNc458uzNIk4mBFuMyih2cbOUe3XUGBe3bPdBm'),
('Sandi', 'Oreo', 'y@n.com', '$2a$10$fJDxy9TqmVr2H4TFYXecr.uTtvOORjT0ZSwoDukz72LqXL45BgSm6'),
('Sandi', 'Oreo', 'yan@gmail.com', '123qwe'),
('Yanwar', 'Solahudin', 'yanwarsolah@gmail.com', '$2a$10$gXL3oHgQSbuisphQxH8O.eLATmoIltKrj4Ng6c.n2Zmdyed.qD622'),
('Sandi', 'Oreo', 'yanzen@gmail.com', '123qwe');

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
-- Indexes for table `reporting`
--
ALTER TABLE `reporting`
  ADD PRIMARY KEY (`id`),
  ADD KEY `email` (`email`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=137;

--
-- AUTO_INCREMENT for table `reporting`
--
ALTER TABLE `reporting`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `item_beli`
--
ALTER TABLE `item_beli`
  ADD CONSTRAINT `item_beli_ibfk_1` FOREIGN KEY (`faktur`) REFERENCES `pembelian` (`faktur`) ON UPDATE CASCADE,
  ADD CONSTRAINT `item_beli_ibfk_2` FOREIGN KEY (`kodeBarang`) REFERENCES `barang` (`kodeBarang`);

--
-- Constraints for table `pembelian`
--
ALTER TABLE `pembelian`
  ADD CONSTRAINT `pembelian_ibfk_1` FOREIGN KEY (`kodePemasok`) REFERENCES `pemasok` (`kodePemasok`);

--
-- Constraints for table `reporting`
--
ALTER TABLE `reporting`
  ADD CONSTRAINT `reporting_ibfk_1` FOREIGN KEY (`email`) REFERENCES `user` (`email`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
