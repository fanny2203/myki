import { useState } from "react";

//Components
import Modal from "../../Modal";

//Sections
import Title from "./sections/Title";
import TimeSelect from "./sections/TimeSelect";
import SwitchRepeat from "./sections/SwitchRepeat";
import SelectsRepeat from "./sections/SelectsRepeat";
import RepeatOnDays from "./sections/RepeatOnDays";
import Buttons from "./sections/Buttons";
import WeeklyOptions from "./sections/WeeklyOptions";

//Hooks
import useForm from "../../../hooks/useForm";

//Globals
import { useDispatch } from "react-redux";

//Actions
import { setIsLoading } from "../../../features/Loader";

//Helpers
import { translateCronExpression, makeRequest } from "../../../helpers";

const ModalConfigCron = ({ showModal, closeModal, data, addSync }) => {
  const [repeat, setRepeat] = useState(false);
  const [time, setTime] = useState("");
  const [period, setPeriod] = useState({
    minute: "*",
    hour: "*",
    day: "*",
    month: "*",
    dayOfWeek: "*",
  });

  const { handleChange, formData } = useForm();
  const dispatch = useDispatch();

  const errorTime = time === "Invalid Date";
  const result = translateCronExpression(
    `${period.minute} ${period.hour} ${period.day} ${period.month} ${period.dayOfWeek}`
  );

  const updateTime = (value) => {
    setTime(value);
    var date = new Date(value);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    if (minutes > 0) {
      setPeriod({ ...period, minute: minutes, hour: hours });
    }
  };

  const toggleLoader = (value = false, text = "") => {
    dispatch(setIsLoading({ isLoading: value, textLoadin: text }));
  };

  const createEvent = async () => {
    toggleLoader(true);
    const { minute, hour, day, month, dayOfWeek } = period;
    try {
      const result = await makeRequest("sync/create", "POST", {
        cron_string: {
          name: formData.title,
          frequency: `${minute} ${hour} ${day} ${month} ${dayOfWeek}`,
          repeat,
        },
        objects_id: [data.idIN, data.idOUT],
      });
      addSync(result.data.cron_job);
    } catch (error) {}
    toggleLoader(false);
    closeModal();
  };

  const toggleSwitch = () => {
    setRepeat(!repeat);
  };

  const updateDayOfMonth = (event) => {
    const value = event.target.value;
    setPeriod({ ...period, day: value });
  };

  const updateMonth = (event) => {
    const value = event.target.value;
    setPeriod({ ...period, month: value });
  };

  const updateDayOfWeek = (value) => {
    setPeriod({ ...period, dayOfWeek: value });
  };

  return (
    <Modal
      stateModal={showModal}
      closeModal={closeModal}
      padding="p-[0px]"
      width="w-[750px]"
    >
      <div className="w-full p-[20px]">
        <Title handleChange={handleChange} />
        <TimeSelect error={errorTime} handleChange={updateTime} value={time} />
        <SwitchRepeat repeat={repeat} toggleSwitch={toggleSwitch} />
        <RepeatOnDays handleChange={updateDayOfMonth} />
        <SelectsRepeat handleChange={updateMonth} />
        <WeeklyOptions
          handleChange={updateDayOfWeek}
          selected={period.dayOfWeek}
        />
        <p className="mt-[20px]">{result}</p>
        <Buttons
          closeModal={closeModal}
          createEvent={createEvent}
          btnSaveActive={formData?.title}
        />
      </div>
    </Modal>
  );
};

export default ModalConfigCron;
