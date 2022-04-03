import { useState } from "react";

import './InputForm.css'

export default function InputForm({setShortLinks}) {

    async function shortenUrl(e) {
        e.preventDefault();
        const url = e.target.elements.url.value;
        console.log(url)
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
        const {result} = await response.json();
        console.log(result.short_link);
        setShortLinks(shortLinks => [[url, result.short_link],...shortLinks ])
    }

    return (
        <section className="InputForm">
            <form className='flex' onSubmit={shortenUrl}>
                <input type="url" id="url" placeholder='Shorten a link here... example: https://example.com' required/>
                <p className='advices'></p>
                <button className='btn'>Shorten</button>
            </form>
        </section>
    )
}