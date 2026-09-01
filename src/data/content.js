export const siteInfo = {
  name: 'Padukuhan Ngrancah',
  location: 'Sriharjo, Imogiri, Bantul',
  fullLocation: 'Padukuhan Ngrancah, Sriharjo, Imogiri, Bantul, DIY',
  tagline: 'Ruang tumbuh, berkarya, dan bersama membangun Ngrancah.',
  description:
    'Padukuhan Ngrancah adalah bagian dari Desa Sriharjo yang terletak di Kecamatan Imogiri, Kabupaten Bantul. Masyarakat Ngrancah hidup rukun, gotong royong, dan berkomitmen membangun kampung halaman yang lestari.',
  social: {
    instagram: 'https://www.instagram.com/fspn_grup?igsi=Mm82NDBjaWVtaGs3',
  },
}

export const navLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Potensi', href: '#potensi' },
  { label: 'Kegiatan', href: '#kegiatan' },
  // { label: 'Berita', href: '#berita' },
  { label: 'UMKM', href: '#umkm' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Statistik', href: '#statistik' },
  { label: 'Lokasi', href: '#lokasi' },
]

export const hero = {
  title: 'Selamat Datang di Padukuhan Ngrancah',
  subtitle: 'Ruang tumbuh, berkarya, dan bersama membangun Ngrancah.',
  ctaPrimary: { label: 'Jelajahi Ngrancah', href: '#tentang' },
  ctaSecondary: { label: 'Kenali Potensi Kami', href: '#potensi' },
 image: {
  src: '/images/gallery/welcome.png',
  alt: 'Pemandangan Padukuhan Ngrancah',
},
}

export const about = {
  title: 'Tentang Ngrancah',
  subtitle: 'Mengenal lebih dekat kampung halaman kami',
  paragraphs: [
    'Di antara suasana pedesaan Sriharjo, Padukuhan Ngrancah tumbuh sebagai rumah bagi masyarakat yang hidup berdampingan dengan alam dan keseharian yang sederhana. Di sini, cerita tentang kampung hadir dari jalan-jalan kecil, rumah warga, kegiatan bersama, hingga hasil karya yang lahir dari tangan masyarakat sendiri.',
    'Kebersamaan menjadi bagian dari kehidupan Ngrancah. Gotong royong, kegiatan warga, dan berbagai tradisi yang terus dijaga menjadi ruang bagi masyarakat untuk saling bertemu dan tumbuh bersama. Dari hal-hal sederhana itulah rasa memiliki terhadap kampung halaman terus terjaga.',
    'Ngrancah terus berjalan mengikuti zaman tanpa meninggalkan apa yang menjadi bagian dari dirinya. Potensi lokal seperti usaha tempe, kreativitas warga, serta peran generasi muda menjadi bagian dari langkah untuk membawa Ngrancah tumbuh dan berkembang, sambil tetap menjaga kehangatan kehidupan kampung.',
  ],
  highlights: [
    { label: 'Desa', value: 'Sriharjo' },
    { label: 'Kecamatan', value: 'Imogiri' },
    { label: 'Kabupaten', value: 'Bantul' },
    { label: 'Provinsi', value: 'DIY' },
  ],
  image: {
    src: '/images/gallery/map.png',
    alt: 'Suasana kehidupan warga Ngrancah — ganti dengan foto asli',
  },
}

export const potential = {
  title: 'Potensi Ngrancah',
  subtitle: 'Kekayaan alam, budaya, dan sumber daya yang kami banggakan',
  items: [
    {
      title: 'Pertanian Organik',
      description:
        'Lahan subur menghasilkan padi, sayuran, dan tanaman hortikultura berkualitas yang mendukung ketahanan pangan warga.',
      icon: '🌾',
    },
    {
      title: 'Peternakan',
      description:
        'Di sela kehidupan sehari-hari, sebagian warga Ngrancah juga mengembangkan usaha peternakan sebagai bagian dari mata pencaharian dan potensi ekonomi keluarga.',
      icon: '🏡',
    },
    {
  title: 'Tempe Kacang Koro',
  description:
    'Salah satu potensi lokal Ngrancah adalah tempe kacang koro, yang diproduksi oleh warga dan menjadi bagian dari usaha rumahan serta kehidupan ekonomi masyarakat.',
  icon: '🫘',
},
   {
  title: 'Usaha Warga',
  description:
    'Berbagai usaha yang dijalankan warga menjadi bagian penting dari roda perekonomian Ngrancah dan terus berkembang mengikuti kebutuhan zaman.',
  icon: '🏪',
},
  ],
}

export const activities = {
  title: 'Kegiatan Warga',
  subtitle: 'Berbagai kegiatan dan organisasi yang menjadi bagian dari kehidupan warga Ngrancah.',
  items: [
    {
      title: 'FSPN',
      date: 'Forum Silaturahmi Pemuda Ngrancah',
      description: 'Wadah silaturahmi dan kegiatan bersama pemuda Ngrancah dalam membangun kebersamaan dan kepedulian terhadap lingkungan padukuhan.',
      image: '/images/gallery/fspn.jpeg',
    },
    {
      title: 'Karang Taruna Tani',
      date: 'Kegiatan Pemuda dan Pertanian',
      description: 'Kegiatan pemuda yang berkaitan dengan pertanian, pengelolaan lingkungan, serta pengembangan potensi dan kegiatan produktif warga.',
      image: '/images/gallery/tarunatani.jpeg',
    },
    {
      title: 'Ibu-Ibu PKK',
      date: 'Pemberdayaan Keluarga',
      description: 'Kegiatan bersama ibu-ibu dalam mendukung pemberdayaan keluarga, kesehatan, lingkungan, dan kegiatan sosial masyarakat.',
      image: '/images/gallery/pkk.png',
    },
    {
      title: 'REMASRIN',
      date: 'Remaja Masjid Adz-Dzakirin',
      description: 'Kegiatan remaja Masjid Adz-Dzakirin dalam mempererat kebersamaan, kegiatan keagamaan, dan kepedulian sosial di lingkungan Ngrancah.',
      image: '/images/gallery/remasrin.jpeg',
    },
  ],
}

