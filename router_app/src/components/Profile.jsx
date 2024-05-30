import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const data = {
    seo: {
        name : '서상준',
        description : "심심한 마왕이 스타듀밸리에 나타나 용사 및 일반인들을 착취하고 있다. 라고 생각중"
    },

    park: {
        name: '박성언',
        description : "아직은 미약한 힘을 가진 용사이나 채광을 하며 마왕 몰래 전투력을 올리고 있음"
    },

    you: {
        name: '유다인',
        description : "자유로운 영혼 평소에는 온화로운 성격이지만 그녀를 화나게 하면 마왕도 감당 안 되는 일이 벌어질지도..."
    }
}

function Profile(props){
    const navigate = useNavigate();
    const {username} = useParams();
    const profile = data[username]

    if(!profile){
        return <div>존재하지 않는 사용자입니다.
            <button onClick={() => navigate("/")}>뒤로 가기</button>
        </div>
        
    }

    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
            <button onClick={() => navigate("/")}>뒤로 가기</button>
        </div>
    )
}

export default Profile;