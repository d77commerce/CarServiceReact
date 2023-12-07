

export default function About() {
    return (
        <main className="main">
        <section className="container">
         <div className='head-text'>
        <h1 >About</h1>
            <p>App description</p>
         </div>
            
            <hr />
             <div className="left-column"></div>
             <div className="hero-image"></div> 
            <div className="article-container">
            <article>
                <h2>Article Title</h2>
                <p>Article content goes here.</p>
            </article>
    
            <div className="right-column">
                <h3>Related Links</h3>
                <ul>
                <li><a href="/related1">Related Link 1</a></li>
                <li><a href="/related2">Related Link 2</a></li>
                <li><a href="/related3">Related Link 3</a></li>
                </ul>
            </div>
            </div>
        </section>
        </main>
    );
    }