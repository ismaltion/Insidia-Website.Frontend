const header = document.getElementById("main-header");
const footer = document.getElementById("main-footer");

header.innerHTML = `
<div class="iheader">
    <a href="index.html"><span class="logo">
        <h2>INSIDIA</h2>
    </span></a>
    <nav>
        <a href="index.html">Home</a>
        <a href="install.html">Install</a>
        <a href="docs.html">Docs</a>
        <a href="forum.html">Forum</a>
        <span class="meui-button4">Login</span>
    </nav>
</div>
`;

// Missing links here btw
footer.innerHTML = `
    <div class="ifooter">
        <nav>
            <h4>About</h4>
            <a href="about.html">About Insidia</a>
            <a href="docs.html">Docs</a>
            <a href="docs.html?=">Mod creation</a>
        </nav>
        <nav>
            <h4>Social</h4>
            <a href="forum.html">Insidia Forum</a>
            <a href="friendlist.html">Friend list</a>
            <a href="profile.html?=">Profile</a>
        </nav>
        <nav>
            <h4>More from Exdash</h4>
            <a href="https://anonynmous-exdash.github.io/">Home</a>
            <a href="https://anonynmous-exdash.github.io/project-loader/">DEX Dash</a>
            <a href="https://anonynmous-exdash.github.io/cloud-id-switcher/">AEX Dash</a>
            <a href="https://github.com/anonynmous-exdash/">GitHub Profile</a>
            <a href="https://scratch.mit.edu/users/anon-exdash/">Scratch Profile</a>
        </nav>
        <nav>
            <h4>More from Maltion</h4>
            <a href="https://www.maltion.com">Home</a>
            <a href="https://mclient.maltion.com">MClient</a>
            <a href="https://voxarc.maltion.com">Voxarc</a>
            <a href="https://github.com/ismaltion">GitHub Profile</a>
            <a href="https://scratch.mit.edu/users/Maltion/">Scratch Profile</a>
        </nav>
    </div>
`