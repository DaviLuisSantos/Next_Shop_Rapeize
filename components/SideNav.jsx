
export default function SideNav() {
    return (
        <div>
            <head>
            </head>
            <body>

                <div id="mySidenav" class="sidenav">
                    <a href="javascript:void(0)" class="closebtn" onclick={closeNav()}>&times;</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>

                <h2><Link>Animated Sidenav Example</Link></h2>
                <p>Click on the element below to open the side navigation menu.</p>
                <span className="zap" onclick={openNav()}>&#9776; open</span>

            </body >
        </div >

    )
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px"
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0px"
}

