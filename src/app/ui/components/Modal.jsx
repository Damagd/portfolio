'use client'

export default function Modal() {

    const onTap = () => {
        document.querySelector('.modal-container').style.display = 'none';
    }

    return(
        <div className="modal-container fadeIn" onClick={onTap}>
            <div className="modal-img-container growIn">
                <img src="" alt="" />
            </div>
        </div>
    )
}