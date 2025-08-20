
const Tag = ({ search, setSearch }) => {
    const tags = [
        {
            name: "App",
            value: "app",
        },
        {
            name: "Administrative",
            value: "administrative",
        },
        {
            name: "Android",
            value: "android",
        },
        {
            name: "Wordpress",
            value: "wordpress",
        },
        {
            name: "Design",
            value: "design",
        },
        {
            name: "React",
            value: "react",
        },
    ];

    const handleTag = (value) => {
        const ifExists = Array.isArray(search.tags) && search.tags?.includes(value);
        if (ifExists) {
            const index = search.tags?.indexOf(value);
            const newTags = [...search.tags];
            newTags.splice(index, 1);
            setSearch((prev) => ({ ...prev, tags: newTags,page:1 }))
        } else {
            const newTags = [...search.tags];
            newTags.push(value)
            setSearch((prev) => ({ ...prev, tags: newTags,page:1 }))
        }
    }

    return (
        <ul className="tags-style-one">
            {tags?.map((item) => (
                <li
                    className={Array.isArray(search.tags) && search.tags.includes(item.value) ? "active" : ""}
                    onClick={() => handleTag(item.value)}
                    key={item.name}
                >
                    {item.name}
                </li>
            ))}
        </ul>
    );
};

export default Tag;
