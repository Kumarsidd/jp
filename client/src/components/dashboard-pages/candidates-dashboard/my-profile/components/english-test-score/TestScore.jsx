import React from 'react'

const TestScore = ({ watch, register, setValue, error }) => {
    return (
        <div className='default-form'>
            <h4>Reference Form</h4>
            <div className='row form-group mt-4'>
                <div className="form-group col-lg-6 col-md-12">
                    <label>Listening</label>
                    <input
                        required
                        type="number"
                        min={0}
                        max={100}
                        {...register("english_language.test_score.listening")}
                        placeholder='0'
                        onInput={(e) => {
                            if (e.target.value.startsWith('0') && e.target.value.length > 1) {
                                e.target.value = e.target.value.replace(/^0+/, '');
                            }
                        }}
                    />
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Reading</label>
                    <input
                        required
                        type="number"
                        min={0}
                        max={100}
                        {...register("english_language.test_score.reading")}
                        placeholder='0'
                        onInput={(e) => {
                            if (e.target.value.startsWith('0') && e.target.value.length > 1) {
                                e.target.value = e.target.value.replace(/^0+/, '');
                            }
                        }}
                    />
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Writing</label>
                    <input
                        required
                        type="number"
                        min={0}
                        max={100}
                        {...register("english_language.test_score.writing")}
                        placeholder='0'
                        onInput={(e) => {
                            if (e.target.value.startsWith('0') && e.target.value.length > 1) {
                                e.target.value = e.target.value.replace(/^0+/, '');
                            }
                        }}
                    />
                </div>

                <div className="form-group col-lg-6 col-md-12">
                    <label>Speaking</label>
                    <input
                        required
                        type="number"
                        min={0}
                        max={100}
                        {...register("english_language.test_score.speaking")}
                        placeholder='0'
                        onInput={(e) => {
                            if (e.target.value.startsWith('0') && e.target.value.length > 1) {
                                e.target.value = e.target.value.replace(/^0+/, '');
                            }
                        }}
                    />
                </div>


                <div className="form-group col-lg-12 col-md-12">
                    <label>Overall</label>
                    <input
                        required
                        type="number"
                        min={0}
                        max={100}
                        {...register("english_language.test_score.overall")}
                        placeholder='0'
                        onInput={(e) => {
                            if (e.target.value.startsWith('0') && e.target.value.length > 1) {
                                e.target.value = e.target.value.replace(/^0+/, '');
                            }
                        }}
                    />
                </div>

                <div className="form-group col-lg-12 col-md-12" style={{ marginBottom: 0 }}>
                    <div role='button' data-bs-dismiss="modal" className="theme-btn btn-style-one">
                        Save
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestScore