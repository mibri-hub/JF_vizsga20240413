import React, { useState } from 'react'

export const Contact = () => {
  
    const [email,setemail]=useState('')
    const [message,setMessage]=useState('')
    const handelSubmit=(e)=>{
      e.preventDefault()
      const formData={email,message,timestamp:Date.now()}
      console.log(formData);
    }


   return ( 
    <div className='container p-3 shadow'  >
     <section> 
      <form onSubmit={handelSubmit}>
      
        <h2 className='provider'>Lépj velünk kapcsolatba</h2>
        <div className="mb-3">
            <label  className="form-label">Email:</label>
            <input type="email" 
            className="form-control" 
            value={email} 
            onChange={(e)=>setemail(e.target.value)}
            placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
          <label  className="form-label">Üzenet:</label>
          <textarea 
          className="form-control"  
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          rows="3"></textarea>

          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">Küldés</button>
          </div>

        </div>
      </form>
      </section>
    </div>
  )
}

