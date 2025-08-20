import { preferredLanguageValues } from "@/data/jobForm";
import Select from "react-select";

const Language = ({ watch, register, setValue, error }) => {


    return (
        <Select
            isMulti
            required
            name="color-language"
            options={preferredLanguageValues}
            className={`basic-multi-select ${error?.languages?.message ? 'error-border' : ''}`}
            classNamePrefix="select"
            value={watch("languages") ? watch("languages") : []}
            onChange={(data) => setValue("languages", data)}
        />
    );
};

export default Language;
