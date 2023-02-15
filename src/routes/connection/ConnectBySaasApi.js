// Styles
import "./ConnectionComponent.sass";

// Custom components
import ConnectionComponent from "./ConnectionComponent";

// Utils
import { Link } from "react-router-dom";
import { MenuItem, Select, TextField, FormHelperText } from '@mui/material';

// Icons
import rightChevron from "../../icons/ChevronRightBlue.png";
import temporalVideo from "../../icons/temporalVideo.png";

// Hooks
import { useState } from "react";

function ConnectBySaasApi(){
    
    // Hooks
    const [detailsFirstStep, setDetailsFirstStep] = useState(true);
    const [detailsSecondStep, setDetailsSecondStep] = useState(false);

    // JSX Content
    const content = 
        <>
            { detailsFirstStep && (
                <>
                    <div className="newConnection-steps">
                        <div className="newConnection-currentStep">
                            <div className="newConnection-circleStep">Connect Source</div>
                        </div>
                        <Link to="">Change <img src={rightChevron} alt="chevron right"/></Link>
                    </div>
                    <div className="newConnection-form">
                        <p>Follow the setup guide on the right to connect your data source to MyNiiu. If you need help accessing the source system, invite a teammate to complete this step.</p>

                        {/* ID name */}
                        <label className="lbl-purple">ID name</label>
                        <TextField hiddenLabel variant="standard" placeholder="ID name" />

                        {/* URL */}
                        <label className="lbl-purple"> URL* </label>
                        <TextField hiddenLabel variant="standard" placeholder="POST" helperText="Rest endpoint URL"/>

                        {/* Token */}
                        <label className="lbl-purple"> Token </label>
                        <TextField hiddenLabel variant="standard" placeholder="Token (Query)"/>

                        {/* Generate Token */}
                        <button className="btn-round btn-bg-blue" >Generate</button>

                    </div>
                </>
            )}

            { detailsSecondStep && (
                <>
                    <div className="newConnection-steps">
                        <div className="newConnection-currentStep">
                            <div className="newConnection-circleStep-blue">Connect Source</div>
                            <hr/>
                            <div className="newConnection-circleStep">Connect Destination</div>
                        </div>
                        <Link to="">Change <img src={rightChevron} alt="chevron right"/></Link>
                    </div>
                    <div className="newConnection-form">
                        <p>Follow the setup guide on the right to connect your data destiny to MyNiiu. If you need help accessing the source system, invite a teammate to complete this step.</p>

                        {/* Destination schema */}
                        <label className="lbl-purple">Destination schema </label>
                        <TextField hiddenLabel variant="standard" placeholder="Destination schema" helperText="Schema is permanent and cannot be changed after connection creation"/>

                        {/* Folder URL */}
                        <label className="lbl-purple">Folder URL* </label>
                        <TextField hiddenLabel variant="standard" placeholder="Folder URL" helperText="Share this magic folder with the email address: g-performed-irony@fivetran-production.iam.gserviceaccount.com"/>

                        {/* Data processing location */}
                        <label className="lbl-purple">Data processing location </label>
                        <Select variant="standard">
                            <MenuItem >US</MenuItem >
                        </Select>
                        <FormHelperText>This is where MyNiuu will operate and run computation on data</FormHelperText>

                        {/* Cloud provide service */}
                        <label className="lbl-purple">Cloud provide service </label>
                        <Select variant="standard">
                            <MenuItem >GCP</MenuItem >
                        </Select>
                        <FormHelperText>Determines the cloud service provider used for running MyNiuu services</FormHelperText>
                    </div>
                </>
            )}
        </>

    const info = 
        <>
            <h1>Connect by API</h1>
            <div className="newConnection-info-video">
                <img src={temporalVideo} alt="video"/>
            </div>
            <label>Statics database</label>
            <p>
                Accumsan parturient vestibulum eget netus maecenas proin a rhoncus porttitor primis ullamcorper taciti condimentum ultrices potenti ullamcorper neque dignissim. Facilisis id mi ultrices suspendisse potenti gravida pulvinar laoreet hendrerit suscipit placerat nascetur id ullamcorper a parturient fermentum adipiscing fermentum parturient mattis purus ac eget inceptos id. A praesent ante volutpat purus a ullamcorper platea interdum mi natoque eu aptent vehicula gravida aptent justo parturient felis parturient tempus consectetur mi parturient himenaeos scelerisque ac congue vehicula. Magna magnis urna faucibus in quis est id adipiscing condimentum ornare aliquet scelerisque tempor proin pulvinar parturient cum ornare quisque ullamcorper. Nisi massa aliquam vestibulum condimentum hendrerit sapien odio adipiscing consectetur cum commodo scelerisque dignissim enim.
                Non etiam in erat auctor adipiscing hac enim sed pretium ullamcorper porta cubilia vulputate litora ac nullam habitasse ac viverra scelerisque adipiscing fringilla. Ad suspendisse non hac viverra suspendisse mattis ut a venenatis sed volutpat scelerisque aenean suspendisse commodo ornare lacus posuere. Vehicula cum non viverra pulvinar luctus a ullamcorper nisl et facilisis a at vestibulum dis inceptos magna elit posuere.
                Aptent arcu adipiscing aliquet erat facilisis habitasse parturient condimentum ac a ac at vestibulum volutpat vestibulum orci quam adipiscing. A odio ullamcorper ullamcorper placerat eget consectetur posuere a vel augue in parturient pretium nascetur ridiculus netus dictumst porta arcu ridiculus in suspendisse adipiscing lobortis ullamcorper. Montes orci nulla curae vestibulum pretium sodales ullamcorper suspendisse id sapien a mollis nisi mi consectetur. Adipiscing id nec laoreet potenti dapibus adipiscing facilisis eros eget ornare consectetur sem sed taciti suscipit.
                Adipiscing posuere erat fames nunc ridiculus primis scelerisque montes facilisis ullamcorper et ante mus a montes conubia non. Ac a volutpat in eget nisl a tempor mus praesent ad luctus a per curabitur tortor condimentum at dui enim scelerisque id a condimentum nascetur dapibus. Habitasse leo aliquam vestibulum aliquam aliquam turpis taciti parturient aliquet neque eget suscipit feugiat vestibulum dignissim scelerisque a hac etiam dui eros justo mus adipiscing urna erat id. Ad in egestas nibh molestie hendrerit lectus a vestibulum himenaeos cursus justo feugiat fusce adipiscing viverra orci ullamcorper adipiscing sociis nulla maecenas non sed sociosqu auctor ultricies adipiscing a. Rhoncus at scelerisque vivamus duis a nisl mattis magnis habitant parturient morbi praesent turpis conubia in taciti.
                Fames dictumst condimentum adipiscing tortor a a cum massa nibh hac suscipit etiam scelerisque viverra consequat. Suspendisse at sociosqu primis eget ullamcorper est mattis vulputate suspendisse diam a nisi quis nostra interdum nec eros ac suspendisse maecenas condimentum sem consequat a. Nam a parturient vulputate maecenas interdum suscipit nulla id at ac suspendisse parturient a aptent senectus a et orci hendrerit a a phasellus fringilla volutpat ullamcorper at arcu. Odio a cum parturient interdum massa sed mus sociis mauris mollis vel nascetur a consectetur aenean egestas a a sit dis. Taciti vitae a nec praesent mus parturient ut potenti enim consectetur nulla turpis potenti fames eget ullamcorper eget. Ad a a dolor nec hac ridiculus habitant hendrerit aliquam condimentum auctor magnis a non.
                A ornare commodo torquent justo a justo a placerat a ultricies vulputate neque at ut eu vehicula facilisis curae litora nisl condimentum eu orci tristique. Lobortis adipiscing praesent scelerisque inceptos rutrum tincidunt tincidunt volutpat libero vestibulum senectus ac a nibh vestibulum et quisque enim vestibulum penatibus. Scelerisque facilisi dolor lorem a sapien nisl magna lectus tempor feugiat a mi a a scelerisque scelerisque neque potenti scelerisque vestibulum praesent amet fusce penatibus.
            </p>
        </>

    const buttonHandler = () => {
        
        if (detailsFirstStep) {
            setDetailsFirstStep(false);
            setDetailsSecondStep(true);
        } else if (detailsSecondStep) {
            console.log("something else");
        }
    }

    return(
        <ConnectionComponent
            buttonText="Save Changes"
            buttonHandler={buttonHandler}
            details={content}
            info={info}
        />
    );
}

export default ConnectBySaasApi;