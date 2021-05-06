import React from "react";
import "./About.css";
import motorcycleheader from"./images/motorcycleheader.jpg"
export const About = () => {

    const Header = () =>{
        return <img className="MotorcycleHeader" src={motorcycleheader} alt="header"></img>
    }
return(
<>  
    <header class="headerImage">
        <Header/>
        </header>
        <h1 className ="solid">Our Story</h1>
        <div className="missionStatement">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel pharetra vel turpis nunc eget lorem dolor. Turpis tincidunt id aliquet risus. Ante in nibh mauris cursus. Mi bibendum neque egestas congue. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Proin nibh nisl condimentum id venenatis a condimentum vitae. Nisl pretium fusce id velit. A lacus vestibulum sed arcu non odio. Donec enim diam vulputate ut pharetra sit.
            </p>
            <p>
            Non nisi est sit amet facilisis magna etiam tempor. Tincidunt vitae semper quis lectus nulla at. In iaculis nunc sed augue lacus. Et odio pellentesque diam volutpat commodo sed. Blandit volutpat maecenas volutpat blandit. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Cursus turpis massa tincidunt dui. Id semper risus in hendrerit gravida rutrum quisque non. Vitae aliquet nec ullamcorper sit. Consectetur libero id faucibus nisl tincidunt. Eleifend quam adipiscing vitae proin sagittis nisl. Erat imperdiet sed euismod nisi porta lorem mollis aliquam. Tempus iaculis urna id volutpat lacus laoreet non curabitur. Ut tellus elementum sagittis vitae et leo duis. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Posuere urna nec tincidunt praesent. Rhoncus aenean vel elit scelerisque mauris. Eu facilisis sed odio morbi.
            </p>
            <p>
            Neque vitae tempus quam pellentesque nec nam aliquam. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus a. Sem nulla pharetra diam sit amet nisl suscipit. Duis at tellus at urna condimentum mattis pellentesque. Erat imperdiet sed euismod nisi. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Sit amet mattis vulputate enim. Vitae proin sagittis nisl rhoncus mattis rhoncus. Magna fermentum iaculis eu non diam. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Arcu risus quis varius quam quisque id. Urna nunc id cursus metus aliquam eleifend mi. Eu sem integer vitae justo eget magna fermentum iaculis. Et malesuada fames ac turpis egestas maecenas pharetra.
            </p>
            <p>
            Nulla facilisi cras fermentum odio eu. Amet volutpat consequat mauris nunc. Viverra nibh cras pulvinar mattis nunc sed blandit libero. Odio morbi quis commodo odio. Metus dictum at tempor commodo ullamcorper. Sit amet volutpat consequat mauris nunc. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Facilisis mauris sit amet massa vitae. Lacus sed turpis tincidunt id aliquet risus feugiat. Pharetra pharetra massa massa ultricies. Magna etiam tempor orci eu lobortis elementum nibh. Consequat id porta nibh venenatis cras sed. Phasellus vestibulum lorem sed risus. Vel facilisis volutpat est velit. Semper feugiat nibh sed pulvinar proin gravida. Consequat interdum varius sit amet mattis vulputate. Quam lacus suspendisse faucibus interdum. Consectetur a erat nam at lectus urna duis. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Id aliquet risus feugiat in ante metus dictum.
            </p>
        </div>

        <footer className="aboutFooter">
        <h3> &copy;Culkin Imperial 2021 </h3>
        </footer>
    </>
);
}; 