import { useState } from 'react'
import { Link } from 'react-router-dom'

export default () => {

    const [state, setState] = useState(false)

  const navigation = [
      { title: "Customers", path: "/plays/landing-page" },
      { title: "Careers", path: "/plays/landing-page" },
      { title: "Guides", path: "/plays/landing-page" },
      { title: "Partners", path: "/plays/landing-page" }
  ]
  
    return (
        <>
            <header className="hero-primary-header">
                <nav className="hero-primary-nav">
                    <div className="nav-brand">
                        <a href="/plays/landing-page">
                            <img
                                src="https://www.floatui.com/logo.svg" 
                                width={120} 
                                height={50}
                                alt="Float UI logo"
                            />
                        </a>
                        <button className="menu-btn"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                    <ul className={`nav-items ${state ? '' : 'hide-nav'}`}>
                        <li className="signin-li">
                            <Link to="javascript:void(0)">
                                Sign In
                            </Link>
                        </li>
                        <div className="nav-items-li">
                            {
                                navigation.map((item, idx) => (
                                    <li key={idx}>
                                        <Link to={item.path}>{item.title}</Link>
                                    </li>
                                ))
                            }
                        </div>
                    </ul>
                </nav>
            </header>
            <section className="hero-primary">
                <div className="hero-details">
                    <h1>
                        Optimize your website for
                         <span> Search engine</span>
                    </h1>
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
                    </p>
                </div>
                <div className="hero-btns">
                    <Link to="/plays/landing-page" className="btn-primary-hero">
                        Get started
                    </Link>
                    <Link to="/plays/landing-page" className="btn-secondary">
                        Try it out
                    </Link>
                </div>
            </section>
        </>
    )
}
