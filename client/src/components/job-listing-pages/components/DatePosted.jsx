const DatePosted = ({ search, setSearch }) => {

    const datePost = [
        { name: "All", value: "" },
        { name: "Last Hour", value: "lh" },
        { name: "Last 24 Hour", value: "24h" },
        { name: "Last 7 Days", value: "7d" },
        { name: "Last 14 Days", value: "14d" },
        { name: "Last 30 Days", value: "30d" },
    ];

    return (
        <ul className="ui-checkbox">
            {datePost?.map((item) => (
                <li key={item.name}>
                    <label>
                        <input
                            type="radio"
                            value={item.value}
                            checked={search.date_posted === item.value}
                            onChange={(e) => setSearch((prev) => ({ ...prev, date_posted: e.target.value,page:1 }))}
                        />
                        <span></span>
                        <p>{item.name}</p>
                    </label>
                </li>
            ))}
        </ul>
    );
};

export default DatePosted;
