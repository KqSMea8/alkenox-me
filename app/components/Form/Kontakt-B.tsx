import * as React from "react";
import * as Yup from "yup";
import { withFormik, FormikProps, FormikErrors, Form, Field } from "formik";

import GeneralForm from "./GeneralForm";
import MultiForm from "./MultiForm";

import InitialValues from "./initialValues";
import ValidationSchema from "./validationSchema";

// Shape of form values
interface IContactProps {
  web?: boolean;
  vidpro?: boolean;
  support?: boolean;
  firstName?: string;
  lastName?: string;
  email?: string;
  url?: string;
  message?: string;
  traditionalStore?: boolean;
  onlineStore?: boolean;
  traditionalBlog?: boolean;
  vlogBlog?: boolean;
  podcastBlog?: boolean;
  musicPortfolio?: boolean;
  artistPortfolio?: boolean;
  novelistPortfolio?: boolean;
  FilmPortfolio?: boolean;
  otherPortfolio?: string;
  eventPromo?: boolean;
  productPromo?: boolean;
  brandPromo?: boolean;
  servicePromo?: boolean;
  otherPromo?: string;
  description?: string;
  currentWebsite?: string;
  websiteGoal?: string;
  targetAudience?: string;
  competitors?: string;
  unique?: string;
  outlineProvided?: boolean;
  writingProvided?: boolean;
  imagesProvided?: boolean;
  graphicsProvided?: boolean;
  videoProvided?: boolean;
  audioProvided?: boolean;
  otherProvidedWeb?: string;
  outlineNeeded?: boolean;
  writingNeeded?: boolean;
  imagesNeeded?: boolean;
  graphicsNeeded?: boolean;
  videoNeeded?: boolean;
  audioNeeded?: boolean;
  otherNeededWeb?: string;
  wireframeProvided?: boolean;
  designProvided?: boolean;
  wireframeNeeded?: boolean;
  designNeeded?: boolean;
  deadlineWeb?: string;
  budgetWeb?: number;
  fullFeatType?: boolean;
  shortType?: boolean;
  hourType?: boolean;
  halfType?: boolean;
  spotType?: boolean;
  engType?: boolean;
  theatreDistro?: boolean;
  broadcastDistro?: boolean;
  streamingDistro?: boolean;
  webDistro?: boolean;
  digiDistro?: boolean;
  deviceDistro?: boolean;
  otherDistro?: string;
  scriptProvided?: boolean;
  scriptNeeded?: boolean;
  storyboardProvided?: boolean;
  storyboardNeeded?: boolean;
  crewProvided?: boolean;
  crewNeeded?: boolean;
  gearProvided?: boolean;
  gearNeeded?: boolean;
  locationsProvided?: boolean;
  locationsNeeded?: boolean;
  propsProvided?: boolean;
  propsNeeded?: boolean;
  musicProvided?: boolean;
  musicNeeded?: boolean;
  scoringProvided?: boolean;
  scoringNeeded?: boolean;
  videoEditingProvided?: boolean;
  videoEditingNeeded?: boolean;
  soundDesignProvided?: boolean;
  soundDesignNeeded?: boolean;
  promoMaterialProvided?: boolean;
  promoMaterialNeeded?: boolean;
  motionGraphicsProvided?: boolean;
  motionGraphicsNeeded?: boolean;
  visualEffectsProvided?: boolean;
  visualEffectsNeeded?: boolean;
  rxProvided?: boolean;
  rxNeeded?: boolean;
  otherProvidedVideo?: string;
  otherNeededVideo?: string;
  deadlineVideo?: string;
  budgetVideo?: number;
  generalSupport?: boolean;
  technicalSupport?: boolean;
  billingSupport?: boolean;
  uxSupport?: boolean;
  otherSupport?: string;
}

interface FormValues {
  email: string;
  password: string;
}

interface OtherProps {
  message: string;
}

// Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. InjectedFormikProps was artifact of when Formik only exported a HoC. It is also less flexible as it MUST wrap all props (it passes them through).
const InnerForm = (props: OtherProps & FormikProps<IContactProps>) => {
  const { touched, errors, isSubmitting, message } = props;
  return (
    <Form>
      <GeneralForm>
        <MultiForm />
      </GeneralForm>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
};

// The type of props MyForm receives
interface MyFormProps {
  initialEmail?: string;
  message: string; // if this passed all the way through you might do this or make a union type
}

// Wrap our form with the using withFormik HoC
const MyForm = withFormik<IContactProps, {}>({
  // Transform outer props into form values
  mapPropsToValues: props => {
    return {
      firstName: props.firstName || "",
      lastName: props.lastName || "",
      email: props.email || "",
      url: props.url || "",
      message: props.message || "",
      traditionalStore: props.traditionalStore || "",
      onlineStore: props.onlineStore || "",
      traditionalBlog: props.traditionalBlog || "",
      vlogBlog: props.vlogBlog || "",
      podcastBlog: props.podcastBlog || "",
      musicPortfolio: props.musicPortfolio || "",
      artistPortfolio: props.artistPortfolio || "",
      novelistPortfolio: props.novelistPortfolio || "",
      FilmPortfolio: props.FilmPortfolio || "",
      otherPortfolio: props.otherPortfolio || "",
      eventPromo: props.eventPromo || "",
      productPromo: props.productPromo || "",
      brandPromo: props.brandPromo || "",
      servicePromo: props.servicePromo || "",
      otherPromo: props.otherPromo || "",
      description: props.description || "",
      currentWebsite: props.currentWebsite || "",
      websiteGoal: props.websiteGoal || "",
      targetAudience: props.targetAudience || "",
      competitors: props.competitors || "",
      unique: props.unique || "",
      outlineProvided: props.outlineProvided || "",
      writingProvided: props.writingProvided || "",
      imagesProvided: props.imagesProvided || "",
      graphicsProvided: props.graphicsProvided || "",
      videoProvided: props.videoProvided || "",
      audioProvided: props.audioProvided || "",
      otherProvidedWeb: props.otherProvidedWeb || "",
      outlineNeeded: props.outlineNeeded || "",
      writingNeeded: props.writingNeeded || "",
      imagesNeeded: props.imagesNeeded || "",
      graphicsNeeded: props.graphicsNeeded || "",
      videoNeeded: props.videoNeeded || "",
      audioNeeded: props.audioNeeded || "",
      otherNeededWeb: props.otherNeededWeb || "",
      wireframeProvided: props.wireframeProvided || "",
      designProvided: props.designProvided || "",
      wireframeNeeded: props.wireframeNeeded || "",
      designNeeded: props.designNeeded || "",
      deadlineWeb: props.deadlineWeb || "",
      budgetWeb: props.budgetWeb || "",
      fullFeatType: props.fullFeatType || "",
      shortType: props.shortType || "",
      hourType: props.hourType || "",
      halfType: props.halfType || "",
      spotType: props.spotType || "",
      engType: props.engType || "",
      theatreDistro: props.theatreDistro || "",
      broadcastDistro: props.broadcastDistro || "",
      streamingDistro: props.streamingDistro || "",
      webDistro: props.webDistro || "",
      digiDistro: props.digiDistro || "",
      deviceDistro: props.deviceDistro || "",
      otherDistro: props.otherDistro || "",
      scriptProvided: props.scriptProvided || "",
      scriptNeeded: props.scriptNeeded || "",
      storyboardProvided: props.storyboardProvided || "",
      storyboardNeeded: props.storyboardNeeded || "",
      crewProvided: props.crewProvided || "",
      crewNeeded: props.crewNeeded || "",
      gearProvided: props.gearProvided || "",
      gearNeeded: props.gearNeeded || "",
      locationsProvided: props.locationsProvided || "",
      locationsNeeded: props.locationsNeeded || "",
      propsProvided: props.propsProvided || "",
      propsNeeded: props.propsNeeded || "",
      musicProvided: props.musicProvided || "",
      musicNeeded: props.musicNeeded || "",
      scoringProvided: props.scoringProvided || "",
      scoringNeeded: props.scoringNeeded || "",
      videoEditingProvided: props.videoEditingProvided || "",
      videoEditingNeeded: props.videoEditingNeeded || "",
      soundDesignProvided: props.soundDesignProvided || "",
      soundDesignNeeded: props.soundDesignNeeded || "",
      promoMaterialProvided: props.promoMaterialProvided || "",
      promoMaterialNeeded: props.promoMaterialNeeded || "",
      motionGraphicsProvided: props.motionGraphicsProvided || "",
      motionGraphicsNeeded: props.motionGraphicsNeeded || "",
      visualEffectsProvided: props.visualEffectsProvided || "",
      visualEffectsNeeded: props.visualEffectsNeeded || "",
      rxProvided: props.rxProvided || "",
      rxNeeded: props.rxNeeded || "",
      otherProvidedVideo: props.otherProvidedVideo || "",
      otherNeededVideo: props.otherNeededVideo || "",
      deadlineVideo: props.deadlineVideo || "",
      budgetVideo: props.budgetVideo || ""
    };
  },

  // Add a custom validation function (this can be async too!)
  // validate: (values: IContactProps) => {
  //   let errors: FormikErrors = {};
  //   if (!values.email) {
  //     errors.email = "Required";
  //   } else if (!isValidEmail(values.email)) {
  //     errors.email = "Invalid email address";
  //   }
  //   return errors;
  // },

  handleSubmit: values => {
    // do submitting things
  }
})(InnerForm);

// Use <MyForm /> wherevs
const Kontakt = () => (
  <div>
    <h1>My App</h1>
    <p>This can be anywhere in your application</p>
    <MyForm />
  </div>
);

export default Kontakt;
