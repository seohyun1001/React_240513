import React from "react";
import Board from "./Board";


const comments = [
    {
        name : "파치리스",
        comment : "파치리스",
        regDate : new Date().toLocaleDateString(),
        img :"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA0MTZfMTcx%2FMDAxNjgxNjQxODE2NzUz.1LCXtn5Jaau_TA4xbbjmQuQu1xh3DcAZIt5sm7rITasg.hmO0w7Z8NnTkCd4kpZKdiYNjW9ywuQS33zmwXxfqqNEg.JPEG.jiwoocute2027%2F%25B4%25D9%25BF%25EE%25B7%25CE%25B5%25E5%25C6%25C4%25C0%25CF%25A3%25AD4.jpg&type=sc960_832",
    },
    {
        name : "한카리아스",
        comment : "한카리아스",
        regDate : new Date().toLocaleDateString(),
        img :"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAyMTdfMTQx%2FMDAxNjc2NjM4MjEyMzM2.731ofYJDtSD1Ga4ePglYog1hZWKhzgkzLux2UYWztlEg.b2G6qw4R34qS3x6_RzsGAKWxLbDS9tv834hvFWY8aI8g.PNG.rock4ken%2F%25C7%25D1%25C4%25AB.png&type=a340",
    },
    {
        name : "나몰빼미",
        comment : "나몰빼미",
        regDate : new Date().toLocaleDateString(),
        img :"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAxMDNfODYg%2FMDAxNjcyNzQ0OTM1Mzgy.qTTNomgOUtiANgs9FH4xJW3ylUrmU65snlExlA3NIhgg.wzKWVbEZF0rBD9zA9VOMBEvqqHteHQlyfwR4hnCPyoAg.JPEG.shunny0319%2FScreenshot%25A3%25DF20230103%25A3%25AD202007%25A3%25DFNAVER.jpg&type=sc960_832",
    },
]


function BoardList(props){
    return (
        <div>
            {comments.map((comment) =>{
                return(
                    <Board name={comment.name} comment={comment.comment} regDate={comment.regDate} img={comment.img} />
                )
            })}
        </div>
    )
}

export default BoardList;