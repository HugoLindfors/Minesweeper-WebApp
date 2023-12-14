const tiles: Array<number> = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const buttonClick = (tileValue: number, tileIndex: number, tilesArray: Array<number>) => {
    if (tileValue == 1) {
        document.getElementById(`tile-${tileIndex}`)!.style.backgroundColor = "red";
        document.getElementById("minesweeper-outer-grid")!.innerHTML = `
        ${
            tiles.map((tileValue, tileIndex, tilesArray) => {
                return <div className="tile" id={`tile-${tileIndex}`} onClick={() => buttonClick(tileValue, tileIndex, tilesArray)}></div>;
            })
        }
        `;
    }
    else {
        document.getElementById(`tile-${tileIndex}`)!.style.backgroundColor = "green";
    }
    console.log(`You clicked on tile ${tileIndex}`);
};

const Minesweeper = () => {
    return (
        <div id="minesweeper-outer-grid">
            {
                tiles.map((tileValue, tileIndex, tilesArray) => {
                    return <div className="tile" id={`tile-${tileIndex}`} onClick={() => buttonClick(tileValue, tileIndex, tilesArray)}></div>;
                })
            }
        </div>
    );
};

export default Minesweeper;