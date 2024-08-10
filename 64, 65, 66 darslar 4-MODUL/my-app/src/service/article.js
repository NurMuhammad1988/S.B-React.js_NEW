////Articlelarni get qilishga  oid server file
import axios from "./api";

const ArticleService = {
    async getArticles() {
        const { data } = await axios.get("/articles");
        return data;
    },

    // slug bilan idni farqi id raqamlar bilan yoziladi slug esa text bilan yani ssilkani titiliga o'hshab
    async getArticleDetail(slug) {
        const { data } = await axios.get(`/articles/${slug}`);
        return data
    },

    async postArticle (article){
        const {data} = await axios.post("/articles" , {article})
        return data
    }
};

export default ArticleService; //serverdan articleslarni get qilish funksiyasi hammasi get qilinetgan yoki post qileydigan funksylar shundey alohida joyda yozilgani yahshi tushunishga oson emushshshsh
