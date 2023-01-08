import List from "../items/itemslist";
import FavoritesContext from "../../store/favorites-context";
import {useContext} from "react";
function Favorites(props)
    {
        const favoritectx=useContext(FavoritesContext);
        const favoriteItems=favoritectx.favorites;
return (
    <div>
        <h1 style={{textAlign:'center',fontFamily:'cursive',marginTop:'10px'}}>{favoritectx.totalFavorites?"Items in your cart :)":"Add Items to your cart fasttt!!!"}</h1>
        <List items={favoriteItems}/>
    </div>
);
    }
    export default Favorites;


