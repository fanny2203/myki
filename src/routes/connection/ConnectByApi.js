// Custom components
import ConnectionComponent from "./ConnectionComponent";
// Utils
import { Link } from "react-router-dom";
import {
  MenuItem,
  Select,
  TextField,
  FormHelperText,
  Alert,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  AlertTitle,
  Box,
  Collapse,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';

// Icons
import { RightArrow } from "../../resources/icon";

import temporalVideo from "../../resources/images/temporalVideo.png";

// Hooks
import { useState, useEffect } from "react";

//Globals
import { useSelector } from "react-redux";

import "./customInput.css";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import json from "react-syntax-highlighter/dist/esm/languages/hljs/json";
import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco";
SyntaxHighlighter.registerLanguage("json", json);

function ConnectByApi() {
  // Hooks
  const [detailsFirstStep, setDetailsFirstStep] = useState(true); // eslint-disable-line
  const [detailsSecondStep, setDetailsSecondStep] = useState(false); // eslint-disable-line
  const [valuesFirstForm, setValuesFirstForm] = useState([
    {
      name: "idName",
      value: "",
      textError: "",
      error: false,
      label: "ID Name",
    },
    { name: "url", value: "", textError: "", error: false, label: "URL" },
    { name: "token", value: "", textError: "", error: false, label: "Token" },
    {
      name: "clientId",
      value: "",
      textError: "",
      error: false,
      label: "Client ID",
    },
  ]);
  const [timeOut, setTimeOut] = useState(0);
  const queryDefaultValue = '{"exampleKey":"validString", "exampleKey2": true, "exampleKey3": 10}'
  const [queryTextArea, setQueryTextArea] = useState({
    value: queryDefaultValue,
    caret: -1,
    target: null,
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const { primaryColor } = useSelector((state) => state.theme.theme);

  useEffect(() => {
    if (queryTextArea.caret >= 0) {
      queryTextArea.target.setSelectionRange(
        queryTextArea.caret + 4,
        queryTextArea.caret + 4
      );
    }
  }, [queryTextArea]);

  const handleText = (e) => {
    setQueryTextArea({ value: e.target.value, caret: -1, target: e.target });
  };

  const handleTab = (e) => {
    let content = e.target.value;
    let caret = e.target.selectionStart;

    if (e.key === "Tab") {
      e.preventDefault();

      let newText =
        content.substring(0, caret) + " ".repeat(4) + content.substring(caret);
      setQueryTextArea({ value: newText, caret: caret, target: e.target });
    }
  };

  const handleChangeFirtForm = (field) => {
    const newValues = valuesFirstForm.map((item) => {
      if (field.name === item.name) {
        return { ...item, value: field.value };
      }
      return item;
    });
    setValuesFirstForm(newValues);
  };

  const handleTimeoutLess = () => {
    if (timeOut > 0) {
      setTimeOut(timeOut - 1);
    }
  };

  const customIncrementalInput = () => {
    return (
      <div style={{ display: "flex", flexDirection: "row", width: "25%" }}>
        <button
          onClick={() => handleTimeoutLess()}
          style={{
            backgroundColor: "#cfd2cd",
            paddingRight: "25px",
            paddingLeft: "25px",
          }}
        >
          -
        </button>
        <input
          className="w-full text-center"
          type="number"
          readOnly={true}
          value={timeOut}
        ></input>
        <button
          onClick={() => {
            setTimeOut(timeOut + 1);
          }}
          style={{
            backgroundColor: "#cfd2cd",
            paddingRight: "25px",
            paddingLeft: "25px",
          }}
        >
          +
        </button>
      </div>
    );
  };

  const content = (
    <>
      {detailsFirstStep && (
        <>
          <div className="flex items-center justify-between bg-gray h-[11.5vh] py-[0.5rem] px-[1rem]">
            <div className="flex items-center">
              <div
                className="flex items-center text-center h-[75px] w-[75px] text-[12px]"
                style={{
                  border: "1px solid",
                  borderRadius: "100px",
                  borderColor: primaryColor,
                }}
              >
                Connect Source
              </div>
            </div>
            <Link to="">
              <div className="flex items-center">
                Change <RightArrow />
              </div>
            </Link>
          </div>
          <div
            className="flex flex-col py-[1rem] px-[2rem]"
            style={{ overflowY: "auto" }}
          >
            <p>
              Follow the setup guide on the right to connect your data source to
              MyNiiu. If you need help accessing the source system, invite a
              teammate to complete this step.
            </p>
            {valuesFirstForm.map((item) => (
              <TextField
                key={item.name}
                id={item.name}
                name={item.name}
                error={item.error}
                label={item.label}
                onChange={(e) => handleChangeFirtForm(e.target)}
                variant="standard"
                placeholder={item.label}
                required
                sx={{
                  marginBottom: "15px",
                }}
                helperText={item.textError}
              />
            ))}

            <div className="py-[1rem]">
              <label className="text-[16px]">{"Timeout (Seconds)"}</label>
              {customIncrementalInput()}
            </div>
            
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="advanceOptionsContent"
                id="advanceOptionsHeader"
              >
                <Typography>Advance options</Typography>
              </AccordionSummary>
              <AccordionDetails>

                <Box sx={{width: '100%'}}>
                  <Collapse in={showAlert}>
                    <Alert
                      severity="error"
                      action= {
                        <IconButton
                          aria-label="close"
                          color="inherit"
                          size="small"
                          onClick={() => setShowAlert(false)}
                        >
                          <CloseIcon fontSize="inherit"/>
                        </IconButton>
                      }
                      sx={{mb: 2}}
                      >
                        <AlertTitle>Error on Query</AlertTitle>
                        {alertMessage}
                    </Alert>
                  </Collapse>
                </Box>
                <label className="text-[16px] mt-1">{"Query (JSON)"}</label>
                <div>
                  <textarea
                    id="queryTextArea"
                    onChange={handleText}
                    onKeyDown={handleTab}
                    value={queryTextArea.value}
                    style={{ width: "100%", border: "1px solid #000" }}
                    rows="6"
                  ></textarea>
                  <label className="lbl-purple">Preview</label>
                  <SyntaxHighlighter
                    language="json"
                    style={docco}
                    customStyle={{ width: "100%" }}
                  >
                    {queryTextArea.value}
                  </SyntaxHighlighter>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </>
      )}

      {detailsSecondStep && (
        <>
          <div className="newConnection-steps">
            <div className="newConnection-currentStep">
              <div className="newConnection-circleStep-blue">
                Connect Source
              </div>
              <hr />
              <div className="newConnection-circleStep">
                Connect Destination
              </div>
            </div>
            <Link to="">
              Change <RightArrow />
            </Link>
          </div>
          <div className="newConnection-form">
            <p>
              Follow the setup guide on the right to connect your data destiny
              to MyNiiu. If you need help accessing the source system, invite a
              teammate to complete this step.
            </p>

            {/* Destination schema */}
            <label className="lbl-purple">Destination schema </label>
            <TextField
              hiddenLabel
              variant="standard"
              placeholder="Destination schema"
              helperText="Schema is permanent and cannot be changed after connection creation"
            />

            {/* Folder URL */}
            <label className="lbl-purple">Folder URL* </label>
            <TextField
              hiddenLabel
              variant="standard"
              placeholder="Folder URL"
              helperText="Share this magic folder with the email address: g-performed-irony@fivetran-production.iam.gserviceaccount.com"
            />

            {/* Data processing location */}
            <label className="lbl-purple">Data processing location </label>
            <Select variant="standard">
              <MenuItem>US</MenuItem>
            </Select>
            <FormHelperText>
              This is where MyNiuu will operate and run computation on data
            </FormHelperText>

            {/* Cloud provide service */}
            <label className="lbl-purple">Cloud provide service </label>
            <Select variant="standard">
              <MenuItem>GCP</MenuItem>
            </Select>
            <FormHelperText>
              Determines the cloud service provider used for running MyNiuu
              services
            </FormHelperText>
          </div>
        </>
      )}
    </>
  );

  const info = (
    <>
      <h1>Connect by API</h1>
      <div className="newConnection-info-video">
        <img src={temporalVideo} alt="video" />
      </div>
      <label>Statics database</label>
      <p>
        Accumsan parturient vestibulum eget netus maecenas proin a rhoncus
        porttitor primis ullamcorper taciti condimentum ultrices potenti
        ullamcorper neque dignissim. Facilisis id mi ultrices suspendisse
        potenti gravida pulvinar laoreet hendrerit suscipit placerat nascetur id
        ullamcorper a parturient fermentum adipiscing fermentum parturient
        mattis purus ac eget inceptos id. A praesent ante volutpat purus a
        ullamcorper platea interdum mi natoque eu aptent vehicula gravida aptent
        justo parturient felis parturient tempus consectetur mi parturient
        himenaeos scelerisque ac congue vehicula. Magna magnis urna faucibus in
        quis est id adipiscing condimentum ornare aliquet scelerisque tempor
        proin pulvinar parturient cum ornare quisque ullamcorper. Nisi massa
        aliquam vestibulum condimentum hendrerit sapien odio adipiscing
        consectetur cum commodo scelerisque dignissim enim. Non etiam in erat
        auctor adipiscing hac enim sed pretium ullamcorper porta cubilia
        vulputate litora ac nullam habitasse ac viverra scelerisque adipiscing
        fringilla. Ad suspendisse non hac viverra suspendisse mattis ut a
        venenatis sed volutpat scelerisque aenean suspendisse commodo ornare
        lacus posuere. Vehicula cum non viverra pulvinar luctus a ullamcorper
        nisl et facilisis a at vestibulum dis inceptos magna elit posuere.
        Aptent arcu adipiscing aliquet erat facilisis habitasse parturient
        condimentum ac a ac at vestibulum volutpat vestibulum orci quam
        adipiscing. A odio ullamcorper ullamcorper placerat eget consectetur
        posuere a vel augue in parturient pretium nascetur ridiculus netus
        dictumst porta arcu ridiculus in suspendisse adipiscing lobortis
        ullamcorper. Montes orci nulla curae vestibulum pretium sodales
        ullamcorper suspendisse id sapien a mollis nisi mi consectetur.
        Adipiscing id nec laoreet potenti dapibus adipiscing facilisis eros eget
        ornare consectetur sem sed taciti suscipit. Adipiscing posuere erat
        fames nunc ridiculus primis scelerisque montes facilisis ullamcorper et
        ante mus a montes conubia non. Ac a volutpat in eget nisl a tempor mus
        praesent ad luctus a per curabitur tortor condimentum at dui enim
        scelerisque id a condimentum nascetur dapibus. Habitasse leo aliquam
        vestibulum aliquam aliquam turpis taciti parturient aliquet neque eget
        suscipit feugiat vestibulum dignissim scelerisque a hac etiam dui eros
        justo mus adipiscing urna erat id. Ad in egestas nibh molestie hendrerit
        lectus a vestibulum himenaeos cursus justo feugiat fusce adipiscing
        viverra orci ullamcorper adipiscing sociis nulla maecenas non sed
        sociosqu auctor ultricies adipiscing a. Rhoncus at scelerisque vivamus
        duis a nisl mattis magnis habitant parturient morbi praesent turpis
        conubia in taciti. Fames dictumst condimentum adipiscing tortor a a cum
        massa nibh hac suscipit etiam scelerisque viverra consequat. Suspendisse
        at sociosqu primis eget ullamcorper est mattis vulputate suspendisse
        diam a nisi quis nostra interdum nec eros ac suspendisse maecenas
        condimentum sem consequat a. Nam a parturient vulputate maecenas
        interdum suscipit nulla id at ac suspendisse parturient a aptent
        senectus a et orci hendrerit a a phasellus fringilla volutpat
        ullamcorper at arcu. Odio a cum parturient interdum massa sed mus sociis
        mauris mollis vel nascetur a consectetur aenean egestas a a sit dis.
        Taciti vitae a nec praesent mus parturient ut potenti enim consectetur
        nulla turpis potenti fames eget ullamcorper eget. Ad a a dolor nec hac
        ridiculus habitant hendrerit aliquam condimentum auctor magnis a non. A
        ornare commodo torquent justo a justo a placerat a ultricies vulputate
        neque at ut eu vehicula facilisis curae litora nisl condimentum eu orci
        tristique. Lobortis adipiscing praesent scelerisque inceptos rutrum
        tincidunt tincidunt volutpat libero vestibulum senectus ac a nibh
        vestibulum et quisque enim vestibulum penatibus. Scelerisque facilisi
        dolor lorem a sapien nisl magna lectus tempor feugiat a mi a a
        scelerisque scelerisque neque potenti scelerisque vestibulum praesent
        amet fusce penatibus.
      </p>
    </>
  );

  const verifyNotEmptyString = (value) => {
    if (value.length === 0 || value === "") {
      return false;
    }
    return true;
  };

  const verifyJSON = () => {
    let jsonIsValid = false
    try {
      JSON.parse(queryTextArea.value)
    } catch (error) {
      setShowAlert(true)
      setAlertMessage(error.message)
    } finally {
      jsonIsValid = true
    }
    return jsonIsValid
  };

  const verifyFirstForm = () => {
    let dataIsValid = true
    const dataValidated = valuesFirstForm.map((item) => {
      if (!verifyNotEmptyString(item.value)) {
        dataIsValid = false
        return { ...item, error: true, textError: "Field required" };
      }
      return { ...item, error: false, textError: "" };
    });
    setValuesFirstForm(dataValidated);
    if (!dataIsValid) return false
    if (timeOut === 0 && queryDefaultValue === queryTextArea) {
      return dataIsValid
    } 
    dataIsValid = verifyJSON()
    return dataIsValid
  };

  const buttonHandler = () => {
    let shouldPost = verifyFirstForm();
    console.log('should post? ', shouldPost)
    /*
		if (detailsFirstStep) {
			setDetailsFirstStep(false);
			setDetailsSecondStep(true);
		} else if (detailsSecondStep) {
			console.log("something else");
		}
		*/
  };

  return (
    <>
      <ConnectionComponent
        buttonText="Save Changes"
        buttonHandler={buttonHandler}
        details={content}
        info={info}
      />
    </>
  );
}

export default ConnectByApi;
