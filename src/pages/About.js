import React from 'react';
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";

const About = () => {
    return (
        <div>
            <Logo/>
            <Navigation/>
            <h1>A propos</h1>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur consequatur debitis
                deleniti doloribus ducimus enim ex impedit, laboriosam libero magnam, magni minima molestias mollitia
                neque nesciunt officia optio praesentium quas qui quidem, recusandae tempore ut! Ad aliquid animi
                consectetur, dolores exercitationem itaque laudantium libero, minus molestiae nulla quidem
                voluptatum.</p>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem beatae consectetur debitis dignissimos
                dolor doloremque doloribus dolorum ducimus eius error, et ex, excepturi iusto laboriosam natus omnis
                praesentium quia quibusdam quo ratione saepe sapiente velit vero, voluptas voluptates? Animi, architecto
                culpa dignissimos et exercitationem fugiat modi quasi qui sit ut! A architecto asperiores beatae cum
                dignissimos dolore dolores dolorum enim error excepturi, facilis fugiat hic id, impedit in ipsum iure
                labore magnam maxime minima, minus natus odio odit officiis quas quia quidem quis ratione sed suscipit
                ut velit voluptas voluptatibus. Aspernatur doloremque dolorum id minus nemo nisi nobis sequi veniam!</p>
        </div>
    );
};

export default About;