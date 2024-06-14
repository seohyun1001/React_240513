import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";

function AddBoard() {
    const [board, setBoard] = useState({
        title: '',
        content: '',
        writer: '',
    });

    const { title, content, writer } = board;

    const onInputChange = (e) => {
        setBoard({
            ...board,
            [e.target.name]: e.target.value,
        });
    };

    let navigate = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8082/registerBoard', board);
        navigate('/');
    };


    return (
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">

                <h2 className="text-center m-4">게시글 등록</h2>

                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                            Title
                        </label>
                        <input onChange={onInputChange} type="text" id="title" className="form-control" name="title" placeholder="제목 입력" />
                        <div style={{ marginBottom: '1rem' }}></div>

                        <label htmlFor="content" className="form-label">
                            Content
                        </label>
                        <input onChange={onInputChange} type="text" id="content" className="form-control" name="content" placeholder="내용 입력" />
                        <div style={{ marginBottom: '1rem' }}></div>

                        <label htmlFor="writer" className="form-label">
                            Writer
                        </label>
                        <input onChange={onInputChange} type="text" id="writer" className="form-control" name="writer" placeholder="작성자 입력" />
                    </div>

                    <div className="mb-3 text-center">
                        <button type="submit" className="btn btn-outline-primary px-3 mx-2">등록</button>
                        <Link to="/" type="submit" className="btn btn-outline-danger px-3 mx-2">취소</Link>
                    </div>

                </form>

            </div>
        </div>

    )
}

export default AddBoard;