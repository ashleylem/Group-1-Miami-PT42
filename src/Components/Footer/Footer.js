import React from 'react'
import alex from '../../Images/alex.png'
import ashley from '../../Images/ashley.png'
import minerva from '../../Images/minerva.png'
import linkin from '../../Images/linkin.png'
import github from '../../Images/GitHub-Mark.png'
import './Footer.css'
import "../../Images/GitHub-Mark.png"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <h3>Contacts</h3>
            <div className="contact-container">
              
              <div className='img-ashley'>
                <img className="img-thumbnail" src={ashley} />
                <img className="img-thumbnail-2" src={linkin} />
              <img className="img-thumbnail-2" src={github} />
            </div>
            <div className='img-alex'>
              <img className="img-thumbnail" src={alex} alt="" />
              <a href="https://www.linkedin.com/in/notalxt/" target="_blank">
                <img className="img-thumbnail-2" src={linkin} />
              </a>
              <a href="https://github.com/NotAlxT" target="_blank">
                <img className="img-thumbnail-2" src={github} />
              </a>
            </div>
            <div className='img-minerva'>
              <img className="img-thumbnail" src={minerva} alt="" />
              <a href="https://www.linkedin.com/in/minervadutta/" target="_blank">
                <img className="img-thumbnail-2" src={linkin} />
              </a>
              <img className="img-thumbnail-2" src={github} />
            </div>
          </div>

        </div>
      </div>
      <div className="copyright text-center">
        Copyright &copy; 2023 <span>A&M</span>
      </div>
    </footer>
    </>
  )
}

export default Footer