import List from "../items/itemslist";
import WishlistContext from "../../store/wishlist-context";
import { useContext } from "react";
function Wishlist()
    {
        const wishlistctx=useContext(WishlistContext);
return (
    <div>
        <div><h1 style={{textAlign:'center',fontFamily:'cursive',marginTop:'10px'}}>{wishlistctx.totalFavorites?"Items in your Wishlist :)":"Add Items to your wishlist fasttt!!!"}</h1>
            <List items={wishlistctx.wishlist}/>
        </div>
    </div>
);
    }
    export default Wishlist;


