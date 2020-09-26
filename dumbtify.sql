-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 26 Sep 2020 pada 06.39
-- Versi server: 10.4.11-MariaDB
-- Versi PHP: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dumbtify`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `artists`
--

CREATE TABLE `artists` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `old` int(11) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `startCareer` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `artists`
--

INSERT INTO `artists` (`id`, `name`, `old`, `type`, `startCareer`, `createdAt`, `updatedAt`) VALUES
(1, 'Henry', 29, 'Rnb', 2002, '2020-06-15 10:25:50', '2020-06-16 10:25:53'),
(2, 'Yiruma', 39, 'Rnb', 2012, '2020-06-23 03:54:39', '2020-06-23 03:54:39'),
(3, 'Aimer', 30, 'Pop', 2003, '2020-06-23 04:07:35', '2020-06-23 04:07:35'),
(6, 'Rich Brian', 23, 'Hip Hop', 2008, '2020-06-23 08:15:23', '2020-06-23 08:15:23'),
(7, 'Michael Jackson', 39, 'Pop', 1990, '2020-06-23 08:19:52', '2020-06-23 08:19:52'),
(20, 'Muhammad Tulus', 32, 'Pop', 2010, '2020-09-26 03:40:28', '2020-09-26 03:40:28');

-- --------------------------------------------------------

--
-- Struktur dari tabel `music`
--

CREATE TABLE `music` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `attach` varchar(255) DEFAULT NULL,
  `artistId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `music`
--

INSERT INTO `music` (`id`, `title`, `year`, `thumbnail`, `attach`, `artistId`, `createdAt`, `updatedAt`) VALUES
(1, 'walau seribu rebah', 2002, '801a094e51bcc637b995e1ae9f3abaf1.png', 'https://res.cloudinary.com/eizeiky777/video/upload/v1593014069/music/Walau_seribu_rebah-_Nikita_lazrf2.mp3', 1, '2020-06-23 03:38:34', '2020-06-23 03:38:34'),
(19, 'fairy tale', 2002, '0151214961d6b4c4c87c542e1314ce8a.png', 'https://res.cloudinary.com/eizeiky777/video/upload/v1593014068/music/Yiruma_Kim_Min_Seok_-_Fairy_Tale_Duo_Version_sdisra.mp3', 2, '2020-06-23 16:32:08', '2020-06-23 16:32:08'),
(20, 'quartet no 3 ', 2002, 'f299442da3ee245453569d2cfdea23d3.png', 'https://res.cloudinary.com/eizeiky777/video/upload/v1593014061/music/Yiruma_-_Piano_Quartet_No.3_in_C_Audio_ny0yqf.mp3', 2, '2020-06-23 16:37:02', '2020-06-23 16:37:02'),
(22, 'Lord hold my hand', 2002, 'ae27bc50766ff94cea3000cf8b8a603d.png', 'https://res.cloudinary.com/eizeiky777/video/upload/v1593014046/music/Yiruma_-_Lord..._Hold_My_Hand_zjc9fe.mp3', 2, '2020-06-23 17:03:22', '2020-06-23 17:03:22'),
(23, 'with all i am', 2002, '59419d7afab9db68d4a59a343bccbe03.png', 'https://res.cloudinary.com/eizeiky777/video/upload/v1593014046/music/With_all_l_am_Jason_dv72vm.mp3', 1, '2020-06-24 06:04:59', '2020-06-24 06:04:59'),
(25, 'Stairway to heaven', 1992, '82feec3a670e21d648776c16ed7f0d1c.png', 'https://res.cloudinary.com/eizeiky777/video/upload/v1593014068/music/Yiruma_Kim_Min_Seok_-_Fairy_Tale_Duo_Version_sdisra.mp3', 3, '2020-06-24 08:58:36', '2020-06-24 08:58:36'),
(27, 'Indigo', 2012, '41d016c5664d553eb641772c5c154166.jpg', 'https://res.cloudinary.com/eizeiky777/video/upload/v1593014058/music/Kim_Min_Seok_-_Indigo_yduxk2.mp3', 2, '2020-06-28 05:48:27', '2020-06-28 05:48:27'),
(28, 'Serenade key D', 2015, '8d33c9ccf015e6790de3b29593a28c17.jpg', 'https://res.cloudinary.com/eizeiky777/video/upload/v1593014051/music/Yiruma_-_Serenade_in_D-Flat_Audio_afosc7.mp3', 2, '2020-06-30 08:24:23', '2020-06-30 08:24:23'),
(30, 'Serenade key D 2nd ', 2015, 'b00c038d7cff6c62c64acd0928dbfe4d.jpg', 'https://res.cloudinary.com/eizeiky777/video/upload/v1593014058/music/Kim_Min_Seok_-_Indigo_yduxk2.mp3', 2, '2020-07-02 03:46:23', '2020-07-02 03:46:23'),
(31, 'teman hidupku', 2007, '59d4dbf293a62e758e1305e332b49fac.png', 'https://res.cloudinary.com/eizeiky777/video/upload/v1593014051/music/Yiruma_-_Serenade_in_D-Flat_Audio_afosc7.mp3', 1, '2020-07-09 10:19:08', '2020-07-09 10:19:08'),
(32, 'Stairway to heaven', 2010, 'aa513bbdb00370ad85cb7998e95f27db.png', 'https://res.cloudinary.com/eizeiky777/video/upload/v1593014058/music/Kim_Min_Seok_-_Indigo_yduxk2.mp3', 1, '2020-09-24 12:13:23', '2020-09-24 12:13:23'),
(33, 'Stairway to heaven 2', 2010, '0eee86adf3fdf3b11c90b3db73cc87f1.png', 'https://res.cloudinary.com/eizeiky777/video/upload/v1593014058/music/Kim_Min_Seok_-_Indigo_yduxk2.mp3', 1, '2020-09-24 12:14:01', '2020-09-24 12:14:01'),
(39, 'Kiss the Rain', 2012, '15aebd37cf93a31fc71d08425802a1f5.jpg', 'http://res.cloudinary.com/eizeiky777/video/upload/v1601091577/nob30iowxtt2blmr4xm0.mp3', 2, '2020-09-26 03:39:38', '2020-09-26 03:39:38');

