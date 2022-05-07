



export const FormHolder = ()=> {
    return (
        <div className="formHolder">
            <div className="inputSec">
                <div className="label">Email or Mobile Number*</div>
                <div className="inputHolder">
                    <input type="text" className="phoneEmail"/>
                </div>                
            </div>
            <div className="btnHolder btn">Continue</div>
            <div class="footer">
                <p class="fs14">Powered by</p>
                <img src="https://images.livemint.com/img/static/ht-digital-logo.svg" />
                <p>One network. One account</p>
                <img src="https://images.livemint.com/dev/LHNewFooterLogoDesk.svg" width="292" />
            </div>
        </div>
    )
}