import React, { useRef, useState } from "react"
import { Title, TitleSm } from "@/components/common/Title"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { BsFacebook } from "react-icons/bs"
import { FiHeadphones, FiHelpCircle } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5"
import { init, sendForm } from "@emailjs/browser"

// Initialize EmailJS with your public key
init("Lzkh9_AG4WGVtJsHH")

const Contact = () => {
  const formRef = useRef(null)
  const [status, setStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formRef.current) return

    sendForm(
      "service_a3jtoy7",    // your EmailJS service ID
      "template_luybo3g",   // your EmailJS template ID
      formRef.current
    )
      .then(() => {
        setStatus("SUCCESS")
        e.target.reset()
      })
      .catch(() => {
        setStatus("ERROR")
      })
  }

  return (
    <section className="contact bg-top">
      <div className="container">
        <div className="heading-title">
          <TitleSm title="CONTACT" /> <br />
          <br />
          <Title title="Let's start right now!" className="title-bg" />
        </div>

        <div className="content py flex1">
          {/* Left Info Panel */}
          <div className="left w-30">
            <div className="contact-deatils">
              <div className="box">
                <FiHeadphones size={30} className="icons" />
                <h3>1-001-234-5678</h3>
                <span>Call us: Mon - Fri 9:00 - 19:00</span>
              </div>
              <div className="box">
                <IoLocationOutline size={30} className="icons" />
                <h3>Ranchi, India</h3>
                <span>Chutia fitness freak 2nd floor, Ranchi, Jharkhand, 834001</span>
              </div>
              <div className="box">
                <FiHelpCircle size={30} className="icons" />
                <h3>itgenix8@gmail.com</h3>
                <span>Drop us a line anytime!</span>
              </div>
              <div className="box">
                <BiUserCircle size={30} className="icons" />
                <h3>itgenix8@gmail.com</h3>
                <span>Career at Itgenixs Pvt. Ltd.</span>
              </div>
            </div>
            <ul>
              <li className="icon">
                <BsFacebook size={25} />
              </li>
              <li className="icon">
                <AiFillInstagram size={25} />
              </li>
              <li className="icon">
                <AiFillLinkedin size={25} />
              </li>
            </ul>
          </div>

          {/* Right Form Panel */}
          <div className="right w-70">
            <TitleSm title="Make an online enquiry" />
            <p className="desc-p">
              Got questions? Ideas? Fill out the form below to get our proposal.
            </p>

            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="grid-2">
                <div className="inputs">
                  <span>Name</span>
                  <input type="text" name="user_name" required />
                </div>
                <div className="inputs">
                  <span>Email</span>
                  <input type="email" name="user_email" required />
                </div>
              </div>

              <div className="grid-2">
                <div className="inputs">
                  <span>Your Budget</span>
                  <input type="text" name="user_budget" />
                </div>
                <div className="inputs">
                  <span>Timeframes</span>
                  <input type="text" name="user_timeframes" />
                </div>
              </div>

              <div className="inputs">
                <span>Tell us a bit about your project*</span>
                <textarea
                  name="user_message"
                  cols="30"
                  rows="10"
                  required
                ></textarea>
              </div>

              <button type="submit" className="button-primary">
                Submit
              </button>

              {status === "SUCCESS" && (
                <p className="text-green-600 mt-2">Message sent successfully!</p>
              )}
              {status === "ERROR" && (
                <p className="text-red-600 mt-2">
                  Ooops, something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
