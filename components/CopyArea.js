import React from 'react'

const Copyarea = ({footerData}) => {
  return (
    <div><section id="copy">
    <div className="container">
      <div className="copy-wrapper text-center">
        <p>{ footerData.attributes.footer_copyright }</p>
      </div>
    </div>
  </section></div>
  )
}

export default Copyarea