const products = [
    {
        nameProduct: 'Alcatroz Silent Mouse Wired Stealth 5',
        image: '/images/uploads/alcatroz.jpg',
        description: 'Alcatroz Stealth 5 silent optikal mouse yang memiliki high definition 1200 CPI dengan switch Huano yang tahan hingga 5 juta click, ukurannya yang medium sangat pas digenggam membuat pemakai nyaman',
        categories: 'Komputer & Accesories',
        price: '45000',
        merk: 'Alcatroz',
        stock: 15,
        address: 'KOTA JAKARTA BARAT - GROGOL PETAMBURAN, DKI JAKARTA, ID',
        rating: 5,
        reviews: 0
    },

    {
        nameProduct: 'Apple AirPods with Charging Case',
        image: '/images/uploads/airpods.jpg',
        description: 'Dengan waktu bicara yang optimal dan terobosan teknologi, dilengkapi Casing Pengisian Daya, AirPods menghadirkan pengalaman headphone nirkabel yang tak tertandingi. Siap digunakan dengan semua perangkat Anda.(2) Pasang di telinga dan AirPods langsung terhubung, menghanyutkan Anda dalam suara high fidelity yang kaya. Begitu ajaib',
        categories: 'Komputer & Accesories',
        price: '4000000',
        merk: 'Apple',
        stock: 20,
        address: 'KOTA JAKARTA UTARA - PENJARINGAN, DKI JAKARTA, ID',
        rating: 5,
        reviews: 0
    },

    {
        nameProduct: 'Apple Macbook Air 8GB RAM, 256GB SSD',
        image: '/images/uploads/macbook.jpg',
        description: 'Tersedia dalam warna perak, abu-abu, dan emas, MacBook Air terbaru memiliki layar Retina yang menakjubkan dengan teknologi True Tone, Touch ID, Magic Keyboard dengan lampu latar, dan trackpad Force Touch — semuanya dikemas dalam desain tipis dan ringan yang memiliki lekukan ikonik dan terbuat dari 100 persen aluminium hasil daur ulang.(2) Dan dengan kekuatan baterai 11 jam, laptop serbaguna ini siap menemani Anda sepanjang hari',
        categories: 'Komputer & Accesories',
        price: '15000000',
        merk: 'Apple',
        stock: 10,
        address: 'KOTA JAKARTA UTARA - PENJARINGAN, DKI JAKARTA, ID',
        rating: 5,
        reviews: 0
    },

    {
        nameProduct: 'Rexus Keyboard Mechanical Daxa M71',
        image: '/images/uploads/keyboard.jpg',
        description: 'Keyboard Gaming Mekanikal Daxa M71 Classic adalah sebuah instrumen penting yang menjadi bagian dalam gaya hidup gamer masa kini. Sentuhan desain moderen yang menekankan aspek elegansi, simpel, dan fungsional menjadi keunggulan dari keyboard mekanikal dengan 71 tombol ini',
        categories: 'Komputer & Accesories',
        price: '649000',
        merk: 'Rexua',
        stock: 13,
        address: 'KOTA JAKARTA PUSAT - SAWAH BESAR, DKI JAKARTA, ID',
        rating: 3,
        reviews: 0
    },

    {
        nameProduct: 'ROBOT Speaker USB RS200 Multimedia',
        image: '/images/uploads/speaker.jpg',
        description: 'Robot Speaker merupakan speaker yang sangat cocok untuk Anda karena subwoofer nya yang berkualitas tinggi dan dapat dipakai untuk berbagai keperluan dirumah Anda. Speaker Simbadda Music Player CST 2100 N+ merupakan pilihan sempurna sebagai pelengkap untuk menonton film, mendengarkan musik dan game. Suara bass yang dihasilkan cukup menggelegar, sehingga pas di telinga Anda. Speaker ini dilengkapi dengan fitur USB Media, SD Card, dan FM Radio. Speaker ini juga dapat disambungkan pada Komputer, TV, DVD player, Ponsel dan lain sebagainya',
        categories: 'Komputer & Accesories',
        price: '700000',
        merk: 'Robot',
        stock: 17,
        address: 'KOTA JAKARTA BARAT - TAMAN SARI, DKI JAKARTA, ID',
        rating: 4,
        reviews: 0
    },

    {
        nameProduct: 'ASUS G512LI-I75TB6T i7-10750H/GTX1650Ti',
        image: '/images/uploads/asus.jpg',
        description: 'Processor Onboard : 10th Generation Intel® Core™ i7-10750H Processor (12M Cache, up to 5.00 GHz), Memori Standar : 8 GB DDR4 3200Hz SDRAM, SO-DIMM socket for expansion, up to 32 GB SDRAM, Dual-channel, Tipe Grafis : NVIDIA® GeForce® GTX 1650Ti GDDR6, with 4GB VRAM, Ukuran Layar : 15.6inch (16:9) LED-backlit FHD (1920x1080) Anti-Glare IPS-level 144Hz, STORAGE : 512GB SSD SATA PCIE, Keyboard : Illuminated Chiclet Keyboard RGB',
        categories: 'Komputer & Accesories',
        price: '17500000',
        merk: 'Asus',
        stock: 9,
        address: 'KOTA JAKARTA BARAT - TAMAN SARI, DKI JAKARTA, ID',
        rating: 4,
        reviews: 0
    },

    {
        nameProduct: 'Nikon Z5 Z 5 Kit 24-200mm f4-6.3 VR',
        image: '/images/uploads/nikoncamera.jpg',
        description: 'As digital camera technology has evolved, so has the way we control our cameras. Mechanical dials have given way to buttons, menu systems and LCD displays. But what if we could blend the elegant, simplistic control and styling of classic Nikon film cameras like the F, F3 and FM/FE series with the advanced technology of Nikons exceptional new D-SLRs? Enter the Nikon Df, a thrilling FX-format D-SLR with a unique mechanical operation system and classic styling along with Nikons flagship digital camera technology. A perfect blend of classic and modern, the Nikon Df offers a more personal shooting style that will inspire a new relationship with your camera—one you may have known and lost over the years—and reawaken your joy for taking photos',
        categories: 'Komputer & Accesories',
        price: '30000000',
        merk: 'Nikon',
        stock: 6,
        address: 'KOTA JAKARTA PUSAT - MENTENG, DKI JAKARTA, ID',
        rating: 5,
        reviews: 0
    },

    {
        nameProduct: 'Nikon Coolpix P1000 Digital Super',
        image: '/images/uploads/minollacamera.jpg',
        description: 'Potret pada jarak yang mengejutkan dengan zoom optik 125x Nikon Coolpix P1000 dari Nikon. Kamera ini, yang memiliki 16MP backside illuminated CMOS sensor, dilengkapi lensa NIKKOR bawaan dengan 35mm equivalent focal length range 24-3000mm. Anda dapat memperbesar lebih jauh dengan 250x Dynamic Fine digital zoom, yang akan memberi Anda equivalent focal length 6000mm. Ditambah dengan focal length yang ekstrim ini, Nikon Dual Detect Optical Vibration Reduction, yang menyediakan 5 stop stabilisasi gambar optik dan memastikan bidikan telefoto Anda tajam',
        categories: 'Komputer & Accesories',
        price: '20400000',
        merk: 'Nikon',
        stock: 8,
        address: 'KOTA JAKARTA SELATAN - KEBAYORAN BARU, DKI JAKARTA, ID',
        rating: 4,
        reviews: 0
    },

    {
        nameProduct: 'Armaggeddon Headset Atom',
        image: '/images/uploads/earphone.jpg',
        description: 'Armaggeddon Atom 7 merupakan Headset gaming terbaru dari Armaggeddon. Headset seri atom fokus pada suara bass yang kuat dan audio yang jernih. Terinspirasi EMP (Electromagnetic Atom Bombs) headset ini luar biasa untuk gaming, menonton film dan mendengarkan musik. COCOK untuk HP / PC / Laptop',
        categories: 'Komputer & Accesories',
        price: '250000',
        merk: 'Armaggeddon',
        stock: 15,
        address: 'KOTA JAKARTA UTARA - PENJARINGAN, DKI JAKARTA, ID',
        rating: 3.5,
        reviews: 0
    },

    {
        nameProduct: 'Apple iPhone 12 Pro Max 256GB',
        image: '/images/uploads/iphone.jpg',
        description: 'iPhone 12 Pro Max. Layar Super Retina XDR 6,7 inci yang lebih besar.(1)Ceramic Shield dengan ketahanan jatuh empat kali lebih baik.(2)Fotografi pencahayaan rendah yang menakjubkan dengan sistem kamera Pro terbaik di iPhone, dan rentang zoom optik 5x. Mampu merekam, mengedit, dan memutar video sekelas sinema dengan Dolby Vision. Potret mode Malam dan pengalaman AR di level berikutnya dengan LiDAR Scanner. Chip A14 Bionic yang andal. Dan aksesori MagSafe baru untuk kemudahan pemasangan dan pengisian daya nirkabel yang lebih cepat.(3)Untuk berjuta kemungkinan spektakuler',
        categories: 'Komputer & Accesories',
        price: '22999000',
        merk: 'iPhone',
        stock: 10,
        address: 'KOTA JAKARTA UTARA - PENJARINGAN, DKI JAKARTA, ID',
        rating: 5,
        reviews: 0
    },

    {
        nameProduct: 'JBL Flip Portable Bluetooth Speaker',
        image: '/images/uploads/jblspeaker.jpg',
        description: 'Enjoy surprisingly powerful, room-filling stereo sound with the JBL Flip 3 Stealth ultra-compact portable Bluetooth speaker. Powered by a rechargeable 3000mAh Li-ion battery, it delivers up to 10 hours of non-stop, high-quality playtime. The exterior is IPX7 rated, featuring a waterproof design with durable fabric. From tabletop to poolside, from sunny mornings to rainy nights, the Flip 3 Stealth is your ultimate all-purpose, all-weather companion',
        categories: 'Komputer & Accesories',
        price: '850000',
        merk: 'JBL',
        stock: 20,
        address: 'KOTA JAKARTA UTARA',
        rating: 4,
        reviews: 0
    },

    {
        nameProduct: 'Logitech F310 Gamepad',
        image: '/images/uploads/joystick.jpg',
        description: 'Dukungan judul game yang luas. Hubungkan ke port konsol untuk bermain dengan gaya kontroler native atau posisikan dirimu dengan santai sambil bermain game PC. F310 sangat mudah dikonfigurasikan dan digunakan dengan game favoritmu berkat XInput/DirectInput, dua standar input yang paling umum digunakan. Steam Big Picture. Hubungkan (pairing) F310 dengan Big Picture dan mulailah bernavigasi di Steam, menjelajahi web, bermain game dan aktivitas lainnya dari sofa Anda yang nyaman',
        categories: 'Komputer & Accesories',
        price: '300000',
        merk: 'Logitech',
        stock: 20,
        address: 'KOTA JAKARTA PUSAT - GAMBIR, DKI JAKARTA, ID',
        rating: 4,
        reviews: 0
    },

    {
        nameProduct: 'TP-LINK TL-WR840N Wireless N Router',
        image: '/images/uploads/router.jpg',
        description: 'TL-WR840N adalah gabungan kabel / jaringan nirkabel yang dirancang khusus untuk kebutuhan jaringan kecil rumahan. TL-WR840N menciptakan kinerja nirkabel yang luar biasa dan canggih, sehingga ideal untuk streaming video HD, VoIP dan game online. Dan juga, Tombol setup (WPS) Wi-Fi Protected pada bagian luar ramping dan modis memastikan enkripsi WPA2, mencegah jaringan dari intrusi luar',
        categories: 'Komputer & Accesories',
        price: '170000',
        merk: 'TP-Link',
        stock: 25,
        address: 'KAB. TANGERANG - KOSAMBI, BANTEN, ID',
        rating: 3.5,
        reviews: 0
    },

    {
        nameProduct: 'Rexus Mouse Gaming Xierra X12',
        image: '/images/uploads/mouse.jpg',
        description: 'Rexus gaming mouse Xierra X12 merupakan bagian dari seri Xierra X yang makin diperkaya dengan model dan desain yang keren. Salah satu signature dari Rexus Xierra X12 adalah penambahan running RGB LED yang sudah full spectrum pada bagian bawah tombol sehingga meningkatkan penampilan mouse ini. Dilengkapi dengan software, mouse ini dapat diatur fungsi tombol, kecepatan pointer, dan mode LED-nya. Dengan ukuran yang ideal, mouse ini dapat menjadi senjata ampuh saati memainkan game kesukaan Anda',
        categories: 'Komputer & Accesories',
        price: '250000',
        merk: 'Rexus',
        stock: 17,
        address: 'KOTA JAKARTA PUSAT - SAWAH BESAR, DKI JAKARTA, ID',
        rating: 4.5,
        reviews: 0
    },

    {
        nameProduct: 'Sandisk Ultra Luxe ™ Flashdisk CZ74-32GB',
        image: '/images/uploads/usb.jpg',
        description: 'Combine the necessity for a convenient way to store and move your data with your desire for a protective, elegant device. The all-metal Ultra Luxe™ USB 3.1 Gen 1 flash drive delivers fast transfer speeds up to 150MB/s. Spend less time waiting by transferring a full-length movie to drive in less than 30 seconds. And with up to 256GB* of space, its durable cast metal design holds all your important content in beautiful form. The Ultra Luxe™ flash drive has SanDisk SecureAccess® password protection software built in, includes a cloud backup offer for Flashback™ to access your files online even if your drive is lost or left behind, and comes with a 5-year limited warranty for added peace of mind',
        categories: 'Komputer & Accesories',
        price: '120000',
        merk: 'Sandisk',
        stock: 25,
        address: 'KOTA JAKARTA BARAT - TAMAN SARI, DKI JAKARTA, ID',
        rating: 4.5,
        reviews: 0
    },
]

export default products