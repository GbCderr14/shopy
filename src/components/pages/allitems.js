// import Card from '../items/card';
import List from '../items/itemslist';
function Allitem(){
    const items = [
        {
            id:1,
            title: "Sparx",
            description: "Price:$250 .......................................................................Only 2 Available in Stock",
            image: "https://rukminim1.flixcart.com/image/612/612/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70"
        },
        {
            id:2,
            title: "Nike",
            description: "Price:$150 .......................................................................Only 4 Available in Stock",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80"
        },
        {
            id:3,
            title: "Adidas",
            description: "Price:$550 .......................................................................Out of Stock",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoNT9E1e0p4YEihSq3P_5QUZ4fIgj1eIB89T25XDSttpxCDdjw2LqkddLq3WacLuwewiY&usqp=CAU"
        },
        {
            id:4,
            title: "Nike Ultra",
            description: "Price:$1050 .......................................................................Only 1 Available in Stock",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJcC5QB2-9FIb_VENruroA49iZG8SvIXGTQg&usqp=CAU"
        },
        {
            id:5,
            title: "Woodland",
            description: "Price:$750 .......................................................................Only 10 Available in Stock",
            image: "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Library-Sites-SkechersSharedLibrary/default/dwb414fd65/images/grid/SKX52942_ShopByStyleGridUpdate_Men_750x664_Lace_Up_Oxfords.jpg"
        },
        {
            id:6,
            title: "Lancer",
            description: "Price:$1750 .......................................................................Only 6 Available in Stock",
            image: "https://i.insider.com/5ebf0f752618b91d132c2c40?width=1200&format=jpeg"
        },
    ]
    return (
        <List items={items}/>
  );
}
export default Allitem;