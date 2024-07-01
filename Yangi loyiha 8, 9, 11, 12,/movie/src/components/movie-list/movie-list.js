import "./movie-list.css";
import MovieListItem from "../movie-list-item/movie-list-item";
const MovieList = ({ data }) => {
    //app fileda yozilgan data distruptatsa bo'lib keldi chunki appda data kodlar eng yuqorida yozilgan MovieList file esa pasda componentlar ichida yozilgan shu sabab distruptatsa ishlaydi yani appdan chaqirilgan data MovieListda ishlaydi//bu holatda data chaqirilib map metodi bilan intrigatsa qilindi map bu holatda array yani massivni intrigatsa qilish metodi hissoblanadi data esa massiv bo'lgani uchun mapda intrigatsa qilindi// map() Array obyektining metodi hisoblanadi . U asl massivning har bir elementida funksiyani chaqirish va natijalarni yangi massivda saqlash orqali yangi massiv yaratadi. map() yangi massivni qaytaradi va asl massiv o'zgarishsiz qoladi//yani data massivni map qilib itemlarini yani elementlarini MovieListItem.js filega jo'natdik MovieListItem js da esa nameni kerakli joyga viewersniham kerakli joyga qo'ydik yani app.jsdagi data massividan keladigan malumotlarni qo'ydik agar data massiviga malumotlar yana qo'shilsa MovieListItem gaham malumotlar qo'shilib boraveradi stylelari esa MovieListItem.css da berilgan bularham amal qilaveradi
    return (
        <ul className="movie-list">
            {/* map bilan massiv datalarni tsikliga qo'yish */}
            {data.map((item) => (
                <MovieListItem
                    ////12. Loyiha. Ro'yhat algoritmi {item.id} appda pastda kinspekti bor
                    key={item.id}
                    ////12. Loyiha. Ro'yhat algoritmi {item.id} appda pastda kinspekti bor
                    name={item.name}
                    viewers={item.viewers}
                    favorite={item.favorite}
                />
                // <MovieListItem{...item} />//yani bu qisayo'li yani  spread  oprator bilan hammasini yani datani map bo'lib massiv bo'lib nusxalangan itemlarni hammasini MovieListItemga jo'natib qo'ydik
                //endi MovieListItemga data serverdagi massivni itemlari dynamic tarzda jo'natildi
                //data yani servercha app.jsda MovieListga huddiki props qilib berilgan shu sabab yuqorida turgan data movielistda ishlaydi va map metodi bilan intirigatsa qilinib yani ichidagi itemlari yangi massivga olinib bu massivlar MovieListItemga jo'natildi MovieListItemda esa kerakli joylarga qo'yib chiqildi yani list-group-item-label classli span va inputga qo'yildi MovieListItemdaham parametrda props huddiki distruptatsa qilib chaqirilgan yani bunday holatda>>>({ name, viewers })
                //data serverni itemlarida favorite qiymatiham tsikilga qo'yildi va favorite kalit so'zi bilan movielist itemga jo'natildi
                // MovieList componentga MovieListItem componentni hususiyatlarini dynamic berilishi//
            ))}
        </ul>
    );
};

export default MovieList;
