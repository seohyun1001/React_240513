import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditBoard() {
    const { bno } = useParams();
    let navigate = useNavigate()
    const [board, setBoard] = useState({
        title: '',
        content: '',
        writer: '',
    });

    const { title, content, writer } = board;


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

    const deleteBoard = async (bno) => {
        if (window.confirm(`${bno}번 게시물을 삭제하시겠습니까?`)) {
            await axios.delete(`http://localhost:8082/board/${bno}`);
            navigate('/');
        }
    };



    return (
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <div className="mb-3 text-center">
                    <h2 className="text-center m-4">게시글</h2>

                </div>

                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                            Title
                        </label>
                        <input onChange={onInputChange} value={title} type="text" id="title" className="form-control" name="title" />
                        <div style={{ marginBottom: '1rem' }}></div>

                        <label htmlFor="content" className="form-label">
                            Content
                        </label>
                        <input onChange={onInputChange} value={content} type="text" id="content" className="form-control" name="content" />
                        <div style={{ marginBottom: '1rem' }}></div>

                        <label htmlFor="writer" className="form-label">
                            Writer
                        </label>
                        <input onChange={onInputChange} value={writer} type="text" id="writer" className="form-control" name="writer" readOnly />
                    </div>


                    <button type="submit" className="btn btn-outline-primary px-3 mx-2">수정</button>
                    <button onClick={() => deleteBoard(board.bno)} className="btn btn-outline-danger mx-2">삭제</button>
                    <Link to="/" type="submit" className="btn btn-outline-dark px-3 mx-2">목록</Link>
                </form>
            </div>
        </div>

    )
}

export default EditBoard;