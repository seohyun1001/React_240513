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
                        <input onChange={onInputChange} value={title} type="text" id="title" className="form-control" name="title" readOnly/>
                        <div style={{ marginBottom: '1rem' }}></div>

                        <label htmlFor="content" className="form-label">
                            Content
                        </label>
                        <input onChange={onInputChange} value={content} type="text" id="content" className="form-control" name="content" readOnly/>
                        <div style={{ marginBottom: '1rem' }}></div>

                        <label htmlFor="writer" className="form-label">
                            Writer
                        </label>
                        <input onChange={onInputChange} value={writer} type="text" id="writer" className="form-control" name="writer" readOnly/>
                    </div>

                </form>
                <Link to={`/editboard/${board.bno}`} type="submit" className="btn btn-outline-primary px-3 mx-2">수정</Link>
                <Link to="/" type="submit" className="btn btn-outline-dark px-3 mx-2">목록</Link>
            </div>
        </div>

    )
}

export default ViewBoard;