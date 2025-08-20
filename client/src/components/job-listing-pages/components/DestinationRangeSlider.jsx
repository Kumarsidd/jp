import InputRange from "react-input-range";

const DestinationRangeSlider = ({ search, setSearch }) => {

    return (
        <div className="range-slider-one">
            {/* <InputRange
                formatLabel={(value) => ``}
                minValue={0}
                maxValue={100}
                value={{ min: destination.min, max: destination.max }}
                onChange={(value) => handleOnChange(value)}
            />
            <div className="input-outer">
                <div className="amount-outer">
                    <span className="area-amount">{destination.max}</span>
                    km
                </div>
            </div> */}
        </div>
    );
};

export default DestinationRangeSlider;
