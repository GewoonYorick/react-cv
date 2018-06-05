import React from 'react';

const Detail = props => {
    return(
        <div className="detail text-right">
            <h1>Matt Chapman</h1>
            <p>Developer. Creative. Adventurer.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in ultrices mi, nec hendrerit enim. Suspendisse interdum, lacus nec pulvinar imperdiet, justo turpis tincidunt nulla, quis facilisis magna neque ac lectus. Suspendisse nulla ex, tristique quis nisi eget, malesuada euismod eros. Vestibulum sagittis nunc nec lorem mollis ultrices. </p>
            <ul>
                <li><i class="fas fa-envelope"></i><p>mail me</p></li>
                <li><i class="fas fa-envelope"></i><p>mail me</p></li>
                <li><i class="fas fa-envelope"></i><p>mail me</p></li>
                <li><i class="fas fa-envelope"></i><p>mail me</p></li>
            </ul>
        </div>
    );
}

export default Detail;