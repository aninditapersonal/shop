const link = 'https://assets.ajio.com/medias/sys_master/root/20230608/CNNa/6481f05642f9e729d732197a/-473Wx593H-443015458-green-MODEL.jpg'
const items = [
    {
        id: 1,
        name: "DENNISLINGO PREMIUM ATTIRE Men Checked Slim Fit Shirt",
        image: 'https://assets.ajio.com/medias/sys_master/root/20230906/vVWa/64f80929afa4cf41f5b34d62/-473Wx593H-461119105-blue-MODEL.jpg',
        category: "MEN",
        size: "M",
        price: 3499,
        offer: 40,
        delivery: 69
    },
    {
        id: 2,
        name: "Regular Fit Round Neck Casual T-shirts for Men (Peacock)",
        image: 'https://images.meesho.com/images/products/334257376/ylxrb_512.webp',
        category: "MEN",
        size: "S",
        price: 269,
        offer: 30,
        delivery: 39
    },
    {
        id: 3,
        name: "AJ19ES49A",
        image: 'https://images.meesho.com/images/products/70393359/7x5uz_512.webp',
        category: "WOMEN",
        size: "XL",
        price: 256,
        offer: 14,
        delivery: 0
    },
    {
        id: 4,
        name: "Lightly Washed Slim Fit Jeans",
        image: 'https://assets.ajio.com/medias/sys_master/root/20220623/mHNs/62b4a84ff997dd03e29a57e1/-473Wx593H-441295033-blue-MODEL.jpg',
        category: "KIDS",
        size: "XS",
        price: 450,
        offer: 50,
        delivery: 0
    },
    {
        id: 5,
        name: "Bandhani Print Anarkali Kurta with Pants & Dupatta",
        image: 'https://assets.ajio.com/medias/sys_master/root/20230918/Jfxc/65083bccddf7791519e138f9/-473Wx593H-466593600-purple-MODEL.jpg',
        category: "WOMEN",
        size: "M",
        price: 1454,
        offer: 73,
        delivery: 0
    },
    {
        id: 6,
        name: "Pack of 5 Mickey Mouse Print Joggers Track Pants",
        image: 'https://assets.ajio.com/medias/sys_master/root/20230824/sFqi/64e6b074ddf7791519664041/-473Wx593H-466489805-yellow-MODEL.jpg',
        category: "KIDS",
        size: "M",
        price: 750,
        offer: 75,
        delivery: 39
    },
    {
        id: 7,
        name: "Vintage Corp Logo Hoodie",
        image: 'https://assets.ajio.com/medias/sys_master/root/20230315/LsZf/6411e76eaeb26924e3c43db2/-473Wx593H-410353977-5eg-MODEL2.jpg',
        category: "MEN",
        size: "XXL",
        price: 4899,
        offer: 30,
        delivery: 0
    },
    {
        id: 8,
        name: "Banarasi Soft Silk Saree with Woven Motifs",
        image: 'https://assets.ajio.com/medias/sys_master/root/20230711/VyeE/64ad4f02a9b42d15c94ccdd0/-473Wx593H-466313443-maroon-MODEL.jpg',
        category: "WOMEN",
        size: "L",
        price: 849,
        offer: 66,
        delivery: 0
    },
    {
        id: 9,
        name: "Floral Print Fit & Flare Dress",
        image: 'https://assets.ajio.com/medias/sys_master/root/20230811/bMrt/64d5b77deebac147fcbf45b5/-473Wx593H-466446058-black-MODEL.jpg',
        category: "WOMEN",
        size: "S",
        price: 594,
        offer: 73,
        delivery: 0
    },
    {
        id: 10,
        name: "Printed Regular Fit Top & Pant Set",
        image: 'https://assets.ajio.com/medias/sys_master/root/20231023/ty5o/653666edafa4cf41f55a17f0/-473Wx593H-420425758-pink-MODEL.jpg',
        category: "KIDS",
        size: "S",
        price: 599,
        offer: 20,
        delivery: 0
    },
    {
        id: 11,
        name: "Full-Size Dungaree with Patch Pockets",
        image: 'https://assets.ajio.com/medias/sys_master/root/20231004/tgCA/651cc5baddf7791519188a6d/-473Wx593H-466665171-green-MODEL.jpg',
        category: "KIDS",
        size: "M",
        price: 507,
        offer: 61,
        delivery: 39
    },
    {
        id: 12,
        name: "Embroidered Round-Neck Top",
        image: 'https://assets.ajio.com/medias/sys_master/root/20230629/CXfR/649d0423eebac147fc38af21/-1117Wx1400H-466173772-white-MODEL.jpg',
        category: "WOMEN",
        size: "XL",
        price: 430,
        offer: 57,
        delivery: 0
    },
    {
        id: 13,
        name: "Men Lace-Up Shoes",
        image: 'https://assets.ajio.com/medias/sys_master/root/20230823/CwYm/64e622aeafa4cf41f5722b17/-473Wx593H-469495045-white-MODEL.jpg',
        category: "MEN",
        size: 'M',
        price: 2959,
        offer: 20,
        delivery: 0
    },
    {
        id: 14,
        name: "Men Quilted Zip-Front Regular Fit Bomber Jacket",
        image: 'https://assets.ajio.com/medias/sys_master/root/20231107/Tnjt/65496b2dddf77915197340ed/-473Wx593H-466780552-green-MODEL.jpg',
        category: "MEN",
        size: "L",
        price: 999,
        offer: 80,
        delivery: 0
    },
    {
        id: 15,
        name: "Geometric Print Palazzos with Pom-Pom Hems",
        image: 'https://assets.ajio.com/medias/sys_master/root/20230706/Tpw5/64a6fdfda9b42d15c9431a15/-473Wx593H-443017141-beige-MODEL.jpg',
        category: "WOMEN",
        size: "S",
        price: 439,
        offer: 45,
        delivery: 0
    },
    {
        id: 16,
        name: "Ribbed Fit & Flare Dress with Belt",
        image: 'https://assets.ajio.com/medias/sys_master/root/20230918/C0Sg/65086459ddf7791519e26454/-473Wx593H-466589638-black-MODEL.jpg',
        category: "KIDS",
        size: "L",
        price: 600,
        offer: 70,
        delivery: 0
    },
    {
        id: 17,
        name: "Straight Fit Trousers with Belt",
        image: 'https://assets.ajio.com/medias/sys_master/root/20230428/Xkos/644ba22ad55b7d0c63871b28/-473Wx593H-443006644-olive-MODEL.jpg',
        category: "KIDS",
        size: "S",
        price: 384,
        offer: 45,
        delivery: 0
    },
    {
        id: 18,
        name: "Typographic Print Shorts with Slip Pockets",
        image: 'https://assets.ajio.com/medias/sys_master/root/20220706/bk91/62c5b19daeb26921af66c7f5/-473Wx593H-441113672-maroon-MODEL.jpg',
        category: "MEN",
        size: "XS",
        price: 354,
        offer: 29,
        delivery: 0
    },
    {
        id: 19,
        name: "Floral Print Round-Neck T-shirt",
        image: 'https://assets.ajio.com/medias/sys_master/root/20220617/5842/62ac99d7aeb26921af375213/-473Wx593H-441140317-yellow-MODEL2.jpg',
        category: "KIDS",
        size: "L",
        price: 288,
        offer: 52,
        delivery: 0
    },
    {
        id: 20,
        name: "Ribbed Thermal Set",
        image: 'https://assets.ajio.com/medias/sys_master/root/20230922/8dhw/650cc5bfafa4cf41f5fb42d4/-473Wx593H-466613927-charcoal-MODEL.jpg',
        category: "WOMEN",
        size: "L",
        price: 899,
        offer: 70,
        delivery: 0
    },
    {
        id: 21,
        name: "Corduroy Shirt with Flap Pockets",
        image: 'https://assets.ajio.com/medias/sys_master/root/20230818/rhiD/64df6946afa4cf41f55deb3c/-473Wx593H-442260748-olive-MODEL.jpg',
        category: "KIDS",
        size: "L",
        price: 494,
        offer: 45,
        delivery: 0
    },
    {
        id: 22,
        name: "Women Flared Kurta with Side Slit",
        image: 'https://assets.ajio.com/medias/sys_master/root/20231107/IBBb/6549bbe1ddf7791519739921/-473Wx593H-466780125-purple-MODEL.jpg',
        category: "WOMEN",
        size: "M",
        price: 464,
        offer: 84,
        delivery: 0
    },
    {
        id: 23,
        name: "Colourblock Half-Zip T-Shirt",
        image: 'https://assets.ajio.com/medias/sys_master/root/20230321/ivpT/6418f0f6aeb26924e3d6eb19/-473Wx593H-465699829-green-MODEL.jpg',
        category: "MEN",
        size: "L",
        price: 338,
        offer: 74,
        delivery: 0
    },
    {
        id: 24,
        name: "Floral Embroidered Slim Fit Jeans",
        image: 'https://assets.ajio.com/medias/sys_master/root/20230216/bPMo/63ee423ef997dde6f4ab9e72/-473Wx593H-441775149-white-MODEL.jpg',
        category: "KIDS",
        size: "M",
        price: 509,
        offer: 49,
        delivery: 0
    },
    {
        id: 25,
        name: "Accelerate Push-Up Bra",
        image: 'https://assets.ajio.com/medias/sys_master/root/20220727/zjLI/62e03884aeb26921af9e3ddf/-473Wx593H-469116871-black-MODEL.jpg',
        category: "WOMEN",
        size: "M",
        price: 2249,
        offer: 25,
        delivery: 0
    },
    {
        id: 26,
        name: "Pointed-Toe Chunky-Heeled Shoes with Sling-Back",
        image: 'https://assets.ajio.com/medias/sys_master/root/20230821/Y886/64e37efcafa4cf41f563e5de/-473Wx593H-466476560-cream-MODEL.jpg',
        category: "WOMEN",
        size: "S",
        price: 1014,
        offer: 61,
        delivery: 0
    },
    {
        id: 27,
        name: "Heavily Washed Skinny Fit Ankle Length Jeans",
        image: 'https://assets.ajio.com/medias/sys_master/root/20230207/Bpsu/63e2752ef997dd708e405f37/-473Wx593H-443009916-grey-MODEL.jpg',
        category: "MEN",
        size: "L",
        price: 900,
        offer: 50,
        delivery: 0
    },
    {
        id: 28,
        name: "Striped Fit & Flare Cotton Dress",
        image: 'https://assets.ajio.com/medias/sys_master/root/20231023/SzQl/65368658afa4cf41f55a44da/-473Wx593H-420409952-navy-MODEL.jpg',
        category: "KIDS",
        size: "M",
        price: 449,
        offer: 10,
        delivery: 0
    },
    {
        id: 29,
        name: "Men Logo Print Zip-Front Hoodie",
        image: 'https://assets.ajio.com/medias/sys_master/root/20231027/ehEC/653bcc5fddf77915195e6d98/-473Wx593H-442273312-ltgrey-MODEL.jpg',
        category: "MEN",
        size: "L",
        price: 2799,
        offer: 40,
        delivery: 0
    },
    {
        id: 30,
        name: "Formal Oxford Shoes with Toe-Cap",
        image: 'https://assets.ajio.com/medias/sys_master/root/20211118/Ctty/619560d0aeb2690110caab87/-473Wx593H-460991618-coffee-MODEL.jpg',
        category: "MEN",
        size: 'L',
        price: 925,
        offer: 63,
        delivery: 0
    },
    {
        id: 31,
        name: "Printed Shrug with Insert Pockets",
        image: 'https://assets.ajio.com/medias/sys_master/root/20230905/5h3R/64f756d8afa4cf41f5a86c72/-473Wx593H-466536623-black-MODEL2.jpg',
        category: "WOMEN",
        size: "XL",
        price: 750,
        offer: 50,
        delivery: 0
    },
    {
        id: 32,
        name: "Bugatti Veyron Kids Remote Control Car",
        image: 'https://assets.ajio.com/medias/sys_master/root/20230407/tp4k/642f27c9711cf97ba710482d/-473Wx593H-4929082580-multi-MODEL.jpg',
        category: "KIDS",
        size: 'S',
        price: 1899,
        offer: 5,
        delivery: 0
    },
    {
        id: 33,
        name: "Polarised Lens Square Sunglasses",
        image: 'https://assets.ajio.com/medias/sys_master/root/20230330/YocO/6425aa2a711cf97ba7fcc24d/-473Wx593H-469475608-gunmetal-MODEL.jpg',
        category: "MEN",
        size: "M",
        price: 869,
        offer: 17,
        delivery: 0
    },
    {
        id: 34,
        name: "T-Shirt",
        image: link,
        category: "KIDS",
        size: "S",
        price: 800,
        offer: 50,
        delivery: 49
    },
    {
        id: 35,
        name: "T-Shirt",
        image: link,
        category: "WOMEN",
        size: "S",
        price: 800,
        offer: 50,
        delivery: 49
    },
    {
        id: 36,
        name: "T-Shirt",
        image: link,
        category: "WOMEN",
        size: "S",
        price: 800,
        offer: 50,
        delivery: 49
    },
    {
        id: 37,
        name: "T-Shirt",
        image: link,
        category: "KIDS",
        size: "S",
        price: 800,
        offer: 50,
        delivery: 49
    },
    {
        id: 38,
        name: "T-Shirt",
        image: link,
        category: "MEN",
        size: "S",
        price: 800,
        offer: 50,
        delivery: 49
    },
    {
        id: 39,
        name: "T-Shirt",
        image: link,
        category: "MEN",
        size: "S",
        price: 800,
        offer: 50,
        delivery: 49
    },
    {
        id: 40,
        name: "T-Shirt",
        image: link,
        category: "KIDS",
        size: "S",
        price: 800,
        offer: 50,
        delivery: 49
    },
    {
        id: 41,
        name: "T-Shirt",
        image: link,
        category: "WOMEN",
        size: "S",
        price: 800,
        offer: 50,
        delivery: 49
    },
    {
        id: 42,
        name: "T-Shirt",
        image: link,
        category: "WOMEN",
        size: "S",
        price: 800,
        offer: 50,
        delivery: 49
    },
    {
        id: 43,
        name: "T-Shirt",
        image: link,
        category: "MEN",
        size: "S",
        price: 800,
        offer: 50,
        delivery: 49
    },
    {
        id: 44,
        name: "T-Shirt",
        image: link,
        category: "KIDS",
        size: "S",
        price: 800,
        offer: 50,
        delivery: 49
    },
    {
        id: 45,
        name: "T-Shirt",
        image: link,
        category: "MEN",
        size: "S",
        price: 800,
        offer: 50,
        delivery: 49
    },
    {
        id: 46,
        name: "T-Shirt",
        image: link,
        category: "WOMEN",
        size: "S",
        price: 800,
        offer: 50,
        delivery: 49
    },
    {
        id: 47,
        name: "T-Shirt",
        image: link,
        category: "WOMEN",
        size: "S",
        price: 800,
        offer: 50,
        delivery: 49
    },
    {
        id: 48,
        name: "T-Shirt",
        image: link,
        category: "KIDS",
        size: "S",
        price: 800,
        offer: 50,
        delivery: 49
    },
    {
        id: 49,
        name: "T-Shirt",
        image: link,
        category: "MEN",
        price: 800,
        offer: 50,
        delivery: 49
    },
    {
        id: 50,
        name: "T-Shirt",
        image: link,
        category: "KIDS",
        price: 800,
        offer: 50,
        delivery: 49
    },
    {
        id: 51,
        name: "T-Shirt",
        image: link,
        category: "WOMEN",
        price: 800,
        offer: 50,
        delivery: 49
    },
    {
        id: 52,
        name: "T-Shirt",
        image: link,
        category: "MEN",
        price: 800,
        offer: 50,
        delivery: 49
    },
    {
        id: 53,
        name: "T-Shirt",
        image: link,
        category: "KIDS",
        price: 800,
        offer: 50,
        delivery: 49
    },
    {
        id: 54,
        name: "T-Shirt",
        image: link,
        category: "MEN",
        price: 800,
        offer: 50,
        delivery: 49
    },
    {
        id: 55,
        name: "T-Shirt",
        image: link,
        category: "WOMEN",
        price: 800,
        offer: 50,
        delivery: 49
    },
    {
        id: 56,
        name: "T-Shirt",
        image: link,
        category: "KIDS",
        price: 800,
        offer: 50,
        delivery: 49
    },
    {
        id: 57,
        name: "T-Shirt",
        image: link,
        category: "KIDS",
        price: 800,
        offer: 50,
        delivery: 49
    },
    {
        id: 58,
        name: "T-Shirt",
        image: link,
        category: "WOMEN",
        price: 800,
        offer: 50,
        delivery: 49
    },
    {
        id: 59,
        name: "T-Shirt",
        image: link,
        category: "MEN",
        price: 800,
        offer: 50,
        delivery: 49
    },
    {
        id: 60,
        name: "T-Shirt",
        image: link,
        category: "MEN",
        price: 800,
        offer: 50,
        delivery: 49
    },
    {
        id: 61,
        name: "T-Shirt",
        image: link,
        category: "KIDS",
        price: 800,
        offer: 50,
        delivery: 49
    },
    {
        id: 63,
        name: "T-Shirt",
        image: link,
        category: "KIDS",
        price: 800,
        offer: 50,
        delivery: 49
    },
    {
        id: 64,
        name: "T-Shirt",
        image: link,
        category: "WOMEN",
        price: 800,
        offer: 50,
        delivery: 49
    },
    {
        id: 65,
        name: "T-Shirt",
        image: link,
        category: "WOMEN",
        price: 800,
        offer: 50,
        delivery: 49
    },
    {
        id: 66,
        name: "T-Shirt",
        image: link,
        category: "MEN",
        price: 800,
        offer: 50,
        delivery: 49
    },
    {
        id: 67,
        name: "T-Shirt",
        image: link,
        category: "WOMEN",
        price: 800,
        offer: 50,
        delivery: 49
    },
    {
        id: 68,
        name: "T-Shirt",
        image: link,
        category: "KIDS",
        price: 800,
        offer: 50,
        delivery: 49
    },
    {
        id: 69,
        name: "T-Shirt",
        image: link,
        category: "KIDS",
        price: 800,
        offer: 50,
        delivery: 49
    },
    {
        id: 70,
        name: "T-Shirt",
        image: link,
        category: "MEN",
        price: 800,
        offer: 50,
        delivery: 49
    },
]

export default items;