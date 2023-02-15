// Styles
import "./ConnectionComponent.sass";

// Custom components
import ConnectionComponent from "./ConnectionComponent";

// Utils
import { Link } from "react-router-dom";
import { InputAdornment, MenuItem, Select, TextField, FormHelperText, IconButton } from '@mui/material';

// Icons
import rightChevron from "../../icons/ChevronRightBlue.png";
import temporalVideo from "../../icons/temporalVideo.png";
import CircleQuestionMark from "../../icons/CircleQuestionMark.png";
import copyIcon from "../../icons/copy.png";
import customRadioButtom from "../../icons/CustomRadioButton.png";

// Hooks
import { useState } from "react";

function ConnectByGoogleSheets(){
    
    // Hooks
    const [detailsFirstStep, setDetailsFirstStep] = useState(true);
    const [detailsSecondStep, setDetailsSecondStep] = useState(false);

    // Auth methods custom radio buttons
    const [specificAccessSelected, setSpecificAccessSelected] = useState(true);
    const [generalAccessSelected, setGeneralAccessSelected] = useState(false);

    const [specificAccessSelectedSecondStep, setSpecificAccessSelectedSecondStep] = useState(true);
    const [generalAccessSelectedSecondStep, setGeneralAccessSelectedSecondStep] = useState(false);

    // Functions
    const authMethodsHandlers = (step) => {
        if(specificAccessSelected){
            document.getElementById("optionBox-2").classList.add("selectedOptionBox");
            document.getElementById("optionBox-1").classList.remove("selectedOptionBox");
            setGeneralAccessSelected(true);
            setSpecificAccessSelected(false);
        }else{
            document.getElementById("optionBox-1").classList.add("selectedOptionBox");
            document.getElementById("optionBox-2").classList.remove("selectedOptionBox");
            setGeneralAccessSelected(false);
            setSpecificAccessSelected(true);
        }
    }

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
                        <p>Prerequisites<br/>To connect Google Sheets to Fivetran, you must have Read / Write access to a Google Sheet.</p>
                        <h1 className="googleSheets-instructions-lbl">Enter a destination schema and table</h1>
                        <p>These values are permanent and cannot be changed once you click "Save and test".</p><br/>

                        {/* Destination schema */}
                        <label className="lbl-purple">Destination schema* </label>
                        <TextField hiddenLabel variant="standard" placeholder="Destination schema" helperText="Schema is permanent and cannot be changed after connection creation"/>

                        {/* Destination Table */}
                        <label className="lbl-purple">Destination Table* </label>
                        <TextField hiddenLabel variant="standard" placeholder="Destination table" helperText="Table is permanent and cannot be changed after connection creation"/>

                        <h1 className="googleSheets-instructions-lbl">Enter a destination schema and table</h1>
                        <p>The first row of the named range will become column headers in the destination table.</p>

                        {/* Create a named range */}
                        <div className="googleSheets-icon-btn help-btn align-between btn-round btn-bg-blue">
                            Create a named range 
                            <img src={CircleQuestionMark} alt="Help" />
                        </div>

                        <h1 className="googleSheets-instructions-lbl">Enter your sheet URL</h1>

                        {/* Sheet URL */}
                        <label className="lbl-purple">Sheet URL* </label>
                        <TextField hiddenLabel variant="standard" placeholder="Sheet URL" helperText="For example, https://docs.google.com/spreadsheets/d/1JH4htAf-XUfLYEnlDug2vLYrmUkMCjmLjwAqSzGbqvY/edit#gid=0"/>

                        <h1 className="googleSheets-instructions-lbl">Choose an authentication method</h1>
                        <p>This step determines how MyNiuu connects to your Google Sheet.</p>

                        {/* Authentication Methods */}
                        <div className="newConnection-form-optionBoxWrapper">
                            <div className="newConnection-form-optionBox selectedOptionBox align-start" id="optionBox-1">
                                <div className="optionBox--customRadio pointer" id="customRadio-1" onClick={() => authMethodsHandlers("first")}>
                                    {specificAccessSelected ? <img src={customRadioButtom} alt="custom radio button"/>: null }
                                </div>
                                {/* <input type="checkbox"/> */}
                                <div>
                                    <h1 className="googleSheets-instructions-lbl">Grant access to specific sheets</h1>
                                    <p>For highest security - add your MyNiiu account as a unique read-only user to the specific Google Sheets that you want to sync.</p>
                                </div>
                            </div>

                            <div className="newConnection-form-optionBox align-start" id="optionBox-2">
                                <div className="optionBox--customRadio pointer" id="customRadio-2" onClick={() => authMethodsHandlers("first")}>
                                    {generalAccessSelected ? <img src={customRadioButtom} alt="custom radio button"/>: null }
                                </div>
                                {/* <input type="checkbox"/> */}
                                <div>
                                    <h1 className="googleSheets-instructions-lbl">Grant account access</h1>
                                    <p>For quick setup - use OAuth authentication to give MyNiiu read-only access to any Google Sheet that your user has access to.</p>
                                </div>
                            </div>
                        </div>

                        {/* Grant Access */}
                        <h1 className="googleSheets-instructions-lbl">Grant MyNiiu read-only access to your Google Sheet</h1>

                        {/* Create a named range */}
                        <div className="googleSheets-icon-btn help-btn align-between btn-round btn-bg-blue">
                            Create a named range 
                            <img src={CircleQuestionMark} alt="Help" />
                        </div>

                        {/* Auto-generate MyNiiu email */}
                        <label className="lbl-purple">Auto-generate MyNiiu email</label>
                        <TextField 
                            hiddenLabel 
                            variant="standard" 
                            placeholder="something" 
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><img src={copyIcon} alt="copy icon" className="input-copyIcon pointer"/></InputAdornment>,
                              }}
                        
                        />

                        <button className="btn-round btn-bg-blue googleSheets-findSheet-btn">Find sheet</button>


                        {/* Data processing location  */}
                        <label className="lbl-purple">Data processing location </label>
                        <Select variant="standard">
                            <MenuItem >US</MenuItem >
                        </Select>
                        <FormHelperText>This is where MyNiuu will operate and run computation on data</FormHelperText>

                        {/* Cloud provide service  */}
                        <label className="lbl-purple">Cloud provide service </label>
                        <Select variant="standard">
                            <MenuItem >GCP</MenuItem >
                        </Select>
                        <FormHelperText>Determines the cloud service provider used for running MyNiuu services.</FormHelperText>
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
                        <p>Prerequisites<br/>To connect Google Sheets to Fivetran, you must have Read / Write access to a Google Sheet.</p>
                        <h1 className="googleSheets-instructions-lbl">Enter a destination schema and table</h1>
                        <p>These values are permanent and cannot be changed once you click "Save and test".</p><br/>

                        {/* Destination schema */}
                        <label className="lbl-purple">Destination schema* </label>
                        <TextField hiddenLabel variant="standard" placeholder="Destination schema" helperText="Schema is permanent and cannot be changed after connection creation"/>

                        {/* Destination Table */}
                        <label className="lbl-purple">Destination Table* </label>
                        <TextField hiddenLabel variant="standard" placeholder="Destination table" helperText="Table is permanent and cannot be changed after connection creation"/>

                        <h1 className="googleSheets-instructions-lbl">Enter a destination schema and table</h1>
                        <p>The first row of the named range will become column headers in the destination table.</p>

                        {/* Create a named range */}
                        <div className="googleSheets-icon-btn help-btn align-between btn-round btn-bg-blue">
                            Create a named range 
                            <img src={CircleQuestionMark} alt="Help" />
                        </div>

                        <h1 className="googleSheets-instructions-lbl">Enter your sheet URL</h1>

                        {/* Sheet URL */}
                        <label className="lbl-purple">Sheet URL* </label>
                        <TextField hiddenLabel variant="standard" placeholder="Sheet URL" helperText="For example, https://docs.google.com/spreadsheets/d/1JH4htAf-XUfLYEnlDug2vLYrmUkMCjmLjwAqSzGbqvY/edit#gid=0"/>

                        <h1 className="googleSheets-instructions-lbl">Choose an authentication method</h1>
                        <p>This step determines how MyNiuu connects to your Google Sheet.</p>

                        {/* Authentication Methods */}
                        <div className="newConnection-form-optionBoxWrapper">
                            <div className="newConnection-form-optionBox selectedOptionBox align-start" id="optionBox-1">
                                <div className="optionBox--customRadio pointer" id="customRadio-1" onClick={() => authMethodsHandlers("first")}>
                                    {specificAccessSelectedSecondStep ? <img src={customRadioButtom} alt="custom radio button"/>: null }
                                </div>
                                {/* <input type="checkbox"/> */}
                                <div>
                                    <h1 className="googleSheets-instructions-lbl">Grant access to specific sheets</h1>
                                    <p>For highest security - add your MyNiiu account as a unique read-only user to the specific Google Sheets that you want to sync.</p>
                                </div>
                            </div>

                            <div className="newConnection-form-optionBox align-start" id="optionBox-2">
                                <div className="optionBox--customRadio pointer" id="customRadio-2" onClick={() => authMethodsHandlers("first")}>
                                    {generalAccessSelectedSecondStep ? <img src={customRadioButtom} alt="custom radio button"/>: null }
                                </div>
                                {/* <input type="checkbox"/> */}
                                <div>
                                    <h1 className="googleSheets-instructions-lbl">Grant account access</h1>
                                    <p>For quick setup - use OAuth authentication to give MyNiiu read-only access to any Google Sheet that your user has access to.</p>
                                </div>
                            </div>
                        </div>

                        {/* Grant Access */}
                        <h1 className="googleSheets-instructions-lbl">Grant MyNiiu read-only access to your Google Sheet</h1>

                        {/* Create a named range */}
                        <div className="googleSheets-icon-btn help-btn align-between btn-round btn-bg-blue">
                            Create a named range 
                            <img src={CircleQuestionMark} alt="Help" />
                        </div>

                        {/* Auto-generate MyNiiu email */}
                        <label className="lbl-purple">Auto-generate MyNiiu email</label>
                        <TextField 
                            hiddenLabel 
                            variant="standard" 
                            placeholder="something" 
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><img src={copyIcon} alt="copy icon" className="input-copyIcon pointer"/></InputAdornment>,
                              }}
                        />

                        <button className="btn-round btn-bg-blue googleSheets-findSheet-btn">Find sheet</button>


                        {/* Data processing location  */}
                        <label className="lbl-purple">Data processing location </label>
                        <Select variant="standard">
                            <MenuItem >US</MenuItem >
                        </Select>
                        <FormHelperText>This is where MyNiuu will operate and run computation on data</FormHelperText>

                        {/* Cloud provide service  */}
                        <label className="lbl-purple">Cloud provide service </label>
                        <Select variant="standard">
                            <MenuItem >GCP</MenuItem >
                        </Select>
                        <FormHelperText>Determines the cloud service provider used for running MyNiuu services.</FormHelperText>
                    </div>
                </>
            )}
        </>

    const info = 
        <>
            <h1>Connect by Google Sheets</h1>
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

export default ConnectByGoogleSheets;