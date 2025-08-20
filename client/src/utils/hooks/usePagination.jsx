import React from "react";

const Pagination = ({
    totalPages = 0,
    Page = 1,
    handlePageChange,
    limit = 5,
}) => {
    const gotoPage = (page) => {
        const validPage = Math.max(1, Math.min(totalPages, page));
        handlePageChange(validPage);
    };

    const gotoPrevious = () => {
        gotoPage(Page - 1);
    };

    const gotoNext = () => {
        gotoPage(Page + 1);
    };

    const getVisiblePages = () => {
        const visiblePages = [];
        const halflimit = Math.floor(limit / 2);

        let startPageIndex = Math.max(1, Page - halflimit);
        let endPageIndex = Math.min(totalPages, Page + halflimit);

        if (endPageIndex - startPageIndex < limit - 1) {
            if (startPageIndex === 1) {
                endPageIndex = Math.min(totalPages, startPageIndex + limit - 1);
            } else {
                startPageIndex = Math.max(1, endPageIndex - limit + 1);
            }
        }

        for (let i = startPageIndex; i <= endPageIndex; i++) {
            visiblePages.push(i);
        }
        return visiblePages;
    };

    return (
        <div>
            {/* Pagination Controls */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }}>
                <button
                    onClick={gotoPrevious}
                    disabled={Page === 1}
                    style={{
                        padding: "5px 10px",
                        cursor: Page === 1 ? "not-allowed" : "pointer",
                        backgroundColor: "#2ca2c6",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                    }}
                >
                    Prev
                </button>
                {getVisiblePages().map((page) => (
                    <button
                        key={page}
                        onClick={() => gotoPage(page)}
                        style={{
                            padding: "5px 10px",
                            backgroundColor: page === Page ? "rgb(128 148 155)" : "#2ca2c6",
                            color: "#fff",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                        }}
                    >
                        {page}
                    </button>
                ))}
                <button
                    onClick={gotoNext}
                    disabled={Page === totalPages}
                    style={{
                        padding: "5px 10px",
                        cursor: Page === totalPages ? "not-allowed" : "pointer",
                        backgroundColor: "#2ca2c6",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Pagination;