-- --------------------------------------------------------

--
-- Struktur dari tabel `musicas`
--

CREATE TABLE `musicas` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `attach` varchar(255) DEFAULT NULL,
  `artistId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `musicas`
--

INSERT INTO `musicas` (`id`, `title`, `year`, `thumbnail`, `attach`, `artistId`, `createdAt`, `updatedAt`) VALUES
(1, 'Kiss the rain', 2002, '2df66b294f2cb182854202db354373c2.png', 'https://soundcloud.com/keypoly/kiss-the-rain-sungha-jung', 1, '2020-06-24 06:43:52', '2020-06-24 06:43:52'),
(2, 'Stairway to heaven', 1111, '', 'https://open.spotify.com/track/6rbpI4fchfJx1IgCBowc8m?si=Cvc9qyYRSwS3nNwQ2PzqFw', 2, '2020-06-24 07:05:34', '2020-06-24 07:05:34'),
(3, 'Kiss the rain', 2002, 'c709ed5ee892ee951bf1e334ba4a675c.png', 'https://soundcloud.com/keypoly/kiss-the-rain-sungha-jung', 1, '2020-06-24 07:18:56', '2020-06-24 07:18:56'),
(4, 'Stairway to heaven', 1213, '', 'https://open.spotify.com/track/6rbpI4fchfJx1IgCBowc8m?si=Cvc9qyYRSwS3nNwQ2PzqFw', 2, '2020-06-24 07:20:25', '2020-06-24 07:20:25'),
(5, 'Stairway to heaven', 1212, '73281c89d31d715da60ec105e4958ff1.png', 'https://open.spotify.com/track/6rbpI4fchfJx1IgCBowc8m?si=Cvc9qyYRSwS3nNwQ2PzqFw', 2, '2020-06-24 07:24:08', '2020-06-24 07:24:08');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20200611113937-create-user.js'),
('20200612061524-create-artist.js'),
('20200612061537-create-music.js'),
('20200613022740-create-transaction.js'),
('20200624063110-create-musica.js');

-- --------------------------------------------------------

--
-- Struktur dari tabel `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `startDate` date DEFAULT NULL,
  `dueDate` date DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `attach` varchar(255) DEFAULT NULL,
  `status` enum('pending','cancel','approved') DEFAULT NULL,
  `snaps` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`snaps`)),
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `transactions`
--

