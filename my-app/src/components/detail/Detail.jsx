import "./detail.css";

const Detail =() => {
    return (
        <div className="detail">Detail
        <div className="user">
            <img src="./avatar.png" alt="" />
            <h2>Jane Doe</h2>
            <p>Lorem ipsum dolor sit amet consectet</p>
        </div>
        <div className="info">
        <div className="option">
            <div className="title">
                <span>Chat Setttings</span>
                <img src="./arrowUp.png" alt="" />
            </div>
            </div>   

            <div className="option">
            <div className="title">
                <span>Privacy & help</span>
                <img src="./arrowUp.png" alt="" />
            </div>
            </div>   

             <div className="option">
                <div className="title">
                <span>Shared photos</span>
                <img src="./arrowUp.png" alt="" />
                <div/>
                </div>
            <div className="photos">
                <div className="photoItem">
                    <div className="photoDetail">
                    <img 
                    src="https://dp-pic.com/wp-content/uploads/2024/01/a-boy-picked-a-gun-in-his-hands-in-attitude-dp-by-dp-pic-boys-attitude-dp-3.jpg" 
                    alt="" 
                    />
                    <span>photo_2024_2.png</span>
                    </div>
                <img src="./download.png" alt="" className="icons" />
                </div>
                <div className="photoItem">
                    <div className="photoDetail">
                    <img 
                    src="https://dp-pic.com/wp-content/uploads/2024/01/a-boy-picked-a-gun-in-his-hands-in-attitude-dp-by-dp-pic-boys-attitude-dp-3.jpg" 
                    alt="" 
                    />
                    <span>photo_2024_2.png</span>
                    </div>
                <img src="./download.png" alt="" className="icons" />
                </div>
            </div>
            </div>
            
             <div className="option">
            <div className="title">
                <span>Shared Files</span>
                <img src="./arrowUp.png" alt="" />
            </div>
            </div>
            <div/> 

            <button>Block User</button>  
        </div>
        </div>
    )
}

export default Detail;