import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ViewBoard() {
    const { bno } = useParams();
    let navigate = useNavigate()
    const [board, setBoard] = useState({
        title: '',
        content: '',
        writer: '',
        hit: '',
        create_time: '',
    });

    const { title, content, writer, hit } = board;

    const [createTime, setCreateTime] = useState('');

    useEffect(() => {
        const currentDateTime = new Date();
        const formattedDateTime = currentDateTime.toLocaleString(); // 또는 toLocaleDateString()을 사용할 수 있습니다.
        setCreateTime(formattedDateTime);
    }, []);

    const loadBoard = async () => {
        const result = await axios.get(`http://localhost:8082/board/${bno}`);
        setBoard(result.data)
    };

    useEffect(() => {
        loadBoard();
    }, []);

    const onInputChange = (e) => {
        setBoard({
            ...board,
            [e.target.name]: e.target.value,
        });
    };


    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8082/board/${bno}`, board);
        navigate('/');
    };


    return (
        <div class="row mt-3">
            <div class="col">
                <div class="card">
                    <div class="card-header">
                        게시글
                    </div>
                    <div class="card-body">
                        <form onSubmit={onSubmit}>
                            <div className="input-group mb-3">
                            <span class="input-group-text">Title</span>
                                <input onChange={onInputChange} value={title} type="text" id="title" className="form-control" name="title" readOnly />
                                <div style={{ marginBottom: '1rem' }}></div>
                            </div>

                            <div className="input-group mb-3">
                            <span class="input-group-text">Content</span>
                                <input onChange={onInputChange} value={content} type="text" id="content" className="form-control" name="content" readOnly />
                                <div style={{ marginBottom: '1rem' }}></div>
                            </div>

                            <div className="input-group mb-3">
                            <span class="input-group-text">writer</span>
                                <input onChange={onInputChange} value={writer} type="text" id="writer" className="form-control" name="writer" readOnly />
                            </div>

                            <div className="input-group mb-3">
                                <span class="input-group-text">조회수</span>
                                <input onChange={onInputChange} value={hit} type="text" id="hit" className="form-control" name="hit" readOnly />
                            </div>

                            <div className="input-group mb-3">
                                <span class="input-group-text">등록 날짜</span>
                                <input onChange={onInputChange} value={createTime} type="text" id="create_time" className="form-control" name="create_time" readOnly />
                            </div>

                        </form>
                        <Link to={`/editboard/${board.bno}`} type="submit" className="btn btn-outline-primary px-3 mx-2">수정</Link>
                        <Link to="/" type="submit" className="btn btn-outline-dark px-3 mx-2">목록</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ViewBoard;