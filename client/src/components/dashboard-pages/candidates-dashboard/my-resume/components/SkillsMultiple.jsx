import { skillValues } from "@/data/jobForm";
import Select from "react-select";

const SkillsMultiple = ({ watch, register, setValue, error }) => {

  return (
    <Select
      isMulti
      required
      name="colors-skills"
      options={skillValues}
      className={`basic-multi-select ${error?.skills?.message ? 'error-border' : ''}`}
      classNamePrefix="select"
      value={watch("skills") ? watch("skills") : []}
      onChange={(data) => setValue("skills", data)}
    />
  );
};

export default SkillsMultiple;
