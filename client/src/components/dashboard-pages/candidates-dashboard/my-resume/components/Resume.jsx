import AddPortfolio from "./AddPortfolio";
import Awards from "./Awards";
import Education from "./Education";
import Experiences from "./Experiences";
import Language from "./Language";
import SkillsMultiple from "./SkillsMultiple";

const Resume = ({ watch, register, setValue, error, handleSubmit, handleRegisterSubmit,control }) => {

  return (
    <form className="default-form" onSubmit={handleSubmit(handleRegisterSubmit)}>
      <div className="row">
        <div className="form-group col-lg-12 col-md-12">
          <label>Description <span className='required-form'>*</span></label>
          <textarea
            {...register("description")}
            className={error?.description?.message ? 'error' : ''}
            required
            placeholder="Spent several years working on sheep on Wall Street."
          />
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <Education watch={watch} register={register} setValue={setValue} error={error} />

          <Experiences watch={watch} register={register} setValue={setValue} error={error} control={control} />
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <AddPortfolio watch={watch} register={register} setValue={setValue} error={error} />
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Portfolio Link </label>
          <input
            type="text"
            {...register("portfoliolink")}
            placeholder="Portfolio Link"
            className={`${error?.portfoliolink?.message ? 'error' : ''}`}
          />
        </div>
        <div className="form-group col-lg-12 col-md-12">
          <Awards watch={watch} register={register} setValue={setValue} error={error} />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Skills <span className='required-form'>*</span></label>
          <SkillsMultiple watch={watch} register={register} setValue={setValue} error={error} />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Language <span className='required-form'>*</span></label>
          <Language watch={watch} register={register} setValue={setValue} error={error} />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Current Salary (LPA)<span className='required-form'>*</span></label>
          <input
            type="number"
            min={0}
            {...register("current_salary")}
            placeholder="Current Salary"
            onInput={(e) => {
              if (e.target.value.startsWith('0') && e.target.value.length > 1) {
                e.target.value = e.target.value.replace(/^0+/, '');
              }
            }}
            className={`${error?.current_salary?.message ? 'error' : ''}`}
          />
        </div>


        <div className="form-group col-lg-6 col-md-12">
          <label>Expected Salary (LPA) <span className='required-form'>*</span></label>
          <input
            type="number"
            min={0}
            {...register("expected_salary")}
            placeholder="Expected Salary"
            onInput={(e) => {
              if (e.target.value.startsWith('0') && e.target.value.length > 1) {
                e.target.value = e.target.value.replace(/^0+/, '');
              }
            }}
            className={`${error?.expectedsalary?.message ? 'error' : ''}`}
          />
        </div>


        <div className="form-group col-lg-6 col-md-12">
          <label>Twitter Link <span className='required-form'>*</span></label>
          <input
            type="text"
            {...register("social_media.twitter")}
            placeholder="Twitter Link"
            className={`${error?.social_media?.twitter?.message ? 'error' : ''}`}
          />
        </div>
       


        <div className="form-group col-lg-6 col-md-12">
          <label>LinkedIn Link <span className='required-form'>*</span></label>
          <input
            type="text"
            {...register("social_media.linkedIn")}
            placeholder="LinkedIn Link"
            className={`${error?.social_media?.linkedIn?.message ? 'error' : ''}`}
          />
        </div>


        <div className="form-group col-lg-12 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default Resume;