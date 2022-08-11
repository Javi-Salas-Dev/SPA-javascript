const Header = () => {
    const view = `
        <div class="Header-main">
            <div class="Header-logo">
                <h1>
                    <a href="/SPA-javascript">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/800px-Rick_and_Morty.svg.png" alt="" width="200px">
                    </a>
                </h1>
            </div>
            <div class="Header-nav">
                <a href="#/about/">
                    About
                </a>
            </div>
        </div>
    `;
    return view;
};

export default Header;