INSERT INTO `transactions` (`id`, `startDate`, `dueDate`, `userId`, `attach`, `status`, `snaps`, `createdAt`, `updatedAt`) VALUES
(20, '2020-09-24', '2020-10-24', 1, 'success', 'approved', '{\"status_code\":200,\"status_message\":\"Success, Credit card transaction is successful\",\"bank\":\"mandiri\",\"transaction_id\":\"dc63b9b7-b88e-43b4-bec7-e7a33b9aea7c\",\"order_id\":\"dumbtify-92f9c9d2-1676-4176-8359-3bee0f4dd2af\",\"redirect_url\":\"https://api.sandbox.veritrans.co.id/v2/token/rba/redirect/481111-1114-dc63b9b7-b88e-43b4-bec7-e7a33b9aea7c\",\"gross_amount\":\"49990.00\",\"payment_type\":\"credit_card\",\"transaction_time\":\"2020-09-24 17:16:21\",\"transaction_status\":\"capture\",\"fraud_status\":\"accept\",\"masked_card\":\"481111-1114\",\"card_type\":\"credit\",\"finish_redirect_url\":\"http://example.com?order_id=dumbtify-92f9c9d2-1676-4176-8359-3bee0f4dd2af&status_code=200&transaction_status=capture\"}', '2020-09-24 10:16:28', '2020-09-24 10:42:10'),
(21, '2020-09-24', '2020-10-24', 17, 'success', 'approved', '{\"status_code\":200,\"status_message\":\"Success, Credit card transaction is successful\",\"bank\":\"mandiri\",\"transaction_id\":\"c8602d90-8ce8-492f-a2d0-7109b37bce9f\",\"order_id\":\"dumbtify-a9e3da1d-9174-4be8-8f4a-6b64e5b42186\",\"redirect_url\":\"https://api.sandbox.veritrans.co.id/v2/token/rba/redirect/481111-1114-c8602d90-8ce8-492f-a2d0-7109b37bce9f\",\"gross_amount\":\"49990.00\",\"payment_type\":\"credit_card\",\"transaction_time\":\"2020-09-24 19:08:03\",\"transaction_status\":\"capture\",\"fraud_status\":\"accept\",\"masked_card\":\"481111-1114\",\"card_type\":\"credit\",\"finish_redirect_url\":\"http://example.com?order_id=dumbtify-a9e3da1d-9174-4be8-8f4a-6b64e5b42186&status_code=200&transaction_status=capture\"}', '2020-09-24 12:08:12', '2020-09-26 01:33:15'),
(22, '2020-09-24', '2020-10-24', 2, 'success', 'approved', '{\"status_code\":200,\"status_message\":\"Success, Credit card transaction is successful\",\"bank\":\"mandiri\",\"transaction_id\":\"640df1ab-5377-47e4-bca7-f99ff0856bc7\",\"order_id\":\"dumbtify-6e5838ff-f69d-44bb-8bd2-307f2d29ae33\",\"redirect_url\":\"https://api.sandbox.veritrans.co.id/v2/token/rba/redirect/481111-1114-640df1ab-5377-47e4-bca7-f99ff0856bc7\",\"gross_amount\":\"79000.00\",\"payment_type\":\"credit_card\",\"transaction_time\":\"2020-09-24 23:08:39\",\"transaction_status\":\"capture\",\"fraud_status\":\"accept\",\"masked_card\":\"481111-1114\",\"card_type\":\"credit\",\"finish_redirect_url\":\"http://example.com?order_id=dumbtify-6e5838ff-f69d-44bb-8bd2-307f2d29ae33&status_code=200&transaction_status=capture\"}', '2020-09-24 16:08:46', '2020-09-26 01:33:57'),
(25, '2020-09-26', '2020-10-26', 18, 'success', 'approved', '{\"status_code\":200,\"status_message\":\"Success, Credit card transaction is successful\",\"bank\":\"mandiri\",\"transaction_id\":\"908a033f-34dc-4dd9-a34b-c76d6b082d48\",\"order_id\":\"dumbtify-2d6f2341-3a75-48f6-9949-92d22387b419\",\"redirect_url\":\"https://api.sandbox.veritrans.co.id/v2/token/rba/redirect/481111-1114-908a033f-34dc-4dd9-a34b-c76d6b082d48\",\"gross_amount\":\"79000.00\",\"payment_type\":\"credit_card\",\"transaction_time\":\"2020-09-26 08:39:53\",\"transaction_status\":\"capture\",\"fraud_status\":\"accept\",\"masked_card\":\"481111-1114\",\"card_type\":\"credit\",\"finish_redirect_url\":\"http://example.com?order_id=dumbtify-2d6f2341-3a75-48f6-9949-92d22387b419&status_code=200&transaction_status=capture\"}', '2020-09-26 01:40:00', '2020-09-26 01:42:30'),
(26, '2020-09-26', '2020-10-26', 25, 'success', 'approved', '{\"status_code\":200,\"status_message\":\"Success, Credit card transaction is successful\",\"bank\":\"mandiri\",\"transaction_id\":\"3d4eeb50-0ccb-49cc-b171-f38ecf33bbe4\",\"order_id\":\"dumbtify-fe497461-023d-493c-ab46-43d2ad340e9d\",\"redirect_url\":\"https://api.sandbox.veritrans.co.id/v2/token/rba/redirect/481111-1114-3d4eeb50-0ccb-49cc-b171-f38ecf33bbe4\",\"gross_amount\":\"49990.00\",\"payment_type\":\"credit_card\",\"transaction_time\":\"2020-09-26 10:33:18\",\"transaction_status\":\"capture\",\"fraud_status\":\"accept\",\"masked_card\":\"481111-1114\",\"card_type\":\"credit\",\"finish_redirect_url\":\"http://example.com?order_id=dumbtify-fe497461-023d-493c-ab46-43d2ad340e9d&status_code=200&transaction_status=capture\"}', '2020-09-26 03:33:26', '2020-09-26 03:36:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `listAs` enum('user','admin') DEFAULT NULL,
  `gender` enum('male','female') DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `subscribe` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `fullName`, `email`, `password`, `listAs`, `gender`, `phone`, `address`, `subscribe`, `createdAt`, `updatedAt`) VALUES
