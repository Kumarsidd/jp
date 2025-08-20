import { categories } from "@/data/category";

const Categories = ({ search, setSearch }) => {
    
    return (
        <>
            <select
                className="form-select"
                defaultValue={search.categories}
                onChange={(e) => setSearch((prev) => ({ ...prev, categories: e.target.value ,page:1}))}
            >
                <option value="" hidden>Choose a Job Sector</option>
                {categories.map((item, index) => (
                    <option value={item.value} key={item.label + index}>{item.label}</option>
                ))}
            </select>
            <span className="icon flaticon-briefcase"></span>
        </>
    );
};

export default Categories;
