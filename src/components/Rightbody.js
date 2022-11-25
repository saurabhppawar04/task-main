import React from 'react'
import "../Styles/rightb.css"

function RightBody() {
    return (
        <div className="d-flex flex-column justify-content-between" style={{ width: '30%' }}>

            {/* Petitioner */}
            <div className='d-flex flex-col justify-content-between my-2 px-3'  >
                <div>
                    <label style={{ fontFamily: 'sans-serif', fontSize: '1.3rem' }}>Petitioner</label>
                </div>
                <p><span class="material-symbols-outlined" type="button" data-toggle="collapse"
                    data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"
                    style={{ fontFamily: 'sans-serif', fontSize: '1.3rem' }}>
                    ^
                </span></p>
            </div>

            <div class="collapse" id="collapseExample">
                <span className='px-3' style={{ fontFamily: 'sans-serif', fontSize: '1.3rem' }}>1 <br /></span>

                <div class="card card-body p-0 m-0" style={{ outline: "none" }}>

                    <div className="mx-1 my-2" style={{ width: "max-width", height: '35%' }}>
                        <div className='d-flex justify-content-between flex-column'>
                            <div className='d-flex justify-content-between '>
                                <input class="pip m-1" type="text" placeholder="Name" />
                                <input class="pip m-1" type="text" placeholder="Father/Husband" />
                            </div>
                            <input class="pip m-1" type="text" placeholder="Address" />
                            <input class="pip m-1" type="text" placeholder="Age" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Respondent */}
            <div className="mx-1 my-2" style={{ width: "max-width", height: '30 %' }}><div className='d-flex flex-col justify-content-between my-1 px-3'>
                <div>
                    <label style={{ fontFamily: 'sans-serif', fontSize: '1.3rem' }}>Respondent</label>
                </div>
                <p><span class="material-symbols-outlined" type="button" data-toggle="collapse"
                    data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample"
                    style={{ fontFamily: 'sans-serif', fontSize: '1.3rem' }}>
                    ^
                </span></p>
            </div>

                <div class="collapse" id="collapseExample1">
                    <span className='px-3' style={{ fontFamily: 'sans-serif', fontSize: '1.3rem' }}>1 <br /></span>

                    <div class="card card-body p-0 m-0" style={{ outline: "none" }}>

                        <div className="mx-1 my-2" style={{ width: "max-width", height: '35%' }}>
                            <div className='d-flex justify-content-between flex-column'>
                                <div className='d-flex justify-content-between '>
                                    <input class="pip m-1" type="text" placeholder="Name" />
                                    <input class="pip m-1" type="text" placeholder="Father/Husband" />
                                </div>
                                <input class="pip m-1" type="text" placeholder="Address" />
                                <input class="pip m-1" type="text" placeholder="Age" />
                            </div>
                        </div>
                    </div>
                </div>  </div>
            <div className="mx-1 my-12" style={{ width: "max-width", height: '30%' }}>
                <div className='d-flex justify-content-center'>
                 
                </div>
                <div className='d-flex justify-content-center align-items-between'>
                    <textarea style={{ width: '96%', height: "30%" }} rows={5}>
                    </textarea>
                </div>
                <div className='d-flex justify-content-center'>
                    <button type='submit' className='btn btn-primary my-2' >Sumbit</button>
                </div>
            </div>
        </div>
    )
}

export default RightBody;