export const news = {
  title: 'Berita & Informasi',
  subtitle: 'Update terbaru seputar Padukuhan Ngrancah',
  items: [
    {
      title: 'Launching Website Resmi Ngrancah',
      date: '11 Agustus 2026',
      category: 'Spiritual',
      excerpt:
        'Masjid Adz-Dzakirin digunakan untuk TPA,Serta kegiatan religius warga lainnya',
      image: '/images/gallery/masjid.jpeg',
    },
    {
      title: 'Salah satu joglo di padukuhan',
      date: '5 Agustus 2026',
      category: 'Lingkungan',
      excerpt:
        'Salah satu tempat untuk kegiatan warga atau untuk bermusyawarah',
      image: '/images/gallery/joglo.jpeg',
    },
   {
  title: 'Lapangan Bola Voli Ngrancah',
  date: '20 Agustus 2026',
  category: 'Olahraga',
  excerpt:
    'Lapangan Bola Voli Ngrancah menjadi salah satu tempat warga berolahraga, berlatih, dan berkumpul bersama dalam berbagai kegiatan olahraga.',
  image: '/images/gallery/lapangan.jpeg',
},
  ],
}

export const umkm = {
  title: 'Potensi Ekonomi Ngrancah',
  subtitle: 'Beragam hasil dan usaha yang tumbuh dari masyarakat Ngrancah',
  items: [
    {
      name: 'Sapi & Kambing',
      category: 'Peternakan',
      description:
        'Peternakan menjadi salah satu bagian dari kegiatan ekonomi warga Ngrancah, dengan sapi dan kambing sebagai komoditas yang diperjualbelikan.',
      image:
        '/images/gallery/sapi.jpeg',
    },
    {
      name: 'Hasil Pertanian',
      category: 'Pertanian',
      description:
        'Berbagai hasil bumi seperti beras, cabai, jagung, dan ketela menjadi bagian dari potensi pertanian yang dimiliki masyarakat Ngrancah.',
      image:
        '/images/gallery/pemandangan2.jpeg',
    },
    {
      name: 'Kacang Koro',
      category: 'Produk Lokal',
      description:
        'Kacang koro menjadi salah satu hasil lokal Ngrancah yang diolah menjadi tempe dan menjadi bagian dari produk pangan masyarakat.',
      image:
        '/images/gallery/tempe.png',
    },
    ,
    {
      name: 'Usaha Warga',
      category: 'Ekonomi Lokal',
      description:
        'Beragam usaha dan keterampilan warga turut menggerakkan perekonomian Ngrancah dan menjadi bagian dari kehidupan masyarakat sehari-hari.',
      image:
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&q=80',
    },
  ],
};

export const gallery = {
  title: 'Galeri',
  subtitle: 'Momen indah dan keindahan Ngrancah',
  images: [
    {
      src: '/images/gallery/atas.png',
      alt: 'Pemandangan sawah Ngrancah',
    },
    {
      src: '/images/gallery/petani.png',
      alt: 'Aktivitas warga di lapangan',
    },
    {
      src: '/images/gallery/sawah.png',
      alt: 'Kebun sayur warga',
    },
    {
      src: '/images/gallery/kambing.png',
      alt: 'Suasana peternakan',
    },
    {
      src: '/images/gallery/sunset.jpeg',
      alt: 'Suasana Sore',
    },
    {
      src: '/images/gallery/sapi.png',
      alt: 'Suasana peternakan',
    },
  ],
}



export const location = {
  title: 'Lokasi',

  subtitle: 'Kunjungi Padukuhan Ngrancah',

  address:
    'Padukuhan Ngrancah, Desa Sriharjo, Kecamatan Imogiri, Kabupaten Bantul, DIY 55782',

  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7511.949407251229!2d110.38176304037609!3d-7.94808436830487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a54da5d0050f9%3A0xb625c3a1d0c4f135!2sNgrancah%2C%20Sriharjo%2C%20Kec.%20Imogiri%2C%20Kabupaten%20Bantul%2C%20Daerah%20Istimewa%20Yogyakarta!5e1!3m2!1sid!2sid!4v1787761737769!5m2!1sid!2sid',

  directions:
    'Dari Yogyakarta, arah Imogiri — lanjut ke Desa Sriharjo, ikuti petunjuk arah Padukuhan Ngrancah.',
}

export const footer = {
  copyright: `© ${new Date().getFullYear()} KKN UNISA Kel 20 Padukuhan Ngrancah`,
  credits: 'Website profil resmi Padukuhan Ngrancah, Sriharjo, Imogiri, Bantul.',
}
