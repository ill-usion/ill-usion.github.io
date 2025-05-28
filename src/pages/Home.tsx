import { useEffect, useState } from "react";
import "../styles/Home.css";
import { Typewriter } from "react-simple-typewriter";
import Marquee from "react-fast-marquee";
import { Arduino } from "../icons/Arduino";
import { Python } from "../icons/Python";
import { HTML } from "../icons/HTML";
import { Typescript } from "../icons/Typescript";
import { Css } from "../icons/Css";
import { Cpp } from "../icons/Cpp";
import { Flask } from "../icons/Flask";
import { Rust } from "../icons/Rust";
import { Tauri } from "../icons/Tauri";
import { React } from "../icons/React";
import { SolidJS } from "../icons/SolidJS";
import { Bun } from "../icons/Bun";
import { Github } from "../icons/Github";
import { Espressif } from "../icons/Espressif";
import { Fusion360 } from "../icons/Fusion360";
import { ArchLinux } from "../icons/ArchLinux";
import { Neovim } from "../icons/Neovim";
import { Vscode } from "../icons/Vscode";

export default function Home() {
    const [showHeroDescription, setShowHeroDescription] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowHeroDescription(true);
        }, 1000);

        () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <article className="scroller">
            <section className="hero-section">
                <div className="hero">
                    <div className="inner-hero">
                        <h1>
                            Hello, I'm{" "}
                            <Typewriter
                                words={["Ahmed"]}
                                cursor={false}
                                delaySpeed={230}
                            />
                        </h1>
                        <div>
                            {showHeroDescription ? (
                                <p>
                                    I
                                    <span>
                                        <Typewriter
                                            words={[
                                                "'m a self-taught programmer",
                                                " build apps",
                                                " do embedded programming",
                                                " build websites",
                                            ]}
                                            cursor
                                            cursorBlinking
                                            loop={false}
                                            delaySpeed={3000}
                                        />
                                    </span>
                                </p>
                            ) : (
                                <span></span>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <section className="description-section">
                {/* Add light that follows the cursor */}
                <div className="description">
                    <h1>Where it all started</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat molestiae doloribus ut soluta id alias nostrum
                        nam saepe, tempora a recusandae debitis laboriosam
                        mollitia consectetur numquam dolores sapiente nulla
                        laborum!
                    </p>
                    <hr />
                    <h1>Where I am now</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil expedita debitis ullam ipsam! Alias dicta
                        quo qui quas ipsam magnam vero, ratione expedita, odit
                        officiis ex. Voluptatibus delectus similique vel.
                    </p>
                    <hr />
                    <h1>Where I want to be</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eum harum et ullam quam non alias ea architecto
                        cupiditate neque. Iure quae commodi velit! Tempora fugit
                        molestiae omnis distinctio, error deleniti.
                    </p>
                </div>
            </section>
            <section className="technologies-section">
                <div className="technologies-outer-wrapper">
                    <div className="languages-wrapper">
                        <h1>Languages</h1>
                        <Marquee play autoFill pauseOnHover>
                            <div className="marquee-item" title="Arduino">
                                <Arduino />
                            </div>
                            <div className="marquee-item" title="Python">
                                <Python />
                            </div>
                            <div className="marquee-item" title="HTML">
                                <HTML />
                            </div>
                            <div className="marquee-item" title="CSS">
                                <Css />
                            </div>
                            <div className="marquee-item" title="Typescript">
                                <Typescript />
                            </div>
                            <div className="marquee-item" title="C++">
                                <Cpp />
                            </div>
                            <div className="marquee-item" title="Rust">
                                <Rust />
                            </div>
                        </Marquee>
                    </div>
                    <div className="tools-wrapper">
                        <h1>Tools and Frameworks</h1>
                        <Marquee play autoFill pauseOnHover direction="right">
                            <div className="marquee-item" title="Tauri">
                                <Tauri />
                            </div>
                            <div className="marquee-item" title="Flask">
                                <Flask />
                            </div>
                            <div className="marquee-item" title="React">
                                <React />
                            </div>
                            <div className="marquee-item" title="SolidJS">
                                <SolidJS />
                            </div>
                            <div className="marquee-item" title="Bun">
                                <Bun />
                            </div>
                            <div className="marquee-item" title="Github">
                                <Github />
                            </div>
                            <div className="marquee-item" title="Espressif">
                                <Espressif />
                            </div>
                            <div className="marquee-item" title="Fusion360">
                                <Fusion360 />
                            </div>
                            <div className="marquee-item" title="Linux">
                                <ArchLinux />
                            </div>
                            <div className="marquee-item" title="Neovim">
                                <Neovim />
                            </div>
                            <div className="marquee-item" title="Vscode">
                                <Vscode />
                            </div>
                        </Marquee>
                    </div>
                </div>
            </section>
            <section>
                {/* Achievements */}
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ratione perferendis unde vitae quisquam quod accusamus,
                    recusandae necessitatibus quibusdam qui provident, totam rem
                    autem deserunt culpa ducimus eligendi! Itaque, deserunt
                    eligendi.
                </p>
            </section>
            <section>
                {/* 
                    Scrolling Marquee of project cards
                    Scrolling Marquee of blog cards  
                */}
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore quo maxime odio dignissimos soluta quis,
                    necessitatibus aspernatur? Tempora cumque in ipsum, quas
                    eum, perferendis culpa adipisci, exercitationem corporis
                    praesentium aliquid.
                </p>
            </section>
            <section>
                {/* Footer  */}
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio facere explicabo perspiciatis libero ab suscipit
                    accusantium voluptate dolore officia, inventore dolorum
                    dicta atque perferendis esse? Consequuntur, quos.
                    Laboriosam, ullam aliquam!
                </p>
            </section>
        </article>
    );
}
