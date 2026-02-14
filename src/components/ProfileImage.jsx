import './ProfileImage.css'

const ProfileImage = () => {
    return (
        <div className="profile-container">
            <div className="profile-frame">
                {/* Top dimension */}
                <div className="dimension-line horizontal top">
                    <div className="dimension-marker left"></div>
                    <div className="dimension-marker right"></div>
                    <div className="dimension-label">500 MM</div>
                </div>

                {/* Right dimension */}
                <div className="dimension-line vertical right">
                    <div className="dimension-marker top"></div>
                    <div className="dimension-marker bottom"></div>
                    <div className="dimension-label vertical">500 MM</div>
                </div>

                {/* Profile image placeholder */}
                <div className="profile-image">
                    <img src="/profile.jpeg" alt="PROFILE" />
                </div>

                {/* Corner markers */}
                <div className="corner-marker top-left"></div>
                <div className="corner-marker top-right"></div>
                <div className="corner-marker bottom-left"></div>
                <div className="corner-marker bottom-right"></div>
            </div>
        </div>
    )
}

export default ProfileImage
