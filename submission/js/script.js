const menuItems = [{
    name: "Celebration Cakes",
    price: "From KES 4,500",
    description: "Showstopping tiered cakes adorned with hand-piped florals, edible gold, and bespoke décor.",
    image: "https://www.itakeyou.co.uk/idea/wp-content/uploads/2020/11/cake-idea-5.jpg"
},
{
    name: "Wedding Cakes",
    price: "From KES 30,000",
    description: "A centrepiece as exquisite as your love story — designed exclusively for your perfect day.",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&q=80&auto=format&fit=crop"
},
{
    name: "Cupcakes",
    price: "From KES 200",
    description: "Individual indulgences — moist, flavour-rich cakes crowned with sculptural buttercream swirls.",
    image:"https://img.magnific.com/premium-photo/celebration-cupcakes-hd-8k-wallpaper-stock-photographic-image_890746-106438.jpg"
},
{
    name: "Pastries",
    price: "From KES 350",
    description: "Buttery, flaky, impossibly light — our pastries are baked fresh each morning with imported French butter.",
    image:"https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80&auto=format&fit=crop"
},
{
    name: "Cookies",
    price: "From KES 100",
    description: "Hand-painted royal icing cookies — edible art pieces for gifting, events, and sweet moments.",
    image:"https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80&auto=format&fit=crop"
},
{
    name: "Desert Table",
    price: "From KES 35,000",
    description: "A fully curated dessert installation — an immersive luxury experience that guests will never forget.",
    image:"https://i.pinimg.com/originals/b5/b4/41/b5b4410bc59e9d6826ea401bcdd17f09.jpg"
},
{
    name: "Macarons",
    price: "From KES 280",
    description: "Parisian-style macarons with gossamer shells and intensely flavoured ganache fillings.",
    image:"https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=600&q=80&auto=format&fit=crop"
},
{
    name: "Croissants",
    price: "From KES 380",
    description: "72-hour laminated dough — 27 layers of French butter — baked to honeyed, shattering perfection.",
    image:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80&auto=format&fit=crop"
},
{
    name: "Artisian Bread",
    price: "From KES 650",
    description: "Long-fermented sourdoughs and enriched loaves with complex flavour and exceptional crust.",
    image:"https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&q=80&auto=format&fit=crop"
},
{
    name: "Custom Orders",
    price: "Enquire Within",
    description: "No vision too bold, no brief too ambitious — your imagination is our only limit.",
    image:"https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&q=80&auto=format&fit=crop"
}
]
const menuContainer = document.querySelector("#menuContainer");
menuItems.forEach(function(item){
    let menuCard = document.createElement("article");
    menuCard.classList.add("menu-card");
})