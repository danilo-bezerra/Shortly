import './ShortLink.css'

export default function ShortLink({url, shortUrl}) {


    function copyLinkToClipboard(url, {target}) {
        
        const el = document.createElement('textarea');
        el.value = url;
        el.select()
        el.setSelectionRange(0, 99999)

        navigator.clipboard.writeText(el.value);
        
        target.innerText = 'Copied!'
        target.style.backgroundColor = '#3b3054'
    }

    return (
        <div className="ShorLink">
            <p>{url}</p>
            <div>
                <p className='shor-link' style={{color: '#2acfcf'}}>{shortUrl ?? 'adasdar.com'}</p>
                <button className='btn' style={{borderRadius: '4px'}} onClick={(e) => copyLinkToClipboard(shortUrl, e)}>Copy</button>
            </div>
        </div>
    )
}