import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },

    imageContainer: {},

    image: {
        width: 100,
        height: 100,
        borderRadius: 16,
    },

    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },

    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold"
    },

    commentText: {
        color: "black",
        fontSize: 16
    },

    dateText: {
        color: "black",
        fontSize: 16
    }
}


function Board(props) {
    return (
        <div style={styles.wrapper}>
        <div style={styles.imageContainer}>
            <img 
            src={props.img}
            style={styles.image} />
        </div>
        <div style={styles.contentContainer}>
            <span style={styles.nameText}>{props.name}</span>
            <span style={styles.commentText}>{props.comment}</span>
            <span style={styles.dateText}>{props.regDate}</span>
        </div>
    </div>
    )
}

export default Board;