(1, 'Ban', 'ban@gmail.com', '$2b$10$JYIUdHjCa6uyaU7CefqSr.ve63fcVukZzWI.mzHJoTgNcAgG3bmr6', 'user', 'male', 2147483647, 'konoha street no 1', 1, '2020-06-23 02:03:37', '2020-09-23 12:12:21'),
(2, 'Meliodas', 'meliodas@gmail.com', '$2b$10$ZPnFNzL3PBEDSGM3WvKbL.2R4u2TUOFKY7rm4GN82VAkRTTMYcfp6', 'user', 'male', 628111111, 'konoha street no 2', 1, '2020-06-23 02:04:30', '2020-09-26 01:33:57'),
(3, 'Merlin', 'merlin@gmail.com', '$2b$10$CZzvvcgnMOvMZEbeNydM6uUpPPr2OOXS/K2U7HIkaF35FvxAPvkdG', 'user', 'female', 628000000, 'konoha street no 3', 0, '2020-06-23 02:05:29', '2020-06-23 02:05:29'),
(4, 'Escanor', 'escanor@gmail.com', '$2b$10$1kCIEpkzoD2SKCsI.bc6IOoPoIORGbBrt/sGRIc7.z6WPmL.rJNcC', 'user', 'male', 2147483647, 'konoha street no 4', 0, '2020-06-23 02:06:01', '2020-06-23 02:06:01'),
(5, 'King', 'king@gmail.com', '$2b$10$wmpPSO.3cnfscK2qN9jVe.wuImEF.eKSa1mr0HV01A0h.zMl9CMNW', 'user', 'male', 2147483647, 'konoha street no 5', 0, '2020-06-23 02:06:28', '2020-06-23 02:06:28'),
(6, 'admin', 'ban3@gmail.com', '$2b$10$oamf15K5xjKNpuueZJT56eSG260eBhdcu02nbvVwlUzOtolRcm/0a', 'admin', 'male', 2147483647, 'konoha street no 5', 1, '2020-06-23 02:08:34', '2020-06-23 02:08:34'),
(7, 'erro23', 'erro23@gmail.com', '$2b$10$P5AcUpKH78MhpGSYmo1Bs.MN0TjfoFflmV3XBmadbLIg7Cde1wO.i', 'user', 'female', 12313213, 'jl sulawesi no 123', 0, '2020-06-23 07:11:56', '2020-06-23 07:11:56'),
(8, 'Tigreal', 'Tigreal@yahoo.co.id', '$2b$10$ml7jJBTLpb7RsFj1jyVVN.UqVArJepY5s6yuRWkHm4wSuQ5hkcXFC', 'user', 'female', 12313213, 'jl sulawesi no 123', 1, '2020-06-23 07:19:00', '2020-09-23 12:06:29'),
(9, 'retyui', 'eeee@gmail.com', '$2b$10$2rV3MKpHCrh2LgQjyQYGn.pMsYM7tddgh4mhwg5v5nMVhfua3XkDu', 'user', 'female', 12313213, 'jl sulawesi no 123', 0, '2020-06-23 14:29:35', '2020-06-23 14:29:35'),
(17, 'budi23', 'budi23@gmail.com', '$2b$10$dTEmb4RoBfPJF6zCnW8DUu56rUxO/l9ono2h8pJeQz0gBGbAn.gAe', 'user', 'male', 2147483647, 'jl dr soetomo ds klampok gg 1 no 39 Pandaan Sumbergedang', 1, '2020-09-24 12:06:10', '2020-09-26 01:33:15'),
(18, 'toni21', 'toni21@gmail.com', '$2b$10$jZ9jidQOp5MTjdtp0ei1ZOrxYVdF0c/HXsMaGGYBk2ET/UVC5lhNW', 'user', 'male', 2147483647, 'jl dr soetomo ds klampok gg 1 no 39 Pandaan Sumbergedang', 1, '2020-09-25 09:34:32', '2020-09-26 01:42:30'),
(25, 'michael', 'michael@gmail.com', '$2b$10$MZalHu7C31tJG68X/lyoXOz0EjSY3cKCDhDF6/PxOLrhlAWKz.hRS', 'user', 'male', 2147483647, 'jl surabaya-malang km 23', 1, '2020-09-26 03:31:59', '2020-09-26 03:36:00');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `artists`
--
ALTER TABLE `artists`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `music`
--
ALTER TABLE `music`
  ADD PRIMARY KEY (`id`),
  ADD KEY `artistId` (`artistId`);

--
-- Indeks untuk tabel `musicas`
--
ALTER TABLE `musicas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `artistId` (`artistId`);

--
-- Indeks untuk tabel `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indeks untuk tabel `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `artists`
--
ALTER TABLE `artists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT untuk tabel `music`
--
ALTER TABLE `music`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT untuk tabel `musicas`
--
ALTER TABLE `musicas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `music`
--
ALTER TABLE `music`
  ADD CONSTRAINT `music_ibfk_1` FOREIGN KEY (`artistId`) REFERENCES `artists` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `musicas`
--
ALTER TABLE `musicas`
  ADD CONSTRAINT `musicas_ibfk_1` FOREIGN KEY (`artistId`) REFERENCES `artists` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
