////Articlelarni get qilishga  oid server file
import axios from "./api";

//// serverga axios bilan get post delete buyruqlarini bilan put buyrug'iham bor bu put buyrug'i edit qiladi yani serverda turgan narsani edit qiladi bu holatda serverga  createarticle qilib post qilingan maqolani edit qilish uchun put buyrug'ini ishlatdik

const ArticleService = {
    async getArticles() {
        const { data } = await axios.get("/articles");
        return data;
    },

    // slug bilan idni farqi id raqamlar bilan yoziladi slug esa text bilan yani ssilkani titiliga o'hshab
    async getArticleDetail(slug) {
        const { data } = await axios.get(`/articles/${slug}`);
        return data;
    },

    async postArticle(article) {
        const { data } = await axios.post("/articles", { article });
        return data;
    },

    async deleteArticle(slug) {
        //bu holatda slug articleni idsi yani adress titlesi
        const { data } = await axios.delete(`/articles/${slug}`);
        return data;
    },

    async editArticle(slug,article) {
        // yani sluig yordamida qaysi article edit bo'lishi aytiladi article esa object
        const { data } = await axios.put(`/articles/${slug}`, {article});//yani bu holatda articlesni slugi bilan article objecti edit qilinadi
        return data;
    },


};

export default ArticleService; //serverdan articleslarni get qilish funksiyasi hammasi get qilinetgan yoki post qileydigan funksylar shundey alohida joyda yozilgani yahshi tushunishga oson emushshshsh
