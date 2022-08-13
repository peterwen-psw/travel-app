export default {
    user: {
        register: "/prod-api/api/register",
        login: "/prod-api/api/login",
        // 文件上传
        upload: "/prod-api/common/upload",
        // 查询个人基本信息
        info: "/prod-api/api/common/user/getInfo",
        // 修改个人基本信息
        editinfo: "/prod-api/api/common/user",
        swiper: "/prod-api/api/rotation/list",
        // 获取更多服务
        service: "/prod-api/api/service/list",
        // 获取新闻分类
        newtype: "/prod-api/press/category/list",
        // 获取新闻列表
        newcontent: "/prod-api/press/press/list",
        // 获取新闻详细信息
        newstext: "/prod-api/press/press",

    },
    movie: {
        //获取电影轮播图
        swiper: "/prod-api/api/movie/rotation/list",
        //查询影片信息列表
        info: "/prod-api/api/movie/film/list",
        // 查询电影预告信息列表
        comingsoon: "/prod-api/api/movie/film/preview/list",
        // 获取电影预告信息详细信息
        detail_soon: "/prod-api/api/movie/film/preview/",
        // 获取影片信息详细信息
        detail_now: "/prod-api/api/movie/film/detail/",
        // 获取影院详情
        cinema: "/prod-api/api/movie/theatre/list",
        // 查询影厅信息列表
        cinema_list: "/prod-api/api/movie/theatre/room/list",
        // 查询影厅详情
        cinema_detail: "/prod-api/api/movie/theatre/room",
        // 查询影片场次列表
        movie_list: "/prod-api/api/movie/theatre/times/list",
        // 影厅详情信息
        cinema_item:"/prod-api/api/movie/theatre/"
    },
    food: {
        // 外卖轮播
        swiper: "/prod-api/api/takeout/rotation/list",
        // 主题分类
        theme: "/prod-api/api/takeout/theme/list",
        // 店家列表
        seller_list: "/prod-api/api/takeout/seller/list",
    },
    house: {
        // 房源列表
        nav: "/prod-api/api/house/housing/list",
        // 房源详情
        detail: "/prod-api/api/house/housing/",
    }
}