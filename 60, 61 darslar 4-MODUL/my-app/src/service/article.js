import axios from "./api"

const ArticleService = {
    async getArticles(){
        const {data}  = await axios.get("/articles")
        return data

    }
}

export default ArticleService//serverdan articleslarni get qilish funksiyasi hammasi get qilinetgan yoki post qileydigan funksylar shundey alohida joyda yozilgani yahshi tushunishga oson emushshshsh