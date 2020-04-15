import React from 'react'

const Footer = () => (
    
    <div className="site-footer">
        <h4 className="text-center">
            Pin&#39;s Blog
        </h4>
        <div className="footer-social-links">
            <ul className="social-links-list">
                <li><a 
                        href="https://github.com/PIN-devel" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="facebook"
                    > 
                    <i class="fab fa-github fa-2x"></i>
                </a></li>
                {/* <li><a href="https://codeforces.com/profile/pin-dev"> 
                  codeforces
                </a></li> */}
            </ul>
        </div>      
    </div>
)

export default Footer