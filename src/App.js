import { useState } from "react";
import { ControlledForm } from "./ControlledForm";
import { ControlledModal } from "./ControlledModal";
import { Modal } from "./UncontrolledModal";
import { UncontrolledForm } from "./UncrolledForm";
import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";
import { ControlledOnboardingFlow } from "./ControlledOnboardingFlow";

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step 1</h1>
    <button onClick={() => goToNext({ name: "John Doe" })}>
      Go To Next Step
    </button>
  </>
);
const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({ age: 100 })}>Go To Next Step</button>
  </>
);
const StepThree = ({ goToNext }) => (
	<>
	  <h1>Step 3</h1>
	  <p>Congratulations! You qualify for our senior discount!</p>
	  <button onClick={() => goToNext({ hairColor: "brown" })}>
		Go To Next Step
	  </button>
	</>
  );
const StepFour = ({ goToNext }) => (
  <>
    <h1>Step 4</h1>
    <button onClick={() => goToNext({ hairColor: "brown" })}>
      Go To Next Step
    </button>
  </>
);

function App() {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [onboardingdata, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = (stepData) => {
    setOnboardingData({...onboardingdata, ...stepData});
	setCurrentIndex(currentIndex+1);
  };

  return (
    <>
      <button onClick={() => setShouldShowModal(!shouldShowModal)}>
        {shouldShowModal ? "Hide Modal" : "Show Modal"}
      </button>

      <ControlledOnboardingFlow
	  	onFinish={(data)=>{
			console.log(data);
			alert("You completd all the steps! Congrats!")
		}}
	  	currentIndex={currentIndex}
		onNext={onNext}
	  >
        <StepOne />
        <StepTwo />
        {onboardingdata.age>60 && <StepThree />}
		<StepFour/>
      </ControlledOnboardingFlow>
      {/* <UncontrolledOnboardingFlow
        onFinish={(data) => {
          console.log(data);
          alert("Onboarding complete!");
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledOnboardingFlow> */}

      <ControlledModal
        shouldShow={shouldShowModal}
        onRequestClose={() => {
          setShouldShowModal(false);
        }}
      >
        <h1>HELLO!</h1>
      </ControlledModal>
      <Modal />
      <UncontrolledForm />
      <ControlledForm />
    </>
  );
}

export default App;
