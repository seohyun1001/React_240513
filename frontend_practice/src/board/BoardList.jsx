import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function BoardList() {
    const [boards, setBoards] = useState([]);

    const loadBoards = async () => {
        const result = await axios.get("http://localhost:8082/boardList");
        setBoards(result.data);
        // console.log(result);
    };

    const deleteUser = async (bno) => {
        if (window.confirm(`${bno}번 게시물을 삭제하시겠습니까?`)) {
            await axios.delete(`http://localhost:8082/board/${bno}`);
            loadBoards();
        }
    };

    useEffect(() => {
        loadBoards();
    }, []);

    return (
        <div className="container">
            <table className="table border shadow my-4">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">title</th>
                        <th scope="col">content</th>
                        <th scope="col">writer</th>
                        <th scope="col">hit</th>
                    </tr>
                </thead>
                {boards.map((board, index) => (
                    
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <Link to={`/viewboard/${board.bno}`}>
                        <th>{board.title}</th></Link>
                        <th>{board.content}</th>
                        <th>{board.writer}</th>
                        <th>{board.hit}</th>
                        
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default BoardList;