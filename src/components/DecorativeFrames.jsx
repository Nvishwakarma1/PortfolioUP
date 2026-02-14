import './DecorativeFrames.css'

const DecorativeFrames = () => {
    return (
        <>
            {/* Code Window Frame */}
            <div className="decorative-frame large-frame">
                <div className="inner-square">
                    {/* <div className="code-snippet">
                        <span className="code-comment">// System Online</span>
                        <br />
                        <span className="code-keyword">const</span> <span className="code-var">status</span> = <span className="code-string">"ready"</span>
                    </div> */}
                </div>

                {/* Tech Labels */}
                <div className="dimension-line horizontal top">
                    <div className="dimension-marker left"></div>
                    <div className="dimension-marker right"></div>
                    <div className="dimension-label">API READY</div>
                </div>

                <div className="dimension-line vertical right">
                    <div className="dimension-marker top"></div>
                    <div className="dimension-marker bottom"></div>
                    <div className="dimension-label vertical">SECURE</div>
                </div>

                {/* Corner markers */}
                <div className="corner-marker top-left"></div>
                <div className="corner-marker top-right"></div>
                <div className="corner-marker bottom-left"></div>
                <div className="corner-marker bottom-right"></div>
            </div>

            {/* CodeStats Frame */}
            <div className="decorative-frame small-frame">
                <div className="inner-square">
                    {/* CodeStats button will appear here */}
                </div>

                <div className="dimension-line horizontal top">
                    <div className="dimension-marker left"></div>
                    <div className="dimension-marker right"></div>
                    <div className="dimension-label">STATS</div>
                </div>

                <div className="dimension-line vertical right">
                    <div className="dimension-marker top"></div>
                    <div className="dimension-marker bottom"></div>
                    <div className="dimension-label vertical">CODE</div>
                </div>

                {/* Corner markers */}
                <div className="corner-marker top-left"></div>
                <div className="corner-marker top-right"></div>
                <div className="corner-marker bottom-left"></div>
                <div className="corner-marker bottom-right"></div>
            </div>
        </>
    )
}

export default DecorativeFrames
