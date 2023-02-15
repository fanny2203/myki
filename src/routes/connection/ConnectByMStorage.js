// Styles
import "./ConnectionComponent.sass";

// Custom components
import ConnectionComponent from "./ConnectionComponent";

// Utils
import { Link } from "react-router-dom";
import { InputAdornment, MenuItem, Select, TextField, FormHelperText, Switch, FormControlLabel } from '@mui/material';
import { styled } from '@mui/material/styles';

// Icons
import rightChevron from "../../icons/ChevronRightBlue.png";
import temporalVideo from "../../icons/temporalVideo.png";
import pwdIcon from "../../icons/eye.svg";

// Hooks
import { useState } from "react";

function ConnectByMStorage(){
    
    // Hooks
    const [detailsFirstStep, setDetailsFirstStep] = useState(true);
    const [detailsSecondStep, setDetailsSecondStep] = useState(false);

    // Auth methods custom radio buttons
    const [specificAccessSelected, setSpecificAccessSelected] = useState(true);
    const [generalAccessSelected, setGeneralAccessSelected] = useState(false);

    const [specificAccessSelectedSecondStep, setSpecificAccessSelectedSecondStep] = useState(true);
    const [generalAccessSelectedSecondStep, setGeneralAccessSelectedSecondStep] = useState(false);

    // Password field
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");

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

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    const IOSSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
      ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
          padding: 0,
          margin: 2,
          transitionDuration: '200ms',
          '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#5400FF',
              opacity: 1,
              border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.5,
            },
          },
          '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
          },
          '&.Mui-disabled .MuiSwitch-thumb': {
            color:
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[600],
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
          },
        },
        '& .MuiSwitch-thumb': {
          boxSizing: 'border-box',
          width: 22,
          height: 22,
        },
        '& .MuiSwitch-track': {
          borderRadius: 26 / 2,
          backgroundColor: theme.palette.mode === 'light' ? '#B0B0B0' : '#39393D',
          opacity: 1,
          transition: theme.transitions.create(['background-color'], {
            duration: 500,
          }),
        },
      }));
      

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

                        {/* Destination schema */}
                        <label className="lbl-purple">Destination schema* </label>
                        <TextField hiddenLabel variant="standard" placeholder="Destination schema" helperText="Schema is permanent and cannot be changed after connection creation"/>

                        {/* Destination Table */}
                        <label className="lbl-purple">Destination Table* </label>
                        <TextField hiddenLabel variant="standard" placeholder="Destination table" helperText="Table is permanent and cannot be changed after connection creation"/>

                        {/* Container name */}
                        <label className="lbl-purple">Container name*</label>
                        <TextField hiddenLabel variant="standard" placeholder="Container name" />

                        {/* Connecting String */}
                        <label className="lbl-purple">Connecting String*</label>
                        <TextField hiddenLabel variant="standard" placeholder="Connecting String" />

                        {/* Folder Path */}
                        <label className="lbl-purple">File pattern </label>
                        <Select variant="standard">
                            <MenuItem >Infer</MenuItem >
                        </Select>
                        <FormHelperText>Optional. All files and folders under this folder path will be searched for files to sync. This parameter is optional.</FormHelperText>
                        
                        {/* File pattern */}
                        <label className="lbl-purple">File pattern </label>
                        <Select variant="standard">
                            <MenuItem >Infer</MenuItem >
                        </Select>
                        <FormHelperText>Optional. All files in your search path matching this regular expression will be synced. This parameter is optional.</FormHelperText>

                        {/* File type */}
                        <label className="lbl-purple">File type </label>
                        <Select variant="standard">
                            <MenuItem >Infer</MenuItem >
                        </Select>
                        <FormHelperText>If your files are saved with improper extensions, you can force them to by synced as the selected filetype. Leave the value as infer if your files have the correct extensions.</FormHelperText>

                        {/* Compression */}
                        <label className="lbl-purple">Compression </label>
                        <Select variant="standard">
                            <MenuItem >Infer</MenuItem >
                        </Select>
                        <FormHelperText>If your files are compressed, but do not have extensions indicating the compression method, you can force them to be uncompressed according to the selected compression algorithm. Leave the value as infer if your files are saved with the correct compression extensions.</FormHelperText>

                        {/* Error Handing */}
                        <label className="lbl-purple">Error Handing </label>
                        <Select variant="standard">
                            <MenuItem >Fail</MenuItem >
                        </Select>
                        <FormHelperText>If you know that your files contain some errors, you can choose to have poorly formatted lines skipped. We recommend leaving the value as fail unless you are certain that you have undesirable, malformed data.</FormHelperText>

                        {/* Enable advanced option */}
                        <label className="lbl-purple">Enable advanced option </label>
                        <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} />}/>
                        <FormHelperText>These options are for advanced configuration, and are only necessary in highly specific cases.</FormHelperText>
                        
                        {/* Data processing location  */}
                        <label className="lbl-purple">Data processing location </label>
                        <Select variant="standard">
                            <MenuItem >US</MenuItem >
                        </Select>
                        <FormHelperText>This is where MyNiuu will operate and run computation on data.</FormHelperText>

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
            <h1>Microsoft Storage</h1>
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

export default ConnectByMStorage;