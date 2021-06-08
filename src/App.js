
import './App.css';
import {FaShoppingCart, FaTwitter} from "react-icons/fa";
import {FaEnvelopeOpenText} from "react-icons/fa";
import {FaAsterisk} from "react-icons/fa";
import {FaCloudMoonRain} from "react-icons/fa";
import {FaSearch} from "react-icons/fa";
import  {FaHome} from "react-icons/fa";
import {FaHeart} from "react-icons/fa";
import {FaCartPlus} from "react-icons/fa";
import {FaUserClock} from "react-icons/fa";
function App() {
  return (
    <div>
     <div class="navi">
       <span>400 TL Üzeri Kargo Bedava</span>
       
     </div>

     <div class="navbar">
       <ul className="menu">
       <li><FaSearch/>Arama</li>
       <li><FaHome/>Mağazalar</li>
       <li><FaHeart/>Favorilerim</li> 
       <li><FaCartPlus/>Sepet</li>
       <li><FaUserClock/>Giriş</li>   
       </ul>
       </div>
       <div class="navalt">
         <ul className="menu2">
         <li><span>Yeni Gelenler</span></li>
         <li><span> Yeni Sezon </span></li>
         <li><span>Koleksiyon</span>
          <ul className="Koleksiyon">
            <li><span>Bluz&Gömlek</span></li>
            <li><span>Tunik</span></li>
            <li><span>Tişört</span></li>
            <li><span>Elbise&Tulum</span></li>
            <li><span>Sweatshirt</span></li>
            <li><span>Pantolon</span></li>
            <li><span>Jean</span></li>
            <li><span>Etek&Şort</span></li>
            <li><span>Ceket</span></li>
            <li><span>Mont&Kaban</span></li>
            <li><span>Trençkot</span></li>
            <li><span>Takım</span></li>
            <li><span>Kap</span></li>
            <li><span>Abiye</span></li>
          </ul>
         </li>
        
         <li>Markalar
          <ul className="markalar">
            <li><span>Galaxi</span></li>
            <li><span>SCL</span></li>
          </ul>
         </li>
         
         <li><span>Ayakkabı&Aksesuar</span>
            <ul className="genis">
                <div>
                  <ul>
                      <li><span>Düz Ayakkabı</span></li>
                      <li><span>Bot&Çizme</span></li> 
                      <li><span>Sandalet&Terlik</span></li>
                      <li><span>Topuklu Ayakkabı</span></li>
                      <li><span>Sapor Ayakkabı</span></li>
                    </ul>
                  </div>
                  <div>

                  <ul>
                      <li><span>Çanta</span></li>
                      <li><span>Telefon Çantası</span></li>
                      <li><span>Kemer</span></li>
                      <li><span>Maske</span></li>
                    </ul>
                    </div>
            </ul>
           </li>
        
         <li><span>İndirim</span></li>
 </ul>       
</div>
  </div>
  );
}

export default App;
